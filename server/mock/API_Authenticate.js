const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = {
  secret: "tokenSEConf"
};
module.exports = function (app) {



  app.get('/seconf/authenticate/checkToken', function (req, res) {

    // return the information including token as JSON
    res.json({
      success: true,
    });
  });


  app.get('/seconf/authenticate/:email', function (req, res) {
    console.log("authentification attempt");
    // find the user
    app.userModel.findOne({
      name: req.param.email
    }, function (err, user) {

      if (err) throw err;

      if (!user) {
        res.status(401).json({success: false, message: 'Authentication failed. User not found.'});
      } else if (user) {

        // check if password matches
       // if (user.password === bcrypt.hashSync(req.body.password,64)) {
      //    res.status(401).json({success: false, message: 'Authentication failed. Wrong password.'});
    //    } else {

          // if user is found and password is right
          // create a token with only our given payload
          // we don't want to pass in the entire user since that has the password
          const payload = {
            user : user._id,
            check:  true
          };
          var token = jwt.sign(payload, config.secret, {
            expiresIn: 720 // expires in 24 hours
          });

          // return  the information including token as JSON
          console.log("authentification succesfull");
          res.json({
            success: true,
            message: 'auth succesfull',
            token: token,
            user : user
          });
        }
      //}

    });
  });
};
