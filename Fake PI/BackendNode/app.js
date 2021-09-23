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

const app = require('express')();
const bodyParser = require('body-parser');

const http = require('http');
const server = http.createServer(app);


// Middleware
app.use(bodyParser.json());


app.get('/settings', function (req, res) {
    client.publish('setting/change', 'Hello');
    res.send("ToDO");
});

app.post('/temperature', function (req, res) {
    let change = req.body;

    let id = change.id;
    let value = change.value;
    let time = change.time;
    
    client.publish('temperature/change', JSON.stringify({sensorId: id, value: value, measuretime: time}));
    res.send({sensorId: id, value: value, measuretime: time});
});

app.post('/humidity', function (req, res) {
    let change = req.body;

    let id = change.id;
    let value = change.value;
    let time = change.time;
    client.publish('humidity/change', JSON.stringify({sensorId: id, value: value, measuretime: time}));
    res.send({sensorId: id, value: value, measuretime: time});
});

server.listen(3000, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.info("Listening on port %s.", 3000);
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
});

// subscribe to topic 'my/test/topic'
client.subscribe('setting/change');
