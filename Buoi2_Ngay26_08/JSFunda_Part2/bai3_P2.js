// 2.3.1
let objMark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function()  {
        this.BMI = Math.floor(this.mass / Math.pow(this.height, 2))
        return this.BMI;
    }
}

let objJohn = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: objMark.calcBMI
}

// 2.3.2
objJohn.calcBMI()
objMark.calcBMI()

// 2.3.3
console.log(objMark.BMI>objJohn.BMI?`${objMark.fullName} BMI (${objMark.BMI}) is higher than ${objJohn.fullName} (${objJohn.BMI})!`
    :`${objMark.fullName} BMI (${objMark.BMI}) is lower than ${objJohn.fullName} (${objJohn.BMI})!`
)