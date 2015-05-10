Ext.define('AndroidWear.store.Liststore', {
    extend: 'Ext.data.Store',
    requires: ['AndroidWear.model.Contact'],
    config: {
        model: 'AndroidWear.model.Contact',
        data: [{
                name: 'Reports',
				imagesrc:'touch/resources/images/Report.jpg',
                url: 'Ayushman.view.List',
                id: 'List'
				},{
                name: 'Appointments',
				imagesrc:'touch/resources/images/Appointmentlogo.jpg',
                url: 'Ayushman.view.List',
                id: 'List2'
				}
			]
    }
});