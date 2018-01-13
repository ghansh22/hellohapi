'use strict';
const Hapi = require('hapi');
const server = new Hapi.Server();

// connection
server.connection({
    port: 8088,
    host: 'localhost'
});


// home route
server.route({
    method: 'GET',
    path: '/',
    handler: (request,reply)=>{
        reply('<h3>hello hapi!</h3>')
    }
});

// start server
server.start((err) => {
    if(err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});