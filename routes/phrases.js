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




//NEW PHRASE
// router.post('/', function (req, res, next){
//     console.log('hello from post router');
//     var phrase = new Phrase({
//         english: req.body.english,
//         spanish: req.body.spanish,
//         user: req.user
//     });
//     phrase.save()
//         .then(function (savedPhrase) {
//             console.log(savedPhrase);
//             console.log(phrase);
//
//         })
// })


//GET API DATA

router.get('/', function(req, res){
    console.log('about to find some phrases');
    var query = req.data;
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
                    var translation = (parsedData.data.translations[0].translatedText);
                    res.json(translation);
                }
            }
        });
});

router.post('/', function(req, res){
    console.log('about to post from routes');
    var phrase = new Phrase({
        english: req.body.english,
        spanish: req.body.spanish
    });
    phrase.save()
        .then(function(savedPhrase){
            console.log(savedPhrase);
            res.json(phrase);
        })

})



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
