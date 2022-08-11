
let tiempo =58;
let intervalo = 0;
let hora = 0;
let minutos = 0;
let verificador = false;
let arrayLimitador = [];

const cronometro = document.querySelector(".cronometro")
const alternado = document.querySelector(".startStop")
const reset = document.querySelector(".reset")
const grabar = document.querySelector(".grabar")
const tiemposGrabados= document.querySelector(".tiemposGrabados")


//Funcion de tiempo
function inicio (){
    
    if(verificador == false){

    intervalo = setInterval(()=>{
    tiempo += 0.01 
    cronometro.innerHTML = `${hora}:${minutos}:${tiempo.toFixed(2)}` 
    verificador = true

    //Conversion a minutos
    if(tiempo.toFixed(2) == 60.00){
        minutos+=1
        tiempo = 0.00
        
        
        
    }
    //Conversion a horas
    else if(minutos == 60){
        hora+=1
        minutos = 0
        tiempo = 0.00
    }

    

    },10)
    }
    

    else {
        clearInterval(intervalo)
        verificador = false
    }
}
//Funcion de tiempo



//Reseteo
function reseteo(){
    
     if (cronometro.innerHTML == "0.00"){
        alert("El cronometro se encuentra en su estado inicial")
    }

    else if(verificador == true || verificador == false){

        clearInterval(intervalo)
        tiempo = 0
        minutos = 0
        hora = 0
        cronometro.innerHTML = "0.00"
        verificador = false
    }

    while(tiemposGrabados.firstChild){
        tiemposGrabados.removeChild(tiemposGrabados.firstChild)
    }

    
    
}
//Reseteo

//grabacion
function grabacion(){
    if(cronometro.innerHTML == "0.00"){
        alert("Empeza a correr el cronometro para grabar")
    }
    else{
        let p = document.createElement('ul');
    p.style.listStyle = "none"
    p.innerHTML += `
    <li>Tiempo : ${cronometro.innerHTML} </li>
    `;
    tiemposGrabados.appendChild(p)
    }


}
//grabacion

//Eventos
alternado.addEventListener('click',inicio)
reset.addEventListener('click',reseteo)
grabar.addEventListener('click',grabacion)
