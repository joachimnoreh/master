var mongoose = require('mongoose');

module.exports = function (app) {
  app.typeModelSchema = mongoose.Schema({
    name: 'string',
    active: 'boolean'
  });
  app.typeModel = mongoose.model('type', app.typeModelSchema);

  app.get('/types', function (req, res) {
    app.typeModel.find(function (err, types) {
      app.checkServerError(res,err);
      res.json(types);
    });
  });


  // TODO : Export in mongoDB script
  app.get('/createType', function (req, res) {

    app.typeModel.create({name: 'select'});
    app.typeModel.create({name: 'simpleText'});
    app.typeModel.create({name: 'textArea'});
    app.typeModel.create({name: 'number'});
    app.typeModel.create({name: 'checkbox'});

  });
};


