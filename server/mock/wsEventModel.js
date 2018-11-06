/* REST NIVEAU 0 */

var mongoose = require('mongoose');

module.exports = function (app) {
 app.componentModelSchema = mongoose.Schema({
    name: 'string',
    width:'number',
    label:'string',
    type:[{
           type: mongoose.Schema.Types.ObjectId,
               ref: 'type',
               autopopulate: true
             }],
     mandatory:'boolean',
     default_text:'string',
     help:'string',
     message:'string',
     order:'number'

  });
  app.componentModelSchema.plugin(require('mongoose-autopopulate'));
  app.componentModel = mongoose.model('componentModel', app.componentModelSchema);

  app.lineModelSchema = mongoose.Schema({
       name: 'string',
       input:'boolean',
       order:'string',
       componentModels:[{
              type: mongoose.Schema.Types.ObjectId,
                  ref: 'componentModel',
                  autopopulate: true
                }],
     });
   app.lineModelSchema.plugin(require('mongoose-autopopulate'));
   app.lineModel = mongoose.model('lineModel', app.lineModelSchema);


    app.eventModelSchema = mongoose.Schema({
          name: 'string',
          input:'boolean',
          order:'string',
          lineModels:[{
                 type: mongoose.Schema.Types.ObjectId,
                     ref: 'lineModel',
                     autopopulate: true
                   }],
        });
      app.eventModelSchema.plugin(require('mongoose-autopopulate'));
      app.eventModel = mongoose.model('eventModel', app.eventModelSchema);

app.get('/eventModel', function(req,res){

 app.eventModel.find(function (err, eventModels) {
    app.checkServerError(res,err);
    res.json(eventModels);
  });
});
app.get('/eventModel/:eventModelId', function(req,res){

 app.eventModel.find({_id : eventModelId },function (err, eventModel) {
    app.checkServerError(res,err);
    res.json(eventModel);
  });
});

app.post('/eventModel', function(req,res){

 app.eventModel.create(req.body,function (err, eventModel) {
    app.checkServerError(res,err);
    res.json(eventModel);
  });
});

app.put('/eventModel', function(req,res){

 app.eventModel.findOneAndUpdate({_id: req.body._id}, req.body,{new:true},function (err, eventModel) {
    app.checkServerError(res,err);
    res.json(eventModel);
  });
});

}
