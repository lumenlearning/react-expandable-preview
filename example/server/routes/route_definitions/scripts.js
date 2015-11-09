"use strict";
module.exports  = new class Scripts{
    constructor(){

        this.options = {
            method: ['GET'],
            path: "/js/{script}",
            handler: {scripts:{}}
        }

    }

    getHandler(){
        const fs = require('fs');

        var register = function(Server, options, next){

            var handler = function(route, options){

                return function (req, res){

                    let file = fs.readFileSync(__dirname + '/../../assets/client/js/' + req.params.script);

                    res(file).type("application/javascript");

                }

            };

            Server.handler("scripts", handler);
            next();
        };

        register.attributes = {
            name: "handler-scripts",
            version: "1.0.0"
        };

        return register;

    } //handler

    getOptions(){

        return this.options;
    }
}