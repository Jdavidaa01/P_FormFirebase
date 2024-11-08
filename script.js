document.getElementById('form').addEventListener('submit',(event)=>{
    event.preventDefault();
    //validar nombre
    let inputName = document.getElementById('name');
    let nameError = document.getElementById('nameError');
    if(inputName.value.trim() === ''){
        nameError.textContent='Ingrese un nombre valido';
        nameError.classList.add('error-message');

    }else{
        nameError.textContent='';
        nameError.classList.remove('error-message');
    }
    //validar email
    let inputEmail = document.getElementById('mail');
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón de validación básico
    if (!emailPattern.test(inputEmail.value)){
        emailError.textContent='Ingrese un correo válido';
        emailError.classList.add('error-message');
    }else{
        emailError.textContent='';
        emailError.classList.remove('error-message');
    }
    //validar password
    let inputPassword = document.getElementById('password');
    let passError = document.getElementById('passError');
    if(inputPassword.value.length < 8){
        passError.textContent='La contraseña debe tener al menos 8 caracteres';
        passError.classList.add('error-message');

    }else{
    passError.textContent='';
    passError.classList.remove('error-message')
    }
    //si todo es ok enviar formulario
    if(!nameError.textContent && !passError.textContent && !emailError.textContent){
        //ingreso backend
        alert('El formulario se ha enviado con exito')
        document.getElementById('form').reset();
    }
}
)
