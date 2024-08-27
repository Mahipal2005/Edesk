//TODO:// function objectCreator1(){
//TODO://     let a={};
//TODO://     a.property1=1;
//TODO://     a.property2=2;
//TODO://     a.property3=3;
//TODO://     a.property4=4;
//TODO://     a.property5=5;
//TODO:
//TODO://     return a;
//TODO:// }
//TODO:// function objectCreator2(){
//TODO://     b={};
//TODO://     b=objectCreator1()
//TODO://     b.property6=6
//TODO://     return b
//TODO:// }
// console.log(objectCreator2())
// //TODO: Object creation - Student task 1 - factory functions
// //write a factory function iphone to create iphone objects in bulk quantity
// // iphone takes i ASIN, color , display ,camera
// // the object it creates has the following properties
// // properties : ASIN, color, display, camera
// //method:
// //dial - console logs "tring... tring..."
// // sendMessage - console logs "sending message..."
// //cameraclick - "camera clicked..."

// function iPhoneGen1(ASIN, color, display, camera) {
//     let obj={};
//     obj.ASIN=ASIN;
//     obj.color=color;
//     obj.display=display;
//     obj.camera=camera;

//     obj.dial =function(){
//         console.log("tring... tring...")
//     }
//     obj.sendMessage=function(){
//         console.log("Sending message")
//     }
//     obj.cameraClick=function(){
//         console.log("Camera clicked");
//     }
//     return obj;
// }
// let iphone1 = iPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP")
// console.log(iphone1);
// iphone1.dial()
// iphone1.sendMessage()
// iphone1.cameraClick()

// //TODO:Objects - student task 2 - attach simple properties from one object to another
// // make objectCreator2 DRY
// // invoke objectCreator1 inside objectCreator2 in such a way that property1 to property5 are attached to the object b in objectCreator2
// // You do not need to create a protoype chain
// // you are expected to copy them / attach them to the new object b

// // this function has capability of attaching 5 properties to an obj
// function objectCreator1(){
//     let a={};
//     a.property1=1;
//     a.property2=2;
//     a.property3=3;
//     a.property4=4;
//     a.property5=5;

//     return a;
// }
// function objectCreator2(){
//     b={};//ya pa object kyu banaya
//     b=objectCreator1() // ya kyu use kiya
//     b.property6=6
//     return b
// }
// console.log(objectCreator2())

// //TODO: inheritance
// //inheritance is one of the core concepts of object-oriented programming that enables an object to take on the properties and mehtods of another object.
// //unlike classical language like C# , java and js does not have a true class.
// //It utilizes linking objects together i order to inherit properties
// //TODO:FIXME:TODO:FIXME:TODO:FIXME:TODO:FIXME:complete

// // TODO:prototype chain
// let obj={
//     name:'vivek',
//     sayHello:function(){
//         console.log("HELLO");
//     }
// }
// console.log(obj);

// //TODO:We can verify this relationship by logging these :
// let arr=[1,2,3]
// console.log(arr.__proto__ === Array.prototype) // true
// console.log(Array.prototype.__proto__ === Object.prototype); // true
// console.log(Object.prototype.__proto__ === null); // true

// //TODO: Creating our own prototype chains
// //FIXME: using setprototypeof()
// let obj={
//     name: "mahipal",
//     sayHello:function(){
//         console.log("Hello");
//     }
// }
// let obj2={
//     salary:10000,
//     work:function(){
//         console.log("working");
//     }
// }
// Object.setPrototypeOf(obj2,obj)
// console.log(obj2)
// obj2.work()
// obj2.sayHello()
// console.log(obj2.__proto__===obj);

// //FIXME:using object.create()
// let obj={
//     name:"Mahipla",
//     sayHello:function(){
//         console.log("hello");
//     }
// }
// let obj2=Object.create(obj)
// obj2.salary=10000;
// obj2.work=function(){
//     console.log("woring");
// }
// console.log(obj2);

//TODO:How are functions linked to objects in Javascript
//TODO: factory functions:

// //TODO:FIXME:TODO:FIXME:TODO:FIXME: if we using prototype in factory function then add a additional property [object.setprototypeof(objname,funtion.prototype)]
// function Person(firstName, LastName, age) {
//   let obj = {};
//   Object.setPrototypeOf(obj, Person.prototype);
//   obj.firstName = firstName;
//   obj.LastName = LastName;
//   obj.age = age;
//   return obj;
// }
// Person.prototype.increaseAge=function(){
//     this.age+=1
//     console.log(this.age);
// }
// Person.prototype.sleep=function(){
//     console.log(`${this.firstName} is sleeping`)
// }
// Person.prototype.eat=function(){
//     console.log(`${this.firstName} is eating`);
// }
// Person.prototype.introduceSelf = function () {
//     console.log(this.firstName, this.LastName, this.age)
//   }
// var person1 = Person("Mahipal", "Choudhary", 18);
// // person1.prototype.eat=function(){
// //     console.log(`${this.firstName} is eating`);
// // }
// console.log(person1);

// person1.increaseAge()
// person1.sleep()
// person1.eat()
// person1.introduceSelf()

// //TODO: iphone example with factory method
// function iPhoneGen1(ASIN, color, display, camera) {
//   let obj = {};
//   obj.ASIN = ASIN;
//   obj.color = color;
//   obj.display = display;
//   obj.camera = camera;
//   obj.dial = function () {
//     console.log("tring... tring...");
//   };
//   obj.sendMessage = function () {
//     console.log("Sending message");
//   };
//   obj.cameraClick = function () {
//     console.log("Camera clicked");
//   };
//   return obj;
// }
// let iphone1 = iPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP")
// console.log(iphone1);
// iphone1.dial() // "tring.. tring..."
// iphone1.sendMessage() // "Sending message..."
// iphone1.cameraClick() // "Camera clicked"

// //TODO:same type but other methods(using prototype)
// function iPhoneGen1(ASIN, color, display, camera) {
//   let obj = {};
//   Object.setPrototypeOf(obj, iPhoneGen1.prototype);
//   obj.ASIN = ASIN;
//   obj.color = color;
//   obj.display = display;
//   obj.camera = camera;

//   return obj;
// }
// iPhoneGen1.prototype.dial = function () {
//   console.log("tring... tring...");
// };
// iPhoneGen1.prototype.sendMessage = function () {
//   console.log("Sending message");
// };
// iPhoneGen1.prototype.cameraclick = function () {
//   console.log("Camera clicked");
// };

// let iphone1=iPhoneGen1("iphone","gray","90mm","2.0Mp")
// console.log(iphone1);

// iphone1.dial()
// iphone1.sendMessage()
// iphone1.cameraclick()


// //​‌‍‌TODO:𝙘𝙤𝙣𝙨𝙩𝙧𝙪𝙘𝙩𝙤𝙧 𝙛𝙪𝙣𝙘𝙩𝙞𝙤𝙣

// function Person(firstName, lastName,age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }
// Person.prototype.increaseAge = function(){
//   this.age+=1
//   console.log(this.age);
// }
// Person.prototype.sleep = function(){
//   console.log(`${this.firstName} is sleeping`)
// }
// Person.prototype.eat = function(){
//   console.log(`${this.firstName} is eating`);
// }
// Person.prototype.introduceself = function(){
//   console.log(this.firstName, this.lastName, this.age)
// }

// let person1 = new Person("Mahipal", "Choudhary", 18);
// console.log(person1)
// person1.introduceself()
// person1.sleep()
// person1.eat()
// person1.increaseAge()

//TODO: 