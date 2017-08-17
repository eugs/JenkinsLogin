console.log("I'll got your data, bitch!");

console.log("args size: ", process.argv.length);

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
