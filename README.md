# Basic_Socket.io_Project
This project involves some simple Socket.io communication between the browser and the Node script running the Socket server.</br>

<b>Execution Steps:</b></br> 
1. Run the node server using command: <b>node socket.js</b> </br>
The server will start listening for connections on port 3000.</br>
2. Open socket.html in browser</br>
The browser will establish a connection with server and on connection success the server sends a message </br>
'Hello client' towards browser. </br>
The browser then sends a message 'Hi there' to the server to which the server responds by saying 'How are you?' </br>
The browser then sends a message 'I am fine' to the server. </br>
On closing the browser the connection is Disconnected</br>
