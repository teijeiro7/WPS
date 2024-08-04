import marcas, { isBrand } from "./brandsService.js";

let hasError = false;

// --------------------------------------------------------------------------------------------------------checkBrandName
const brandName = document.getElementById("marca");
const nameError = document.getElementById('errorNombre');

const checkBrandName = () => {
    nameError.textContent = "";

    if (brandName.value.trim() === '') { // si el valor del input está vacío
        nameError.textContent = "El nombre de la marca no puede estar vacía";
        hasError = true;
    } else if (brandName.value.charAt(0) !== brandName.value.charAt(0).toUpperCase()) { // si la primera letra no es mayúscula
        nameError.textContent = 'La primera letra del nombre de la marca tiene que ser mayúscula.';
        hasError = true;
    }
};


// --------------------------------------------------------------------------------------------------------checkBrandYear
const brandYear = document.getElementById("año");
const yearError = document.getElementById('errorAno');

const checkBrandYear = () => {
    yearError.textContent = "";
    if (brandYear.value == "") {
        yearError.textContent = "El año de creación no puede ser vacío";
        hasError = true;
    } else if (brandYear.value < 1800 || brandYear.value > 2024) {
        yearError.textContent = "El año de creación de la marca tiene que estar comprendido entre 1800 y 2024";
        hasError = true;
    }
}

// --------------------------------------------------------------------------------------------------------checkBrandFounder
const brandFounder = document.getElementById("founder");
const founderError = document.getElementById("errorFundador");

const checkBrandFounder = () => {
    founderError.textContent = "";

    if (brandFounder.value.trim() == '') {
        founderError.textContent = "El nombre del fundador no puede ser vacío";
        hasError = true;
    } else if (brandFounder.value.charAt(0) !== brandFounder.value.charAt(0).toUpperCase()) {
        founderError.textContent = 'La primera letra del nombre del fundador tiene que ser mayúscula.';
        hasError = true;
    }
}

// --------------------------------------------------------------------------------------------------------checkBrandWeb
const brandWeb = document.getElementById("web");
const webError = document.getElementById("errorWeb");

const checkBrandWeb = () => {
    webError.textContent = "";

    let urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

    if (!urlRegex.test(brandWeb.value.trim())) {
        webError.textContent = 'Por favor, ingresa una URL válida.';
        hasError = true;
    }

    console.log(webError.textContent);
}
// --------------------------------------------------------------------------------------------------------checkBrandPlayers
const brandPlayers = document.getElementById("colaborators");
const errorPlayers = document.getElementById("errorPlayers");

const checkBrandPlayers = () => {
    errorPlayers.textContent = "";

    if (brandPlayers.value.trim() == '') {
        errorPlayers.textContent = "El nombre no puede ser vacío";
        hasError = true;
    } else if (brandPlayers.value.length < 50 || brandPlayers.value.length > 500) {
        errorPlayers.textContent = errorPlayers.textContent + 'El texto debe tener entre 50 y 500 caracteres. ';
        hasError = true;
    }

    if (brandPlayers.value.charAt(0) !== brandPlayers.value.charAt(0).toUpperCase()) {
        errorPlayers.textContent = errorPlayers.textContent + 'La primera letra del nombre tiene que ser mayúscula. ';
        hasError = true;
    }
}

// --------------------------------------------------------------------------------------------------------EventListeners
brandName.addEventListener('input', checkBrandName);
brandYear.addEventListener('input', checkBrandYear);
brandFounder.addEventListener('input', checkBrandFounder);
brandWeb.addEventListener('input', checkBrandWeb);
brandPlayers.addEventListener('input', checkBrandPlayers);

const botonRegistrar = document.getElementById("botonRegistrar");
const brandImage = document.getElementById("imagen");

botonRegistrar.addEventListener("click", function (event) {
    event.preventDefault(); // Esto previene que el formulario se envíe automáticamente


    console.log("Botón presionado");
    hasError = false;

    checkBrandName();
    console.log(hasError);
    checkBrandYear();
    console.log(hasError);
    checkBrandFounder();
    console.log(hasError);
    checkBrandWeb();
    console.log(hasError);
    checkBrandPlayers();
    console.log(hasError);

    if (!hasError) {
        fetch('/newBrand', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                brandName: brandName.value,
                brandYear: brandYear.value,
                brandFounder: brandFounder.value,
                brandImage: brandImage.value,
                brandWeb: brandWeb.value,
                brandPlayers: brandPlayers.value
            })
        }).then(response => {
            if (response.redirected) {
                window.location.href = response.url;
                console.log(marcas)
            }
        }).catch(() => {
            console.log("Error al enviar los datos")
        });
    }
});