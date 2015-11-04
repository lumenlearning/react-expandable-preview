"use strict";

let register = function (Server, options, next) {
    const fs        = require("fs");
    const path      = require("path");
    const Sequelize = require("sequelize");
    const sequelize = new Sequelize(Server.config.db.database, Server.config.db.username, Server.config.db.password, Server.config.db.options);
    const db        = {
        models: {}
    };

    fs
        .readdirSync(path.join(__dirname, "../../models"))
        .filter(function(file) {
            return (file.indexOf(".") !== 0) && (file !== "index.js");
        })
        .forEach(function(file) {
            console.log("fire");
            var model = sequelize.import(path.join(__dirname, "../../models", file));
            db.models[model.name] = model;
        });

    Object.keys(db).forEach(function(modelName) {
        if ("associate" in db[modelName]) {
            db.models[modelName].associate(db);
        }
    });

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    Server.decorate('server', 'db', db);

    next();
};

register.attributes = {
    name: "sequelize",
    version: '1.0.0'
};


module.exports = register;