function cambiaClave(form) {
    var clave = document.getElementById('password').value;
    var clave1 = document.getElementById('password1').value;
    var clave2 = document.getElementById('password2').value;

    if (clave == "" || clave1 == "" || clave2 == "") {
        alert("Igrese todos los campos para actualizar su clave");
        return false;
    } else {
        if (clave1 == clave2) {
            alert("Contraseña Actualizada con Exito");
            return true;
        } else {
            alert("Las Contraseñas no coinciden");
            return false;
        }
    }
}