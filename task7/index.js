//Дожидаемся создания всех DOM-элементов страницы 
document.addEventListener("DOMContentLoaded", () => {
    
    //Количество контейнеров
    const divCount = 3;
    //Кнопка показать/скрыть
    let btnSH = document.getElementById("btnSH");
    //Флаг показа/скрытия контейнеров
    let flShowDiv = true;
   

    //Создать контейнеры
    function showDiv () {
        btnSH.disabled = true;
        for (let i = 1; i <= divCount; i++) {
            setTimeout( () => {
                let divTmp = document.createElement("div");
                divTmp.id = "div" + i;
                divTmp.style.width = 100/divCount + "%";
                divTmp.style.height = "100%";
                divTmp.style.cssFloat = "left";
                divTmp.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) +
                                               ", " + Math.floor(Math.random() * 256) +
                                               ", " + Math.floor(Math.random() * 256) + ")";
                document.body.appendChild(divTmp);
            }, 1000/divCount*i);
        }
        setTimeout( () => {
            btnSH.value = "hide";
            btnSH.disabled = false;
        }, 1000);
        flShowDiv = false;
    };

    //Удалить контейнеры
    function hideDiv () {
        btnSH.disabled = true;
        for (let i = 1; i <= divCount; i++) {
            setTimeout( () => {
                let divTmp = document.getElementById("div" + (4 - i));
                divTmp.remove();
            }, 1000/divCount*i);
        };   
        setTimeout( () => {
            btnSH.value = "show";
            btnSH.disabled = false;
        }, 1000);
        flShowDiv = true;
    };   
    
    //По нажатию кнопки
    btnSH.onclick = () => {
        flShowDiv ? showDiv() : hideDiv();
    };
});