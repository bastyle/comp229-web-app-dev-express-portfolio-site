// installed 3rd party packages
const exp = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
//const logger = require('morgan');
const bodyParser = require('body-parser');
const { nextTick } = require('process');
const { json } = require('express');


const indexRouter = require('./routes/index');
//const usersRouter = require('./routes/users');

const app = exp();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // express  -e

//app.use(logger('dev'));
app.use(exp.json());
app.use(exp.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(exp.static(path.join(__dirname, 'public')));
//app.use(exp.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
//app.use('/users', usersRouter);

module.exports = app;
