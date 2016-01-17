var Server = require('ws').Server;
var url = require('url');

var clients = {};
var messages = [];


function broadcast (message) {
  var formatted = formatMessage(message);
  Object.keys(clients).forEach(function (username) {
    clients[username].send(formatted);
  });
}

function chatMessage (chat) {
  return {
    type: 'CHAT',
    chat
  };
}

function getChat () {
  return {
    messages,
    buddies: Object.keys(clients)
  };
}

function createMessage (content) {
  return {
    is_system: true,
    sender: 'system',
    content
  };
}

function formatMessage (message) {
  return JSON.stringify(message);
}

function sendMessage (message) {
  messages.push(message);
  broadcast(chatMessage(getChat()));
}

var wss = new Server({port: 8081});
wss.on('connection', function (ws) {

  var location = url.parse(ws.upgradeReq.url, true);
  var username = location.query.username;


  if (clients[username]) {
    ws.close(1000, 'This username is taken');
    return;
  }

  clients[username] = ws;

  ws.on('message', function (message) {
    sendMessage({
      sender: username,
      content: message
    });
  });

  ws.on('close', function () {
    delete clients[username];
    sendMessage(createMessage('User ' + username + ' left chat'));
  });

  sendMessage(createMessage('User ' + username + ' joined chat'));
});
