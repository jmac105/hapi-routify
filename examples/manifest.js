module.exports = {
    "server": {
        "app": {
            "name": "hello world server"
        }
    },
    "connections": [{
        "port": 8000,
        "host": "localhost",
        "labels": ["helloworld"]
    }],
    "plugins": [{
      "./": {
        "routes": [{
          "method": "GET",
          "path": "/",
          "handler": function(request, reply) {
            return reply({hello: "world"});
          }
        }]
      }
    }, {
      "blipp": {}
    }]
};