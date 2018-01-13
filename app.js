'use strict';
const Hapi = require('hapi');

const server = new Hapi.Server({ port: 8088, host: '127.125.1.30' });
console.log(`Server running at: ${server.info.uri}`);
server.start((err) => {
    if(err) {
        throw err;
    }
    // console.log(`Server running at: ${server.info.uri}`);
});