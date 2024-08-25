const prompt = require("prompt-sync")({
    'fake_val': 'OPTIONAL CONFIG VALUES HERE'
});

// var dolphins = [96,108,89]
// var koalas = [88,91,110] 

var dolphins = [97,112,101]
var koalas = [109,95,106] 


calcAvg = (arrMark) => {
    let sum = 0;
    arrMark.forEach(element => {
        sum += element
    });

    return sum/arrMark.length
}

// 3.1
var avgDolphins = Math.round(calcAvg(dolphins))
var avgKoalas = Math.round(calcAvg(koalas))

console.log('Diem trung binh cua doi dolphins: ', avgDolphins)
console.log('Diem trung binh cua doi koalas: ', avgKoalas)

// 3.2
result = (arrTeam1, arrTeam2) => {
    if(arrTeam1 > arrTeam2)
        return 1;
    else if(arrTeam1 < arrTeam2)
        return -1;
    else
        return 0;
}

if(result(avgDolphins, avgKoalas) == 1){
    console.log('team 1 win')
}else if(result(avgDolphins, avgKoalas) == 0)
    console.log('draw')
else
    console.log('team 2 win')
// 3.3 

if(result(avgDolphins, avgKoalas) == 1 && avgDolphins>=100){
    console.log('team 1 win')
}else if(result(avgDolphins, avgKoalas) == -1  && avgKoalas>=100)
    console.log('team 2 win')
else
    console.log('draw')
// 3.4

if(result(avgDolphins, avgKoalas) == 1 && avgDolphins>=100){
    console.log('team 1 win')
}else if(result(avgDolphins, avgKoalas) == -1  && avgKoalas>=100)
    console.log('team 2 win')
else
    console.log(`${avgDolphins>=100?'draw & 2 team get cup':'draw & 2 team dont get cup'}`)
