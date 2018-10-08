exports.register = function (server, options, next) {
    return next();
};

exports.register.attributes = {
    pkg: {
        "name": "mock-plugin",
        "version": "1.0.0"
    }
};
