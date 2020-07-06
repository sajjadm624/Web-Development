console.log(module);

const greeting = require('./lib/greetings.js');
greeting();

const average = require('./lib/school.js').average;
console.log(average([70, 50, 30, 90, 53]));

console.log(require('./lib/school.js').grades);
