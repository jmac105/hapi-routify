# hapi-routify

[![npm](https://img.shields.io/npm/v/hapi-routify.svg)](http://npmjs.org/package/hapi-routify) [![travis-status](https://img.shields.io/travis/g-div/hapi-routify.svg)](https://travis-ci.org/g-div/hapi-routify)

Just some lines of code to let you declare hapi routes from a manifest.json

The plugin is actually only a ```server.route``` [hapi](http://hapijs.com) call, nothing more.

[![nodei.co](https://nodei.co/npm/hapi-routify.png?downloads=true&downloadRank=true&stars=true)](http://npmjs.org/package/hapi-routify)

[![](https://david-dm.org/g-div/hapi-routify/status.svg)](https://david-dm.org/g-div/hapi-routify)
[![](https://david-dm.org/g-div/hapi-routify/dev-status.svg)](https://david-dm.org/g-div/hapi-routify)

## Install

```
npm install --save hapi-routify
```

## Why ?

If you use [hapi](http://hapijs.com) with [glue](https://github.com/hapijs/glue) or [rejoice](https://github.com/hapijs/rejoice), you may want to declare the *routes* of your application from the ```manifest.json```:

```javascript
{
    "server": {
        "app": {
            "name": "simple proxy"
        }
    },
    "connections": [{
        "port": 8000,
        "host": "localhost",
        "labels": ["proxy"]
    }],
    "plugins": [{
      "h2o2": {}
    }, {
      "hapi-routify": {
        "routes": [{
          "method": "GET",
          "path": "/{path*}",
          "handler": {
            "proxy": {
              "host": "localhost",
              "port": 1337
            }
          }
        }]
      }
    }, {
      "blipp": {}
    }]
}
```
This example uses [h2o2](https://github.com/hapijs/h2o2) to proxy all your requests to [http://localhost:1337](http://localhost:1337).

If you use *rejoice* there are actually two ways to provide your own handler:
- wrap your ```manifest``` with the CommonJS ```module.exports``` declaration, so you will be able to write a javascript *function* (see [```examples/manifest.js```](https://github.com/g-div/hapi-routify/tree/master/examples/manifest.js))
- write a plugin that uses the [```server.handler```](http://hapijs.com/api#serverhandlername-method) method provided by *hapi* (see [```examples/manifest-customHandler.json```](https://github.com/g-div/hapi-routify/tree/master/examples/manifest-customHandler.json) and [```examples/customHandler/index.js```](https://github.com/g-div/hapi-routify/tree/master/examples/customHandler/index.js))

### Options

- `routes`: the array of [routes](http://hapijs.com/api#route-configuration) objects you will otherwise pass to [```server.route```](http://hapijs.com/api#serverrouteoptions).

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[babel-cli](https://www.npmjs.com/package/babel-cli) | ^6.2.0 | ✔
[babel-core](https://www.npmjs.com/package/babel-core) | ^6.2.1 | ✔
[babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) | ^6.1.18 | ✔
[blipp](https://www.npmjs.com/package/blipp) | ^2.3.0 | ✔
[code](https://www.npmjs.com/package/code) | ^2.0.1 | ✔
[h2o2](https://www.npmjs.com/package/h2o2) | ^4.0.2 | ✔
[hapi](https://www.npmjs.com/package/hapi) | ^11.1.1 | ✔
[husky](https://www.npmjs.com/package/husky) | ^0.10.2 | ✔
[lab](https://www.npmjs.com/package/lab) | ^7.3.0 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔
[npm-run-all](https://www.npmjs.com/package/npm-run-all) | ^1.3.1 | ✔
[rejoice](https://www.npmjs.com/package/rejoice) | ^2.2.1 | ✔


## Contribute

Contributions are welcome!
Open an [issue](https://github.com/g-div/hapi-routify/issues) to report bugs or request features. 
To contribute with code:
- clone this repository
- install the dependencies with ```npm install```
- make your changes to the files in the ```src/``` folder
- write tests using [lab](https://github.com/hapijs/lab) in the ```test/``` folder
- run tests with ```npm test```. try to keep test coverage about 100%
- edit the ```.README.md``` file and build the project again (```npm run compile```)
- send a pull request against the master branch


## Author

g-div

Inspired by [garthk's hapi-restify.js gist](https://gist.github.com/garthk/8533351).

## License

 - **MIT** : http://opensource.org/licenses/MIT
