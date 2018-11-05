/* REST NIVEAU 0 */

var mongoose = require('mongoose');

module.exports = function (app) {
  app.roleModelSchema =  mongoose.Schema({
    name: 'string'
  });
  app.roleModel =  mongoose.model('role', app.roleModelSchema);

  app.get('/mci/findRole/:role_id', function (req, res) {

// use mongoose to get all roles in the database
    app.roleModel.find({_id: req.params.role_id}, function (err, roles) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
        res.send(err)

      res.json(roles); // return all todos in JSON format
    });
  });

  app.post('/updateRole', function (req, res) {

// create a todo, information comes from AJAX request from Angular
    //TODO : try return role directly with findbyidandupdate
    app.roleModel.findOneAndUpdate({_id : req.body._id },  {name: req.body.name}, {new:true},function (err, role) {
      if (err)
        res.send(err);
      console.log(role);
      res.json(role);
     /* app.roleModel.find({_id: role._id}, function (err, role) {
        if (err)
          res.send(err);




      });*/

    });
  });
  app.post('/createRole', function (req, res) {

// create a todo, information comes from AJAX request from Angular
    app.roleModel.create({
      name: req.body.name,
    }, function (err, role) {
      if (err) {
        res.send(err);
      }
      res.json(role);


    });
  });

  app.delete('/mci/removeRole', function (req, res) {

// create a todo, information comes from AJAX request from Angular
    roleModel.remove({_id: req.params.role_id}, function (err, roles) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
        res.send(err);

      res.json(roles); // return all todos in JSON format
    });
  });

  /* REST NIVEAU 1 */

  /*
  app.get('/mci/role/', function(req, res) {

  if (req.body[0][0] == 'findAllRole'){

  }

  });

  app.post('/mci/role/', function(req, res) {

  if (req.body[0][0] == 'update'){

  }
  if (req.body[0][0] == 'delete'){

  }

  });

  app.delete('/mci/role/', function(req, res) {

  if (req.body[0][0] == 'delete'){

  }

  });

  */
}
