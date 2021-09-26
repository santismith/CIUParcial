var inputUsuario = document.querySelector(".inputUsuario")
var inputContrasenia = document.querySelector(".inputContraseña")
var botonIngreso = document.querySelector(".botonIngreso")
var resultado = document.getElementById('resultado')
var expRegularDNI = /^\d{8}(?:[-\s]\d{4})?$/


botonIngreso.addEventListener("click", function(){
    
    if(inputUsuario.value == null || inputUsuario.value.length == 0 || /^\s+$/.test(inputUsuario.value ) ){
        inputUsuario.classList.add("invalid")
        inputContrasenia.classList.add("invalid")
        resultado.innerHTML = '<p class="error"><strong>Error: </strong>¡Los campos no deben estar vacios!</p>'
    }else if (expRegularDNI.test(inputUsuario.value) != true){
        inputUsuario.classList.add("invalid")
        resultado.innerHTML = '<p class="error"><strong>Error: </strong>¡Formato DNI Inválido!</p>'
    }else if(inputContrasenia.value.length < 4){
        inputContrasenia.classList.add("invalid")
        resultado.innerHTML = '<p class="error"><strong>Error: </strong>¡La contraseña debe tener al menos 4 caracteres!</p>'
    }
    


})

