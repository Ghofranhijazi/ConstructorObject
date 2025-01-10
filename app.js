console.log("Q1 :");
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getDetails = function () {
        return `Brand : ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    };

}


const car1 = new Car("mrcedec", "w124", 1991);
const car2 = new Car("BMW", "E36", 2021);
const car3 = new Car("toyta", "corolla", 2020);
let arrayofCar = [car1, car2, car3];
for (let i = 0; i < arrayofCar.length; i++) {
    console.log(arrayofCar[i].getDetails());
}









console.log("***************");
console.log("Q2 :");
function firstName(person) {
   let firstName = [];
   for(i=0; i<person.length;i++){
    firstName.push(person[i].fn);
   };
   return firstName;
}

let person = [

    { fn: "ghofran", ln: "hijazi" },
    { fn: "ammar", ln: "hijazi" },
    { fn: "karam", ln: "hijazi" },
    { fn: "jameelah", ln: "hijazi" },
    { fn: "shahrzad", ln: "hijazi" },
];

console.log(firstName(person));

console.log("***************");
console.log("Q3 :");
function objectToArray(obj) {
    let result = []; 
    for (let key in obj) { 
      result.push(key);     
      result.push(obj[key]); 
    }
    return result;
  }
  
  
  const result = objectToArray({ firstName: "Moh", age: 24 });
  console.log(result); 
  











