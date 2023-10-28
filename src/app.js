const express = require('express');
const morgan = require('morgan');
const app= express();
const routes = require('./routes/index');

app.use(morgan('dev'));
app.use(require('./routes/index'));


module.exports = app;