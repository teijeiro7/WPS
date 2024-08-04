import marcas from "./brandsService.js";

document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        document.querySelectorAll("img.nombreBusqueda").forEach(img => {
            const container = img.parentElement.parentElement; // Contenedor de la imagen
            if (img.alt.toLowerCase().includes(e.target.value.toLowerCase())) {
                container.style.display = ''; // Muestra el contenedor de la marca
            } else {
                container.style.display = 'none'; // Oculta el contenedor de la marca
            }
        });
    }
});

document.addEventListener("keydown", e => {
    if (e.target.matches("#buscador")) {
        const brandNames = Array.from(marcas.keys()).map(brand => brand.toLowerCase());
        if (e.key === "Enter") {
            console.log(brandNames);
            if (brandNames.includes(e.target.value.toLowerCase())) {
                const location = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
                window.location.href = '/' + location;
            } else {
                const error_search = document.getElementsByClassName("error_search")
                error_search.textContent = "La marca no existe";
            }
        }
    }
});