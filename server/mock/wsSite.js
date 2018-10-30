//var mongoose = require('mongoose');


let sites = require('./data/site');

module.exports = function (app) {
  app.get('/findAllSite/', function (req, res) {


    res.json(sites.SITES); // return all todos in JSON format

  });
  app.get('/createSite', function (req, res) {

    res.json(sites.SITES);
  });
}
