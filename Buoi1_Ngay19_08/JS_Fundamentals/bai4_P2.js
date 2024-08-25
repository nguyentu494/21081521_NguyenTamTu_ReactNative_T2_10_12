// 2.4.1
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

// 2.4.2
let tips = []
let totals = []

// 2.4.3

let calcTip = (arrBill) => {
    arrBill.forEach((bill, idx) => {
        tips.push((bill>=50 && bill<=300)?bill*0.15:bill*0.15)
        totals.push(bill + tips[idx])
    });
    
}

calcTip(bills)

console.log(`Danh sach tien tips la: ${tips}`)
console.log(`Danh sach tong tien la: ${totals}`)

// 2.4.4

let calcAverage = (arr) => {
    let sum = 0;
    arr.forEach(ele => {
        sum += ele;
    })
    return (sum/arr.length).toFixed(2)
}

console.log(`Trung binh cua totals: ${calcAverage(totals)}`)