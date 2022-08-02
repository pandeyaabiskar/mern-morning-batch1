const fruits = ["Mango", "Kiwi", "Apple", "Grape"];

// for (fruitIndex in fruits){
//     console.log(fruits[fruitIndex])
// }

// for (actualFruit of fruits){
//     console.log(actualFruit)
// }

// fruits.forEach( (actualFruit, fruitIndex, fruitArray) => {
//     console.log(actualFruit)
//     console.log(fruitIndex)
//     console.log(fruitArray)
// } )

// const numbers = [10, 200, 5, 15, 21]
// let largest_num = numbers[0];

// for(number of numbers){
//     largest_num = number > largest_num ? number : largest_num;
// }

// let result = numbers.filter( (value) => {
//     return value > 20
// } )

// console.log(numbers.splice(2, 0, 1000, 2000, 3000))
// console.log(numbers)

// const months = ['Jan', 'march', 'April', 'June', 'July']
// months.push('Dec');
// // months.splice(months.length, 0, "Dec");
// months.splice( months.indexOf('march') , 1, "March" )
// months.splice( months.indexOf('June') , 1 )

// console.log(months)

//Without function
// if ( shoppingList.indexOf('Soup') === -1 ){
//     shoppingList.push('Soup')
// }else {
//     console.log("Soup is already in the list")
// }

// const shoppingList = ['Mango', 'Soap', 'Noodles'];
// const checkShoppingList = (itemToSearch) => {
//     if ( shoppingList.indexOf(itemToSearch) === -1 ){
//         shoppingList.push(itemToSearch)
//     }else {
//         console.log(`${itemToSearch} is already in the list`)
//     }
// }

// checkShoppingList('Soup')
// checkShoppingList('Mango')
// checkShoppingList('Biscuit')
// console.log(shoppingList)

// const shoppingList = ['Mango', 'Soap', 'Noodles'];
// const hobbyList = ['Swimming', 'Coding', 'Football'];

// const checkList = (itemToSearch, listToSearch = shoppingList) => {
//     if ( listToSearch.indexOf(itemToSearch) === -1 ){
//         listToSearch.push(itemToSearch)
//     }else {
//         console.log(`${itemToSearch} is already in the list`)
//     }
// }

// checkList('Soup')
// checkList(hobbyList, 'Basketball')

// console.log(shoppingList)
// console.log(hobbyList)

// const numbers = [2,4,6,8]
// let doubleNumber = []

// numbers.forEach((element) => {
//     doubleNumber.push(element*2)
// })

// console.log(doubleNumber)

// let result = numbers.map( (element) => { return element * 2 } ).indexOf(4)
// console.log(result)

// const numbers = [2, 3, 4, 6, 8];

// let result = numbers
//   .map((element, index) => {
//     return element * 2;
//   })
//   .filter((element) => {
//     return element > 10;
//   });

//   console.log(result)


// const numbers = [2,4,6,8,10];

// let sum = 0
// numbers.forEach((element) => {
//     sum = sum + element;
// })

// let sum = numbers.reduce( (prevValue, element) => {
//     return prevValue + element
// })



// let counter = 0;

// function sum() {
//     console.log(counter)
//     counter++;
//     if(counter === 5){
//         clearInterval(intervalID)
//     }
// }

// let intervalID = setInterval(sum, 1000);

