'use strict'
const app = require('./dist/aws-wrapper')
const serverless = require('serverless-http');

const lambda = serverless(app);
exports.handler = lambda;
