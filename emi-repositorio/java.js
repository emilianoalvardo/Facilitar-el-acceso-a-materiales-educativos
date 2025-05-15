function explorarSaberes() {
    alert("Explorando los saberes de tu región...");
}

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue
    
    // Obtener el nombre de usuario
    const username = document.getElementById("username").value;
    
    // Mostrar el nombre de usuario en la parte superior derecha
    document.getElementById("userDisplay").textContent = "Usuario: " + username;
    
    // Guardar el usuario en localStorage para persistencia
    localStorage.setItem("username", username);
    
    // Ocultar el formulario y mostrar el botón de cerrar sesión
    document.querySelector(".form-container").style.display = "none";
    document.getElementById("logoutButton").style.display = "inline-block";
});

// Mantener el nombre de usuario si la página se recarga
document.addEventListener("DOMContentLoaded", function() {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
        document.getElementById("userDisplay").textContent = "Usuario: " + savedUser;
        document.querySelector(".form-container").style.display = "none";
        document.getElementById("logoutButton").style.display = "inline-block";
    }
});

// Acción del botón de cerrar sesión
document.getElementById("logoutButton").addEventListener("click", function() {
    localStorage.removeItem("username"); // Eliminar datos del usuario
    document.getElementById("userDisplay").textContent = "Usuario: Invitado"; // Restaurar estado
    document.querySelector(".form-container").style.display = "block"; // Mostrar el formulario nuevamente
    document.getElementById("logoutButton").style.display = "none"; // Ocultar el botón
});
