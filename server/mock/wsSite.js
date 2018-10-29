//var mongoose = require('mongoose');
module.exports = function(app){
   /*var Site = mongoose.model('site', {
            name : String,
            placeRoot:{ type: mongoose.Schema.Types.ObjectId, ref: 'place' }
    });
*/
    app.get('/mci/findAllSite/', function(req, res) {
 
        // use mongoose to get all places in the database
        Site.find(function(err, sites) {
 
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
             res.send(err)
            console.log(sites);
            res.json(sites); // return all todos in JSON format
         });
        });
     app.get('/mci/createSite', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        Place.create({
            name : 'Nom a changer 2'
        }, function(err, place) {
                if (err) 
                    res.send(err);
                Site.create({
                    name:'site3',
                    placeRoot:place
                             },function(err,site){
                                    Site.find(function(err, site) {
                                    if (err)
                                        res.send(err)
                                    res.json(site);
                                     });
                             });
        });

    });
}
