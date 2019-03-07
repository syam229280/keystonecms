var keystone = require('keystone'),
	Types = keystone.Field.Types;
 
var Address = new keystone.List('Address',{track:true});
 
Address.add(
	{
		name: { type: Types.Text, required: true, index: true }
	}
);
 
Address.relationship({ path: 'vehicle', ref: 'Vehicle', refPath: 'address' });

Address.register();