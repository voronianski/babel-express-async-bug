# Babel 6 async/await Express bug

> https://phabricator.babeljs.io/T6815

## Steps to reproduce:

1. Clone this repo and run `npm install` inside
2. Run `node init.js`
3. Observer the traceback:

```bash
babel-express-router-bug dmitri$ node init.js
Server is started on 8080
^C
MacBook-Pro-Dmitri:babel-express-router-bug dmitri$ node init.js
/Users/dmitri/github/babel-express-router-bug/node_modules/express/lib/router/route.js:196
        throw new Error(msg);
              ^
Error: Route.get() requires callback functions but got a [object Undefined]
    at Route.(anonymous function) [as get] (/Users/dmitri/github/babel-express-router-bug/node_modules/express/lib/router/route.js:196:15)
    at EventEmitter.app.(anonymous function) (/Users/dmitri/github/babel-express-router-bug/node_modules/express/lib/application.js:481:19)
    at Object.<anonymous> (server.js:11:5)
    at Module._compile (module.js:460:26)
    at loader (/Users/dmitri/github/babel-express-router-bug/node_modules/babel-core/node_modules/babel-register/lib/node.js:130:5)
    at Object.require.extensions.(anonymous function) [as .js] (/Users/dmitri/github/babel-express-router-bug/node_modules/babel-core/node_modules/babel-register/lib/node.js:140:7)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Module.require (module.js:365:17)
    at require (module.js:384:17)
```
