//For loop
// for(let counter = 0;counter < 10; counter++){
//     if(counter === 5){
//         continue;
//     }
//     console.log(counter)
// }
// console.log("Broken out of loop")
//Multiplication table
// console.log(x);
// var x = 10;
// console.log(x);

//Anonymous function with default argument (Introduced in ES6)
// const multiplicationTable = function (multiplicant = 5) {
//   for (let multiplier = 1; multiplier <= 10; multiplier++) {
//     console.log(
//       `${multiplicant} * ${multiplier} = ${multiplicant * multiplier}`
//     );
//   }
//   return "Multiplication Table Generated";
// };

//Arrow function with default argument (Introduced in ES6)
// const multiplicationTable = (multiplicant = 5) => {
//   for (let multiplier = 1; multiplier <= 10; multiplier++) {
//     console.log(
//       `${multiplicant} * ${multiplier} = ${multiplicant * multiplier}`
//     );
//   }
//   return "Multiplication Table Generated";
// };

// multiplicationTable(10);

const doubleTheNumber = (num1, num2) => { return num * 2 }

let result = doubleTheNumber(10);
console.log(result)
