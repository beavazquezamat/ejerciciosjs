const userAnwsers = [];

function confirmExample(description){
    return confirm(description);
}

function promptExample(description){
    return prompt(description)
}

function father(description, callback){
    let result = callback(description);
    userAnwsers.push(result);
}

father('¿Seguro?', confirmExample);
father('Cuenta un cuento', promptExample);
father('¿Guardar?', confirmExample);
