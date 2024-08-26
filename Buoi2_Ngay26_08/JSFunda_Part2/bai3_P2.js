// 2.3.1
let objMark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69
}

let objJohn = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95
}

// 2.3.2
let calcBMI = (person) => {
    person.BMI = Math.floor(person.mass / Math.pow(person.height, 2))
}

calcBMI(objMark)
calcBMI(objJohn)

// 2.3.3
console.log(objMark.BMI>objJohn.BMI?`${objMark.fullName} BMI (${objMark.BMI}) is higher than ${objJohn.fullName} (${objJohn.BMI})!`
    :`${objMark.fullName} BMI (${objMark.BMI}) is lower than ${objJohn.fullName} (${objJohn.BMI})!`
)