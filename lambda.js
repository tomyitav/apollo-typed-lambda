'use strict'
const apolloServer = require('./dist/aws-wrapper')
exports.handler = apolloServer.createHandler({
    cors: {
        origin: true,
        credentials: true,
    },
});
