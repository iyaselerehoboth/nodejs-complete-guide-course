const person = {
    name: "Robo Robo",
    age: 27,
    greet() {
        console.log("Hi, my name is: " + this.name);
    }
};

//One method to access the inner properties of an object
const printName = (personData) => {
    console.log(personData.name);
}
printName(person);

//Another method to access the inner properties of an object via object destructuring
const printName2 = ({ name }) => {
    console.log(name);
}
printName2(person);