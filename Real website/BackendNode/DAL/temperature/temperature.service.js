'use strict';
var dbConn = require('./../dbconfig');
//Employee object create
var Temperature = function(temperature){
  this.sensorId  = temperature.sensorId;
  this.value  = temperature.value;
  this.measuretime = temperature.measuretime;
};

Temperature.create = function (newTemp, result) {
    dbConn.query("INSERT INTO temperature set ?", newTemp, function (err, res) {
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
Temperature.findById = function (id, result) {
    dbConn.query("Select * from temperature where id = ? ", id, function (err, res) {
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }else{
        result(null, res);
    }
    });

};

Temperature.findAll = function (result) {
    dbConn.query("Select * from temperature", function (err, res) {
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }
    else{
        console.log('temperature : ', res);
        result(null, res);
    }
    });
};

module.exports = Temperature;