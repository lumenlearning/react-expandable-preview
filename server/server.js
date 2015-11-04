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

        server.register(
            {
                register: require("./config.js"),
                options: {
                    decorate: true
                }
            },
            (err) => {
                if(err) return console.log("config error: ", err);
            }
        );

        //define the connection options
        if(server.config.hasSSL){
            server.connection(
                {
                    port: server.config.server.ssl.port,
                    tls: {
                        key: fs.readFileSync(path.join(__dirname, 'ssl', server.config.server.ssl.key)),
                        cert: fs.readFileSync(path.join(__dirname, 'ssl', server.config.server.ssl.cert))
                    }
                }
            );
        }
        else{
            server.connection(
                {
                    port: server.config.server.port

                }
            );
        }//connection

        server.register(require('hapi-auth-cookie'), function (err) {

            server.auth.strategy('session', 'cookie', {
                password: 'secret',
                cookie: 'sid-example',
                redirectTo: '/login',
                isSecure: false
            });

            server.register(require('./routes/router.js'), (err) => {
                if(err) return console.error("routes error: ", err);

            });

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