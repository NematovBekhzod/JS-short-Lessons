//! Object's . --- . Obyektlar

//? obyekt bu bir biriga bog'liq bo'lgan malumotlarni bir yetga to'plovchi referens malumot turi
//*  Obyekt property(key) <=> value, kalit - qiymat juftliklaridan tashkil topadi 
//* property va value o'rtasiga ikkitali tuqta bilan ajratiladi //?( " : " )
//* property(key)'ga Javascript kalit so'zlarini nom sifatida ishlatib bo'lmaydi
//* Kalit qiymat jufliklarini esa vergul bilan ajratiladi(",")
//* Obyektda har qanday malumot turi bo'lishi mumkin 
//* Number String null undefined Boolean function Array Object 
//* obyekt'dagi funksiyalar Method Deyiladi

//? Obyekt yaratish usullari
//* 1) let user = new Object(); // "object constructor" syntax
//* 2) let user = {};  // "object literal" syntax

const person = {
//property : value ,
    fName  : "Ansor",
    lName: "Nematov",
    age: 20,
    ismarried : false,
    arr: [1, 2, 3],
    mother : {
        fName : "Begzod",
        age : 38
    },
    // Method()
    siHello() {
        console.log("Assalomu Alaykum");
    }
};

//? obyekt malumotlariga kirish nuqta(.) orqali bo'ladi

// console.log(person.fName); // Ansor
// person.siHello() // Assalomu Alaykum
// console.log(person.mother.age); // 38


//// 


const user = {
  //  property:value
  city: "Bukhara",
  //  property:value
  country: "Uzbekistan",
  //  method()
  create() {
    console.log("Assalomu Alaykum");
  },
  //   method()
  create2: function () {
    console.log("Assalomu Alaykum hello");
  },
  //  method()
  function() {
    console.log("Assalomu Alaykum");
  },
};

user.create()
user.create2()
user.function()
*/

////

//? obyekt'ga malumot qo'shiq, o'chirish(property yoki method)

/* 
const box = {
    boxName : "square",
    color : "red",
    number : 7
}

// Qo'shish
box.border = "1px solid black"

// Ayirish // olib tashlash //? delete
delete box.color

console.log(box); 

box = {
    firtName: 'Ansor'
}
console.log(box); 
// Assignment to constant variable.
// reference turlarni const bilan elon qilsa unga qo'shish ayirish ... mumkin lekin boshqa Malumotga tenglab bo'lmaydi
*/

//? object ichidan qidirish

/* const obj = {
    firstName:"Ansor",
    age:20,
    isMarried : false
}
console.log("age" in obj); // true
console.log("firstName" in obj); // true
console.log("lastName" in obj); // false 
*/

////

//? ES6 fuaturs
/* 
let fName = "Ansor"
let newPerson = {
    fName : "Ansor",
    age : 20
}
console.log(newPerson); // { fName: 'Ansor', age: 20 }
*/

// ikkita bir xil nomdagi o'zgaruvchi biri obyekt ichida ikkinchisi esa obyekt tashqarisida bu xato emas buni boshqacha yozsa bo'ladi

// ↙️

let fName = "Ansor";
let newPerson = {
//     fName: fName, ⬇️
    fName,
    age: 20,
};
console.log(newPerson); // { fName: 'Ansor', age: 20 }

//! "in" and "for...in" object _ obyekt keylari bo'yicha yurib chiqadi
const obj = { 
    name: "Ansor",
    age: 20,
}

console.log("name" in obj); // true
console.log("key" in obj); // false
console.log(obj.noSuchProperty === undefined); // true
console.log(obj.age === undefined); // false


for(let key in obj) {
    console.log(key); // name age
    console.log(obj[`${key}`]); // Ansor 20
}

//////////////////////////////////////////////////////////////

//? primitive type va reference type'lar orasidagi asosiy farq primitive turlar har biri alohida alohida adresdan joy oladi reference turlar esa bitta adress'dan joy oladi 

//? primitive typeof(turlar)
/* let fName = "Ansor"
lName = fName // Qiymati bir biriga teng bo'lsa ham alohida adress'da turib

lName = "Nematov" // lName Adresidagi qiymat o'zgardi : lekin fName adressidagi qiymat o'zgaradi chunki ular boshqa boshqa adress'da turibdi
console.log(fName); // Ansor (1) // Ansor (2)
console.log(lName); // Ansor (1) // Nematov (2) 
*/

////

//? Reference types(turlar)
const person1 = {
    fName : "Ansor",
    age:20
}
const person2 = person1 // person2 person1'ni emas uni xotiradagi manzilini o'ziga oladi
// person1 va person2 qiymatlari tenglashdi va umumiy adresdan joy oldi yani person ikkida qanday o'zgartirilgan bo'lsa person1'da ham shunday o'zgarish bo'ladi. ular bitta adresdan joy oldi

person2.fName = "Begzod" // person2'da fName o'zgartirildi person1'da ham shunday o'zgarish bo'ladi shunki ular bitta adress'da

// console.log(person1); // { fName: 'Ansor', age: 20 } (1)
// console.log(person2); // { fName: 'Ansor', age: 20 } (1)
// { fName: 'Begzod', age: 20 } (2)
// { fName: 'Begzod', age: 20 } (2)

let a = {age:20}
let b = a; // a va b bitta adressda
let c = {age:20} // a va c qiymatlari bir xil bo'lsa ham boshqa boshqa adressdan joy egallagan
console.log(a === b); // true
console.log(a == c); // false

//! Clone object
let acer = {
    model: "aspire 3",
    RAM: "4GB"
}

//? assign
let cloneAssign = Object.assign({}, acer);

cloneAssign.model = "aspire 6"
cloneAssign.RAM = "8GB"

console.log(acer); // { model: 'aspire 3', RAM: '4GB' }
console.log(cloneAssign); // { model: 'aspire 6', RAM: '8GB' }


//? spread {...}
let cloneSpread = {...acer}

cloneSpread.model = "game version"
cloneSpread.RAM = "16GB"

console.log(acer); // { model: 'aspire 3', RAM: '4GB' }
console.log(cloneSpread);
// { model: 'game version', RAM: '16GB' }


//? Clone JSON
let cloneJSON = JSON.parse(JSON.stringify(acer))

cloneJSON.model = "ACER Evalution"
cloneJSON.RAM = "32GB"

console.log(acer); // { model: 'aspire 3', RAM: '4GB' }
console.log(cloneJSON); 
// { model: 'ACER Evalution', RAM: '32GB' }

//! Nested cloning ///
let laptops = {
    acer : { model: 'aspire 3', RAM: '4GB'},
    lenovo : {model: 'Game version 4', RAM: '8GB'},
    HP: {model: 'PROBook', RAM: '16GB'},
}

let cloneLaptop = Object.assign({}, laptops)

laptops.acer.model = "ACER Evalution"
laptops.acer.RAM = "16GB"

console.log(cloneLaptop); // laptops ichidagi obyektlar clon'lanmadi

cloneLaptop.acer = Object.assign(laptops.acer)

console.log(cloneLaptop);

//////////////////////////////////////////////////////////////
//! This keyword
//? obyektga qo'shish
let objAdd = {
    lName : "Nematov"
}
objAdd.fName = "Ansor";

objAdd.sayHello = function() {
    console.log("Assalomu Alaykum");
}

console.log(objAdd);
// { lName: 'Nematov', fName: 'Ansor', sayHello: [Function (anonymous)] }
objAdd.sayHello() // Assalomu Alaykum


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
function sayHi() {
    console.log("Assalomu Alaykum");
}
objAdd.sayHi = sayHi;
objAdd.sayHi() // Assalomu Alaykum

// Method qisqartma
let objMetShort = {
    // 1
    sayHi: function() {
        console.log("Assalomu Alaykum");
    },

    // shorthand
    sayHello() {
        console.log("Vaalaykum Assalom");
    }
}

objMetShort.sayHi(); // Assalomu Alaykum
objMetShort.sayHello(); // Vaalaykum Assalom


//! this key word - this kalit so'zi
//? this bu - window obyekti
//? this bu - Object => obyekt ichida shu obyekt o'ziga teng
//? this bu - funksiyalarda window obyekti hisoblanadi

// 1
// console.log(this); // window object
////
// 2
const obj2 = {
    fName: "Ansor",
    age: 20,
    fullInfo() {
        console.log(this); // obj2 obyekti
    },
    ObjThis() {
        console.log(this.fName); // obj obyekti ichidagi fName
        console.log(this.age); // obj2 obyekti ichidagi age
    }
}
obj2.fullInfo() // { fName: 'Ansor', age: 20, fullInfo: [Function: fullInfo] }
obj2.ObjThis(); // Ansor 20
////
// 3
function sayThis() {
    console.log(this);
}
sayThis(); // window object

//////////////////////////////////////////////////////////////

//! Constructor Functions
//  Obyektlar yaratish uchun kerak
// Constructor function Bo'sh obyekt yaratib beradi biz uni parametrlar bilan to'ldiramiz

function Todo(task, complete) {
    this.task = task;
    this.complete = complete;
}

const todo = new Todo("read books", false); // yangi ob' yaratib berdi va ("read books", false) qiymatlarni this'ga tayinladi
console.log(todo); 
// Todo { task: 'read books', complete: false }

const todo2 = new Todo("Sleeping", true);
console.log(todo2);
// Todo { task: 'Sleeping', complete: true }

//? new
// 1) yangi bo'sh obyekt yaratib beradi va this'ga tayinlaydi

// ? ? - operators - shart operatori
let personAdress = {}
console.log(personAdress.address ? personAdress.adress.street : false);
console.log( personAdress?.address?.street); // undefined

// // //
//? valueOf()
console.log(personAdress.valueOf() === personAdress); 

//? toString()
let obj3 = {
    toString() {
        return parseInt("2max");
    }
};

console.log(obj3 + 2);

let personData1 = {age: 20}
let personData2 = {age: 21}
console.log(personData1 <= personData2); // true
console.log(personData1 >= personData2); // true
console.log(personData1 == personData2); // false

let str = '';

for (let i = 65; i <= 150; i++) {
    str += String.fromCodePoint(i);
}
console.log(str);
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ