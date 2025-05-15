document.addEventListener("DOMContentLoaded", function () {
    const saberes = [
        { 
            nombre: "Barro tradicional", 
            categoria: "artesanias", 
            descripcion: "Elaboración de piezas de barro con técnicas ancestrales.", 
            imagen: "barro icono.jpg",
            enlace: "barro-tradicional.html"
        },
        { 
            nombre: "Pan de horno de leña", 
            categoria: "gastronomia", 
            descripcion: "Preparación de pan artesanal cocido en horno de barro.", 
            imagen: "Pan icono.jpg",
            enlace: "pan-tradicional.html"
        },
        { 
            nombre: "Cultivo de maíz criollo", 
            categoria: "agricultura", 
            descripcion: "Métodos tradicionales de cultivo y conservación del maíz.", 
            imagen: "maiz icono.jpg",
            enlace: "maiz-criollo.html"
        },
        { 
            nombre: "Pirekua", 
            categoria: "musica", 
            descripcion: "Canto tradicional purépecha que representa la historia y cultura de Michoacán.", 
            imagen: "pirakua icono.jpg",
            enlace: "pirekua.html"
        }
    ];

    const contenedor = document.getElementById("saberes");

    function mostrarSaberes(filtro) {
        contenedor.innerHTML = "";
        saberes.forEach(saber => {
            if (filtro === "todos" || saber.categoria === filtro) {
                const item = document.createElement("div");
                item.classList.add("saber-item");
                item.setAttribute("data-categoria", saber.categoria);
                
                item.innerHTML = `
                    <img src="${saber.imagen}" 
                         alt="${saber.nombre}"
                         onerror="this.onerror=null; this.src='./imagenes/default.jpg';">
                    <h3>${saber.nombre}</h3>
                    <p>${saber.descripcion}</p>
                    <span class="categoria-badge" data-categoria="${saber.categoria}">
                        ${saber.categoria.charAt(0).toUpperCase() + saber.categoria.slice(1)}
                    </span>
                    <a href="${saber.enlace}" class="saber-button">
                        Explorar ${saber.nombre}
                    </a>
                `;
                
                contenedor.appendChild(item);
            }
        });
    }

    // Inicializar la vista con todos los saberes
    mostrarSaberes("todos");

    // Manejar el filtrado
    document.getElementById("categoria").addEventListener("change", function(e) {
        mostrarSaberes(e.target.value);
    });
});
