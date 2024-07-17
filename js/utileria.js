

function calcular_edad(fechaNacimiento) {
    let fecha = new Date(fechaNacimiento);
    let fechaActual = new Date();
    if (fecha.getMonth() > fechaActual.getMonth()){
        return fechaActual.getFullYear() - fecha.getFullYear() - 1;
    } else if(fecha.getMonth() == fechaActual.getMonth() && fecha.getDate()+1    > fechaActual.getDate()){
        return fechaActual.getFullYear() - fecha.getFullYear() - 1;
    }
    else{
        return fechaActual.getFullYear() - fecha.getFullYear();
    }
  
}


function mayorEdad(fecha_nacimiento){
    if(calcular_edad(fecha_nacimiento)>18){
        return "Si es Mayor de edad";
    }else{
        return "No es mayor";
    }
}

function validarCorreo(correo) {
    const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|itoaxaca\.edu\.mx|hotmail\.com)$/;
    return regex.test(correo);
}


function validarLetras(texto) {
    const regex = /^[a-zá-úA-ZÁ-Ú\s]+$/;
    return regex.test(texto);
}
function validarContra(str) {
    if (
      /[A-Z]/.test(str) &&
      /[a-z]/.test(str) &&
      /[0-9]/.test(str) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(str) &&
      str.length == 8
    ) {
      return true;
      console.log(false);
    } else {
      console.log(false);
      return false;
    }
  }



function validarUser() {
    let usuario = document.getElementById('usuario').value;
    let str = document.getElementById('contraN').value;
    let correo = document.getElementById('correo').value;
    
    // let alertaC = document.getElementById('alertaCo');
    let alerta = document.getElementById('alertaM');
    

    if(usuario === "" || str === "" || correo === ""){
        
        alerta.innerHTML = '<div class="alert alert-danger" role="alert">Rellenar campos</div>';

    }
    if(!validarLetras(usuario)){
        alerta.innerHTML = '<div class="alert alert-danger" role="alert">Usuario Invalido</div>';
        return;
    }
    if(!validarCorreo(correo)){
        alerta.innerHTML = '<div class="alert alert-danger" role="alert">Correo Invalido</div>';
        return;
    }
    if(!validarContra(str) ){
        alerta.innerHTML = '<div class="alert alert-danger" role="alert">Contraseña Invalida</div>';
        return;
    }

    alerta.innerHTML = '<div class="alert alert-success" role="alert">Agregado correctamente</div>';

    const modalBody = document.getElementById('modalbody');
     modalBody.innerHTML = `
         <p><strong>Nombre de Usuario:</strong> ${usuario}</p>
         <p><strong>Correo Electrónico:</strong> ${correo}</p>
         <p><strong>Contraseña:</strong> ********</p>
     `;
     
     const modal = new bootstrap.Modal(document.getElementById('infoModal'));
     modal.show();

        
    
}

function limpiaruser() {
    document.getElementById('usuario').value = '';
    document.getElementById('contraN').value = '';
    document.getElementById('correo').value = '';
}

