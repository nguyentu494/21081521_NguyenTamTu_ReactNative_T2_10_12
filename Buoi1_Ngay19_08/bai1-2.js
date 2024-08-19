const prompt = require("prompt-sync")({
    'fake_val': 'OPTIONAL CONFIG VALUES HERE'
});
var massMark = prompt("Hãy nhập cân nặng của Mark ");
var heightMark = prompt("Hãy nhập chiều cao của Mark ");
var massJohn = prompt("Hãy nhập cân nặng của John ");
var heightJohn = prompt("Hãy nhập chiều cao của John ");

let bmiMark;
let bmiJohn;

function calcBMI(height, mass) {
    return mass/Math.pow(height,2);
}
bmiMark = calcBMI(heightMark, massMark);
bmiJohn = calcBMI(heightJohn, massJohn)
let markHigherBMI = (heightMark, massMark, heightJohn, massJohn) => {
    return bmiMark>bmiJohn?true:false;
}



// cau 2.1
if(markHigherBMI != null)
    console.log(markHigherBMI==true?'BMI của Mark cao hơn John':'BMI của Mark thấp hơn John');
else
    console.log('thieu thong tin')
// cau 2.2

if(markHigherBMI != null)
    console.log(markHigherBMI==true?`BMI của Mark ${bmiMark} cao hơn John ${bmiJohn}`:`BMI của Mark ${bmiMark} thấp hơn John ${bmiJohn}`);
else
    console.log('thieu thong tin')
