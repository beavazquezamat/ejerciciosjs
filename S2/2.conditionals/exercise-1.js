const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumns.forEach(
    function(alumno){
        let trimestresAprobados = 0;

        if(alumno.T1 == true)
            trimestresAprobados++;
        if(alumno.T2 == true)
            trimestresAprobados++;
        if(alumno.T3 == true)
            trimestresAprobados++;

        if(trimestresAprobados >= 2)
            alumno.isApproved = true;
        else
            alumno.isApproved = false;

        console.log(alumno);
});