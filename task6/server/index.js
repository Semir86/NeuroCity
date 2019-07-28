const WebSocketServer = new require('ws');
const fs = require('fs');

// подключенные клиенты
let clients = {};

//Порт
const servPort = 8081;

// WebSocket-сервер
let wss = new WebSocketServer.Server({
  port: servPort
});
console.log("WebSocket-сервер запущен, порт: " + servPort);

//При подключении клиента
wss.on('connection', function(ws) {

  //Присваеваем ему случайный номер
  var id = Math.random();
  clients[id] = ws;
  console.log("Подключен новый клиент: " + id);

  //В ответ отправляем JSON
  ws.send(fs.readFileSync("testMeas.json", "utf8"));
  console.log("Сообщение отправленно клиенту " + id);

  //Входящее сообщение от клиента
  ws.on('message', function(message) {
    console.log("Получено сообщение: " + message);
  });

  //Отключение клиента
  ws.on('close', function() {
    console.log("Соединение с '" + id + "' закрыто");
    delete clients[id];
  });

});