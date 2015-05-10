Ext.define('AndroidWear.util.Config', {
    singleton : true,
    alias : 'widget.appConfigUtil',
	config : 
	{
        //baseUrlPrefix : 'http://192.168.1.111/ayushman/',
		//baseUrlRoot:'https://www.indiaonlinehealth.com',
		//baseUrlPrefix : 'https://www.indiaonlinehealth.com/ayushman/'
		 //baseUrlRoot:'http://192.168.1.169:90',
		 baseUrlPrefix : 'http://bookworms'
    },
	
    constructor: function(config) 
	{
        this.initConfig(config);
        this.callParent([config]);
    }
});  