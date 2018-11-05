/* REST NIVEAU 0 */

var mongoose = require('mongoose');

module.exports = function (app) {
  app.placeModelSchema =  mongoose.Schema({
    name: 'string',
    placeChildren: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'place',
      autopopulate: true
    }]

  });
  app.placeModelSchema.plugin(require('mongoose-autopopulate'));
  app.placeModel =  mongoose.model('place', app.placeModelSchema);

  app.get('/mci/findPlace/:place_id', function (req, res) {

// use mongoose to get all places in the database
    app.placeModel.find({_id: req.params.place_id}, function (err, places) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
        res.send(err)

      res.json(places); // return all todos in JSON format
    });
  });

  app.post('/updatePlace', function (req, res) {

// create a todo, information comes from AJAX request from Angular
    //TODO : try return place directly with findbyidandupdate
    app.placeModel.findOneAndUpdate({_id : req.body._id },  {name: req.body.name}, {new:true},function (err, place) {
      if (err)
        res.send(err);
      console.log(place);
      res.json(place);
     /* app.placeModel.find({_id: place._id}, function (err, place) {
        if (err)
          res.send(err);




      });*/

    });
  });
  app.post('/createPlace', function (req, res) {

// create a todo, information comes from AJAX request from Angular
    app.placeModel.create({
      name: req.body.name,
    }, function (err, place) {
      if (err) {
        res.send(err);
      }

      // get and return place created
      app.placeModel.findById(req.body.parent, function (err, parent) {
        if (err) {
          res.send(err)
        }

        parent.placeChildren.push(place);
        parent.save(function (err) {
          if (err)
            res.send(err);

        });

      });
      res.json(place);
    });
  });

  app.delete('/mci/removePlace', function (req, res) {

// create a todo, information comes from AJAX request from Angular
    placeModel.remove({_id: req.params.place_id}, function (err, places) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
        res.send(err);

      res.json(places); // return all todos in JSON format
    });
  });

  /* REST NIVEAU 1 */

  /*
  app.get('/mci/place/', function(req, res) {

  if (req.body[0][0] == 'findAllPlace'){

  }

  });

  app.post('/mci/place/', function(req, res) {

  if (req.body[0][0] == 'update'){

  }
  if (req.body[0][0] == 'delete'){

  }

  });

  app.delete('/mci/place/', function(req, res) {

  if (req.body[0][0] == 'delete'){

  }

  });

  */
}
