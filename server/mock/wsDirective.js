/* REST NIVEAU 0 */

var mongoose = require('mongoose');

module.exports = function (app) {
  app.consigneSchema = mongoose.Schema({
    title: 'String',
    content: 'String',
    startDate: 'Date',
    endDate: 'Date',
    recurrent: 'Boolean',
    frequency: 'Number',
    nextDate: 'Date',
    active: 'Boolean'
  })
  ;
  app.consigne = mongoose.model('consigne', app.consigneSchema);

  app.get('/seconf/consignes', function (req, res) {


    app.consigne.find( function (err, consignes) {
      app.checkServerError(res, err);
      res.json(consignes); // return all todos in JSON format
    });
  });
  app.get('/seconf/consignes/:consigne_id', function (req, res) {

    app.checkParams(res, req.params.consigne_id);

    app.consigne.find({_id: req.params.consigne_id}, function (err, consigne) {
      app.checkServerError(res, err);
      res.json(consigne); // return all todos in JSON format
    });
  });

  app.put('/seconf/consignes', function (req, res) {

    app.consigne.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, function (err, consigne) {
      app.checkServerError(res, err);
      res.json(consigne);
    });
  });

  app.post('/seconf/consignes', function (req, res) {
    app.checkParams(res, req.body.title);
    app.consigne.create({
      title: req.body.title,
    }, function (err, consigne) {
      app.checkServerError(res, err);
      res.json(consigne);
    });
  });

  app.delete('/consignes', function (req, res) {

    app.checkParams(res, req.body._id);
    app.consigne.findOneAndUpdate({_id: req.body._id}, {active: false}, {new: true}, function (err, consigne) {
      app.checkServerError(res, err);
      res.json(consigne);
    });
  })
};
