exports.register = function (server, options, next) {
	const handler = function (route, options) {
	    return function (request, reply) {
	        return reply({message: options.message});
	    }
	};

	server.handler('custom', handler);

    return next();
};

exports.register.attributes = {
    name: 'customHandler',
    version: '0.0.1'
};

