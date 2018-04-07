let app = require('http').createServer(); // create HTTP server
let io = require('socket.io')(app, {path: '/socket.io'}); // bind Socket to HTTP server
app.listen(3000); // listen on port 3000
console.log('Listening for connections on port 3000');
io.on('connection', function(socket) {
	console.log('--------------------------------------------');
	console.log('client connected');
   
	socket.emit('fromServer1', {id: 'Hello client'}); // send message fromServer1 to client
	socket.on('fromClient1', function(data) { // listen for fromClient1 message
		console.log('Received : ' + data.id + ' , from client');
	});
   	socket.emit('fromServer2', {id: 'How are you?'});// send message fromServer2 to client
	socket.on('fromClient2', function(data) { // listen for fromClient2 message
		console.log('Received : ' + data.id + ' , from client');
	});
    socket.on('disconnect', function(){
    console.log('client disconnected');
	});
});