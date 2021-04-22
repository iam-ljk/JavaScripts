let multiply = function(x,y) {
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2);
console.log("Using Bind Function")
multiplyByTwo(3);
multiplyByTwo(5)
console.log("\n")



let multiply1 = function(x){
    return function(y){
        console.log(x*y);
    }
}
console.log("Using Closure Method")
let multiplyByThree = multiply1(3);
multiplyByThree(5)
multiplyByThree(10);