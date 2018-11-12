var mongoose = require('mongoose');
module.exports = function (app) {
  app.siteModelSchema = mongoose.Schema({
    name: 'string',
    active: 'boolean',
    placeRoot: {type: mongoose.Schema.Types.ObjectId, ref: 'place'}
  });

  app.siteModel = mongoose.model('site', app.siteModelSchema);

  /* keep = real implem

   app.get('/sites', function (req, res) {


   app.siteModel.find().populate('placeRoot').exec(function(err, sites){

   // if there is an error retrieving, send the error. nothing after res.send(err) will execute
   app.checkServerError(res,err);
   res.json(sites); // return all todos in JSON format
   });
   });
   */

  app.get('/seconf/sites/:site_id', function (req, res) {
    app.checkParams(res,req.params.site_id);
    app.siteModel.find({_id: req.params.site_id}).populate('placeRoot').exec(function (err, site) {
      app.checkServerError(res,err);
      res.json(site);
    });
  });

  app.get('/seconf/sites/:site_id/users', function (req, res) {
    app.checkParams(res,req.params.site_id);
    app.userModel.find({_id: req.params.site_id}).populate('placeRoot').exec(function (err, site) {
      app.checkServerError(res,err);
      res.json(site);
    });
  });

  app.post('/seconf/sites', function (req, res) {
    app.checkParams(res,req.body.name);
    app.siteModel.create({name: req.body.name}).exec(function (err, site) {
      app.checkServerError(res,err);
      res.json(site);
    });
  });

  app.put('/seconf/sites', function (req, res) {
    app.checkParams(res,req.body._id, req.body.name);
    app.siteModel.findOneAndUpdate({_id: req.body._id}, {name: req.body.name}, {new: true}, function (err, site) {
      app.checkServerError(res,err);
      res.json(site);
    });
  });

  app.delete('/seconf/sites', function (req, res) {
    app.checkParams(res, req.body._id);
    app.siteModel.findOneAndUpdate({_id: req.body._id}, {active: false}, {new: true}, function (err, site) {
      app.checkServerError(res,err);
      res.json(site);
    });
  });


  //WORKAROUND SITE
  app.get('/seconf/sites', function (req, res) {


    app.siteModel.find().populate('placeRoot').exec(function (err, sites) {

      app.checkServerError(res,err);
      console.log(sites);
      res.json(sites[0]);
    });
  });
// TODO : Export in mongoDB script
  app.get('/seconf/createSite', function (req, res) {

    // create a todo, information comes from AJAX request from Angular
    app.placeModel.create({
      name: 'root'
    }, function (err, place) {
      app.checkServerError(res,err);
      app.siteModel.create({
        name: 'SITE_TEST',
        placeRoot: place
      }, function (err, site) {
        app.siteModel.find(function (err, site) {
          app.checkServerError(res,err);
          res.json(site);
        });
      });
    });

  });
}
