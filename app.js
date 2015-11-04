"use strict";
//dependencies
const _ = require('lodash');

//services
const Server = require('./server/server.js');

//add services to the constructor
// All services must have a start() and stop() method
class App {

    constructor(){
        this.services = {
            Server: Server
        }
    }

    //start all application services.
    start(nameOrNames){

        if(nameOrNames){
            console.log("ARE NAMES!");
            switch(typeof nameorNames){
                case "string":
                    //start the specific service
                    this.services[nameOrNames].start();

                break;
                case "object":

                    if(Array.isArray(nameOrNames)){
                        nameOrNames.forEach((serviceName)=>{
                            this.services[serviceName].start();
                        })
                    }

                break;
            }

        }
        //start all services
        else{

            _.keys(this.services).forEach((key) => {
                this.services[key].start();
            });
        }
    }//stop

    stop(nameOrNames){
        if(nameOrNames){
            switch(typeof nameorNames){
                case "string":
                    //start the specific service
                    this.services[nameOrNames].stop();

                    break;
                case "object":

                    if(Array.isArray(nameOrNames)){
                        nameOrNames.forEach((serviceName)=>{
                            this.services[serviceName].stop();
                        })
                    }

                    break;
            }
        }
        //stop all services
        else{
            _.keys(this.services).forEach((key) => {
                this.services[key].stop();
            });
        }
    }//stop

}

new App().start(/*add a process enviornment variable*/);