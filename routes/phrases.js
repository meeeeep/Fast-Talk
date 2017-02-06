var express = require('express');
var router = express.Router();
var request = require('request');

var Phrase = require('../models/phrases');

function makeError(res, message, status) {
    res.statusCode = status;
    var error = new Error(message);
    error.status = status;
    return error;
}

//INDEX
//GET ALL THE PHRASES

router.get('/', function(req, res){
    var query = req.query.search;
    var url = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyDLQPyziRb5KhTY51bVagqb5nsLA0DN2TA&target=es&q=' + query;
    request(url, function(error, response, body){
            if(error){
                console.log("Something went wrong!");
                console.log(error);
            } else {
                if(response.statusCode == 200){
                    //Things worked!
                    var parsedData = JSON.parse(body); //converting string into an object
                    // console.log(body);
                    console.log(parsedData.data.translations[0].translatedText);
                }
            }
        });
});



    //DELETE
    router.delete('/:id', function(req, res, next){
        Phrase.findByIdAndRemove(req.params.id, function(err){
            if(err){
                return next(err);
            } else {
                res.sendStatus(200);
            }
        });
    });




module.exports = router;
