'use strict';
var dbConn = require('./../dbconfig');
//Employee object create
var Settings = function(settings){
  this.sensorId  = settings.sensorId;
  this.sendInterval  = settings.sendInterval;
  this.readInterval = settings.readInterval;
};

Settings.create = function (newSettings, result) {
    dbConn.query("INSERT INTO settings set ?", newSettings, function (err, res) {
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }
    else{
        console.log(res.insertId);
        result(null, res.insertId);
    }
});

};
Settings.findById = function (id, result) {
    dbConn.query("Select * from settings WHERE sensorId = ? ", [id], function (err, res) {
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }else{
        result(null, res);
    }
    });

};

Settings.findAll = function (result) {
    dbConn.query("Select * from settings", function (err, res) {
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }
    else{
        result(null, res);
    }
    });
};

Settings.update = function(id, settingsToUpdate, result){
    dbConn.query("UPDATE settings SET sendInterval=?,readInterval=? WHERE sensorId = ?", [settingsToUpdate.sendInterval,settingsToUpdate.readInterval, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, settingsToUpdate);
        }
    });
};

/*
Employee.delete = function(id, result){
    dbConn.query("DELETE FROM employees WHERE id = ?", [id], function (err, res) {
    if(err) {
    console.log("error: ", err);
    result(null, err);
    }
    else{
    result(null, res);
    }
    });
};

*/
module.exports = Settings;