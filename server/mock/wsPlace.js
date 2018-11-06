/* REST NIVEAU 0 */

var mongoose = require('mongoose');

module.exports = function (app) {
  app.placeModelSchema = mongoose.Schema({
    name: 'string',
    active: 'boolean',
    placeChildren: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'place',
      autopopulate: true
    }]

  });

  app.placeModelSchema.plugin(require('mongoose-autopopulate'));
  app.placeModel = mongoose.model('place', app.placeModelSchema);

  app.checkParams = function (res,...paramsToCheck)
  {
    for (let paramToCheck of paramsToCheck) {
      if (!paramToCheck) {
        res.status(400);
        res.send();
      }
    }
  };
  app.checkServerError=function (res,err)
  {
    if (err) {
      res.status(500);
      res.send(err);
    }
  };

app.get('/places/:place_id', function (req, res) {

  app.checkParams(res,req.params.place_id);

  app.placeModel.find({_id: req.params.place_id}, function (err, place) {
    app.checkServerError(res,err);
    res.json(place); // return all todos in JSON format
  });
});

app.put('/places', function (req, res) {

  app.placeModel.findOneAndUpdate({_id: req.body._id}, {name: req.body.name}, {new: true}, function (err, place) {
    app.checkServerError(res,err);
    res.json(place);
  });
});

app.post('/places', function (req, res) {

  app.checkParams(res,req.body.name);
  app.placeModel.create({
    name: req.body.name,
  }, function (err, place) {
    app.checkServerError(res,err);

    app.placeModel.findById(req.body.parent, function (err, parent) {
      app.checkServerError(res,err);

      parent.placeChildren.push(place);
      parent.save(function (err) {
        app.checkServerError(res,err);
      });
    });
    res.json(place);
  });
});

app.delete('/places', function (req, res) {

  app.checkParams(res,req.body._id);
  app.placeModel.findOneAndUpdate({_id: req.body._id}, {active: false}, {new: true}, function (err, place) {
    app.checkServerError(res,err);
    res.json(place);
  });
})
};
