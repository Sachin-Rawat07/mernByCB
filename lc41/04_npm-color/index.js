var colors = require('colors');
var figlet = require("figlet");

figlet("Sachin Rawat", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});