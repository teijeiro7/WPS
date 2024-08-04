import express from 'express';
import { __dirname } from '../dirname.js';

import marcas, { addBrand, getBrand, addRacket, deleteBrand } from '../public/script/brandsService.js';

const router = express.Router();

router.get('/', (req, res) => {
    const infoDesplegable = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla
    res.render('index', { title: 'Main Page', values: infoDesplegable });
});

router.get('/cargarJson', (req, res) => {
    req.query.init = parseInt(req.query.init);
    req.query.final = parseInt(req.query.final);
    const brandValues = Array.from(marcas.values());
    const moreBrands = brandValues.slice(req.query.init, req.query.final);
    res.render("components/infoMarcas", { brandValues: moreBrands });
});

router.get('/formularioMarca', (req, res) => {
    const brandValues = Array.from(marcas.values());
    res.render('form_marca', { title: 'Create your Own Brand', values: brandValues, action: "newBrand" }); //renderizamos el contenido necesario para el formulario
});


router.post('/newBrand', express.json(), (req, res) => {
    const { brandName, brandYear, brandFounder, brandImage, brandWeb, brandPlayers } = req.body;
    addBrand(brandName, brandYear, brandFounder, brandImage, brandWeb, brandPlayers);
    res.redirect(`/${brandName}`);
});

router.post('/newRacket', (req, res) => {
    let brandValues = getBrand(req.query.name); //asignamos a brandValues el valor de la marca que queremos mostrar
    let infoDesplegable = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla
    let palas = brandValues.brandRackets; //asignamos a palas el valor de las palas de la marca que queremos mostrar
    let marcaPrincipal = brandValues.brandName;
    let errorMessage = '';

    if (!req.body.nombrePala) {
        errorMessage += 'Nombre de la pala no proporcionado. ';
    }
    if (!req.body.precioPala) {
        errorMessage += 'Precio de la pala no proporcionado. ';
    }
    if (!req.body.imagenPala) {
        errorMessage += 'Imagen de la pala no proporcionada. ';
    }
    if (!req.body.palaUnits) {
        errorMessage += 'Numero de palas no proporcionado.  ';
    }
    if (errorMessage) {
        res.render('marca', { error: `No se ha podido crear la marca por el siguiente motivo:  ${errorMessage}`, ...brandValues, desplegable: infoDesplegable, palasPrincipal: palas })
    } else {
        addRacket(marcaPrincipal, req.body.nombrePala, req.body.precioPala, req.body.imagenPala, req.body.palaUnits);
        res.redirect(`/${marcaPrincipal}`);
    }

});

router.post("/editBrand", (req, res) => {
    let brandValues = getBrand(req.query.name); //asignamos a brandValues el valor de la marca que queremos mostrar
    marcas.delete(req.query.name);
    brandValues.brandName = req.body.nombreMarca;
    brandValues.brandYear = req.body.anoMarca;
    brandValues.brandFounder = req.body.fundMarca;
    brandValues.brandImage = req.body.imgMarca;
    brandValues.brandWeb = req.body.webMarca;
    brandValues.brandPlayers = req.body.plaMarca;
    marcas.set(req.body.nombreMarca, brandValues);
    res.redirect(`/${req.body.nombreMarca}`);
});

router.get("/:brandName/edit", (req, res) => {
    let brandValues = getBrand(req.params.brandName); //asignamos a brandValues el valor de la marca que queremos mostrar
    let infoDesplegable = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla
    res.render("form_marca", { ...brandValues, desplegable: infoDesplegable, title: "Edit:", action: `/editBrand?name=${req.params.brandName}` }); //renderizamos el contenido necesario para la marca seleccionada
});


router.get('/:brandName', (req, res) => {
    console.log(marcas)
    let brandValues = getBrand(req.params.brandName); //asignamos a brandValues el valor de la marca que queremos mostrar
    let infoDesplegable = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla
    let palas = brandValues.brandRackets; //asignamos a palas el valor de las palas de la marca que queremos mostrar
    res.render('marca', { ...brandValues, values: infoDesplegable, palasPrincipal: palas }); //renderizamos el contenido necesario para la marca seleccionada
});

router.get("/:brandName/confirmDelete", (req, res) => {
    let brandValues = getBrand(req.params.brandName); //asignamos a brandValues el valor de la marca que queremos mostrar
    let infoDesplegable = Array.from(marcas.values()); // convertimos el mapa en un array de objetos con el objetivo de renderizarlo de forma más sencilla
    res.render("confirmDelete", { ...brandValues, values: infoDesplegable, title: "Confirm Delete" }); //renderizamos el contenido necesario para la marca seleccionada
});

router.get("/:brandName/deleteBrand", (req, res) => {
    console.log(req.query.name);
    deleteBrand(req.query.name);
    res.redirect("/");
});


export default router;