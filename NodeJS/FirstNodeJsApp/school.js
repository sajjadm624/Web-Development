module.exports.average = array => {
  let sum = 0;
  array.forEach(element => {sum += element;});
  return (sum/array.length);
};

module.exports.grades = {
  best: 97,
  average: 56
}

console.log(module);
