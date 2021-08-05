console.log("ajax")

let fetchBtn= document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log('clicked')
    // instantiate an xhr object
    const xhr= new XMLHttpRequest();

//open the object 
//use this for GET
// xhr.open('GET','https://jsonplacehold er.typicode.com/todos/1',true);
//use this for POST


xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);

xhr.getResponseHeader( 'content-type', 'application/x-www-form-urlencoded' )
// Argumnets 
//1. get request  
// 2. from where we get data
// 3. blocking or nonblocking request  
//true: aync(non blocking)  

// what to do an progress   (optional)
xhr.onprogress=function ( ) {
    console.log('On progress')
}
// what to do when response is  ready
xhr.onload= function ( ) {

    if(this.status===200){
        console.log(this.responseText)
    }else{

        console.log("Some error !!")
    }
 
    
}


// send the request
params="name=test & salary=123&age=23"
xhr.send(params);

console.log('we are done ')

}