// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.



console.log(new Date().getFullYear())
console.log(new Date().getMonth() + 1)
console.log(new Date().getDate())
console.log(new Date().getDay() + 1)
console.log(new Date().getHours())
console.log(new Date().getMinutes())


const now = new Date();
const from = new Date(1970, 01, 01);
var elapsedT = now - from; // in ms
console.log(elapsedT)

