//Дожидаемся создания всех DOM-элементов страницы 
document.addEventListener("DOMContentLoaded", () => {

    //Родительский контейнер
    let divParent = document.getElementById("divParent");
    //Дочерний контейнер
    let divChild = document.getElementById("divChild");

    //Задаём настройки родительского контейнера
    divParent.style.width = "800px";
    divParent.style.height = "600px";
    divParent.style.backgroundColor = "grey";
    divParent.style.display = "flex";
    divParent.style.alignItems = "center";
    divParent.style.alignContent = "center";

    //Задаём настройки дочернего контейнера
    divChild.style.width = "400px";
    divChild.style.height = "300px";
    divChild.style.backgroundColor = "black";
    divChild.style.margin = "auto";
});
