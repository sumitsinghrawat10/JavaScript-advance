// Java Script Object
// object literal fro creating objects
// let car ={

//     name: "maruti 800",
//     topSpeed: 89,
//     run :function () {
//         console.log("Car is running");
//     }
// }
// console.log(car);

// new keyword create a object with the help of constructor
//new Date();

// Creating a constructor of cars

function GeneralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.topSpeed = givenSpeed;
  this.run = function () {
    console.log(`  ${this.name}  is running `);
  };
}
car1 = new GeneralCar("Nisan", 180);
console.log(car1);
