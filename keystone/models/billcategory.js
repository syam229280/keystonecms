var keystone = require('keystone'),
	Types = keystone.Field.Types;
 
var BillCategory = new keystone.List('BillCategory',{track:true});
 
BillCategory.add(
	{
		name: { type: Types.Text, required: true, index: true },
	}
);
 
BillCategory.register();