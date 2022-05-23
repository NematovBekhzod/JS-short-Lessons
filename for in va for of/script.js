//! " for in " va " for of " looplari obyekt va array bilan ishlashni osonlashtiradi

//? OBJECT 'da "for in"

const person = {
  fName: "Ansor",
  age: 20,
};

// ? for in ↙️ // => for in obyektlar bilan ishlatish oson

for (let key in person) {
  console.log(key); // key ~ property
}

for (let key in person) {
  console.log(person[key]); // value
}

for (let key in person) {
  console.log(key, person[key]); // property value
}

//---------------------------------------//

const user = {
  fName: "Ansor",
  age: 20,
};
const keys = Object.keys(user);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

//-------------------------------------//

//! Array 'da "for in"
// ? for in ↙️ // for of arraylar bilan ishlatiladi

let arr = [1, 2, 3, 4, 5];
for (let key of arr) {
  console.log(key); // 1 2 3 4 5
}
