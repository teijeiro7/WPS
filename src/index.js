import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import { __dirname } from '../dirname.js';
import router from "./router.js";




const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.engine("html", mustacheExpress());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Use the router
app.use(router);

app.get("/", router);
app.get("/cargarJson", router);
app.get("/formularioMarca", router);
app.get("/newBrand", router);
app.post("/newRacket", router);
app.get("/:brandName/edit", router);
app.post("/editBrand", router);
app.get("/:brandName", router);
app.get("/:brandName/deleteBrand", router);



app.use((req, res) => {
    res.status(404).send('404 Not Found');
});


app.listen(4000, () => {
    console.log('Server is running on port 4000');
    console.log("http://localhost:4000/");
});



