package com.domain.AndroidWear;

import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;

import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.support.v4.content.LocalBroadcastManager;
import android.util.Log;

import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.wearable.Wearable;


public class Hello extends CordovaPlugin implements
        GoogleApiClient.ConnectionCallbacks,
        GoogleApiClient.OnConnectionFailedListener {
	private static int objectCounter =0;
	private CallbackContext callbackContext;
	PluginResult result ;
	Object lockObject = "lock";
	public Hello()
	{
		super();
		objectCounter++;
	}
	private String status = "uninitialized....";
	
    @Override
    public boolean execute(String action, JSONArray data, CallbackContext callbackContext) throws JSONException {
		this.callbackContext = callbackContext;
		Log.v("myTag", "in Execute ");
		  			 
        if (action.equals("greet")) {			
			Log.v("myTag", "Action is greet " );

			if (null != googleClient ){
				String name = data.getString(0);
				String message = "In GoogleApiClient, " + name;
			    
				
				message = "status is " + status + "this is object no " +objectCounter;
				
				Log.v("myTag", "sending data " );
			
				new SendToDataLayerThread(googleClient, "/message_path", message).start();				

				this.callbackContext = callbackContext;
				PluginResult result = new PluginResult(PluginResult.Status.NO_RESULT);
				result.setKeepCallback(true);
				this.callbackContext.sendPluginResult(result);
				
				callbackContext.sendPluginResult(result);

			}else
			{
					callbackContext.success("Google client is null");
				
			}
		}
		return true;
		
    }
	public static GoogleApiClient googleClient;
	//added a method to add code from the Android file named MainActivity as it has UI based and Listen based Java Logic
	 public void pluginInitialize() 
    {
		Log.v("myTag", "in PluginInitialize " );

		status = "initialized....";
		//GoogleApiClient googleClient;
		//From MainActivity - 1
		googleClient = new GoogleApiClient.Builder(cordova.getActivity().getApplicationContext())
                .addApi(Wearable.API)
                .addConnectionCallbacks(this)
                .addOnConnectionFailedListener(this)
                .build();
		googleClient.connect();
        IntentFilter messageFilter = new IntentFilter(Intent.ACTION_SEND);
        MessageReceiver messageReceiver = new MessageReceiver();
        LocalBroadcastManager.getInstance(cordova.getActivity().getApplicationContext()).registerReceiver(messageReceiver, messageFilter);

				//this.activity.callActivityMethod();
		
    }


    public void onConnectionSuspended(int i) {
		status = "Suspended";
    }
	  @Override
    public void onConnected(Bundle connectionHint) {
		status = "Connected";
		//android.widget.Toast.makeText(cordova.getActivity().getApplicationContext(), "onConnection", android.widget.Toast.LENGTH_LONG).show(); 
    }
	  @Override
    public void onConnectionFailed(ConnectionResult connectionResult) {
		status = "Failed";
        android.widget.Toast.makeText(cordova.getActivity().getApplicationContext(), "onConnectionFailed", android.widget.Toast.LENGTH_LONG).show();        
	}
    public class MessageReceiver extends BroadcastReceiver {
        @Override
        public void onReceive(Context context, Intent intent) {
            String message = intent.getStringExtra("message");
            // Display message in UI
            android.widget.Toast.makeText(cordova.getActivity().getApplicationContext(), message, android.widget.Toast.LENGTH_LONG).show();        
			
			result = new PluginResult(PluginResult.Status.OK,
                        message);
			result.setKeepCallback(false);
            if (callbackContext != null) {
                callbackContext.sendPluginResult(result);
                callbackContext = null;
            }
        }
    }

}
