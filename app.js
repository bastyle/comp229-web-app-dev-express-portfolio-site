/**
 * @file app.js
 * @author Bastian Bastias Sanchez. 
 * @studentID 301242983 
 * @date September 30th 2022.
 * @since  1.0.0
 */
// installed 3rd party packages
const exp = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { nextTick } = require('process');
const { json } = require('express');

//let cors = require('cors');
// modules for authentication
let session = require('express-session');
let passport = require('passport');

/*let passportJWT = require('passport-jwt');
let JWTStrategy = passportJWT.Strategy;
let ExtractJWT = passportJWT.ExtractJwt;*/

let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');

// routers
const indexRouter = require('./routes/index');
const contactRouter = require('./routes/contacts');


//db settings
let mongoose = require('mongoose');
let DB = require('./config/db');
mongoose.connect(DB.URI, { useNewUrlParser: true, useUnifiedTopology: true });
let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', () => {
    console.log('Connected to MongoDB...');
});


const app = exp();

//setup express session
app.use(session({
    secret: "SomeSecret",
    saveUninitialized: false,
    resave: false
}));

// initialize flash
app.use(flash());

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// passport user configuration

// create a User Model Instance
let userModel = require('./models/user');
let User = userModel.User;

// implement a User Authentication Strategy
passport.use(User.createStrategy());

// serialize and deserialize the User info
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // express  -e
// general app settings
app.use(exp.json());
app.use(exp.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(exp.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/contacts', contactRouter);
module.exports = app;
