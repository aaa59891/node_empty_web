const express = require('express');
const bodyParser = require('body-parser');
const log4js = require('log4js');
global._ = require('lodash');

const routes = require('./routes/routes');
const Constant = require('./constant/constant');
const logger = require('./utils/log4jsUtils')('app');
const config = require('./config');

const app = express();

app.use('/static', express.static(__dirname + '/public'));

app.use(log4js.connectLogger(logger, {level: log4js.levels.DEBUG}));

app.use(bodyParser.json());

app.use((req, res, next) => {
  logger.info(`Getting request ${req.method} ${req.originalUrl}`);
  next();
});

app.get('/', (req, res, next) => {
  res.send('This is Empty Web Project.');
});

routes(app);

app.use((req, res, next) => {
  logger.error(`http status 404 [${req.method} ${req.originalUrl}]`);
  res.status(404).send({msg: Constant.errMsg.wrongUrl});
});

app.use((err, req, res, next) => {
  logger.error(`http status 422 error [${req.method} ${req.originalUrl}]\n`, err);
  res.status(422).send({msg: err.message});
});

module.exports = app;