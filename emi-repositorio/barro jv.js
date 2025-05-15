document.addEventListener('DOMContentLoaded', function() {
    const surveyForm = document.getElementById('surveyForm');
    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.gallery-thumbnails img');

    // Gallery functionality
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const tempSrc = mainImage.src;
            mainImage.src = this.src;
            this.src = tempSrc;
        });
    });

    // Form submission
    surveyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            experiencia: document.getElementById('experiencia').value,
            nivelEducativo: document.getElementById('nivel-educativo').value,
            vivienda: document.getElementById('vivienda').value,
            frecuencia: document.getElementById('frecuencia').value,
            aprendizaje: document.getElementById('aprendizaje').value,
            ingresos: document.getElementById('ingresos').value,
            tecnicas: Array.from(document.querySelectorAll('input[name="tecnicas"]:checked')).map(cb => cb.id),
            dificultades: document.getElementById('dificultades').value
        };

        // Show success message
        showMessage('¡Gracias por completar la encuesta!', 'success');
        
        // Optional: Send data to server
        console.log('Datos de la encuesta:', formData);
        surveyForm.reset();
    });

    function showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;
        surveyForm.appendChild(messageDiv);
        
        setTimeout(() => messageDiv.remove(), 3000);
    }
});

function enviarSolicitud(event) {
    event.preventDefault();
    
    document.getElementById("solicitud-form").reset();
    document.getElementById("mensaje-confirmacion").style.display = "block";
}
