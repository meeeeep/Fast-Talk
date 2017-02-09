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


//GET API DATA

router.get('/:query', function(req, res){
    console.log('about to find some phrases');
    var query = req.params.query;
    var url = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyDLQPyziRb5KhTY51bVagqb5nsLA0DN2TA&target=es&q=' + query;
    console.log('url:', url);
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

//save a phrase

router.post('/', function(req, res, next){
    console.log('about to post from routes');
    var phrase = new Phrase({
        english: req.body.english,
        spanish: req.body.spanish,
        user: req.user
    });
    phrase.save()
        .then(function(savedPhrase){
            console.log(savedPhrase);
            res.json(phrase);
        })
        .catch(function(err){
            return next(err);
        });
});

//get all phrases
router.get('/', function(req, res, next){
    console.log( 'about to get all users phrases')
    Phrase.find()
        .then(function (phrases) {
            res.json(phrases);

        })
        .catch(function (err) {
            return next(err);

        });
});

// Returning data for single phrase as json

router.get('/:id', function(req, res, next){
    Phrase.findById(req.params.id)
        .then(function(phrase){
            if(!phrase) return next(makeError(res, 'Document not found', 404));
            res.json(phrase);
        })
        .catch(function (err) {
            return next(err);

        });
});

// UPDATE
router.put('/:id', function(req, res, next) {
    Phrase.findById(req.params.id)
        .then(function(phrase) {
            if (!phrase) return next(makeError(res, 'Document not found', 404));
            phrase.english = req.body.english;
            phrase.spanish = req.body.spanish;

            return phrase.save();
        })
        .then(function(phrase) {
            res.json(phrase);
        }, function(err) {
            return next(err);
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
