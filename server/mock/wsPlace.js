 /* REST NIVEAU 0 */

//var mongoose = require('mongoose');
module.exports = function(app){

  /*  var Place = mongoose.model('place', {
    name : String,
    placeParent:{ type: mongoose.Schema.Types.ObjectId, ref: 'place' },
    placeChildren:[{ type: mongoose.Schema.Types.ObjectId, ref: 'place' }]
});*/

app.get('/mci/findPlace/:place_id', function(req, res) {

// use mongoose to get all places in the database
Place.find({_id : req.params.place_id},function(err, places) {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
        res.send(err)

    res.json(places); // return all todos in JSON format
 });
});

app.post('/mci/updatePlace', function(req, res) {

// create a todo, information comes from AJAX request from Angular
Place.findByIdAndUpdate(req.body._id, { $set: { name: req.body.name }}, function(err, place) {
    if (err)
        res.send(err);

     res.json(place);
    // get and return place created
    /*  
     console.log(place);
    Place.find({_id : place._id},function(err, place) {
        if (err)
            res.send(err)
    */
       
 
});

});

app.post('/mci/createPlace', function(req, res) {

// create a todo, information comes from AJAX request from Angular
Place.create({
    name : req.body.name,
    placeParent:req.body.parent._id
}, function(err, place) {
    if (err){
        res.send(err);
    }

    // get and return place created
   Place.findById(req.body.parent,function(err, parent) {
            if (err){
                res.send(err)
             }

            parent.placeChildren.push(place);
            parent.save(function (err) {
            if (err) 
                res.send(err);
           
            });

    });
        res.json(place);
    });
});

app.delete('/mci/removePlace', function(req, res) {

// create a todo, information comes from AJAX request from Angular
Place.remove({_id : req.params.place_id},function(err, places) {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
        res.send(err)

    res.json(places); // return all todos in JSON format
 });
});

/* REST NIVEAU 1 */

/*
app.get('/mci/place/', function(req, res) {

if (req.body[0][0] == 'findAllPlace'){

}

});

app.post('/mci/place/', function(req, res) {

if (req.body[0][0] == 'update'){
    
}
if (req.body[0][0] == 'delete'){
    
}

});

app.delete('/mci/place/', function(req, res) {

if (req.body[0][0] == 'delete'){
    
}

});

*/
}
