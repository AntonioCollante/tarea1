function recuperaclave(form) {
    var correo = document.getElementById('correo').value;

    if (correo == "") {
        alert("Igrese correo para recuperar su clave");
        return false;
    } else {
        var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esValido = expReg.test(correo);
        if (esValido == true) {
            alert("Se envio un correo a " +correo+" con las indicaciones para recuperar su contraseña");
            return true;
        } else {
            alert("Formato de Correo Incorrecto");
            return false;
        }
    }
}