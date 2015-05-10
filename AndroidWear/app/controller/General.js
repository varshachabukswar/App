Ext.define('AndroidWear.controller.General',{
	extend: 'Ext.app.Controller',
	requires: [
        'AndroidWear.store.WearableStore'
	],

	config: {
		refs: {
			principal:'mainviewport'
		},
		control:{
			
			'mainviewport button[action=callApi]': {
				tap: 'invokeApi'
			},
            'mainviewport button[action=callGetWearableData]': {
                tap: 'getWearableData'
            }
		},
        areImagesUploading:false
	},

    getWearableData: function(button,eve)
    {
        var wearableStore = Ext.getStore('WearableStore');
        wearableStore.load();
        Ext.getCmp('mainDataView').setHidden(false)  ;
    },
	invokeApi: function(button,eve){
		
			//window.greet(" Button Pressed!!", function successHandler(message) { alert(message); },null); 
							//window.grit("Successfully Pressed!",function successHandler(message) { alert(message); },null);
							//window.alert(i);
   Ext.Ajax.request({
							 url : 'http://192.168.0.21/bookworms/welcome', 
							 method:'POST',
							 params : {
								 action:'index',
								 data: "<?xml version='1.0' encoding='UTF-8'?><WearableData><name>CK	</name>	<age>23</age><parameter>HeartRate</parameter><time>	2015-05-05 10:00:03</time> <value>	82</value><unit>82</unit></WearableData>"

								 //xml: xmlfield.getValue()
							 },
							
							useDefaultXhrHeader: false,
							scope : this,
							 success : this.onSuccess,
							 failure : this.onFailure
					  });
	},
    onSuccess: function(request, url){
        alert(request.responseText);
       
    },
	onFailure: function(options, success, response){
        alert("failed!");
       
    }
      
    
});
