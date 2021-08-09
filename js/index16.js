console.log('Call back function ')

//response coming from server
const students=[
    {name: 'student 1', subject: 'matrix'},
    {name: "student 2", subject: 'zyan'},
]


//why we use setTimeout=  whenever we enroll the students then 
// we send the request to the server  and server take few times

function enrollStudent(student,callback){

setTimeout(() => {
    
    students.push(student);
    console.log('student has been enrolled')
    callback();
}, 3000);
}
 
function getStudents(){

    setTimeout(() => {
        let str="";
        students.forEach( (student)=>{
str += `<li> ${student.name}  </li>`
        });
        document.getElementById('students').innerHTML=str;
        console.log('student have been fetched ')
    }, 1000);
    }


    let newStudent = {name:'Neo',subject:"JavaScript"}
    enrollStudent(newStudent,getStudents);
    getStudents();




