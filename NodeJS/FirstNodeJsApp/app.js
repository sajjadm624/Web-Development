console.log(module);

const greeting = require('./greeting.js');
greeting();

const average = require('./school.js').average;
console.log(average([10,20,30,40.20]));

console.log(require('./school.js').grades);
