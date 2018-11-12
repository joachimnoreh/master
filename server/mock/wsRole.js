const mongoose = require('mongoose');
module.exports = function (app) {


    app.roleModelSchema = mongoose.Schema({
      name: 'string',
      actions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'action',
        autopopulate: true
      }],
      active: 'boolean'
    });

    app.roleModel = mongoose.model('role', app.roleModelSchema);

    app.get('/seconf/roles/:role_id', function (req, res) {
      app.checkParams(res,req.params.role_id);
      app.roleModel.find({_id: req.params.role_id}, function (err, roles) {

        app.checkServerError(res,err);

        res.json(roles);
      });
    });

    app.put('/roles', function (req, res) {
      app.checkParams(res,req.body._id, req.body.name);
      app.roleModel.findOneAndUpdate({_id: req.body._id}, {
        name: req.body.name,
        actions: req.body.actions
      }, {new: true}, function (err, role) {
        app.checkServerError(res,err);
        res.json(role);

      });
    });

    app.post('/roles', function (req, res) {
      app.checkParams(res,req.body.name, req.body.actions);
      app.roleModel.create({
        name: req.body.name,
        actions: req.body.actions
      }, function (err, role) {
        app.checkServerError(res,err);
        res.json(role);
      });
    });

    app.delete('/roles', function (req, res) {
      app.checkParams(res,req.params.role_id);
      roleModel.findOneAndUpdate({_id: req.params.role_id}, {active: false}, {new: true}, function (err, role) {
        app.checkServerError(res,err);
        res.json(roles);
      });
    });


    app.actionModelSchema = mongoose.Schema({
      name: 'string',
      active: 'boolean'
    });

    app.actionModel = mongoose.model('action', app.actionModelSchema);

    // TODO : Export in mongoDB script
    app.get('/createAction', function (req, res) {

      app.actionModel.create({name: 'CONF_PLACES'});
      app.actionModel.create({name: 'CONF_USERS'});
      app.actionModel.create({name: 'CONF_CONSIGNES'});
      app.actionModel.create({name: 'CONF_EDIT_EVENEMENT'});
      app.actionModel.create({name: 'CONF_RONDIER'});
      app.actionModel.create({name: 'CONF_MATERIEL'});
      app.actionModel.create({name: 'CONF_DOCUMENT'});

    });
  }

