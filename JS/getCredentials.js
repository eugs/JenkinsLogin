console.log("I'll got your data, bitch!");

console.log("args size: ", process.argv.length);

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

console.log("your name is: " + process.argv[2]);
console.log("your pass is: " + process.argv[3]);

console.log("env name is: " + process.env.MY_USER);
console.log("env pass is: " + process.env.MY_PASS);
