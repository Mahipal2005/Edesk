// // let arr= [5,87,9,3,1]
// // console.log(arr.__proto__);
// // console.log(Array.prototype)
// // console.log(arr.Prototype);
// // console.log(typeof(arr));
// // let obj={
// //     name:"aditya",
// //     age:24
// // }

// // let obj2=obj;
// // obj2.name="rajesh"
// // console.log((obj));

// // let user1=new Array()

// // let user2=[]
// // console.log(user1);
// // console.log(user2);
// // console.log(user1.__proto__ ===user2.__proto__);
// // console.log(Array.prototype ===user2.__proto__);

// // prototype
// let person1 = {
//     name:"vivek",
//     age:25
// }
// person2={}
// person3={bank:"sbi"}
// let mahi = Object.setPrototypeOf(person2,person1)
// let mahi1 = Object.setPrototypeOf(person1,person3)
// console.log(mahi);
// console.log(mahi1);

// let obj=new Object()
// let obj1= {}
// console.log(obj==obj1);
// let person1={
//     name:"Mahipal",
//     age:24,
// }
// let person2={
//     name:"Rajesh",
//     age:32,
//     headphone:"Earphone"
// }
// let person3={
//     name:"Raju",
//     age:30,
//     bike:"KTM",
// }
// let person4={
//     name:"Raku",
//     car:"hudyi",
// }

// Object.setPrototypeOf(person1,person2)
// Object.setPrototypeOf(person2,person3)
// Object.setPrototypeOf(person3,person4)
// console.log(person1.car);

//////inheritance
//if data is more than then its not confortable

// let acc1={
//     branch:"Delhi",
//     bank:"SBI",
//     IFSC:89744,
//     pin:341025,
//     accNo:941984651,
//     blance:45242
// }
// let acc2={
//     branch:"Delhi",
//     bank:"SBI",
//     IFSC:89744,
//     pin:341025,
//     accNo:13467986,
//     blance:9784
// }

// let bankAccount={
//     branch:"Delhi",
//     bank:"SBI",
//     IFSC:89744,
//     pin:341025
// }
// let acc1= Object.create(bankAccount)
// acc1.blacne=4616;
// acc1.accNo=9642313;
// console.log(acc1);
// console.log(acc1.bank);

// let acc1={
//     blance:741258,
//     accNo:566419625062
// }
// Object.setPrototypeOf(acc1,bankAccount)
// console.log((acc1));

//not working prototype in factory function
// function CreateAccout(blance, acc_No) {
//   Obj = {
//     bank:"SBI",
//     branch:"Delhi",
//     blance:blance,
//     acc_No:acc_No
//   };
//   return Obj;
// }

// CreateAccout.prototype.print=function (){
//   console.log('Blance:',this.blance);
// }
// let a1= CreateAccout(1000,78645316)
// console.log((a1));
// // a1.print()

// function CreateAccout(blance, acc_No) {
//     this.bank="SBI";
//     this.branch="Delhi";
//     this.blance=blance;
//     this.acc_No=acc_No
// }

// CreateAccout.prototype.print=function (){
//   console.log('Blance:',this.blance);
// }
// let a1= new CreateAccout(1000,78645316)
// console.log((a1));
// a1.print()

// Array.prototype.print = function () {
//   console.log("hello");
// };
// let arr = [1, 2, 3, 4];
// arr.prototype.mahi = "mahi"; //use arr.proto__.mahi
// arr.print();
// let arr2 = [8, 5, 2, 4];
// arr2.print();


// Array.prototype.print=function(){
//   console.log("hello")
// }
// let arr=[1,2,3,4]
// // arr.prototype.mahi="mahi"
// arr.print()
// let arr2=[8,5,2,4]
// arr2.print()

// let arr=new Array(1,2,3,4,5,6)
// console.log(arr);

function MyArray(a,b,c,d,e){
  this.lenght=0
}
MyArray.prototype.push=function(value){
  this[this.lenght]=value
  this.lenght++
}
MyArray.prototype.pop=function(){
  this.lenght--
  delete this[this.lenght]
}
let arr2=new MyArray(1,2,3,4,5)
console.log(arr2);
arr2.push(1)
arr2.push(2)
arr2.push(3)
arr2.push(4)
arr2.push(5)
console.log(arr2);
arr2.pop()
console.log(arr2);
