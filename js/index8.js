console.log("neo");


document.getElementById('heading')
.addEventListener('click',function(e) {
  let variable;
  variable=e.target
    console.log('click heading'); 

  console.log(variable);
});

// e.preventDefault(); if you have any default behavior and want to 
// want to bypass use it

var str='python';
let links='document.links'
console.log(links);
var href;
Array.from(links).forEach(function(element){
href=element.href;
console.log(href);
})