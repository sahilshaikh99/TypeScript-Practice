var abc:string = "heyya";

abc = "sahil";
let myarray: Array<number> = [10, 20, 30, 40];

myarray.map((data)=>{
    console.log(data*2);
})

console.log(myarray);
type user = (a: number, b:number) => string; 

const myfunc: user = (a,b) => {
    console.log(a*b);
    return String(a*b);
}
myfunc(5,70);
console.log(abc);

interface myint {
    name: string;
    dob: number;
    occu?: string;
}

const detail: myint =  {
    name: "sahil",
    dob: 12,
    occu: "software engineer"
}

console.log(detail.occu);