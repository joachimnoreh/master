 /* REST NIVEAU 0 */
//import { Place } from "./wsPlace";
module.exports = function(app){

  /*
    var Agent = mongoose.model('agent', {
        lastname: String,
        firstname: String,
        matricule:String,
        identifiant:String,
        mdp:String,
        postion: String,
        site:{ type: mongoose.Schema.Types.ObjectId, ref: 'site' },

});*/

app.get('/mci/findAgent/', function(req, res) {

// use mongoose to get all places in the database
Agent.find({site : req.params.site},function(err, agents) {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
        res.send(err)

    res.json(agents); // return all todos in JSON format
 });
});

app.post('/mci/updateAgent', function(req, res) {

// create a todo, information comes from AJAX request from Angular
Agent.findByIdAndUpdate(req.body._id, { $set: { name: req.body.name }}, function(err, agent) {
    if (err)
        res.send(err);

     res.json(agent);
    // get and return place created
    /*  
     console.log(place);
    Place.find({_id : place._id},function(err, place) {
        if (err)
            res.send(err)
    */
       
 
});

});

app.post('/mci/createAgent', function(req, res) {

// create a todo, information comes from AJAX request from Angular
Agent.create({
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    matricule: req.body.matricule,
    identifiant:req.body.identifiant,
    mdp:req.body.mdp,
    position: req.body.position,
    site: req.body.site._id,
}, function(err, agent) {
    if (err){
        res.send(err);
    }
    res.json(agent);
    // get and return place created
 /*   Place.findById(req.body.parent,function(err, parent) {
            if (err){
                res.send(err)
             }

            parent.placeChildren.push(place);
            parent.save(function (err) {
            if (err) 
                res.send(err);
           
            });

    });
        res.json(place);*/
    });
});

/*
// create a todo, information comes from AJAX request from Angular
Agent.remove({_id : req.params.agent_id},function(err, places) {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
        res.send(err)

    res.json(places); // return all todos in JSON format
 });
});*/

/* REST NIVEAU 1 */
/*
app.get('/mci/agent/', function(req, res) {
 
if (req.body[0][0] == 'findAllPlace'){

}

});

app.post('/mci/agent/', function(req, res) {

if (req.body[0][0] == 'update'){
    
}
if (req.body[0][0] == 'delete'){
    
}

});

app.delete('/mci/agent/', function(req, res) {

if (req.body[0][0] == 'delete'){
    
}

});
*/
}

