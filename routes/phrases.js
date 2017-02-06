var express = require('express');
var router = express.Router();
var Phrase = require('../models/phrases');

router.get('/results', function(req, res){
    let query = req.query.search;
    let url = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyDLQPyziRb5KhTY51bVagqb5nsLA0DN2TA&target=es&q=' + query;
    request(url, function(error, response, body){
            if(error){
                console.log("Something went wrong!");
                console.log(error);
            } else {
                if(response.statusCode == 200){
                    //Things worked!
                    var parsedData = JSON.parse(body); //converting string into an object
                    // console.log(body);
                    res.render(parsedData.data.translations[0].translatedText);
                }
            }
        });

});


module.exports = router;
