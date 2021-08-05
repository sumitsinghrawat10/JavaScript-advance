console.log("create, remove or replace element ");


let element= document.createElement('li');
let text= document.createTextNode('I am a  text Node')
element.appendChild(text)

element.className='childul';
element.id= 'createdLi';
element.setAttribute('title','mytitle')
//element.innerText='Neo here !'
// element.innerHTML='<b>Neo here !</b>'


let ul=document.querySelector('ul.this')
ul.appendChild(element);

// console.log(ul);

// console.log(element); 

let elm= document.createElement("h3")
elm.id= 'elm';
elm.className='elm';
let tnode= document.createTextNode('Node')
elm.appendChild(tnode)

element.replaceWith(elm)