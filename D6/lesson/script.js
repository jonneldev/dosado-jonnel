let fruits = ['apple', 'banana', 'orange']


console.log(`first fruit ${fruits[0]}`)
console.log(`second fruit ${fruits[1]}`)
console.log(`third fruit ${fruits[2]}`)

fruits[1] = 'grape';

console.log(fruits)
fruits.push('strawberry')
fruits.pop()

console.log(`modified arrays, ${fruits}`)

let numbers = [1, 2, 3 ,4 ,5]

for (let i = 0; i < numbers.length; i++) {
    console.log(i)
}

let colors = ['red', 'green', 'blue']

colors.forEach(function(color){
    console.log(color)
})

console.log('Arrays Length', numbers.length)

console.log('Index of 3:', numbers.indexOf(3))
console.log('Includes 5:', numbers.includes(5))
console.log('Joined Array', numbers.join(' - '))
let slicedArray = numbers.slice(2, 4)
console.log('Scliced Array:', slicedArray)