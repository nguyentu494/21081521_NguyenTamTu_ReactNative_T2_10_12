const number = [45,4,9,16,25]
const a = 39

Array.prototype.myfilter = function(callback) {
    let arr = []
    this.forEach( x => {
        if(callback(x))
            arr.push(x);
    })
    return arr;
}

var value = number.myfilter((num) => {
    return num > 18
});
console.log(value);