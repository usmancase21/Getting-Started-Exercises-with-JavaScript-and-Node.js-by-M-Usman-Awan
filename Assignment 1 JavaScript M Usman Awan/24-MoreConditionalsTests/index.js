// Tests for equality and inequality with strings
let car = "Honda"
console.log("Is Honda === Honda? I predict True.")
console.log('Honda' === 'Honda')

console.log("Is Honda !== Honda? I predict False.")
console.log('Honda' !== 'Honda')


console.log("Is Honda === honda? I predict True.")
console.log('Honda' === 'honda')

console.log("Is Honda !== honda? I predict False.")
console.log('Honda' !== 'honda')

//Tests using the lower case function
car = 'HONDA'

console.log("Is HONDA !== HONDA in lowercase? I predict True")
console.log(car !== car.toLowerCase())

console.log("Is HONDA === HONDA in lowercase? I predict False")
console.log(car === car.toLowerCase())


//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let number = '5';

console.log("Is 5 < 10 ? I predict True")
console.log(number < 10)

console.log("Is 5 > 10 ? I predict False")
console.log(number > 10)


//Tests using "and" and "or" operators

let firstName = 'Hassan';
let lastName = 'Ali'

console.log("firstName === Hassan && lastName === Ali || 8*2>=16 ||  10 >  5 || 2>4 ? I predict True")
console.log(firstName === 'Hassan' && lastName === 'Ali' || 8*2>=16 || 10 > 5)

console.log("firstName === Hassan && lastName !== Ali || 8*2<=15 || 5>10 || 2<4 ? I predict False")
console.log(firstName === 'Hassan' && lastName !== 'Ali' || 5>10)

//Test whether an item is in a array or not

let arr =  [1,2,3];

console.log('1 in [1,2,3] ? I predict true')
console.log(arr.includes(1))

console.log('5 in [1,2,3] ? I predict False')
console.log(arr.includes(5))