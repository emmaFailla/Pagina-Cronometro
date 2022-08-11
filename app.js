
let tiempo = 0
let intervalo = 0
let verificador = false
const cronometro = document.querySelector(".cronometro")
const alternado = document.querySelector(".startStop")
const reset = document.querySelector(".reset")


//Funcion de tiempo
function inicio (){
    
    if(verificador == false){
    intervalo = setInterval(()=>{

    tiempo += 0.01 
    cronometro.innerHTML =  tiempo.toFixed(2)
    verificador = true

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
        cronometro.innerHTML = "0.00"
        verificador = false
    }
    
}
//Reseteo

//Eventos
alternado.addEventListener('click',inicio)
reset.addEventListener('click',reseteo)
