"use strict"
var surname = prompt(`Введите вашу Фамилию`);
while((surname == null)||(surname == "")){
    surname = prompt(`Введите вашу Фамилию`)
}

var firstname = prompt(`Введите ваше Имя`);
while((firstname == null)||(firstname == "")){
    firstname = prompt(`Введите ваше Имя`)
}

var parentname = prompt(`Введите ваше Отчество`);
while((parentname == null)||(parentname == "")){
    parentname = prompt(`Введите ваше Отчество`)
}

var age = parseFloat(prompt(`Введите ваш возраст`));
while((age<=0)||(age>=150)||(age == null)||(isNaN(age))){
    age = prompt(`Введите корректный возраст`)
}

var gender=confirm(`Ваш пол мужской?`);

var dayAge = 365*age;

if((gender&&age>=63)||(gender&&age>=58)){
    var pension = `да`;
}
else{
    var pension = `нет`
}

if(gender){
    gender = `мужской`
}
else{
    gender = `женский`
}

var anketa = {surname:surname,firstname:firstname,parentname:parentname,age:age,gender:gender,pension:pension};
console.log(anketa);
