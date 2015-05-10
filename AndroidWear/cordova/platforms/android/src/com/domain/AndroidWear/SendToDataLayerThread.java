package com.domain.AndroidWear;

import android.util.Log;

import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.wearable.MessageApi;
import com.google.android.gms.wearable.Node;
import com.google.android.gms.wearable.NodeApi;
import com.google.android.gms.wearable.Wearable;

/**
 * Created by hemant on 4/21/2015.
 */
class SendToDataLayerThread extends Thread {
    String path;
    String message;
    GoogleApiClient googleClient;
    // Constructor to send a message to the data layer
    SendToDataLayerThread(GoogleApiClient googleClient,String p, String msg) {
        path = p;
        message = msg;
        this.googleClient = googleClient;
    }


    public void run() {
        NodeApi.GetConnectedNodesResult nodes = Wearable.NodeApi.getConnectedNodes(googleClient).await();
		Log.v("myTag", "in SendToDataLayerThread " );
        for (Node node : nodes.getNodes()) {
            MessageApi.SendMessageResult result = Wearable.MessageApi.sendMessage(googleClient, node.getId(), path, message.getBytes()).await();
            if (result.getStatus().isSuccess()) {
                Log.v("myTag", "Message: {" + message + "} sent to: " + node.getDisplayName());
            }
            else {
                // Log an error
                Log.v("myTag", "ERROR: failed to send Message");
            }
        }
    }
}