//user's age
const myAge = 20;
//first two years of dog age more 
let earlyYears = 2;
//earlyYears = earlyYears * 10.5;
earlyYears *=10.5;
//separates user's age minus 2
let laterYears = myAge - 2;
//dog's age minus first two years will age less
laterYears = laterYears * 4;
//laterYears *=4;
//user's age in dog years is
const myAgeInDogYears = earlyYears + laterYears;
//print user's name to lower case
let myName = 'Jane Doe'.toLowerCase();
//printing to console the purpose of the above code
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);