document.addEventListener("DOMContentLoaded", function() {
    const registro = document.getElementById("registro");

    // Lista de cambios con título, descripción y motivo
    const cambios = [
        { fecha: "09/05/2025", titulo: "Mejora del menú principal", descripcion: "Se mejoró el diseño del menú principal y se agregaron efectos hover.", motivo: "Facilitar la navegación y mejorar la experiencia visual." },
        { fecha: "08/05/2025", titulo: "Sección de bitácora de actualizaciones", descripcion: "Se implementó la sección de bitácora de actualizaciones.", motivo: "Documentar cambios y mantener transparencia con los usuarios." },
        { fecha: "07/05/2025", titulo: "Optimización de imágenes", descripcion: "Optimización de las imágenes para mejorar la carga de la página.", motivo: "Reducir tiempos de carga y mejorar rendimiento." },
        { fecha: "06/05/2025", titulo: "Estructuración del HTML", descripcion: "Mejor estructuración del HTML y mejoras en la organización del código.", motivo: "Facilitar futuras modificaciones y mejorar mantenimiento." },
        { fecha: "05/05/2025", titulo: "Mapa de Saberes interactivo", descripcion: "Implementación del Mapa de Saberes con filtros por categoría.", motivo: "Permitir a los usuarios explorar oficios tradicionales más fácilmente." },
        { fecha: "04/05/2025", titulo: "Testimonios en Historias Vivas", descripcion: "Se agregaron testimonios en la sección Historias Vivas.", motivo: "Resaltar experiencias reales y enriquecer el contenido." },
        { fecha: "03/05/2025", titulo: "Optimización del footer", descripcion: "Centrado del texto de derechos de autor y mejora visual.", motivo: "Mejorar legibilidad y apariencia del pie de página." },
        { fecha: "02/05/2025", titulo: "Actualización de Aprende un Oficio", descripcion: "Se añadió más información educativa a la sección Aprende un Oficio.", motivo: "Brindar mayor claridad y valor a quienes buscan aprender técnicas artesanales." },
        { fecha: "01/05/2025", titulo: "Corrección de enlaces", descripcion: "Corrección de errores en enlaces y mejora en navegabilidad.", motivo: "Evitar enlaces rotos y garantizar una mejor experiencia de usuario." },
        { fecha: "30/04/2025", titulo: "Diseño responsive", descripcion: "Mejoras en diseño responsive para dispositivos móviles.", motivo: "Garantizar compatibilidad y acceso desde cualquier pantalla." },
        { fecha: "29/04/2025", titulo: "Mini menús en encabezado", descripcion: "Implementación de mini menús debajo del encabezado.", motivo: "Facilitar el acceso rápido a secciones clave." },
        { fecha: "28/04/2025", titulo: "Sección de contacto con maestros", descripcion: "Se añadió una sección de contacto directo con los maestros.", motivo: "Fomentar la interacción entre usuarios y expertos en oficios." },
        { fecha: "27/04/2025", titulo: "Ajuste de colores", descripcion: "Se ajustaron los colores para mejorar contraste y legibilidad.", motivo: "Garantizar una mejor lectura y experiencia visual." },
        { fecha: "26/04/2025", titulo: "Mejor organización de CSS", descripcion: "Reestructuración del CSS para una mayor organización.", motivo: "Facilitar la administración de estilos y futuras mejoras." },
        
        // *** NUEVOS CAMBIOS ***
        { fecha: "12/05/2025", titulo: "Corrección de imágenes en listado de saberes", descripcion: "Se ajustaron rutas y nombres de archivos para asegurar que las imágenes de saberes se muestren correctamente.", motivo: "Evitar errores en la carga de imágenes y mejorar la presentación visual." },
        { fecha: "12/05/2025", titulo: "Mejor visualización del mini menú", descripcion: "Se agregaron estilos flexibles para mejorar la disposición de imágenes y enlaces en el mini menú.", motivo: "Garantizar que los elementos del menú sean más claros y visibles para los usuarios." },
        { fecha: "12/05/2025", titulo: "Carrusel de imágenes en el encabezado", descripcion: "Implementación de un carrusel en el encabezado que cambia imágenes cada 2 segundos de manera infinita.", motivo: "Agregar dinamismo y mejorar la presentación visual del sitio." },
        { fecha: "12/05/2025", titulo: "Reproducción infinita de video", descripcion: "Se implementó una sección para reproducir un video en bucle infinito.", motivo: "Facilitar la presentación de contenido audiovisual sin interrupciones." },
        { fecha: "12/05/2025", titulo: "Mejor organización y tamaño del video", descripcion: "Se ajustó el tamaño y centramiento del video para que no sobresalga del contenedor.", motivo: "Mejorar la presentación y evitar recortes en la visualización del video." },
        { fecha: "12/05/2025", titulo: "Encabezado más profesional", descripcion: "Se mejoró el diseño del encabezado utilizando Flexbox, sombras suaves y ajustes tipográficos.", motivo: "Mantener la sencillez sin perder un aspecto profesional y atractivo." },
        { fecha: "12/05/2025", titulo: "Adornos alrededor de secciones", descripcion: "Se añadieron adornos decorativos alrededor de la sección 'Mapa de Saberes' utilizando pseudo-elementos.", motivo: "Enriquecer el aspecto visual del sitio sin perder su diseño limpio." }
    ];

    // Agregar los cambios a la bitácora
    cambios.forEach(cambio => {
        const logItem = document.createElement("div");
        logItem.classList.add("log-item");

        logItem.innerHTML = `
            <h3>${cambio.titulo} - ${cambio.fecha}</h3>
            <p><strong>Descripción:</strong> ${cambio.descripcion}</p>
            <p><strong>Motivo del cambio:</strong> ${cambio.motivo}</p>
        `;

        registro.appendChild(logItem);
    });
});
