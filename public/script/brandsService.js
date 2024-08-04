export class racket {
    constructor(racketName, racketPrice, racketImage, racketUnits) {
        this.racketName = racketName;
        this.racketPrice = racketPrice;
        this.racketImage = racketImage;
        this.racketUnits = racketUnits;
    }
}

let at10 = new racket("AT10 Luxury GENIUS 18K Alum 2024 by Agustín Tapia", 324.95, "https://noxsport.es/cdn/shop/products/at10-luxury-genius-18k-alum-2024-by-agustin-tapia-pat10genius18d-8436603195836-266863.jpg?v=1695157745&width=650", 6);
let ml10 = new racket("ML10 PRO CUP Luxury 2024. La pala de Miguel Lamperti", 299.95, "https://noxsport.es/cdn/shop/products/ml10-pro-cup-luxury-2024-la-pala-de-miguel-lamperti-pml10pcoorluxd-8436603195874-426798.jpg?v=1695157934&width=650", 6);
let xOne = new racket("X-ONE 2023", 74.95, "https://noxsport.es/cdn/shop/products/x-one-2023-pxone23-8436603192774-813469.jpg?v=1689844438&width=650", 6);
let equation = new racket("EQUATION Advanced", 149.95, "https://noxsport.es/cdn/shop/products/equation-advanced-pequadvd-8436603195928-123851.jpg?v=1695157690&width=650", 6);
let packat = new racket("Pack AT Genius LTD 2024 - Agustín Tapia LIMITED EDITION", 399.00, "https://noxsport.es/cdn/shop/products/pack-at-genius-ltd-2024-agustin-tapia-limited-edition-packpatltdd-8436603195805-186079.jpg?v=1699437978&width=650", 6);
let tl10 = new racket("TL10 Future 2024. La pala de Tino Libaak", 244.95, "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT4_h0qpQRZf9CwxOq-h13OuRPGoI-qlDfhvpKYTyyMLdbLJN7T1GNGoskzyWlqo3EGBwo-ciPGzIbY8N0QRtk6TxSESTuTc2wmZ1Mm4dr4M44cPkxdLNAOErE6UIM64C_WEPeVFB8&usqp=CAchttps://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTe-tv4lbVBWTvEcXKrHppn2IrTjm2N-JXjPT5l48190Z94I9eMpouISAJ3DDUZgcmKVa8YB_Q5JfWz0_Bx47JG5rZCIrDH4p9g1EtritB1u5OdRcMv1BozZBJ0qeEkC-0VzNu4gBs&usqp=CAchttps://noxsport.com/cdn/shop/products/tl10-future-2024-la-pala-de-tino-libaak-ptl10fut-8436603195898-707562.jpg?v=1707773049&width=700", 6);

let noxRackets = [at10, ml10, xOne, equation, packat, tl10];
let brandRackets = [];

export function addRacket(brandName, racketName, racketPrice, racketImage, racketUnits) {
    let racketInstance = new racket(racketName, racketPrice, racketImage, racketUnits);
    let nombreMarca = marcas.get(brandName);
    nombreMarca.brandRackets.push(racketInstance);
}


export class brand {
    constructor(brandName, brandYear, brandFounder, brandImage, brandWeb, brandPlayers, brandRackets) {
        this.brandName = brandName;
        this.brandYear = brandYear;
        this.brandFounder = brandFounder;
        this.brandImage = brandImage;
        this.brandWeb = brandWeb;
        this.brandPlayers = brandPlayers;
        this.brandRackets = brandRackets || [];
    }
}

let nox = new brand("Nox", 2009, "Jesus Ballvé", "https://www.setpointchile.cl/cdn/shop/collections/3.png?v=1675371060", "https://noxsport.es/", " Miguel Lamperti, Agustín Tapia, Tino Libaak, Leo Augsburger", [at10, ml10, xOne, equation, packat, tl10]);
let siux = new brand("Siux", 2012, "Marcos Sánchez", "https://palasdepadel10.com/wp-content/uploads/2018/10/SIUX-palas-padel-300.jpg", "https://www.siuxpadel.com/", "Franco Stupaczuk, Cristian Gutiérrez");
let bullpadel = new brand("Bullpadel", 1995, "Jorge García Caballero", "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_256,pg_1,t_base_params,w_256/v1489071634/avatars/000/132/519/132519-original.jpg?1489071634", "https://www.bullpadel.com/es/", "Maxi Sanchez");
let babolat = new brand("Babolat", 1875, "Pierre Babolat", "https://www.zonadepadel.es/c/97-category_header_pic/palas-de-padel-babolat.jpg", "https://www.babolat.com/es/?gad_source=1&gclid=CjwKCAiAg9urBhB_EiwAgw88mWjtzC0VdGOROWgCutstrCeDchs06rX_YsU-R8UrwoGhTcrEPsEG9RoC2wMQAvD_BwE", "Juan Lebrón", brandRackets);
let adidas = new brand("Adidas", 2013, "Adi Dassler", "https://images-na.ssl-images-amazon.com/images/S/abs-image-upload-na/0/AmazonStores/A1RKKUPIHCS9HS/8f698bd583b2fa7aad66912c988d2a17.w800.h800.jpg", "https://allforpadel.com/es/", "Alejandro Galán");
let starvie = new brand("Starvie", 2002, "Jorge Gómez de la Vega y Javier de la Chica", "https://www.elcorteingles.es/centroscomerciales/uploads/brand/logo/4903/STARVIE.png", "https://www.starvie.com/es/", "Javi Garrido");
let head = new brand("Head", 1960, "Howard Head", "https://fraguru.com/mdimg/dizajneri/o.4945.jpg", "https://www.head.com/es_ES/padel.html", "Arturo Coello");
let dunlop = new brand("Dunlop", 1909, "John Boyd Dunlop", "https://federacionnavarradepadel.com/wp-content/uploads/2022/08/485fc0213bd8b8df4ffe0264be4418a5.jpg", "https://dunlopsports.com/es/padel/", "Ramiro Moyano");
let royal = new brand("Royal Padel", 19901, "Francisco Mendoza", "https://blog.streetpadel.com/wp-content/uploads/logo-marca-451.jpg", "https://royalpadel.com/", "Fede Chingotto");


let marcas = new Map();
marcas.set("Nox", nox);
marcas.set("Siux", siux);
marcas.set("Bullpadel", bullpadel);
marcas.set("Babolat", babolat);
marcas.set("Adidas", adidas);
marcas.set("Starvie", starvie);
marcas.set("Head", head);
marcas.set("Dunlop", dunlop);
marcas.set("Royal Padel", royal);


export function getBrand(brandName) {
    let brand = marcas.get(brandName);
    return {
        brandName: brand.brandName,
        brandYear: brand.brandYear,
        brandFounder: brand.brandFounder,
        brandImage: brand.brandImage,
        brandPlayers: brand.brandPlayers,
        brandWeb: brand.brandWeb,
        brandRackets: brand.brandRackets
    };
}

export function isBrand(brandName) {
    return marcas.has(brandName);
}


export function editBrand(brandName, brandYear, brandFounder, brandImage, brandWeb, brandPlayers) {
    marcas.get(brandName);
    marcas.brandName = brandName;
    marcas.brandYear = brandYear;
    marcas.brandFounder = brandFounder;
    marcas.brandImage = brandImage;
    marcas.brandWeb = brandWeb;
    marcas.brandPlayers = brandPlayers;
    return brand;
}

export function addBrand(brandName, brandYear, brandFounder, brandImage, brandWeb, brandPlayers) {
    let brandInstance = new brand(brandName, brandYear, brandFounder, brandImage, brandWeb, brandPlayers, []);
    marcas.set(brandName, brandInstance);
}

export function deleteBrand(brandName) {
    marcas.delete(brandName);
}

export default marcas;
