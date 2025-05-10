document.addEventListener("DOMContentLoaded", function () {
    const saberes = [
        { nombre: "Barro tradicional", categoria: "artesanias", descripcion: "Elaboración de piezas de barro con técnicas ancestrales.", imagen: "barro icono.jpg", pagina: "barro-tradicional.html" },
        { nombre: "Pan de horno de leña", categoria: "gastronomia", descripcion: "Preparación de pan artesanal cocido en horno de barro.", imagen: "Pan icono.jpg" },
        { nombre: "Cultivo de maíz criollo", categoria: "agricultura", descripcion: "Métodos tradicionales de cultivo y conservación del maíz.", imagen: "maiz icono.jpg" },
        { nombre: "Pirekua", categoria: "musica", descripcion: "Canto tradicional purépecha que representa la historia y cultura de Michoacán.", imagen: "pirakua icono.jpg" }
    ];

    const contenedor = document.getElementById("saberes");

    function mostrarSaberes(filtro) {
        contenedor.innerHTML = "";
        saberes.forEach(saber => {
            if (filtro === "todos" || saber.categoria === filtro) {
                const item = document.createElement("div");
                item.classList.add("saber-item");

                item.innerHTML = `
                    <img src="imagenes/${saber.imagen}" alt="${saber.nombre}">
                    <h3>${saber.nombre}</h3>
                    <p>${saber.descripcion}</p>
                    ${saber.pagina ? `<button onclick="window.location.href='${saber.pagina}'">Ver más</button>` : ""}
                `;

                contenedor.appendChild(item);
            }
        });
    }

    window.filtrarSaberes = function () {
        const categoriaSeleccionada = document.getElementById("categoria").value;
        mostrarSaberes(categoriaSeleccionada);
    };

    mostrarSaberes("todos");
});
