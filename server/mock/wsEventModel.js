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

app.get('/eventModel', function(req,res){
 app.eventModel.find().exec(function (err, eventModels) {
    app.checkServerError(res,err);
    console.log(eventModels);
    res.json(eventModels);
  });
});
app.get('/eventModel/:eventModelId', function(req,res){

 app.eventModel.find({_id : eventModelId },function (err, eventModel) {
    app.checkServerError(res,err);
    res.json(eventModel);
  });
});

var mapLineModel = function (requestLine){
   var line = new app.lineModel();
   line.name = requestLine.name;
   line.input = requestLine.input;
   line.order = requestLine.order;
   return line;
}
var mapComponentModel = function (requestLine){
   var line = new app.lineModel();
   line.name = requestLine.name;
   line.input = requestLine.input;
   line.order = requestLine.order;
   return line;
}
var mapEventComponentModel = function (requestEvent){

}

app.post('/eventModel', function(req,res){
var eventM = new app.eventModel;
 eventM.name= req.body.name;
 for ( var i in req.body.lineModels){
          var lineM = mapLineModel(req.body.lineModels[i]);
          eventM.lineModels.push(lineM);
 }

  app.eventModel.create(eventM,function (err, eventModel) {
  console.log('err='+err);
  console.log('eventModel='+eventModel);
    app.checkServerError(res,err);
    res.json(eventModel);
  });


  });
app.put('/eventModel', function(req,res){
var eventM = new app.eventModel;
 eventM.name= req.body.name;
 for ( var i in req.body.lineModels){
          var lineM = mapLineModel(req.body.lineModels[i]);
          eventM.lineModels.push(lineM);
 }

  app.eventModel.findOneAndUpdate({_id: req.body._id},req.body,{upsert:true,new:true},function (err, eventModel) {
    app.checkServerError(res,err);
    res.json(eventModel);
  });
});
}
