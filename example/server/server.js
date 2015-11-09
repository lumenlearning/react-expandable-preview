"use strict";
const   path = require('path'),
        hapi = require('hapi'),
        fs = require('fs'),
        _ = require('lodash');

module.exports = new class Server {
    constructor(){
        this.server = new hapi.Server();
        let server = this.server;

        this.start = this.start.bind(this);

        server.connection(
            {
                port: 3001
            }
        );

        server.register(require('./routes/router.js'), (err) => {
            if(err) return console.error("routes error: ", err);
        });

    }//constructor

    start(){
        return this.server.start((err) => {
            if (err) return console.log("Start Error:", err);

            console.log("Server Started at:", this.server.info.uri);
            return this.server;
        });
    }

    stop(callback){
        this.server.stop(callback)
    }

};