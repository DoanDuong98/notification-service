require("dotenv").config();
const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();
const { checkOverload } = require('./helpers/check.connect');

// init middleware
app.use(morgan("dev")); // mode dev  // morgan("combined")  mode prd
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// init DB
require('./dbs/init.mongodb');
checkOverload();
// init routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use('', require('./routes'));

// handling error
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  return res.status(statusCode).json({
    status: 'error',
    code: statusCode,
    message: error.message || 'Internal server error!'
  })
})

module.exports = app;

