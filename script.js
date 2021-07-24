// Opdracht A
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]
const findSpiderMan = superheroes.find(function (element) {
    return element.name == 'Spiderman'
})
console.log(findSpiderMan)


// Opdracht B
let array1 = [1, 2, 3]
const doubleArrayValues = array1.forEach(function (item) {
    console.log(item * 2);
})


// Opdracht C - niet helemaal gelukt
let array2 = [1, 4, 3, 6, 9, 7, 11]
let array3 = [1, 2, 1, 2, 1, 2]
const containsNumberBiggerThan10 = array2.some(function (item) {
    return item => 10;
})
const numberCheck = array3.some(function (item) {
    return item => 10;
})
console.log(containsNumberBiggerThan10);
console.log(numberCheck);


// Opdracht D
let array4 = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']
const isItalyInTheGreat7 = array4.some((item) => {
    return item === 'Italy'
})
console.log(isItalyInTheGreat7);


// Opdracht E
let array5 = [1, 4, 3, 6, 9, 7, 11]
const tenfold = array5.forEach((item) => {
    console.log(item * 10)
})
console.log(tenfold)


// Opdracht F
let array6 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]
const isBelow100 = array6.every((item) => {
    return item <= 100
})
console.log(isBelow100)


// Opdracht G
const array7 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array7.reduce(reducer));
