function enviarSolicitud(event) {
    event.preventDefault();
    
    document.getElementById("solicitud-form").reset();
    document.getElementById("mensaje-confirmacion").style.display = "block";
}
