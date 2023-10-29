/* const express = require('express');
const morgan = require('morgan');
const app= express();
const routes = require('./routes/index');

app.use(morgan('dev'));
//app.use(require('./routes/index'));

app.use('/',routes);//agregado por corrección


module.exports = app; */

const express = require('express');
const morgan = require('morgan');
const app = express();
const routes = require('./routes/index');

app.use(morgan('dev'));

// Use the router as middleware
app.use('/', routes);

module.exports = app;
