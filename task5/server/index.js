//Подгружаемые модули
const http = require('http');
const fs = require('fs');
//header('Access-Control-Allow-Origin: *');

//Порт
const port = 3000;

//Приём-передача сервера
const requestHandler = (request, response) => {
    console.log(request.url);
    response.end(fs.readFileSync("testMeas.json"));
    //response.writeHead('Access-Control-Allow-Origin', '*');
};

//Прослушка сервера
const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err) {
        return console.log('Сервер выдал ошибку: ', err)
    }
    console.log(`Http-сервер запущен, порт: ${port}`);
});