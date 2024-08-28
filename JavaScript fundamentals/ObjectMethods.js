const obj = { name: "Hrithik", age: 15, dob: "02/04/2001" };

let str = "";
for (let key in obj) {
  str += `The key is ${key} and the value is ${obj[key]} `;
}
console.log(str);

//Object.entries()
console.log("The string 2 value is");
let str2 = "";
for (let [key, value] of Object.entries(obj)) {
  str2 += `The key is ${key} and the value is ${value} `;
}
console.log(str2);

//Object.keys() returns an array whose elements are strings
const keys = Object.keys(obj);
console.log(typeof keys);

//Object.values() returns an array whose elements are strings
const values = Object.keys(obj);
console.log(typeof values);

// Direct looping an object --> "for in"
// Looping through Object.entries(obj name) --> "for [key,value] of Object.entries(obj name)"
