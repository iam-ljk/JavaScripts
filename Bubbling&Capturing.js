// For Event Bubbling
// document.querySelector("#grandparent")
// .addEventListener('click', () => {
//     console.log("Grand Parent clicked");
// },false)

// document.querySelector("#parent")
// .addEventListener('click', () => {
//     console.log("Parent clicked");
// },false)

// document.querySelector("#child")
// .addEventListener('click', () => {
//     console.log("child clicked");
// },false)


//For Event Capturing
// document.querySelector("#grandparent")
// .addEventListener('click', () => {
//     console.log("Grand Parent clicked");
// },true)

// document.querySelector("#parent")
// .addEventListener('click', () => {
//     console.log("Parent clicked");
// },true)

// document.querySelector("#child")
// .addEventListener('click', () => {
//     console.log("child clicked");
// },true)

//For Stop Propogation
document.querySelector("#grandparent")
.addEventListener('click', () => {
    console.log("Grand Parent clicked");
},false)

document.querySelector("#parent")
.addEventListener('click', (e) => {
    e.stopPropagation(); //propogation is stoop from here
    console.log("Parent clicked");
},false)

document.querySelector("#child")
.addEventListener('click', () => {
    console.log("child clicked");
},false)