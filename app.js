var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
var request= require('request');
var User = require('./models/user');
// var database = 'mongodb://localhost:27017/fast_talk';
// var port = process.env.PORT || 8080;

// mongoose.Promise = require('bluebird');


//ROUTES

var index = require('./routes/index');
var users = require('./routes/users');
var phrases = require('./routes/phrases');
var app = express();

// Connect to database
// mongoose.connect(database, function (err) {
//     if (err) {
//         console.log('Could not connect to Mongo Db');
//     } else {
//         console.log('connected to Mongo Db');
//     }
// });
//
// app.listen(port, function () {
//     console.log("server conneted on port: " + port)
// });

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
}
else {
    mongoose.connect('mongodb://localhost/');
}
mongoose.connection.on('error', function(err) {
        console.error('MongoDB connection error: ' + err);
        process.exit(-1);
    }
);
mongoose.connection.once('open', function() {
    console.log("Mongoose has connected to MongoDB!");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

//PASSPORT CONFIG
app.use(require('express-session')({
    secret: 'I love cats too',
    resave: false,
    saveUninitialized: false

}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// This middleware will allow us to use the currentUser in our views and routes.
app.use(function (req, res, next) {
    global.currentUser = req.user;
    next();
});

//ROUTES
app.use('/', index);
app.use('/users', users);
app.use('/phrases', phrases);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
