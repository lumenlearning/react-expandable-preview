"use strict";
const fs = require('fs');

let register = function(Server, options, next){

    var files = fs.readdirSync(__dirname + '/route_definitions/');

    console.log(files);

    files.forEach(function(file){

        console.log(file);

        if(~file.indexOf('.js')){
            let route = require(__dirname + '/route_definitions/' + file);

            Server.register(route.getHandler(), function(err){
                if(err) console.log(err);
                console.log(file, "register callback");
            });

            Server.route(route.getOptions());

        }

    });

};

register.attributes = {
    name: "router",
    version: "1.0.0"
};

module.exports = register;