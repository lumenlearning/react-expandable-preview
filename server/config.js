"use strict";

const Confidence = require('confidence');

let register = function(Server, options, next){
    var store = new Confidence.Store(),
        config = {
            server: server,
            db: db
        };

    store.load(config);

    this.getConfig = function(){
        return config;
    };

    if((typeof options !== 'undefined') && (options.decorate === true)){
        Server.decorate('server', 'config', config);
    }

    typeof next !== "undefined" ? next() : null;

};

register.attributes = {
    name: "config",
    version: "1.0.0"
};


let server = {
    host: process.env.HOST || "127.0.0.1",
    port: process.env.PORT || 8005,
    ssl:{
        hasSSL: false,
        port: process.env.PORT || 443,
        key: 'dnd.key',
        cert: "dnd.crt"
    }
};

let db = {
    database: "3_5_charsheet",
    username: "user",
    password: "pass",
    options:{
        host: "127.0.0.1",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
}



module.exports = register;



















































