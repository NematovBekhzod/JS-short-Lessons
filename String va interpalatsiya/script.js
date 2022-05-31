//! String - bu sonlar va harflardan tashkil topib ularni bittali ikkitali qo'sh tirnoqqa kiritishga string deyiladi
let str = "My Name Is Nematov Begzod. I'm a student. I'm 21"
let str2 = 'hello'

// ---------------------------------------------------------- //

//?  str.toLowerCase()
// String Harflarini Kichik ko'rinishga o'zgartiradi
console.log(str.toLocaleLowerCase()); // my name is nematov begzod. i'm 21

// ----------------------------------------------------- //
//? str.toUpperCase()
// String Harflarini Katta ko'rinishga o'zgartiradi
console.log(str.toUpperCase()); // MY NAME IS NEMATOV BEGZOD. I'M 21

// ------------------------------------------------------//

//? str.toLocaleLowerCase(); 
// String Harflarini Kichik ko'rinishga o'zgartiradi
console.log(str.toLocaleLowerCase()); // my name is nematov begzod. i'm 21

// ------------------------------------------------------------- //

//? str.toLocaleUpperCase();
// String Harflarini Katta ko'rinishga o'zgartiradi
console.log(str.toLocaleUpperCase()); // MY NAME IS NEMATOV BEGZOD. I'M 21

// ----------------------------------------------------------- //

//? str.indexOf("Is")
// stringdan qidiradi topsa index'ini qaytaradi
console.log(str.indexOf("Is")); // 8 // 8 chi index da Is

// --------------------------------------------------------- //

//? str.lastIndexOf();
// string oxiridan qidiradi topsa index' qaytaradi
console.log(str.lastIndexOf("I'm")); // 42 // 42 chi index da I'm

// ------------------------------------------------------- //

//? str.search()
// index'dan Qidiradi topsa index qaytaradi
console.log(str.search("Is")); // 8

// --------------------------------------------------- //

//? str.length;
// string uzunligini qaytaradi
console.log(str.length); // 48

// ----------------------------------------------- //


//? str.substring();
// stringdan elementlarni qirqib oladi
console.log(str.substring(1, 4)); // y N // 1 - indexdan 4 - indexgacha

// ------------------------------------------------ //

//? str.slice()
// string qirqib oladi
console.log(str.slice(4, 7)); // 4 - indexdan 7 - indexgacha

//  --------------------------------------  //

//? str.charAt(0)
//  indexga mos harf qaytaradi
console.log(str.charAt(0)); // M

// ---------------------------------------------- //

//? str.charCodeAt(1)
// indexga mos harf kodini qaytaradi
console.log(str.charCodeAt(1)); // 121

// ---------------------------------------------- //

//? str.concat("hmm", "aha")
// string qo'shadi
console.log(str2.concat("hmm", "aha")); // hellohmmaha

// ------------------------------------------------- //

//? str.endsWith("end")
// string berilgan qiymat bilan tugasa true qaytaradi
console.log(str.endsWith("end")); // false

// ----------------------------------------------- //

//? str.startsWith("start");
// string berilgan qiymat bilan boshlansa true qaytaradi
console.log(str.startsWith("My"));  // true

// ---------------------------------------- //

//? str.repeat()
// stringni takrorlaydi
console.log(str2.repeat(2)); // hellohello

// ------------------------------------------------ //

//? str.replace("bir", "ikki")
// birinchi argumant string'da bo'lsa ikkinchi argument'ga o'zgartiradi
console.log(str.replace("21", "yigirma bir")); // My Name Is Nematov Begzod. I'm a student. I'm yigirma bir

// ---------------------------------------------------- //

//? str.toString()
// boshqa type'dan stringga o'tkazadi
console.log(typeof str.toString()); // string

// ------------------------------------------------- //

const str3 = " hello string   "
//? str.trim()
// ortiqsa probel bo'sh jo'larni o'chiradi
console.log(str3.trim()); // hello string

// -------------------------------------------- //

//? str.includes("search")
// sting'dan qidiradi includes'ga o'xshab
console.log(str.includes("search"));

// --------------------------------------------- //

//? str.includes("search")
// stringdan qidiradi topsa index qaytaradi
console.log(str.includes("search"));

// -------------------------------------------- //

//? str.split("Is")
// berilgan qiymat bo'yicha arrayga bo'ladi
console.log(str.split("Is"));

// --------------------------------------------------- //

//? str.match()
console.log(str.match());


//! interpalatsiya - bu string ichida o'zgaruvchilar bilan ishlashda yordam beradi 

let firstName = "Ansor"
let lastName = "Behzod"
let age = 20
console.log(`my name is ${firstName} my sorname ${lastName} my age ${age}`); 

//? interpalatsiya
//* => `${}`