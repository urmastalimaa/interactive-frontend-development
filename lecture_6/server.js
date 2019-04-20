/* eslint-env node */
/* eslint-disable no-console */
const http = require('http');
const WebSocketServer = require('websocket').server;

const port = 8081;

const server = http.createServer(function(request, response) {
  console.log(`${new Date()} Received request for ${request.url}`);
  response.writeHead(404);
  response.end();
});

server.listen(port, function() {
    console.log(`${new Date()} Server is listening on port ${port}`);
});

const wsServer = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: false
});

const pingInterval = 5000;

wsServer.on('request', (request) => {
  const connection = request.accept(request.requestedProtocols[0], request.origin);

  console.log('Connection accepted');
  let pingCount = 0;

  const interval = setInterval(
    () => {
      pingCount += 1;
      connection.send(JSON.stringify({eventName: 'ping', payload: {pingCount}}));
    },
    pingInterval
  );

  connection.on('close', () => {
    clearInterval(interval);
  });
});
