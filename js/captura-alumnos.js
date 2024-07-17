
function validarNumCon(numero, longitud){
    return numero.length === longitud;
}



function capturarAlumnos() {
    let $nombre = document.getElementById('txtnombre').value.trim();
    let $apellidoP = document.getElementById('txtapellidoP').value.trim();
    let $apellidoM = document.getElementById('txtapellidoM').value.trim();
    let $fechaNa = document.getElementById('fechaN').value.trim();
    let $num_control = document.getElementById('txtnum_control').value;
    let $genero = document.querySelector('input[name="genero"]:checked');
    let $select = document.getElementById('selectcarrera').value;
    let myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    let modalBody = document.getElementById('modal-body');
    let modalTitle = document.getElementById('exampleModalLabel');
    
    // Verificar si todos los campos requeridos están llenos
    if ($nombre === "" || $apellidoP === "" || $apellidoM === "" || $fechaNa === "" || !$genero || $select == "carrera" || $num_control === "") {
        modalTitle.textContent = 'Error';
        modalBody.innerHTML = '<div class="alert alert-danger" role="alert">Campos Vacíos</div>';
        myModal.show();
    }else if(!validarNumCon($num_control, 6)) {
        modalTitle.textContent = 'Error';
        modalBody.innerHTML = '<div class="alert alert-danger" role="alert">El numero de control debe de tener 6 digitos</div>';
        myModal.show();
    }else {
        modalTitle.textContent = 'Datos Capturados';
        modalBody.innerHTML = `
            <p><strong>Nombre:</strong> ${$nombre}</p>
            <p><strong>Apellido Paterno:</strong> ${$apellidoP}</p>
            <p><strong>Apellido Materno:</strong> ${$apellidoM}</p>
            <p><strong>Fecha Nacimiento:</strong> ${$fechaNa}</p>
            <p><strong>Numero de Control:</strong> ${$num_control}</p>
            <p><strong>Género:</strong> ${$genero.value}</p>
            <p><strong>Carrera:</strong> ${$select}</p>
            <p><strong>Edad:</strong> ${calcular_edad($fechaNa)}</p>
            <p><strong>Mayor de edad ?:</strong>${mayorEdad($fechaNa)}</p>
            
        `;
        myModal.show();
    }
}

function limpiar() {
    document.getElementById('txtnombre').value = "";
    document.getElementById('txtapellidoP').value = "";
    document.getElementById('txtapellidoM').value = "";
    document.getElementById('fechaN').value = "";
    document.querySelector('input[name="genero"]:checked').value = "";
    document.getElementById('selectcarrera').value = "";
}
