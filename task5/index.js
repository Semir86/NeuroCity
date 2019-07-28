//Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

//logger
function logger (meas) {
  document.write('<p>' + meas + '\n<\/p>');
}

//Конфигурируем его
xhr.open('GET', 'http://localhost:3000/', false);

//xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
xhr.setRequestHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//xhr.setRequestHeader("authorization", "Token xxxxxx");
//xhr.setRequestHeader("Version", "1");

//Отсылаем запрос
xhr.send();
logger("Запрос на сервер отправлен");

//Обрабатываем ответ
switch(xhr.status) {
  //Вывести тип ошибки по коду
  case 0: logger("Cервер не ответил или запрашивается другой домен: " + xhr.statusText);
  break;
  default: logger("Cервер выдал ошибку " + xhr.status + ": " + xhr.statusText);
  break;
  //Вывести результат
  case 200: logger("Ответ сервера:" + xhr.responseText);
};
