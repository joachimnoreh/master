/* REST NIVEAU 0 */

//var mongoose = require('mongoose');
let place = require('./data/place');

module.exports = function (app) {


  app.get('/findPlace/:place_id', function (req, res) {


    res.json(place.PLACES[_id]); // return all todos in JSON format

  });

  app.post('/updatePlace', function (req, res) {

    place.PLACES[req.body._id] = req.body;
    res.json(place.PLACES[req.body._id]);

  });

  app.post('/createPlace', function (req, res) {
    res.json(place.PLACES);

  });

  app.delete('/removePlace', function (req, res) {

 res.json(places); // return all todos in JSON format

  });

  /* REST NIVEAU 1 */

  /*
  app.get('/place/', function(req, res) {

  if (req.body[0][0] == 'findAllPlace'){

  }

  });

  app.post('/place/', function(req, res) {

  if (req.body[0][0] == 'update'){

  }
  if (req.body[0][0] == 'delete'){

  }

  });

  app.delete('/place/', function(req, res) {

  if (req.body[0][0] == 'delete'){

  }

  });

  */
}
