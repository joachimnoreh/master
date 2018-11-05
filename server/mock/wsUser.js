/* REST NIVEAU 0 */
//import { Place } from "./wsPlace";
var mongoose = require('mongoose');
module.exports = function (app) {


  var User = mongoose.model('user', {
    lastname: String,
    firstname: String,
    matricule: String,
    email: String,
    role: String,
    //site:{ type: mongoose.Schema.Types.ObjectId, ref: 'site' },

  });

  app.get('/findUser', function (req, res) {

// use mongoose to get all places in the database
    User.find(/*{site : req.params.site},*/function (err, users) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
        res.send(err);

      res.json(users); // return all todos in JSON format
    });
  });

  app.post('/updateUser', function (req, res) {
    console.log("in update user");
// create a todo, information comes from AJAX request from Angular
    User.findByIdAndUpdate({_id: req.body._id}, {
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      matricule: req.body.matricule,
      email: req.body.email,
      mdp: '',
      role: req.body.role,
    }, {new: true}, function (err, user) {
      if (err)
        res.send(err);
      console.log("out update user");
      console.log(user);
      res.json(user);
    });

  });

  app.post('/createUser', function (req, res) {

// create a todo, information comes from AJAX request from Angular
    console.log("in crete user");
    User.create({
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      matricule: req.body.matricule,
      email: req.body.email,
      mdp: '',
      role: req.body.role,
      //   site: app.siteModel.find()[0],
    }, function (err, user) {
      if (err) {
        res.send(err);
      }
      console.log("send user");
      console.log(user);
      res.json(user);
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
  User.remove({_id : req.params.user_id},function(err, places) {
  
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
          res.send(err)
  
      res.json(places); // return all todos in JSON format
   });
  });*/

  /* REST NIVEAU 1 */
  /*
  app.get('/mci/user/', function(req, res) {
   
  if (req.body[0][0] == 'findAllPlace'){
  
  }
  
  });
  
  app.post('/mci/user/', function(req, res) {
  
  if (req.body[0][0] == 'update'){
      
  }
  if (req.body[0][0] == 'delete'){
      
  }
  
  });
  
  app.delete('/mci/user/', function(req, res) {
  
  if (req.body[0][0] == 'delete'){
      
  }
  
  });
  */
}

