//Variables
let numeroMaximoPosible=100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible+1);
let numeroUsuario =0;
let intentos = 1;
let palabraVeces = "vez";
let maximosIntentos = 10;
while (numeroSecreto != numeroUsuario){
    numeroUsuario = parseInt (prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));

    console.log(numeroUsuario);
    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert (`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}` );
    } else {
        if (numeroUsuario > numeroSecreto) { 
            alert ("El número secreto es menor");
        } else {
            alert ("El número secreto es mayor");
        }
        //intentos = intentos + 1;
        //intentos += 1
        intentos ++;
        //palabraVeces = "veces";
        if (intentos > maximosIntentos) {
            alert (`llegaste al numero máximo de ${maximosIntentos} intentos`);
            break;
        }
        
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}