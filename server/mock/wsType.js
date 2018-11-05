/* REST NIVEAU 0 */

var mongoose = require('mongoose');

module.exports = function (app) {
  app.typeModelSchema =  mongoose.Schema({
    name: 'string'
  });
  app.typeModel =  mongoose.model('type', app.typeModelSchema);

  app.get('/getAllType', function (req, res) {

// use mongoose to get all types in the database
    app.typeModel.find(function (err, types) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
        res.send(err);
      res.json(types); // return all todos in JSON format
    });
  });

  app.post('/updateType', function (req, res) {

// create a todo, information comes from AJAX request from Angular
    //TODO : try return type directly with findbyidandupdate
    app.typeModel.findOneAndUpdate({_id : req.body._id },  {name: req.body.name}, {new:true},function (err, type) {
      if (err)
        res.send(err);
      console.log(type);
      res.json(type);
     /* app.typeModel.find({_id: type._id}, function (err, type) {
        if (err)
          res.send(err);




      });*/

    });
  });
  app.post('/createType', function (req, res) {

// create a todo, information comes from AJAX request from Angular
    app.typeModel.create({name: 'select'});
    app.typeModel.create({name: 'simpleText'});
    app.typeModel.create({name: 'textArea'});
    app.typeModel.create({name: 'number'});
    app.typeModel.create({name: 'checkbox'});


    });
  });

  app.delete('/mci/removeType', function (req, res) {

// create a todo, information comes from AJAX request from Angular
    typeModel.remove({_id: req.params.type_id}, function (err, types) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
        res.send(err);

      res.json(types); // return all todos in JSON format
    });
  });

  /* REST NIVEAU 1 */

  /*
  app.get('/mci/type/', function(req, res) {

  if (req.body[0][0] == 'findAllType'){

  }

  });

  app.post('/mci/type/', function(req, res) {

  if (req.body[0][0] == 'update'){

  }
  if (req.body[0][0] == 'delete'){

  }

  });

  app.delete('/mci/type/', function(req, res) {

  if (req.body[0][0] == 'delete'){

  }

  });

  */
}
