 /* REST NIVEAU 0 */
//import { Place } from "./wsPlace";
let users = require('./data/user');

 module.exports = function(app){

  /*
    var User = mongoose.model('agent', {
        lastname: String,
        firstname: String,
        matricule:String,
        identifiant:String,
        mdp:String,
        postion: String,
        site:{ type: mongoose.Schema.Types.ObjectId, ref: 'site' },

});*/

app.get('/findUser', function(req, res) {

// use mongoose to get all places in the database
//User.find({site : req.params.site},function(err, agents) {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    /*if (err)
        res.send(err)
    */
    res.json(users.USERS); // return all todos in JSON format
// });
});

app.post('/updateUser', function(req, res) {

// create a todo, information comes from AJAX request from Angular
User.findByIdAndUpdate(req.body._id, { $set: { name: req.body.name }}, function(err, agent) {
    /*if (err)
        res.send(err);*/

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

app.post('/createUser', function(req, res) {

// create a todo, information comes from AJAX request from Angular
User.create({
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
User.remove({_id : req.params.agent_id},function(err, places) {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
        res.send(err)

    res.json(places); // return all todos in JSON format
 });
});*/

/* REST NIVEAU 1 */
/*
app.get('/agent/', function(req, res) {
 
if (req.body[0][0] == 'findAllPlace'){

}

});

app.post('/agent/', function(req, res) {

if (req.body[0][0] == 'update'){
    
}
if (req.body[0][0] == 'delete'){
    
}

});

app.delete('/agent/', function(req, res) {

if (req.body[0][0] == 'delete'){
    
}

});
*/
}

