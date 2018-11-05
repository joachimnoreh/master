var mongoose = require('mongoose');
module.exports = function (app) {
  app.siteModelSchema = mongoose.Schema({
    name: 'string',
    placeRoot: {type: mongoose.Schema.Types.ObjectId, ref: 'place'}
  });

  app.siteModel =  mongoose.model('site', app.siteModelSchema);

  app.get('/findSite', function (req, res) {
    //TODOD use token to determine correct site for user
    // use mongoose to get all places in the database
    app.siteModel.find().populate('placeRoot').exec(function(err, sites){

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
        res.send(err);
      console.log(sites);
       res.json(sites[0]); // return all todos in JSON format
    });
  });
  app.get('/createSite', function (req, res) {

    // create a todo, information comes from AJAX request from Angular
    app.placeModel.create({
      name: 'root'
    }, function (err, place) {
      if (err)
        res.send(err);
      app.siteModel.create({
        name: 'SITE_TEST',
        placeRoot: place
      }, function (err, site) {
        app.siteModel.find(function (err, site) {
          if (err)
            res.send(err);
          res.json(site);
        });
      });
    });

  });
}
