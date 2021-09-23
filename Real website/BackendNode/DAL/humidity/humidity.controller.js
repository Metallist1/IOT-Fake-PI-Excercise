'use strict';

const Humidity = require('./humidity.service');

exports.findAll = function(req, res) {
    Humidity.findAll(function(err, humidity) {
        if (err)
        res(err, null);
        res(null, humidity);
    });
};

exports.create = function(req, res) {
    const new_humidity = new Humidity(req);
    //handles null error
    if(req.constructor === Object && Object.keys(req).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Humidity.create(new_humidity, function(err, humidity) {
            if (err) res(err, null);

            res(null, {message:"Humidity added successfully!",data:humidity});
        });
    }
};

exports.findById = function(req, res) {
    Humidity.findById(req.params.id, function(err, humidity) {
        if (err)
        res(err, null);
        res(null, humidity);
    });
};