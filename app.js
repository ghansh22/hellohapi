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

// dynamic route
server.route({
    method: 'GET',
    path: '/user/{name}',
    handler: (request,reply)=>{
        reply('<h4>hello '+request.params.name+'</h4>');
    }
});

// static pages
server.register(require('inert'),(err)=>{
    if(err){
        throw err;
    }
    server.route({
        method: 'GET',
        path: '/about',
        handler: (request, reply)=>{
            reply.file('./public/about.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/image',
        handler: (request, reply)=>{
            reply.file('./public/hapi.png');
        }
    });
});


// start server
server.start((err) => {
    if(err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});