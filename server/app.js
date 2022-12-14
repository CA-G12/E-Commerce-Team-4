const { join } = require('path');

require('dotenv').config();

const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const router = require('./routes');

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(compression());
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: { 'img-src': ["'self'", 'https: data:'] },
  })
);

app.use('/api/v1/', router);
app.use(express.static(join(__dirname, '..', 'client', 'build')));
app.get('*', (req,res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'))
})

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

module.exports = app;
