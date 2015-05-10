/* Ext.define('AndroidWear.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
		'Ext.Ajax'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: false,

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },

				{
					xtype: 'button',
					text : 'click me!',
					 handler: function () 
					 {
							//window.greet(" Button Pressed!!", function successHandler(message) { alert(message); },null); 
							//window.grit("Successfully Pressed!",function successHandler(message) { alert(message); },null);
							//window.alert(i);
							Ext.Ajax.request({
									 url : 'http://bookworms/', 
									 method:'POST',
									 params : {
										 action:'apiname',
										 data: "<?xml version='1.0' encoding='UTF-8'?><WearableData><name><id>CK</id>	</name>	<age>23</age><parameter>HeartRate</parameter><time>	2015-05-05 10:00:03</time> <value>	82</value><unit>82</unit></WearableData>"

										 //xml: xmlfield.getValue()
									 },
									withCredentials: true,
									useDefaultXhrHeader: false,
									scope : this
									// success : this.onSuccess,
									// failure : this.onFailure
							  });
							
							
							
					}
					
				}]
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
}); */
Ext.define("AndroidWear.view.Main", {
    extend: 'Ext.Container',
    requires: [
        'Ext.TitleBar',
        'Ext.Button',
        'Ext.Label',
        'Ext.List'
    ],
    xtype: 'mainviewport',
		onSuccess: function(request, url){
		alert(request.responseText);
	   
	},
	onFailure: function(options, success, response){
		alert("failed!");
	   
	},

    config: {
		layout: 'vbox',
        fullscreen:true,
        //cls: 'snapp',
        //styleHtmlContent: true,
        //scrollable: true,
        items: [



                {
                    xtype: 'container',
                    margin: 'auto',
                    layout: 'hbox',
                    width: '80%',
                    items:
                        [
                                {
                                    xtype: 'button',
                                    //id: 'CameraClick',
                                    html: '<h1 style="color:white">Get Data from Wearable Device</h1>',
                                    ui: 'normal',
                                    cls: "button",
                                    handler: function () 
									{
									window.greet(" Button Pressed!!", 
										function successHandler(message) { 
										alert(message);
										Ext.Ajax.request({
												url : 'http://192.168.0.21/bookworms/welcome', 
												method:'POST',
												params : {
												action:'index',
												data: message
												},
												useDefaultXhrHeader: false,
												scope : this,
												success : function(options, success, response){
		alert("succeeded!!");
	   
	},
												failure : function(options, success, response){
		alert("failed!");
	   
	}
												});										
										},
										null); 
									
									},
                                    height: 128,
                                    width: '40%',
                                    margin:'5%'
                                },
                                {
                                    xtype: 'button',
                                    //id: 'CameraClick',
                                    html: '<h1 style="color:white">Show Wearable Device Output</h1>',
                                    ui: 'normal',
                                    cls: "button",
                                    action: 'callGetWearableData',
                                    height: 128,
                                    width: '40%',
                                    margin: '5%'

                                }
                        ]
                 },
            {
                xtype: 'fieldset',
                id: 'mainDataView',
                title: 'Output From Wearable Device',
                height: '50%',
                width: '95%',
                margin: 'auto',
                hidden: true,
                items:
                    [
                        {
                            xtype: 'dataview',
                            scrollable: true,
                            inline: true,
                            height:'100%',
                            itemTpl: '<fieldset style="padding: 20px"><div  style="color: blue; font-family:Museo Sans;text-align: center;"   >{name}</div><div  style="color: blue; font-family:Museo Sans;text-align: center;"   >{timeofmeasurement}</div><div  style="color: blue; font-family:Museo Sans;text-align: center;"   >{parameter}</div><div  style="color: blue; font-family:Museo Sans;text-align: center;"   >{value}</div></fieldset>',
                            store: 'WearableStore'
                        }
                    ]

            }
            ]
    }
});
