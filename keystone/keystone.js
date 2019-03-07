var keystone = require('keystone');

keystone.init({

	'name': 'Website Template',

	'auto update': true,
	'mongo': process.env.MONGO_URI || 'mongodb://root:root@mongo:27017/cms?authSource=admin&w=1',

	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'cookie-secret'

});

require('./models');

keystone.set('routes', require('./routes'));

keystone.set('nav', {
	'Configurations' : ['users','addresses','vehicles'],
	'Bills' : ['bill-categories','bills']
});

keystone.start();
