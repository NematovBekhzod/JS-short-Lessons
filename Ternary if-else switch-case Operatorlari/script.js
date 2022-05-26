//! => Ternary operatori
//? => condition(shart) ? true : false
//* Shart tekshiriladi true bo'lsa " ? " 'dan keyingi qism ishlaydi false bo'lsa " : " 'dan keyingi qism ishlaydi

let a = 18;
let b = 16;

a > b ? console.log("Mumkin") : console.log("MumkinEmas"); // => Mumkin

//-----------------------------------------------------------------------//

//! control flow --- if else

/* if kalit so'zi yoziladi va undan keyin qovuslar ochilib shu qovuslar ichida beriladi Shart Bajarilsa => 
(true bo'lsa) " if " ichidagi Amallar Bajariladi aks holda Shart Bajarilmasa (false bo'lsa) " else " ichidagi Amallar Bajariladi else bo'lmasa hech qanday amal bajarilmaydi */

let myAge = 20;
if (myAge > 18) {
  // myAge 18 dan katta if ichidagi amal bajariladi
  console.log("Mumkin"); // Mumkin
} else if (myAge == 18) {
  console.log("o'ylab ko'rish kerak");
} else {
  console.log("Mumkin emas");
}

// -------------------------------------------------------------------------- //

//! Mantiqiy Operatorlar &&, ||, !
/* 
Mantiqiy operatorlar:
Ular ikki yoki undan ortiq shartlarni/cheklovlarni birlashtirish yoki to'ldirish uchun ishlatiladi
ko'rib chiqilayotgan dastlabki holatni baholash 
*/
//* Misol orqali yaxshi tushina olamiz:
// 4 dan katta "va" 11 dan kichik 7ga teng bo'lmagan toq sonlar nechta
// 4 < toq sonlar(5, 9) < 11  // 2ta
//? yani bir vaqtni o'zida bir nechta shartlarni birlashtiradi

/*    
!    && -> and (va)
!   || -> or (yoki)
!    ! -> not (emas)
*/

//? && -> and (va)

console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

//? || -> or (yoki)

console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

//? "!"" -> not (emas)

console.log(!true); // false
console.log(!false); // true

// -------------------------------------------------------- //

//! switch case ham shart bajarilishida ishlatiladi

let num = 5;
//  tekshiriladigan qiymat
switch (num) {
  case 1: // ? tekshiriladigan qiymat " 1 "ga teng bo'lsa ↙️
    console.log("Dushanba"); //? Bajariladi
    break; //? Bajarilsa yoki Bajarilmasa Ham bu case dan Chiqib Ketadi va keyingi case ga o'tadi

  case 2: // ? tekshiriladigan qiymat " 1 "ga teng bo'lsa ↙️
    console.log("Seshanba"); //? Bajariladi
    break; //? Bajarilsa yoki Bajarilmasa Ham bu case dan Chiqib Ketadi va keyingi case ga o'tadi

  case 3:
    console.log("Chorshanba");
    break;
  case 4:
    console.log("Payshanba");
    break;
  case 5:
    console.log("Juma");
    break;
  case 6:
    console.log("Shanba");
    break;
  case 7:
    console.log("Yakshanba");
  default: //? agar hech qaysi case bajarilmasa default ishlaydi
    console.log("Bunday Hafta Kuni Yo'q");
}

//! truthy va falsy

// ? truthy qiymatlar:
if (true) console.log("truthy"); // truthy
if ({}) console.log("truthy"); // truthy
if ([]) console.log("truthy"); // truthy
if (42) console.log("truthy"); // truthy
if ("0") console.log("truthy"); // truthy
if ("false") console.log("truthy"); // truthy
if (new Date()) console.log("truthy"); // truthy
if (-42) console.log("truthy"); // truthy
if (12n) console.log("truthy"); // truthy
if (3.14) console.log("truthy"); // truthy
if (-3.14) console.log("truthy"); // truthy
if (Infinity) console.log("truthy"); // truthy
if (-Infinity) console.log("truthy"); // truthy

//? falsy qiymatlar :
if (undefined) console.log("truthy");
else console.log("falsy"); // falsy
if (null) console.log("truthy");
else console.log("falsy"); // falsy
if (NaN) console.log("truthy");
else console.log("falsy"); // falsy
if (0) console.log("truthy");
else console.log("falsy"); // falsy
if ("") console.log("truthy");
else console.log("falsy"); // falsy
if (false) console.log("truthy");
else console.log("falsy"); // falsy

// undefined - undefined value
// null - null value
// NaN - not a number
// 0 - zero
// "" - empty string
// false - boolean

let myVar = undefined; // null  // NaN // 0 // "" // false

if (myVar) {
  console.log("truthy");
} else console.log("falsy"); // falsy
