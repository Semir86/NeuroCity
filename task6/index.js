//Порт WebSocket-сервера
const port = 8081;

//Сокет
let socket = new WebSocket("ws://localhost:" + port + "/");

//logger
function logger (meas) {
  document.write('<p>' + meas + '\n<\/p>');
}

//Открытие сокета
socket.onopen = function() {
    console.log('Соединение c "ws://localhost:' + port + '/" установлено');
    logger('Соединение c "ws://localhost:' + port + '/" установлено');
  };
  
  //Закрытие сокета
  socket.onclose = function(event) {
    if (event.wasClean) {
        console.log('Соединение закрыто чисто');
        logger('Соединение закрыто чисто');
    } else {
        console.log('Обрыв соединения');
        logger('Обрыв соединения');
    }
    console.log("Код: " + event.code + " причина: " + event.reason);
    logger("Код: " + event.code + " причина: " + event.reason);
  };
  
  //Общение сокета
  socket.onmessage = function(event) {   
    //Ответ в JSON
    let reply = JSON.parse(event.data);
    //Проверка на корректность полученных данных
    if (reply.test === "Ok!") {
        console.log("Данные получены корректно: " + event.data);
        logger("Данные получены корректно: " + event.data);
      } else {
        console.log("Данные получены не коррекно");
        logger("Данные получены не коррекно");
      }
  };
  
  //Ошибки сокета
  socket.onerror = function(error) {
    console.log("Ошибка: " + error.message);
    logger("Ошибка: " + error.message);
  };
  