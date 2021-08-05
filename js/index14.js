// // Object literal

// let obj={

// name:"neo",
// movie: "matrix",
// address:"Earth"

// }
// console.log(obj);

// //Prototype: 

// const neo= Object.create(proto);
// neo.name="Neo";
// neo.role="matrix";
// neo.changeName('earth');
// console.log(neo);
// const proto={
// slogan: function(){
// return `this matirx is the best`;

// },
// changeName: function (newName) {
//     this.name=newName
// }
// }

// let neo= Object.create(proto);
// neo.name="neo";
// neo.role="matrix";

// Few ways to write async code
// async
// callbacks
// promises


setTimeout(() => {
    for( let index= 0; index<45; index++){
        const element= index;
        console.log("this is index number" + index);
         
        }
},1000);


console.log('Done')


