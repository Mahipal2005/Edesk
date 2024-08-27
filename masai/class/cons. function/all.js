// var person={
//     name:"jhon"
// }
// console.log(person);
// var person1={
//     name:"jhon",
//     readName:function(){
//         console.log(person1.name)
//     }
// }
// person1.readName()

// var person3={
//     name:"jhon",
//     readName:function(){
//         console.log(this.name);
//     }
// }
// person3.readName()
// //factory function
// function players(n,t){
//     let obj={
//         name:n,
//         team:t
//     }
//     return obj
// }
// console.log(players("rohit","india"))
// //constructor example
// function player(n,t) {
//     this.name=n;
//     this.team=t;
// }
// let myplayer1=new player("rohit","india")
// console.log(myplayer1);

// // call() , bind()& apply()
// var user1={
//     name:"mahi"
// }
// var user2={
//     name:"jill"
// }
// function Myname() {
//     console.log(this.name);
    
// }
// Myname.call(user1)
// Myname.call(user2)
// // if avalable argument in function then use --
// var user1={
//     name:"mahi"
// }
// var user2={
//     name:"jill"
// }
// function myname(age) {
//     console.log(`Name:${this.name} and age:${age}`);
    
// }
// myname.call(user1,18)
// myname.call(user2,21)

// var person1 = {
//     name: "John",
//   };

//   var person2 = {
//     name: "Jill",
//   };

//   function myName(age,city) {
//     this.age = age;
//     this.city = city;
//   }
//   myName.call(person1, 28, "bangalore");
//   console.log(person1)

// var person1 = {
//     name: "John",
//   };

//   var person2 = {
//     name: "Jill",
//   };

//   function myName(age,city) {
//     this.age = age;
//     this.city = city;
//   }
//   myName.apply(person1, [28, "bangalore"]);
//   console.log(person1)


// // grouping related variables
// let account = {
//     accountNumber : 12092903490,
//     name: 'Vivek',
//     type: 'Simple Saving',
//     balance: 100000,
//     active: true,
//   }
// function prrint(obj) {
//     console.log(`my account number is ${obj.accountNumber} , type ${obj.type} , my name is ${obj.name} , active ${obj.active} bal ${obj.balance} `);
// }
// prrint(account)

// let account = {
//     accountNumber : 12092903490,
//     name: 'Vivek',
//     type: 'Simple Saving',
//     balance: 100000,
//     active: true,
//     prrint:function() {
//         console.log(`my account number is ${this.accountNumber} , type ${this.type} , my name is ${this.name} , active ${this.active} bal ${this.balance} `);
//     }
//   }

// account.prrint()

// const person={
// name:'jhon',
// sayhello:function(){
//   console.log(`Hello, ${this.name}`);
// }}
// person.sayhello()

// "use strict"
// function test(){
//   console.log(this);  //undefine
// }
// test()


// var person1={
//   name:"hona"
// }
// var person2={
//   name:"mahi"
// }

// function myname() {
//   console.log(this.name);
// }
// myname.call(person1)
// myname.call(person2)

// ////////////construction funciton

function name(ASIN, color,display , camera) {
  this.ASIN=ASIN;
  this.color=color;
  this.display=display;
  this.camera=camera;
  this.dial=function(){
    console.log("tring.. tring...");
  }
  this.sendmessage=function(){
    console.log("sending message");
  }
  
}
let iphone1 =new name('mahi','gray','90m','2.0 mp')
iphone1.cameraclick=function(){
    console.log("camera clicked");
  }
console.log(iphone1);
iphone1.dial()
iphone1.sendmessage()
iphone1.cameraclick()
