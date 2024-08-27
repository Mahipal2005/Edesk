// //store data
// localStorage.setItem('user','mahipal');
// // get data
// let value=localStorage.getItem('user')
// console.log(typeof value);

// //TODO: check code
// let arr1=[7,5,7,2,5]
// localStorage.setItem('arr',arr1)

// let value=localStorage.getItem(arr1)
// console.log(typeof value);

// let value1=localStorage.getItem('arr1')
// console.log(typeof value1);


let arr=[5,8,7,6,2];
localStorage.setItem('array',JSON.stringify(arr));
let value1 = JSON.parse(localStorage.getItem('array'));
console.log(typeof value1);