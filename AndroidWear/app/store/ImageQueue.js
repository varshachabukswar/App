Ext.define('AndroidWear.store.ImageQueue',{
	extend: 'Ext.data.Store',
	xtype:'imagesqueue',
	requires:['Ext.data.proxy.LocalStorage'],

	config: {
		fields:['timestamp','src','fails'],
		storeId:'ImageQueue',
		autoLoad:true,
		proxy:{
			type:'localstorage',
			id:'data',
			reader: {
				type: 'json'
			}
		}
	}
});
