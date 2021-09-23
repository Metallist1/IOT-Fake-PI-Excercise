'use strict';

const Temperature = require('./temperature.service');

exports.findAll = function(req, res) {
    Temperature.findAll(function(err, temperature) {
        if (err)
        res(err, null);
        res(null, temperature);
    });
};

exports.create = function(req, res) {
    console.log(req);
    const new_temperature = new Temperature(req);
    //handles null error
    if(req.constructor === Object && Object.keys(req).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Temperature.create(new_temperature, function(err, temperature) {
            if (err) res(err, null);

            res(null, {message:"Temperature added successfully!",data:temperature});
        });
    }
};

exports.findById = function(req, res) {
    Temperature.findById(req, function(err, temperature) {
        if (err)
        res(err , null);
        res(null, temperature);
    });
};

