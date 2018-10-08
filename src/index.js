function after(options, server, next) {

    options.routes = options.routes || [];

    server.route(options.routes);

    return next();
}

exports.register = function (server, options, next) {
    if (!options.dependencies) {
        return after(options, server, next);
    }
    server.dependency(options.dependencies, after.bind(this, options));
    return next();
};

exports.register.attributes = {
    pkg: require("../package.json")
};
