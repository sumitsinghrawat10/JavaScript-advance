// function calling date 28/07/2021 
// type 01

const a= "Neo";

function item() {
    
    console.log(`wake up ${a}`)
}
item();

// type 02

function greet(item) {
    
    console.log(`my name is ${item} `)
}
greet("neo");

// type 03
// let/const has block level scope ! 
// var has function level schop !

if(i) {
    var i = 234;
    console.log(i)
}
function ui(a) {
      var i=9;
    console.log(i)

    return `my name is ${a} !`;
}

console.log(ui("Matrix"),i);