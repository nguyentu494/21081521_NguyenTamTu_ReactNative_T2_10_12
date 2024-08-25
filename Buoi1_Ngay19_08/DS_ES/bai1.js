let dataTemp = [[17,21,23], [12,5,-5,0,4]]

let printForecast = (arr) =>{
    let str = "";
    let strTemp = (temp) =>{
        return `... ${temp}ºC in `
    }

    arr.forEach((element, idx) => {
        str = str.concat(`${strTemp(element)}${idx+1} days`)
    });
    str = str.concat('...')
    return str;
}

console.log(printForecast(dataTemp[0]))
console.log(printForecast(dataTemp[1]))