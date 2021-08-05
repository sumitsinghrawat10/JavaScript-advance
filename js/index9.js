//Local or Session Storage
let impArray=['a','b','c'];

localStorage.setItem('name', 'Neo');
localStorage.setItem('name2', 'Matrix');
localStorage.setItem('letter', JSON.stringify(impArray))// to make stringh JSON.stringify
 
localStorage.removeItem('name');

let item = localStorage.getItem('name');
console.log(item);