//Javascript objects
const person = {
    name: "Robo Robo",
    age: 27,
    greet() {
        console.log("Hi, my name is: " + this.name);
    }
};

person.greet();

/* 
 Javascript arrays
 NB: JS arrays allow you to save different variable types and even objects inside the saame array.
*/
const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies){
    console.log(hobby);
}

//Using map to edit the array
console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}))


hobbies.push('Hearing God');
hobbies.push('Programming');
hobbies.push('Watching Movies');
console.log(hobbies);

//Copy an array using the spread operator. 
const copiedArray = [...hobbies]
console.log(copiedArray);

