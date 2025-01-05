console.log("Q1 :");
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getDetails = function () {
        return `Brand : ${ this.brand }, Model: ${ this.model }, Year: ${ this.year }`;
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
    return Object.values(person);
}

let person = {
    firstName1: "ghofran",
    firstName2: "heba",
    firstName3: "hala",
    firstName4: "ahlam",
    firstName5: "jenan",
}
console.log(firstName(person));

console.log("***************");
console.log("Q3 :");
function myArray(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}
const arr = new myArray("ghofran", 22);
console.log(arr);





