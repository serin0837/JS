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


// let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];

// let todaysWeather = weatherConditions.slice(2);
// console.log(todaysWeather)

// const myAwesomeArray = [5, 4, 3, 2, 1];

// console.log(myAwesomeArray.forEach((x) =>console.log( x * x)));

// const numbers = [1,-1,2,3]


// //use with reduce
// const sum = numbers.reduce((accumulator, currentValue) => {
//   //accumulator=sum
//   //currentvalue=each element
//   return accumulator + currentValue;
// }, 0);

// console.log(sum)

// function titleCase(str) {
//     var convertToArray = str.toLowerCase().split(" ");
//     console.log(convertToArray)
//     var result = convertToArray.map(function (val) {
//       return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//     });
//     console.log(result)
//     return result.join(" ");
//   }
  
//   titleCase("I'm a little tea pot");


// const book = {
//   title: "Brave New World",
//   author: "Aldous Huxley",
// };

// function longerSummary(genre, year) {
//   console.log(
//     `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
//   );
// }

// longerSummary.call(book, "dystopian", 1932);

// longerSummary.apply(book, ["dystopian", 1932]);

// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// // let result = extractStr.match(codingRegex); // Change this line

// // console.log(result)

// let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/;
// console.log(testStr.match(ourRegex));
// // Returns ["Repeat"]

// let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/g;
// console.log(testStr.match(ourRegex));

// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// // console.log(huRegex.test(humStr)); // Returns true
// // huRegex.test(hugStr); 

// let bigStr = "big";
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";
// let bgRegex = /b[aiu]g/;
// bigStr.match(bgRegex); // Returns ["big"]
// bagStr.match(bgRegex); // Returns ["bag"]
// console.log(bugStr.match(bgRegex)); // Returns ["bug"]
// console.log(bogStr.match(bgRegex)); // Returns null


// let jennyStr = "Jenny8675309";
// let myRegex = /[a-z0-9]/ig;
// // matches all letters and numbers in jennyStr
// console.log(jennyStr.match(myRegex));


// function chunkArrayInGroups(arr, size) {
//   let newArr = []
//  for(let i=0;i<arr.length/size;i++){
//    newArr.push(arr.splice(0,size))
//   }
//   return newArr
// }
// arr=[5]
// size=4
// console.log(arr.splice(0,size))
// console.log(arr.length/size+1)

let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];

let todaysWeather = weatherConditions.slice(3, 7);
console.log(todaysWeather)