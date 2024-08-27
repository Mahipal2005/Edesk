//TODO:FIXME: Read file
//TODO://This will read the file asynchronously

// const fs = require("fs");
// fs.readFile("./text.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log("Cannot read the file");
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// console.log("Bye Guys!!");

//TODO://This will read the file synchronously

// const fs = require("fs");
// const data = fs.readFileSync("./text.txt", { encoding: "utf-8" });
// console.log(data);
// console.log("Bye Guys!!");



//TODO:FIXME: write file
//TODO://This will read the file asynchronously


// const fs=require("fs");
// fs.writeFile("./text.txt","Hello Mahipal ",(err)=>
//     {
//         if(err){
//             console.log("Cannot write to the file")
//             console.log(err)
//         }
//         else{
//             console.log("Data written successfully")
//         }
//     })
// console.log("Buy Guys!!")


//TODO://This will read the file synchronously

// const fs=require("fs");
// fs.writeFileSync("./text.txt","Hello Mahipal bro ")
// console.log("Buy Guys!!")


//TODO:FIXME: append file 
//TODO://This will read the file asynchronously
// const fs=require("fs");
// fs.appendFile("./text.txt","\n"+"Hello Mahipal ",(err)=>
//     {
//         if(err){
//             console.log("Cannot write to the file")
//             console.log(err)
//         }
//         else{
//             console.log("Data written successfully")
//         }
//     })
// console.log("Buy Guys!!")

//TODO://This will read the file synchronously


const fs=require("fs");
fs.appendFileSync("./text.txt","\n"+"Hello Mahipal bro ")
console.log("Buy Guys!!")