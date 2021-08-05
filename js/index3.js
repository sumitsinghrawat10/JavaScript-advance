console.log(" Neo !! ");

/*
element Selectors:

1. Single element
2. Multi element 

# id 
. class

*/
let element= document.getElementById('myFirst');

//element= element.className;
// element= element.childNodes;
// element= element.parentNode;
// element.style.color='red';
console.log("element");

// 2. Multi element selector

let elems= document.getElementsByClassName('child');

elems= document.getElementsByTagName('div');
console.log(elems);
