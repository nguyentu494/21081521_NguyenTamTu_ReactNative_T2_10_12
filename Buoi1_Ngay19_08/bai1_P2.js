let teamDolphins = [[44, 23, 71],[85, 54, 41]]
let teamKoalas = [[65, 54, 49], [23, 34, 27]]

// let teamDolphins = [85, 54, 41]
// let teamKoalas = [23, 34, 27]

// 2.1.1
let calcAverage = (scoreTeam) => {
    let sum = 0;
    scoreTeam.forEach(element => {
        sum += element
    });
    return sum/scoreTeam.length
}

// 2.1.2
console.log(`Điểm trung bình của đội Dolphins là: ${calcAverage(teamDolphins[0])}`);
console.log(`Điểm trung bình của đội Koalas là: ${calcAverage(teamKoalas[0])}`);

// 2.1.3
let checkWinner = (avgTeam1, avgTeam2) => {
    if(avgTeam1 > avgTeam2)
        return avgTeam1 >= 2 * avgTeam2 ? `Dolphins win (${avgTeam1} vs ${avgTeam2})`: `Don't team win (${avgTeam1} vs ${avgTeam2})`;
    return  avgTeam2 >= 2 * avgTeam1 ? `Koalas win (${avgTeam1} vs ${avgTeam2})`: `Don't team win (${avgTeam1} vs ${avgTeam2})`;
}

// 2.1.4
let avgDolphins = calcAverage(teamDolphins[0])
let avgKoalas = calcAverage(teamKoalas[0])
console.log(`Team win is ${checkWinner(avgDolphins, avgKoalas)}`);
 avgDolphins = calcAverage(teamDolphins[1])
 avgKoalas = calcAverage(teamKoalas[1])
console.log(`Team win is ${checkWinner(avgDolphins, avgKoalas)}`);
