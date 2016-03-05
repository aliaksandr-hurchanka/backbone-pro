/*
 * Module Dependencies
 */
var express = require('express');
var server = express();

var data = require('./data.json');

server.set('port', 3001);
// Serve static directory where our angular app is located.
server.use(express.static(__dirname + '/app'));

server.get('/data', function (req, res) {
    res.send(data);
});

server.listen(server.get('port'), function() {
    console.log('Express server listening on port ' + server.get('port'));
});

server.get('/app', function (req, res) {
    res.sendFile(uiRootDir + '/app/index.html');
});
