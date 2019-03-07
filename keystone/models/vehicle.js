var keystone = require('keystone'),
	Types = keystone.Field.Types;
 
var Vehicle = new keystone.List('Vehicle',{track:true});

Vehicle.add(
	{
		name: { type: Types.Text, required: true, index: true },
		registrationNo: { type: Types.Text, required: true, initial: true, index: true },
		address: { type: Types.Relationship, ref:'Address', required: true, initial: true, many:false },
		type:{ type: Types.Select, options: 'car, bike' }
	}
);

Vehicle.defaultColumns = 'name, registrationNo, address';

Vehicle.register();