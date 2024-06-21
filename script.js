//// Խնդիր 2: Հատկությունների քանակի հաշվարկ
// Նկարագրություն: Գրել ֆունկցիա, որը կհաշվարկի տրված օբյեկտի հատկությունների քանակը։

// function hasPath(obj) {
//   let arr = Object.values(obj);
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== undefined) {
//       count++;
//     }
//   }
//   return count;
// }
// const myObject = {
//   name: "jon",
//   age: 23,

//   b: function () {
//     console.log("barev1");
//   },

//   c: function () {
//     console.log("barev2");
//   },
//   e: function () {
//     console.log("barev3");
//   },
// };

// console.log(hasPath(myObject));

/// Խնդիր 4: Օբյեկտի պատճենում
// Նկարագրություն: Գրել ֆունկցիա, որը կվերադարձնի նոր օբյեկտ, որը պատճեն է տրված օբյեկտի։

// let myObject = {
//   naem: "jon",
//   a: function () {
//     console.log("hello");
//   },
//   age: 33,
// };
// function foo(obj) {
//   let obj1 = {};
//   for (const key in obj) {
//     obj1[key] = obj[key];
//   }
//   return obj1;
// }
// console.log(myObject);
// console.log(foo(myObject));

/// Խնդիր 5: Նոր հատկության ավելացում
// Նկարագրություն: Գրել ֆունկցիա, որը կավելացնի նոր հատկություն տրված օբյեկտին։

// let myObject = {
//   name: "jon",
//   a: function () {},
//   age: 23,
// };

// function foo(obj, name, value) {
//   obj[name] = value;
// }

// foo(myObject, "c", 54);
// console.log(myObject);
