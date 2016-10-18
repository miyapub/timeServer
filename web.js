'use strict';
const Hapi = require('hapi');
var fromtimestamp = require('./handlers/fromtimestamp');
var gettimestamp = require('./handlers/gettimestamp');
var gettime = require('./handlers/gettime');
var fromtime = require('./handlers/fromtime');
const server = new Hapi.Server();
const port = 2222;
server.connection({
    host: '0.0.0.0',
    port: port
});
server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }
    /*
    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('./public/index.html');
        }
    });*/
    server.route({
        method: 'GET',
        path: '/api/timestamp',
        handler: gettimestamp
    });
    server.route({
        method: 'GET',
        path: '/api/timestamp/{timestamp}',
        handler: fromtimestamp
    });
    server.route({
        method: 'GET',
        path: '/api/time',
        handler: gettime
    });
    server.route({
        method: 'GET',
        path: '/api/time/{time}',
        handler: fromtime
    });
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'public',
                listing: true
            }
        }
    });
});
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', port);
});