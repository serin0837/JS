// var sum = 0;
// function addSum(num) {
//   sum = sum + num;
// }
// addSum(3)
// console.log(sum)
// console.log(addSum(3))

// function functionName() {
//     console.log("Hello World");
//     }

// functionName()


// console.log(1 == "1")


// function A(){ console.log('called A'); return false; }
// function B(){NaN }

// console.log( B() || A() ); 

// let a = 8645
// // console.log(a[1])
// let camper = 'James';
// let camper = 'David'


// const changeName = function (newName)  {
//     this.name = newName;
//   };
  
//   function createAccount(name) {
//     const newUser = {};
//     newUser.name = name;
//     newUser.changeName = changeName;
//     return newUser;
//   }
  
//   const davidsAccount = createAccount('David');
  
//   davidsAccount.changeName('Tom');
  
//   console.log(davidsAccount.name); //'David'
//   console.log(davidsAccount.name); //'Tom'
//   console.log(davidsAccount)
// //   console.log(this)


let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];

let todaysWeather = weatherConditions.slice(2);
console.log(todaysWeather)