// var  xhttp=  new XMLHttpRequest(); // make an object


// // to check server response 
// xhttp.onreadystatechange= function ( ) {
    
//     if(this.readyState==4 && this.status==200){

//          document.getElementsByID("demo").innerHTML=this.responseText;
//     }
// }


// // want to access data from server we use two methods
// xhttp.open("GET",'filename.txt',true);  // (GET/POST)method, file name (php,dot net),  async mode
// // GET want to send data to server  it is not hidden(DATA)
// // POST want to get data from server it is hidden (login,logout and secudre data )
 
// xhttp.send();  // request send to server 

function loadData() {
    var xhttp= new XMLHttpRequest();

xhttp.onreadystatechange=function () {
    if(this.readyState == 4 &&  this.status==200)
    {
  document.getElementById("demo").innerHTML=this.responseText; 

    }else if(this.readyState == 4 &&  this.status==404)
    {
  document.getElementById("demo").innerHTML="file Not found"; 

    }

}



xhttp.open('GET','https://jsonplaceholder.typicode.com/posts', true);
xhttp.send();



}
 