var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var bodyParser = require('body-parser');
var User= require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/signup', function(req, res) {
    User.register(new User({username: req.body.username }),
        req.body.password,
        function(err, user) {
            if (err) {
                return res.status(500).json({
                    err: err
                });
            }
            passport.authenticate('local')(req, res, function () {
                return res.status(200).json({
                    status: 'Registration successful!'
                });
            });
        });
});

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({
                err: info
            });
        }
        req.login(user, function(err) {
            if (err) {
                return res.status(500).json({
                    err: 'Could not log in user'
                });
            }
            res.status(200).json({
                status: 'Login successful!',
                user: user
            });
        });
    })(req, res, next);
});

router.get('/logout', function(req, res) {
    req.logout();
    res.status(200).json({
        status: 'Bye!'
    });

    router.get('/welcome', function(req, res, next){
        console.log('about to find some phrases');
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
});

module.exports = router;
