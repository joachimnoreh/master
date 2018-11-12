/* REST NIVEAU 0 */

var mongoose = require('mongoose');
module.exports = function (app) {
 app.componentModelSchema = mongoose.Schema({
    name: 'string',
    width:'number',
    label:'string',
    type:[app.typeModelSchema],
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
       componentModels:[app.componentModelSchema],
     });
   app.lineModelSchema.plugin(require('mongoose-autopopulate'));
   app.lineModel = mongoose.model('lineModel', app.lineModelSchema,'lineModels');


    app.eventModelSchema = mongoose.Schema({
          name: 'string',
          lineModels:[app.lineModelSchema]
        });
      app.eventModel = mongoose.model('eventModel', app.eventModelSchema);

app.get('/seconf/eventModel', function(req,res){
 app.eventModel.find().exec(function (err, eventModels) {
    app.checkServerError(res,err);
    console.log(eventModels);
    res.json(eventModels);
  });
});
app.get('/seconf/eventModel/:eventModelId', function(req,res){

 app.eventModel.find({_id : eventModelId },function (err, eventModel) {
    app.checkServerError(res,err);
    res.json(eventModel);
  });
});
var mapEventModel = function (requestLine){
   var line = new app.lineModel();
   line.name = requestLine.name;
   line.input = requestLine.input;
   line.order = requestLine.order;
   return line;
}
var mapLineModel = function (requestLine){
   var line = new app.lineModel();
   line.name = requestLine.name;
   line.input = requestLine.input;
   line.order = requestLine.order;
   return line;
}
var mapComponentModel = function (requestComponentModel){
console.log(requestComponentModel.type);
  var eventComponentM = new app.componentModel();
  eventComponentM.name= requestComponentModel.name;
  eventComponentM.width= requestComponentModel.width;
  eventComponentM.label= requestComponentModel.label;
  app.typeModel.find({_id:requestComponentModel.type._id},function(err,type){
          console.log('founded');
        console.log(type);
       eventComponentM.type = type;
  });

  eventComponentM.mandatory = requestComponentModel.mandatory
  eventComponentM.default_text = requestComponentModel.default_text;
  eventComponentM.help = requestComponentModel.help;
  eventComponentM.message = requestComponentModel.message;
  eventComponentM.order = requestComponentModel.order;
  return eventComponentM;
}
var mapEventComponentModel = function (requestEvent){
 var eventM = new app.eventModel;
 eventM.name= requestEvent.body.name;
 for ( var i in requestEvent.body.lineModels){
            var lineM = mapLineModel(requestEvent.body.lineModels[i]);
            for ( var j in requestEvent.body.lineModels[i].componentModels){
               var componentM = mapComponentModel(requestEvent.body.lineModels[i].componentModels[j]);
               lineM.componentModels.push(componentM);
            }
           eventM.lineModels.push(lineM);
  }
  return eventM;
}

app.post('/seconf/eventModel', function(req,res){
  eventM = mapEventComponentModel(req);
  app.eventModel.create(eventM,function (err, eventModel) {
    app.checkServerError(res,err);
    res.json(eventModel);
  });
});

app.put('/seconf/eventModel', function(req,res){
   eventM = mapEventComponentModel(req);
   console.log("event to be deleted"+ req.body._id);
   app.eventModel.deleteOne({ _id: req.body._id},function (err) {
     app.checkServerError(res,err);
     app.eventModel.create(eventM,function (err, eventModel) {
         app.checkServerError(res,err);
         res.json(eventModel);
       });
   });

});

app.delete('/seconf/eventModel/:idEventModel', function(req,res){
   console.log("event to be deleted"+req.params.idEventModel);
   app.eventModel.deleteOne({ _id:req.params.idEventModel},function (err) {
     app.checkServerError(res,err);
     app.eventModel.find(function (err, eventModel) {
         app.checkServerError(res,err);
         res.json(eventModel);
       });
   });

});

}
