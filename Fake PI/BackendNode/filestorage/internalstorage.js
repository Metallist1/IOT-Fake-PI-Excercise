'use strict';

var settings = {
    id:1,
    sensorId:"1A",
    sendInterval:"40",
    readInterval:"50"
};

exports.getCurrentSettings = function(req, res) {
        res(null, settings);
};

exports.updateCurrentSettings = function(req, res) {
    settings = req[0];
    res(null, {message:"Settings updated successfully!",data:settings});
};