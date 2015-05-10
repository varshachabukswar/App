Ext.define('AndroidWear.model.Contact', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'name',
            type: 'string'
        }, 
		{
            name: 'url',
            type: 'string'
        },
		{
            name: 'imagesrc',
            type: 'string'
        }
		]
    }
});