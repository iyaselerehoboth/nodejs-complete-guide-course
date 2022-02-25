const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 69

//Anonymous function assigned to a constant
const summarizeUser = function (userName, userAge, userHasHobby){
    return ('Name is: ' + userName + ' age is: ' + userAge + ' and this user has hobbies: ' + userHasHobby);
}

//Writing the function using arrow function
const summarizeUserTwo = (userName, userAge, userHasHobby) => {
    return ('Name is: ' + userName + ' age is: ' + userAge + ' and this user has hobbies: ' + userHasHobby);
};

//A shorter way of writing the function if we only have one return statement line
const add = (a, b) => a + b;

//Another shorter way with one argument
const addOne = a => a + 1;

//If there's no arguument, we need to add empty parenthesis
const addRandom = () => 1 + 3;

console.log(add(1, 7));
console.log(summarizeUserTwo(name, age, hasHobbies));