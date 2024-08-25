const prompt = require("prompt-sync")({
    'fake_val': 'OPTIONAL CONFIG VALUES HERE'
});

let bill = prompt("Nhập số tiền phải trả cho bill: ")

let tip = (bill) => {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2
}

console.log(`The bill was ${bill}, the tip was ${tip(bill)}, and the total value ${parseFloat(bill) + parseFloat(tip(bill))}`)