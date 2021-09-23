// MQTT 
var mqtt = require('mqtt');

var options = {
    host: 'bf102f1b07e746e5846ec6d331e89af3.s2.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'ned405',
    password: 'Kurwakoziuri123'
}

var client = mqtt.connect(options);

//Controllers

const humidityController =   require('./DAL/humidity/humidity.controller');
const temperatureController =   require('./DAL/temperature/temperature.controller');

const settingsController =   require('./DAL/settings/settings.controller');

// Express

const app = require('express')();
const bodyParser = require('body-parser');

const http = require('http');
const server = http.createServer(app);

//Sockets

const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

// Socket setup
//const io = socket(server);


// Middleware
app.use(bodyParser.json());

app.post('/settings', function (req, res) {
    let change = req.body;

    let id = change.id;
    let value = change.value;
    let time = change.time;
    
    client.publish('settings/change', JSON.stringify({sensorId: id, value: value, measuretime: time}));
    res.send({sensorId: id, value: value, measuretime: time});
});


server.listen(3001, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.info("Listening on port %s.", 3001);
    }
});


// MQTT
//setup the callbacks

client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    //Called each time a message is received
    console.log('Received message:', topic, message.toString());

    if(topic === 'temperature/change'){
        temperatureController.create(JSON.parse(message), function(err, temper) {
            if (err){
                console.log(err);
            }
            else{
                io.emit("new_temperature", JSON.parse(message));
            }
        });
    }

    if(topic === 'humidity/change'){
        humidityController.create(JSON.parse(message), function(err, humid) {
            if (err){
                console.log(err);
            }
            else{
                io.emit("new_humidity", JSON.parse(message));
            }
        });
    }
});

// subscribe to topic 'my/test/topic'
client.subscribe('temperature/change');

client.subscribe('humidity/change');


//Socket IO

io.on("connection", function (socket) {
    console.log("Made socket connection");
    temperatureController.findAll(null, function(err, temper) {
        if (err){
            console.log(err);
        }
        else{
            socket.emit("get_all_temperature", temper);
        }
    });

    humidityController.findAll(null, function(err, humidityAll) {
        if (err){
            console.log(err);
        }
        else{
            socket.emit("get_all_humidity", humidityAll);
        }
    });
    
    settingsController.findById('1A', function(err, botSettings) {
        if (err){
            console.log(err);
        }
        else{
            
            client.publish('setting/change', JSON.stringify(botSettings));
            socket.emit("new_settings", botSettings);
        }
    });

    socket.on('change_settings', (settings) => {
        settingsController.update(settings,function(err, botSettings) {
            if (err){
                console.log(err);
            }
            else{
                socket.emit("new_settings", botSettings);
            }
        });
    });

    socket.on("disconnect", () => {
        console.log("User disconnect");
    });

  });