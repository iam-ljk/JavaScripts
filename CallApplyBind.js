let name = {
    firstName : "Jay",
    lastName : "Luhar",
}

let printfullName = function (hometown,state) {
    console.log(this.firstName + "  " + this.lastName + " from "+hometown + " from state" + state);

}
 let name2 = {
    firstName : "Virat",
    lastName : "Kohli",
 }

//Call method
console.log("Call method ")
printfullName.call(name,"Vadodara" , "India");
printfullName.call(name2,"Mumbai", " Somewhere on earth");

//Apply method
console.log("\n\n Apply method ")
printfullName.apply(name,["Vadodara" , "India"]);
printfullName.apply(name2,["Mumbai", " Somewhere on earth"]);

console.log("\n\n Bind method ")
let LaterFunction = printfullName.bind(name,"Vadodara" , "India");
//You must call the return method
LaterFunction();