const { randomInt } = require("node:crypto");

data = process.argv;
expression = data[2].toLowerCase().toString();

function degreeCalulate(degree) {
  return Number(degree) * (Math.PI / 180);
}
switch (expression) {
  case "add":
    if (data.length < 5) {
      console.log("Please provide at least two numbers for the sum operation.");
    } else {
      let sum = Number(data[3]) + Number(data[4]);
      console.log(sum);
    }
    break;

  case "sub":
    if (data.length < 5) {
      console.log("Please provide at least two numbers for the sum operation.");
    } else {
      let sub = Number(data[3]) - +Number(data[4]);
      console.log(sub);
    }
    break;
  case "mult":
    if (data.length < 5) {
      console.log("Please provide at least two numbers for the sum operation.");
    } else {
      let mul = Number(data[3]) * Number(data[4]);
      console.log(mul);
    }
    break;

  case "divide":
    if (data.length < 5) {
      console.log("Please provide at least two numbers for the sum operation.");
    } else {
      let div = Number(data[3]) / Number(data[4]);
      console.log(div);
    }
    break;
  case "sin":
    if (data.length < 4) {
      console.log("Please provide at least two numbers for the sum operation.");
    } else {
      let sin = Math.sin(degreeCalulate(Number(data[3]))).toFixed(2);
      console.log(sin);
    }
    break;

  case "cos":
    if (data.length < 4) {
      console.log("Please provide at least two numbers for the sum operation.");
    } else {
      let cos = Math.cos(degreeCalulate(Number(data[3]))).toFixed(2);
      console.log(cos);
    }
    break;

  case "tan":
    if (data.length < 4) {
      console.log("Please provide at least two numbers for the sum operation.");
    } else {
      let tan = Math.tan(degreeCalulate(Number(data[3]))).toFixed(2);
      console.log(tan);
    }
    break;

  case "log":
  case "random":
    if (data.length < 5) {
      console.log("Please provide at least two numbers for the sum operation.");
    } else {
      randomInt(Number(data[3]), Number(data[4]), (err, datas) => {
        if (err) {
          console.log("Error generating random number:", err);
          return;
        } else {
          console.log(datas);
        }
      });
    }
    break;
  default:
    console.log("Invalid operation");
}
