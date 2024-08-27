const fs = require("fs");
array = process.argv;
expression = array[2].toLowerCase();
Link = array[array.length - 1];
console.log(Link);
switch (expression) {
  case "read":
    if (array.length < 4) {
      console.log("Please enter the correct command");
    } else {
      fs.readFile(Link, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    }
    break;

  case "append":
    if (array.length < 5) {
      console.log("Please enter the correct command");
    } else {
      fs.appendFile(Link, "\n" + array[array.length - 2], (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File appended successfully");
        }
      });
    }
    break;

  case "delete":
    if (array.length < 4) {
      console.log("Please enter the correct command");
    } else {
      fs.unlink(Link, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File deleted successfully");
        }
      });
    }
    break;
  case "create":
    if (array.length < 4) {
      console.log("Please enter the correct command");
    } else {
      fs.writeFile(Link, "", (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File created successfully");
        }
      });
    }
  case "rename":
    Link = array[3];

    if (array.length < 5) {
      console.log("Please enter the correct command");
    } else {
      fs.rename(Link, array[4], (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File renamed successfully");
        }
      });
    }
    break;
  case "list":
    if (array.length < 3) {
      console.log("Please enter the correct command");
    } else {
      fs.readdir("./", (err, files) => {
        if (err) {
          console.log(err);
        } else {
          console.log(files);
        }
      });
    }
    break;
  default:
    break;
}
