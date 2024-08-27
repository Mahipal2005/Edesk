// let person = {
//     account_number:566419625062,
//     Name : " mahipal",
//     blance:100000,
//     mobile : 786525252,
//     city:"jodhpur",
//     pincode: 342006
// }
// let p2={}
// let p3={}
// // console.log(person)

// using more than value
function userdetail(ac,name,city,pin,ifsc,blance,mob) {
    let obj={
        account:ac,
        name:name,
        city:city,
        mobile:mob,
        ifsc:ifsc,
        pin:pin,
        blance:blance
    }
    return obj;
}
let user1=userdetail(78656945,"mahi","jodhpur",789454,94561,789456,78945)
let user2=userdetail(56213,"mahipal","jodhpur",789454,94561,789456,78945)
console.log(user1);
console.log(user2);
console.log(user1.account);
console.log(user2.account);

// add other key using .
user1.add="ram nagar"
// add other key using []
user1["dist"]="jodhpur"
// delete key
delete user1.add;
console.log(user1);


// defaul params
// if user not passsing key value then showing error when i pass default value
function userbank(ac,name,city,pin,ifsc,blance,mob="xx") {
    let obj={
        account:ac,
        name:name,
        city:city,
        mobile:mob,
        ifsc:ifsc,
        pin:pin,
        blance:blance
    }
    return obj;
}
let userbank1=userbank(56213,"mahipal",789454,94561,789456,78945)
console.log(userbank1);

