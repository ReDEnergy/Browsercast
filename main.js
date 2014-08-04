var express = require('express');
var ncp = require('ncp').ncp;
var server;

var EXPRESS_PORT = 8080;
var EXPRESS_ROOT = __dirname;

var source = EXPRESS_ROOT + '/public/libs/reveal';
var destination = EXPRESS_ROOT + '/public/export/libs/reveal';

function copyDir() {
	ncp(source, destination, function (err) {
		if (err) {
			return console.error(err);
		}
		console.log('copy done!');
	});
}

function createServer(options) {
	var app = express();
	if (options.livereload)
		app.use(require('connect-livereload')());
	app.use(express.static(__dirname + '/public'));
	return app;
}

var app = createServer({'livereload': true});
var server = require('http').createServer(app);
var	io = require('socket.io').listen(server);

server.listen(EXPRESS_PORT);

io.sockets.on('connection', function (socket) {

	console.log("CLIENT SOCKET ID: ", socket.id);
	console.log("NR OF USERS: ", io.sockets.clients().length);

	io.sockets.clients().forEach(function (socket) {
		console.log(socket.id);
	});

	socket.on('disconnect', function () {
		// Do stuff
	});
});
