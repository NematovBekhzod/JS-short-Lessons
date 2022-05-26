//! Math kutubxonasi - Math kalit so'zini kiritish orqali ishga tushiriladi
//? asosan matematik hisoblashlar bajariladi M: sonni ildizi kvadrati .....

//? PI = 3.1415
// Math.PI
console.log(Math.PI); // 3.1415...
//-----------------------//
//? E = 2.71
// Math.E
console.log(Math.E); // 2.71
//----------------------//
//? Math.round() --- Sonlarni Taqriblash
console.log(Math.round(9.81)); // 10
//------------------------------------------//
//? Math.ceil() // sonda verguldan keyingi qismi bo'lsa shu sondan keyingi Sonni Qaytaradi
console.log(Math.ceil(7.01)); // 8
//-----------------------------------------------------------------------------------------//
//? Math.floor() // Sonning faqat butun qismini oladi yani verguldan keyin qanday son bo'lishidan qatiy nazar faqat butun qismini oladi
console.log(Math.floor(4.999)); // 4
//------------------------------------------------------------------------------------------------------------//
//? Math.sqrt() // Sonni ildizdan chiqarib Qaytaradi
// Math.sqrt()
console.log(Math.sqrt(81)); // 9
//---------------------------------------------------------//
//? Math.abs() sonni manfiy bo'lsa musbatga o'tkazadi
// Math.abs()
console.log(Math.abs(-3)); // 3
//----------------------------------------------------//
//? Math.pow() // Sonni darajasini hisoblaydi
// Math.pow()
console.log(Math.pow(2, 10)); // 1024
//--------------------------------------------------//
//? Math.min(x, y, z,....) // Sonlarning Eng kichigini Oladi
// Math.min()
console.log(Math.min(-8,-11, 7, 3, -88, 91)); // -88
//----------------------------------------------------//
//? Math.max(x, y, z,....) // Sonlarning Eng Kattasini Oladi
// Math.max()
console.log(Math.max(-8, -11, 7, 3, -88, 91)); // 91
//------------------------------------------------------//
//? Math.random() 0 va 1 orasidagi ihtiyoriy sonlarni oladi
Math.random()
console.log(Math.random()); // 0.7868226459672696
//--------------------------------------------------//