function crearCuenta(form) {
    var nombres = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var clave = document.getElementById('password').value;
    var clave1 = document.getElementById('password1').value;

    if (nombres == "" || correo == "" || clave == "" || clave1 == "") {
        alert("Ingrese todos los datos para registrar su cuenta");
        return false;
    } else {
        var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esValido = expReg.test(correo);
        if (esValido == true && clave == clave1) {
            alert("Cuenta creada");
            return true;
        } else {
            alert("Formato de Correo Incorrecto y/o Contraseñas no Coinciden");
            return false;
        }
    }
}