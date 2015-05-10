Ext.define('AndroidWear.model.WearableModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'name',
            type: 'string'
        }, 
		{
            name: 'parameter',
            type: 'string'
        },
		{
            name: 'value',
            type: 'string'
        },
		{
            name: 'unit',
            type: 'string'
        },
		{
            name: 'age',
            type: 'string'
        },
		{
            name: 'time',
            type: 'date',
			defaultValue: new Date()
        }
		]
    }
});