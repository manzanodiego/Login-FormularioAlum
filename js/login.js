

let usuario= "diego";
let contra = 1234;


function iniciarSesion(){
    let $user = document.getElementById('usuarioS').value;
    let $contra = document.getElementById('contraS').value;

    if($user == usuario && $contra == contra){
        window.location = "./bienvenida.html";
    }else{
        let alerta = document.getElementById('alerta');
        alerta.innerHTML = '<div class="alert alert-danger" role="alert"> Error al introducir credenciales</div>';
    }
}

