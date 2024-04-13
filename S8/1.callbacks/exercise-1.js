const numbersList = [];

function sum(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function father(a, b, callback){
    let result = callback(a, b)
    numbersList.push(result);
}

father (1, 4, sum);
father(4, 6, substract);
father(2, 2, sum);
father(2, 1, substract);

console.log(numbersList);