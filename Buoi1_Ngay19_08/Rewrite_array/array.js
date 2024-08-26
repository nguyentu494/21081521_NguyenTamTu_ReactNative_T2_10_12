// find()
const arr = [35, 27, 22, 1, 5, 2]

let val = arr.find((age) => {
    return age < 5;
})

console.log(val);

// forEach()
let sum = 0;
arr.forEach((num)=>{
    sum += num;
})

console.log(sum)

// filter
val = arr.filter((num) =>{
    return num > 25
})
console.log(val)

// some
val = arr.some((num) => {
    return num > 20;
})

console.log(val);

// every
val = arr.every(num => {
    return num > 20
})

console.log(val)

// map
val = arr.map(num => {
    return num * 2;
})

console.log(val)