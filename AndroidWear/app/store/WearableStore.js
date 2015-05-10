Ext.define('AndroidWear.store.WearableStore', {
    extend: 'Ext.data.Store',
    requires: ['AndroidWear.model.WearableModel', 
				'Ext.data.proxy.Rest'],
    config: {
        model: 'AndroidWear.model.WearableModel',
		proxy: {
							        	type: 'rest',										
							        	url: 'http://192.168.0.21/bookworms/welcome/getwearabledata',
										
                                        method: 'POST',

                                        useDefaultXhrHeader: false,
							        	reader: {
							        		type: 'json',
											rootProperty: 'data'
							        	}
				},
		autoLoad : false
    }
});