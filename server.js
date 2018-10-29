const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');         // pull information from HTML POST (express4)
const fs = require('fs');
const lieu = require('./server/mock/wsPlace')(app);
const site = require('./server/mock/wsSite')(app);
const agent = require('./server/mock/wsAgent')(app);
const config ={
  port :9090
};
app.set('config',config);
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

/*const files = fs.readdirSync('./server/mock');
files.forEach(file => {
 const [,verb,route] = file.match(/([^_]+)_(.+)\.json/);
 app[verb.toLowerCase()]('api/'+route,(req,res)=> res.send(require('./mock/'+file)))
});*/

if(!module.parent) {
  start(app, config);
  process.on('message',msg => {
    if (msg !== 'shutdown') {
      return;
    }
  stop(server);
  });
}else{
  exports.app = app;
  exports.config = config;
  exports.start =start;
  exports.stop =stop;
}
function start (app,config) {
  return app.listen((config.port, () => {
    console.log("listening");
    app._router.stack.forEach(function (r) {
      if (r.route && r.route.path) {
        console.log(r.route.path)
      }
    });
  }));
}


function stop (server) {
  server.close();
}

