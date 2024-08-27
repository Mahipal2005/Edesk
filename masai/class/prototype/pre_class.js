//FIXME:start code part
// var obj = { name: "bike" };
// console.log(obj);

// var obj2 = Object.create(obj);
// var obj3 = {};
// console.log(obj2);
// Object.setPrototypeOf(obj3, obj);
// console.log(obj3);
// console.log(obj2.name);
// console.log(obj3.name);
// Object.prototype.showName = function () {
//   console.log(this.name);
// };

// console.log(obj2);
// b={
//   name:"bikes"
// }
// var a = Object.create(b)
// console.log(a);

// Object.prototype.showName = function () { 
//   console.log(this.name);
// };
// b.showName();
// //FIXME: next part
// //TODO:Example for Function Constructor.
// function Person(name,age,city){
//   this.name=name
//   this.age=age
// }
// //TODO:ya to ya use karo ya fir setprototype() vala
// // Person.prototype.city="jodhpur"
// var city={
//   city:"jodhpur"
// }
// var person1=new Person("Mahipal",18)
// console.log(person1)
// var object1=Object.setPrototypeOf(person1,city)
// console.log(object1);

//FIXME:NEXT part
function Person(name, city,age) {
    this.name=name;
    this.age=age;
}
Person.prototype.SetCity = function(city) {
    this.city=city;
    // console.log(this.city);
}

var person1=new Person("Mahipal","Jodhpur",18)
console.log(person1)
person1.SetCity("Jodhpur");
// person1.SetCity("Jodhpur")

// TODO: use Object.hasOwnProperty

var a={
    name:"sam"
};
var b=Object.create(a)
b.age=21;
console.log(a.hasOwnProperty("name"))
//TODO: FIXME:​‌‌‍ NOTE: hasOwnProperty(----) ka use tab karta ha jab (---)ma likhi property us object ma ho to true return karaga ya false​


//TODO: Everything in javascript is an object;
var Obj ={
    name:"sam"
}
var Str =Object.create(Obj)
console.log(Str)
console.log(Str.__proto__)
console.log(Str.__proto__.__proto__)
console.log(Str.__proto__.__proto__.__proto__)

