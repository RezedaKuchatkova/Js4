// Задача 1
const pet = {
    petName: "Signal",
    petType: "Dog",
    petSound: "gav",
    say: function (el) {
        return el ? `<div class="addList"> ${this.petType} ${this.petName} says "${el}" </div>` : `<div class="addList"> ${this.petType} ${this.petName} says "${this.petSound}" </div>`
    },
}



// Задача 2
const products = {
    "Potato": "Овощи",
    "Carrot": "Овощи",
    "Banana": "Фрукты",
    "Orange": "Фрукты",
    "Apple": "Фрукты",
    "Strawberry": "Ягоды",
    "Tomato": "Овощи",
    "Melon": "Фрукты",
    "Lemon": "Фрукты"
}

const list = {
    "Фрукты": 0,
    "Овощи": 0,
    "Ягоды": 0
}


const listNull = () => {
    let tmp = 1
    for (let i in list) {
        list[i] = 0
        if (tmp > 3) {
            delete list[i]
        }
        tmp++
    }
}

let listArr = []

const listProduct = () => {
    for (let i in products) {
        list[products[i]]++
    }
}
listProduct()

const listStr = () => {
    for (let i in list) {
        listArr.push(`<div class="addList">${i} &#129185; ${list[i]}</div>`)
    }
}
listStr()




// Задача 3

let cars = {
    renault: {color: "blue",origin: "Франция",year: 2019,},
    toyota: {color: "black",origin: "Япония",year: 1999,},
    volkswagen: {color: "silver", origin: "Германия",year: 2013,},
    jiguli: {бcolor: "green",origin: "Российская Федерация",year: 1994,},
    hundai: {color: "silver",origin: "Южная Корея",year: 2011,},
    nissan: {color: "black",origin: "Япония",year: 2007,},
    volga: {color: "white",origin: "Российская Федерация",year: 2001,},
    bmw: {color: "red",origin: "Германия",year: 2015,},
    ford: {color: "black",origin: "США",year: 2010,},
    haval: {color: "lightgreen",origin: "Япония",year: 2018,}
    
}

let sortedCars = [];

for (let item in cars){
    sortedCars.push([item, cars[item]]);
}

sortedCars.sort(function(a, b){
    return a[1].year - b[1].year;
});

for (let i = 0; i < sortedCars.length; i++){
    console.log(sortedCars[i]);
}

console.log("Старые машины:");
for (let i = 0; i < 3; i++){
    console.log(sortedCars[i]);
}
console.log("Новые машины:");
for (let i = sortedCars.length - 3; i < sortedCars.length; i++){
    console.log(sortedCars[i]);
}