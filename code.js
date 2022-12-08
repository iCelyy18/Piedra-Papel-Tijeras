var piedraSeleccionada = document.getElementById('piedra-GM');
var papelSeleccionada = document.getElementById('papel-GM');
var tijeraSeleccionada = document.getElementById('tijera-GM');
var mostrarOpcion = document.getElementById('answerGame');
let opcionJugador;
let opcionBot;

piedraSeleccionada.addEventListener('click', function(){
    opcionJugador = "Piedra";
    opBot();
});

papelSeleccionada.addEventListener('click', function(){
    opcionJugador = "Papel";
    opBot();

});

tijeraSeleccionada.addEventListener('click', function(){
    opcionJugador = "Tijera";
    opBot();

});



function opBot() {

    var aleatorio = numAleatorio();

    if(aleatorio == 0){
        opcionBot = "Piedra";
    }

    else if(aleatorio == 1){
        opcionBot = "Papel";
    }

    else if(aleatorio == 2){
        opcionBot = "Tijera";
    }
    batalla();
}

function batalla() {

    if(opcionJugador == opcionBot){
        mostrarOpcion.textContent = "Empate";
    }

    else if(opcionJugador == "Piedra" && opcionBot == "Tijera"){
        mostrarOpcion.textContent = "Has ganado " + opcionJugador + " a " + opcionBot;
    }

    else if(opcionJugador == "Papel" && opcionBot == "Piedra"){
        mostrarOpcion.textContent = "Has ganado " + opcionJugador + " a " + opcionBot;    
    }

    else if(opcionJugador == "Tijera" && opcionBot == "Papel"){
        mostrarOpcion.textContent = "Has ganado " + opcionJugador + " a " + opcionBot;
    }

    else{
        mostrarOpcion.textContent = "Has perdido " + opcionJugador + " contra " + opcionBot;
    }
}

function numAleatorio(){
    let n = Math.floor(Math.random() * 3);
    return n;
}



