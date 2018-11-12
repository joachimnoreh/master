const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test3');     // connect to mongoDB database on modulus.io
// pull information from HTML POST (express4)
const fs = require('fs');
const config = {
  port: 9090,
  secret: "tokenSEConf"

};
app.set('config', config);
app.set('secret', config.secret);
app.use(bodyParser.urlencoded({'extended': 'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json

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
  next();
  // Pass to next layer of middleware
  /*var token = req.headers['access-token'];

  // decode token
  if (token) {

    // verifies secret and checks if the token is expired
    jwt.verify(token, app.get('Secret'), function (err, decoded) {
      if (err) {
        return res.status(401).json({message: 'invalid token'});
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    })

  } else {
    res.status(401).json({
      message: 'No token provided.'
    });

  }
*/
});
/*const files = fs.readdirSync('./server/mock');
files.forEach(file => {
const [,verb,route] = file.match(/([^_]+)_(.+)\.json/);
app[verb.toLowerCase()]('api/'+route,(req,res)=> res.send(require('./mock/'+file)))
});*/

const placeAPI = require('./server/mock/API_Place')(app);
const siteAPI = require('./server/mock/API_Site')(app);
const usersAPI = require('./server/mock/API_User')(app);
const directivesAPI = require('./server/mock/API_Directive')(app);
const rolesAPI = require('./server/mock/API_Role')(app);
const typesAPI = require('./server/mock/API_Type')(app);
const eventModelAPI = require('./server/mock/API_EventModel')(app);
const authenticateAPI = require('./server/mock/API_Authenticate')(app);

if (!module.parent) {
  start(app, config);
  process.on('message', msg => {
    if (msg !== 'shutdown') {
      return;
    }
    stop(server);
  });
} else {
  exports.app = app;
  exports.config = config;
  exports.start = start;
  exports.stop = stop;
}

function start(app, config) {
  const port = process.env.NODE_ENV === 'production' ? 80 : 9090;
  return app.listen(port, () => {
    console.log('listening ' + config.port);
    /* app._router.stack.forEach(function (r) {
        if (r.route && r.route.path) {
          console.log(r.route.stack[0].method + " " + r.route.path)
        }
      });*/
  });
}


function stop(server) {
  server.close();
}
