var keystone = require('keystone'),
	Types = keystone.Field.Types;
 
var Bill = new keystone.List('Bill',{track:true});

var billStorage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	schema : {
		originalname: true
	},
	fs: {
        path: keystone.expandPath('./public/uploads/'),
        publicPath: '/public/uploads/',
		generateFilename: (file) => {
			const ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1);
			return `${file.filename}.${ext}`;
		}
	},
    schema: {
        url: true
    }
});

Bill.add(
    'Bill Info',
	{
        name: { type: Types.Text, required: true, index: true },
        billType: { type: Types.Relationship, ref:'BillCategory', required: true, initial: true, many:false },
    },
    'Bill Details',
    {
        billDate:  { type: Types.Date, index: true },
        billExpiryDate:  { type: Types.Date, index: true },
        billAmount:  { type: Types.Money, format: '₹0,0.00' },
        billVehicle: { type: Types.Relationship, ref:'Vehicle', many:false },
        billFile: { type: Types.File, storage: billStorage }
    }
);

Bill.defaultColumns = 'name, billType, billDate,billExpiryDate,billAmount';
 
Bill.register();