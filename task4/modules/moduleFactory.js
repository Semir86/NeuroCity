//Класс пользователя
class User {
    constructor(user) {
        this.name = user.name;
        this.surname = user.surname;
        this.sex = user.sex;
        this.age = user.age || "Не указано";
        this.childs = user.childs || false;
        this.countChilds = user.countChilds || "Не указано";
        this.hobby = user.hobby || "Не указано";
    }
}

//Добавление пользователя
const User = {
  addUser : (name, surname, sex) => new User(name, surname, sex)
}
