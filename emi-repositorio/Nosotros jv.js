function copiarLink() {
    const link = document.getElementById("link-difusion");
    link.select();
    navigator.clipboard.writeText(link.value)
        .then(() => alert("¡Link copiado! Ahora puedes compartirlo."))
        .catch(err => console.error("Error al copiar el enlace", err));
}
