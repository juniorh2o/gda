var fs = require('fs');
var path = require('path');
var lodash = require('lodash');
var Sequelize = require('sequelize');
var db = {};

// create your instance of sequelize
var conn = new Sequelize("gda", "root", "", {
    host: "localhost",
    dialect: 'mysql',
    pool: {
        max: 150,
        min: 0,
        idle: 1000
    },
    logging: console.log
});

// loop through all files in models directory ignoring hidden files and this file
fs.readdirSync("server/models")
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js')
    })
    // import model files and save model names
    .forEach(function (file) {
        var model = conn.import(path.join("models", file));
        db[model.name] = model;
    });

// invoke associations on each of the models
Object.keys(db).forEach(function (modelName) {
    if (db[modelName].options.hasOwnProperty('associate')) {
        db[modelName].options.associate(db)
    }
});

// Synchronizing any model changes with database.
// WARNING: force: true will DROP your database everytime you re-run your application
conn.sync({force: false}).then(function () {
    console.log('Database synchronised.');
}, function (err) {
    console.log(err);
});


// assign the sequelize variables to the db object and returning the db.
module.exports = lodash.extend({
    conn: conn,
    Sequelize: Sequelize
}, db);
