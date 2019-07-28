//Дожидаемся создания всех DOM-элементов страницы 
document.addEventListener("DOMContentLoaded", () => {

    //Холст
    var canvaBase = document.getElementById("canvaBase");
    //Максимум ширины и высоты
    let maxX = canvaBase.clientWidth;
    let maxY = canvaBase.clientHeight;

    //Если рисование поддерживается
    if (canvaBase.getContext) {
        var canva = canvaBase.getContext("2d");
        
        //Отрисовка квадратов
        function renderSquares() {
            //Заливаем холст
            canva.fillStyle = "rgb(252, 248, 220)";
            canva.fillRect(0, 0, maxX, maxY);
            //Количество квадратов
            let sqrCount = Math.floor(Math.random() * 91) + 10;
            //Количество квадратов по горизонтали
            let horCount;
            sqrCount >= 12 ? horCount = 12 : horCount = sqrCount;
            //Количество квадратов по вертикали
            let vertCount = Math.floor(sqrCount / horCount);
            //Количество квадратов в последней строке
            let lastStrCount = sqrCount % horCount; 
            //Случайный цвет
            function randomColor () {
                return "rgb(" + Math.floor(Math.random() * 256) +
                    ", " + Math.floor(Math.random() * 256) +
                    ", " + Math.floor(Math.random() * 256) + ")";
            }
            //Пройдёмся по всем квадратам и отрисуем их
            for (let i = 0; i <= horCount - 1; i++) {
                for (let j = 0; j <= vertCount - 1; j++) {
                    canva.fillStyle = randomColor();
                    canva.fillRect(5 + 66*i, 4 + 66*j, 64, 64);
                }
            }
            //Последняя строка
            if (lastStrCount > 0) {
                for (i = 0; i <= lastStrCount - 1; i++) {
                    canva.fillStyle = randomColor();
                    canva.fillRect(5 + 66*i, 4 + 66*vertCount, 64, 64);
                }
            }
        }

        //Отрисовываем квадраты
        renderSquares();
        document.onclick = () => {
            renderSquares();
        };

    } else {
        alert("Рисование не поддерживается");
    };
});

