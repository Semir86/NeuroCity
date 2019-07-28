//Дожидаемся создания всех DOM-элементов страницы 
document.addEventListener("DOMContentLoaded", () => {
    //Обновление страницы
    //window.location.reload();

    //Колличество изображений
    const countOfImgs = 8;
    //Контейнер с изображением
    var divBase = document.getElementById("divBase");
    //Изображение
    var imgBase = document.getElementById("imgBase");
    //Текущий номер изображения
    let curImgNum = 1;    

    //Функция изменение параметров растягивания изображения в зависимости от его пропорций и пропорций контейнера
    function setImgStretch(){
        if (screen.outerHeight/screen.outerWidth < 1){
            imgBase.style.width = "auto";
            imgBase.style.height = "100%";
        } else {
            imgBase.style.width = "100%";
            imgBase.style.height = "auto";
        }
    };
    window.ondeviceorientation = setImgStretch();

    //Переход к следующему изображению
    function toNextImg(){
        curImgNum >= countOfImgs ? curImgNum = 1 : curImgNum++;
        imgBase.setAttribute("src", "../task1/images/"+curImgNum+".jpg");
        imgBase.style.left = "";
    };
    //Переход к предыдущему изображению
    function toPrevImg(){
        curImgNum <= 1 ? curImgNum = countOfImgs : curImgNum--;
        imgBase.setAttribute("src", "../task1/images/"+curImgNum+".jpg");
        imgBase.style.left = "";
    };  
    
    //Обработка перетаскивания изображения
    imgBase.addEventListener("touchstart",(mouseCoord) => {

        //Указатель направления движения картинки (истина - вправо, ложь - влево)
        let rightMove;
        //флаг разрешения смены изображения, если оно прошло заданное растояние в какую-то сторону
        let flImgChange;
        //Текущая координата
        let curImgCoord;

        //Стартовая позиция внутри изображения по X
        locStartPosX = imgBase.offsetWidth/2 - mouseCoord.targetTouches[0].pageX;
        //Стартовая позиция изображения по X
        startPosX = mouseCoord.targetTouches[0].pageX + locStartPosX;

    
    });

    //При перемещении курсора мыши, меняем положение изображения по X
    imgBase.addEventListener("touchmove",(mc) => {
        curImgCoord = mc.targetTouches[0].pageX + locStartPosX;
        imgBase.style.left = curImgCoord;  
        curImgCoord > startPosX ? rightMove = true : rightMove = false;
        //Вычисляем разрешение смены изображения
        Math.abs(curImgCoord - startPosX) > divBase.clientWidth/6 ? flImgChange = true : flImgChange = false;
    });

    imgBase.addEventListener("touchend",()=>{
        //Если изображение прошло заданное растояние в какую-то сторону, меняем его на следующее(предыдущее)
        if (flImgChange){
            rightMove ? toPrevImg() : toNextImg() ;
        };
        //Возвращаем изображение на место
        imgBase.style.left = "";                    
        //После отжатия кнопки мыши, чистим заданные обработчики событий
        imgBase.ontouchmove = null;
        imgBase.ontouchend = null;
    });
    
});
