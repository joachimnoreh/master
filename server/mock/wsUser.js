var mongoose = require('mongoose');

module.exports = function (app) {
  app.userModelSchema = mongoose.Schema({
    lastname: 'string',
    firstname: 'string',
    matricule: 'string',
    email: 'string',
  /*  role: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'role',
      autopopulate: true
    }],*/
    active: 'boolean',
    password: 'string',
    site: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'site',
      autopopulate: true
    }
  });
  app.userModelSchema.plugin(require('mongoose-autopopulate'));
  app.userModel = mongoose.model('user', app.userModelSchema);

  app.get('/users', function (req, res) {

    app.userModel.find(function (err, users) {
      app.checkServerError(res,err);
      res.json(users); // return all todos in JSON format
    });
  });

  app.put('/users', function (req, res) {
    app.checkParams(res,req.body._id, req.body.lastname, req.body.firstname, req.body.matricule, req.body.email);
    app.userModel.findOneAndUpdate(
      {_id: req.body._id},
      req.body,
      {new: true},
      function (err, user) {
        app.checkServerError(res,err);
        res.json(user);
      });
  });

  app.post('/users', function (req, res) {
    //app.checkParams(res,req.body.lastname, req.body.firstname, req.body.matricule, req.body.email, req.body.site_id);
    app.userModel.create({
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      matricule: req.body.matricule,
      email: req.body.email,
      site: req.body.site_id
    }, function (err, user) {
      app.checkServerError(res,err);
      res.json(user);
    });
  });

  app.delete('/users', function (req, res) {
    app.checkParams(res,req.body._id);
    app.userModel.findOneAndUpdate({_id: req.body._id}, {active: false}, {new: true}, function (err, place) {
      app.checkServerError(res,err);
      res.json(place);
    });
  })
};
