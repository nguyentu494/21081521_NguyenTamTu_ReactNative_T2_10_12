let dataTip = []

// 2.2.1
let calcTip = (valTip) => {
    return (valTip>=50 && valTip<=300)?valTip*0.15:valTip*0.2;
}

console.log(`Tien tip cho bill 100$ la: ${calcTip(100)}`)

// 2.2.2
let dataBill = [125, 555, 44]

// 2.2.3
let calcTips = (bills) => bills.map(bill =>{
                    dataTip.push(calcTip(bill))
})
calcTips(dataBill)
console.log(`Tien tip cho cac bill: ${dataBill} la: ${dataTip}`)

// 2.2.4
let dataTotal = dataBill.map((item, idx) => {
    return item + dataTip[idx]
})

console.log(`Tong gia tri cua moi bill va tip la: ${dataTotal}`)