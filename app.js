let numeroSecreto = 0;
let intentos = 1; 
let listNumSorteados = [];
let numMaximo = 10;

console.log(numeroSecreto);
let parrafo = document.querySelector("p"); 
parrafo.innerHTML = "Indica un nuemero del uno al diez";

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento); 
    elementoHtml.innerHTML = texto;
}

function verificarIntento() {
    let numUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log("intentos de usuario:", intentos);
    console.log('Tipo de numUsuario:', typeof numUsuario); // Debe ser 'number'
    console.log('Valor de numUsuario:', numUsuario); // El valor ingresado por el usuario
    console.log('Número Secreto:', numeroSecreto); // El número secreto
    console.log('Tipo de numeroSecreto:', typeof numeroSecreto); // Debe ser 'number'
    console.log('¿Es igual numUsuario y numeroSecreto?:', numUsuario === numeroSecreto); // Comparación de igualdad, en valor y tipo de dato
    //verificar si se ha ingresado un nuemero valido 
    if(numUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el nunero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");   
    } else{
        if(numUsuario > numeroSecreto){
            asignarTextoElemento("p", "el numero secreto es menor");
        } else{
            asignarTextoElemento("p", "el numero secreto es mayor");
        }
        intentos = intentos + 1;
        limpiarCaja(); 
    }
    return;

}
function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto(){    
    let numGenerado = Math.floor(Math.random()*numMaximo) + 1;
    console.log(numGenerado);
    console.log(listNumSorteados);
    //si ya  sorteamos todos los numeros
    if(listNumSorteados.length == numMaximo){
        asignarTextoElemento("p", "ya se sortearon todos los numeros posibles");
    } else{    
        //si el numero generado esta incluido en la lista 
        if (listNumSorteados.includes(numGenerado)){
            return generarNumeroSecreto();
        }else{
            listNumSorteados.push(numGenerado); //console.log(`numero generado: ${numGenerado}`)
            return numGenerado;
        }   
    }    
}

function condicionesInicales(){
    asignarTextoElemento("h1", "Juego del numero secreto"); //para llamar la funcion se utiliza el nombre de la funcion y los ().
    asignarTextoElemento( "p", `Indica un numero del 1 al ${numMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}

function reiniciarJuego(){
    limpiarCaja();      //limpiarcaja
    condicionesInicales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");       
}
condicionesInicales();


