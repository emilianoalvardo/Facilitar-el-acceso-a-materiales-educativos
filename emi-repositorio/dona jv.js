function copiarCuenta() {
    const cuenta = document.getElementById("link-transferencia");
    cuenta.select();
    navigator.clipboard.writeText(cuenta.value)
        .then(() => alert("¡Datos copiados! Puedes hacer la transferencia."))
        .catch(err => console.error("Error al copiar", err));
}
