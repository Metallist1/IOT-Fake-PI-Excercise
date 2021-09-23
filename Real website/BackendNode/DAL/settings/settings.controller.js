'use strict';

const Settings = require('./settings.service');
const Temperature = require('./settings.service');

exports.findAll = function(req, res) {
    Settings.findAll(function(err, settings) {
        if (err)
        res(err, null);
        res(null, settings);
    });
};

exports.create = function(req, res) {
    console.log(req);
    const new_setting = new Settings(req);
    //handles null error
    if(req.constructor === Object && Object.keys(req).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Settings.create(new_setting, function(err, response) {
            if (err) res(err, null);

            res(null, {message:"Settings added successfully!",data:response});
        });
    }
};

exports.findById = function(req, res) {
    Settings.findById(req, function(err, response) {
        if (err)
        res(err , null);
        res(null, response);
    });
};

exports.update = function(req, res) {
    Settings.update(req.sensorId, req, function(err, response) {
        if (err)
        res(err , null);
        res(null, response);
    });
};