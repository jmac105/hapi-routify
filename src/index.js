exports.register = (server, options, next) => {
    options.routes = options.routes || [];

    server.route(options.routes);

    return next();
};

exports.register.attributes = {
    pkg: require("../package.json")
};
