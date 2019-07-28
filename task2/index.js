//Дожидаемся загрузки всех DOM-элементов страницы 
document.addEventListener("DOMContentLoaded", () => {
    //Размер фигуры
    const shapeSize = 150;
    //Холст
    var canvaBase = document.getElementById("canvaBase");

    //Если рисование поддерживается
    if (canvaBase.getContext) {
        let ctx = canvaBase.getContext("2d");
        
        //Очистка холста
        function canvasClean() {
            ctx.fillStyle = "rgb(252, 248, 220)";
            ctx.fillRect(0, 0, canvaBase.clientWidth, canvaBase.clientHeight);            
        }

        //Отрисовка фигур
        function renderShapes(xRnd, yRnd, xTgl, yTgl, xSqr, ySqr, xRec, yRec) {

            //Чистим холст
            canvasClean();

            //Задаём параметры кисти
            ctx.lineWidth = 20;

            //Окружность
            ctx.strokeStyle = "rgb(127, 0, 0)";
            ctx.beginPath();
            ctx.arc(xRnd + shapeSize/2, yRnd + shapeSize/2, shapeSize/2, 0, Math.PI*2);
            ctx.stroke();

            //Треугольник
            ctx.strokeStyle = "rgb(0, 0, 127)";
            ctx.beginPath();
            ctx.moveTo(xTgl, yTgl + shapeSize);
            ctx.lineTo(xTgl + shapeSize/2, yTgl);
            ctx.lineTo(xTgl + shapeSize, yTgl + shapeSize);
            ctx.lineTo(xTgl, yTgl + shapeSize);
            ctx.lineTo(xTgl + shapeSize/2, yTgl);
            ctx.stroke();

            //Квадрат
            ctx.strokeStyle = "rgb(0, 127, 0)";
            ctx.beginPath();
            ctx.strokeRect(xSqr, ySqr, shapeSize, shapeSize);  
            
            //Прямоугольник
            ctx.strokeStyle = "rgb(127, 127, 0)";
            ctx.beginPath();
            ctx.strokeRect(xRec, yRec, shapeSize, 3*shapeSize/2);  
        }

        //Максимум ширины и высоты
        let maxX = canvaBase.clientWidth;
        let maxY = canvaBase.clientHeight;

        //Отрисовываем фигуры
        renderShapes(50, 50, 
            maxX - shapeSize - 50, 50,
            50, maxY - shapeSize - 50,
            maxX - shapeSize - 50, maxY - 3*shapeSize/2 - 50);

        //Анимация по нажатию
        function animateShapes(step) {
            console.log("timer started");
            document.onclick = null;
            var timer = setInterval(()=>{
                if ((step >= 1)&&(step <= 40)) { 
                    renderShapes(
                        step*(maxX - 100 - shapeSize)/40 + 50, //xRnd
                        step*(maxY - 100 - shapeSize)/40 + 50, //yRnd
                        maxX - 50 - shapeSize - step*(maxX - 100 - shapeSize)/40, //xTgl
                        step*(maxY - 100 - shapeSize)/40 + 50, //yTgl
                        step*(maxX - 100 - shapeSize)/40 + 50, //xSqr
                        maxY - 50 - shapeSize - step*(maxY - 100 - shapeSize)/40, //ySqr
                        maxX - 50 - shapeSize - step*(maxX - 100 - shapeSize)/40, //xRec
                        maxY - 50 - 3*shapeSize/2 - step*(maxY - 100 - 3*shapeSize/2)/40); //yRec
                    console.log(step);
                    step++;
                } else {
                    clearInterval(timer);
                    document.onclick = () => {
                        animateShapes(1);
                    };
                    console.log("timer stoped")
                }
            }, 25);
        };
        document.onclick = () => {
            animateShapes(1);
        };
    } else {
        alert("Рисование не поддерживается");
    };
});

