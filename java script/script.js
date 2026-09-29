// 1.var
// console.log("welcome")
var Name = "mahesh"
console.log(Name)
//  re-declear and re-assign
let Student = "pintu"
Student = "satya"
console.log(Student)
// no-redeclear but re-assign

const Roll = 45;
console.log(Roll)
// no re-declear and no re-assign
// number 
let phno = 8260953546
console.log(typeof (phno))
// string
let person = "pintu"
console.log(typeof (person))
// boolean 
let isphone = true
console.log(typeof (isphone))
// // null 
let value = "null"
console.log(typeof (value))
// // undefidened
let x;
console.log(typeof (x))
//  2 non-premitive 
// object 
let studentdata =
{
    Name: "pintu",
    age: 20,
    branch: "cse",
    email: "satya@gmai.com",
    city: "cuttack",
    country: "pakistan"
};
console.log(studentdata)

// array
let cars = ["bmw", "honda", "suzuki", "supra", "dodge", "aulto", "tata", "worgner", "Gworgan", "rollsRoyes"]
console.log(cars)




// ################################# SWITCH CASE ############################
let status = "recived";
switch (status) {
    case "recived":
        console.log("Order Recieved");
        break;
    case "prepairing":
        console.log("Your Food Is Being Prepaired")
        break;
    case "out-for-delivery":
        console.log("Your Order Is On The Way")
        break;
    case "delivered":
        console.log("Oredr delivered")
        break;
    default:
        console.log("Invalid Order Status")
}

let month = "11";
switch (month) {
    case "01":
        console.log("January")
        break;
    case "02":
        console.log("February")
        break;
    case "03":
        console.log("March")
        break;
    case "04":
        console.log("April")
        break;
    case "05":
        console.log("May")
        break;
    case "06":
        console.log("June")
        break;
    case "07":
        console.log("July")
        break;
    case "08":
        console.log("August")
        break;
    case "09":
        console.log("Septmber")
        break;
    case "10":
        console.log("October")
        break;
    case "11":
        console.log("November")
        break;
    case "12":
        console.log("December")
        break;
    default:
        console.log("Invalid Order Status")
}


// #############################---------loop-------------##############################
// 1.for loop


for (let i = 1; i <= 10; i++) {
    console.log(i)
}

let students = ["a", "b", "c", "d", "e"];
for (i = 0; i < students.length; i++) {
    console.log(students[i])
}

for (let i = 1; i <= 100; i++) {
    console.log(i)
}

for (let i = 100; i >= 1; i--) {
    console.log(i)
}
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum = sum + i;
// }
// // console.log(sum)
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log(sum);

let num = 10;
for (let i = 1; i <= 10; i++) {
    console.log(num + "*" + i + "=" + (num * i));
}