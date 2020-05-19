var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const db = require('./config/database');
db('mongodb://localhost:27017/projFatec');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//imports Routes
const empresa = require('./routes/empresa');
app.use('/empresa', empresa);

const candidato = require('./routes/candidato');
app.use('/candidato', candidato);

const avaliador = require('./routes/avaliador');
app.use('/avaliador', avaliador);

const administrador = require('./routes/administrador')
app.use('/administrador', administrador);

const vaga = require('./routes/vaga');
app.use('/vaga', vaga);

const curriculo = require('./routes/curriculo');
app.use('/curriculo', curriculo);


module.exports = app;
