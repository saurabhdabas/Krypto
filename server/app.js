const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// db connection
const db = require('./configs/db.config');

const indexRouter = require('./routes/index');
const marketRouter = require('./routes/market');
const cryptoRouter = require('./routes/singleCrypto');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/market', marketRouter(db));
app.use('/crypto', cryptoRouter(db));


module.exports = app;
