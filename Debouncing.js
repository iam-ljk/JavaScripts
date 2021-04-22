let counter = 0;
const getData = () => {
    //calls an api amd gets data
    console.log("Fetching Data..." , counter++);
}

const doSomeMagic = function(fn,d) {
    let timer;
    console.log("Here...") 
    return function (){   
        let context = this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context,args);
        }, d);
    }
}

//Only dosomeMagic when delay between two key press is >300
const betterFunction = doSomeMagic(getData,300);