const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test1');     // connect to mongoDB database on modulus.io
// pull information from HTML POST (express4)
const fs = require('fs');
const config ={
  port :9090

};
app.set('config',config);
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
/*const files = fs.readdirSync('./server/mock');
files.forEach(file => {
 const [,verb,route] = file.match(/([^_]+)_(.+)\.json/);
 app[verb.toLowerCase()]('api/'+route,(req,res)=> res.send(require('./mock/'+file)))
});*/

const lieu = require('./server/mock/wsPlace')(app);
const site = require('./server/mock/wsSite')(app);
const users = require('./server/mock/wsUser')(app);
const roles = require('./server/mock/wsRole')(app);
const types = require('./server/mock/wstype')(app);

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
  return app.listen('9090')/*, () => {
    console.log('listening '+ config.port);
    app._router.stack.forEach(function (r) {
      if (r.route && r.route.path) {
        console.log(r.route.stack[0].method+" "+r.route.path)
      }
    });
  });*/
}



function stop (server) {
  server.close();
}

