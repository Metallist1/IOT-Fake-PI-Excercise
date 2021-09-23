'use strict';
var dbConn = require('./../dbconfig');
//Employee object create
var Humidity = function(humidity){
  this.sensorId  = humidity.sensorId;
  this.value  = humidity.value;
  this.measuretime = humidity.measuretime;
};

Humidity.create = function (newhumidity, result) {
    dbConn.query("INSERT INTO humidity set ?", newhumidity, function (err, res) {
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
Humidity.findById = function (id, result) {
    dbConn.query("Select * from humidity where id = ? ", id, function (err, res) {
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }else{
        result(null, res);
    }
    });

};

Humidity.findAll = function (result) {
    dbConn.query("Select * from humidity", function (err, res) {
    if(err) {
        console.log("error: ", err);
        result(null, err);
    }
    else{
        console.log('humidity : ', res);
        result(null, res);
    }
    });
};

module.exports = Humidity;