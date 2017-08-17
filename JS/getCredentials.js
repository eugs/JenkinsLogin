console.log("I'll got your data, bitch!");

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
