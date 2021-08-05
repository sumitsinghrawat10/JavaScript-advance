// Have to Create a div and inject it into the page which contains a heading.
// whenever someone clicks on the div. It should be converted into an editable item.C
// whenever user clicks away (blur). save them into the local Storage. 

let divElem= document.createElement('div'); 
divElem.setAttribute("id","elem");  // add "ID" of elem

 let container= document.querySelector('.container'); 
 
 console.log(divElem,container);