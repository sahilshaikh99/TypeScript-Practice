"use strict";
var abc = "heyya";
abc = "sahil";
let myarray = [10, 20, 30, 40];
myarray.map((data) => {
    console.log(data * 2);
});
console.log(myarray);
const myfunc = (a, b) => {
    console.log(a * b);
    return String(a * b);
};
myfunc(5, 70);
console.log(abc);
const detail = {
    name: "sahil",
    dob: 12,
    occu: "software engineer"
};
console.log(detail.occu);
