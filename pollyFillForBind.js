let name = {
    firstName : "Jay",
    lastName : "Luhar",
}

let printfullName = function (hometown,state) {
    console.log(this.firstName + "  " + this.lastName + " from "+hometown + " from state  " + state);

}

let printfullName1 = function () {
    console.log(this.firstName + "  " + this.lastName);

}
console.log("\n")
console.log("Normal Bind Method");
let NormalBind = printfullName.bind(name,"vadodara","India");
NormalBind();
console.log("\n")



Function.prototype.myBind = function(...args) {
    let obj = this;
    return function () {
        obj.call(args[0]);
    }
}
let ModifiendBind = printfullName1.myBind(name)
console.log("Modifiled Bind without additional Variables : ");
ModifiendBind();
console.log("\n")




Function.prototype.myBind1 = function(...args) {
    let obj = this;
    let params = args.slice(1);
    return function () {
        obj.apply(args[0],params);
    }
}
let ModifiendBind1 = printfullName.myBind1(name,"Vadodara","India");
console.log("Modified Bind with Variable Case 1");
ModifiendBind1();
console.log("\n")




Function.prototype.myBind2 = function(...args) {
    let obj = this;
    let params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0],[...params,...args2]);
    }
}
let ModifiendBind2 = printfullName.myBind2(name,"Vadodara");
console.log("Modified Bind with Variable Case 2");
ModifiendBind2("India");
console.log("\n")