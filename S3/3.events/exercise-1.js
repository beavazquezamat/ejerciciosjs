let button$ = document.getElementById("btnToClick");

// CLICK pulsar el boton sin que pulses
// onClick defines lo que ocurre cuando se pulsa ese boton

//button$.onclick = mostrarClick;
button$.addEventListener = ('click', mostrarClick);

function mostrarClick(evento) {
    console.log(evento);
}




    
