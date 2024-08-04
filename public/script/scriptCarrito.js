const cartInfo = document.querySelector('.cartProducts');
const rowProduct = document.querySelector('.rowProducts');

const productsList = document.querySelectorAll('.carritoCompra');

let allProducts = [];

const valorTotal = document.querySelector('.totalPayment');
console.log(valorTotal);

const countProducts = document.querySelector('.productsCounter');

const cartEmpty = document.querySelector('.emptyCart');
const cartTotal = document.querySelector('.cartTotal');

let total = 0;
let totalOfProducts = 0;

cartInfo.innerHTML = `
    <div class="cartEmpty">
        <p class="emptyCart">El carrito está vacio</p>
    </div>
`;


// ----------------- Agregar productos al carrito -----------------
[...productsList].map(carritoBoton => {
    carritoBoton.addEventListener('click', e => {

        const product = e.target.parentElement.parentElement.parentElement;
        console.log(product);

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('.parrafoPala').innerText,
            price: product.querySelector('.precioPala').innerText,
        };

        const exits = allProducts.some(
            product => product.title === infoProduct.title
        );

        if (exits) {
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }
        total = (total + (infoProduct.quantity * parseFloat(infoProduct.price)));
        totalOfProducts = totalOfProducts + infoProduct.quantity;
        showHTML(totalOfProducts, total);
        establishCounts(totalOfProducts, total);
        setTotals(totalOfProducts, total)
    });
})

// ----------------- Mostrar productos en el carrito -----------------
const showHTML = (totalOfProducts, total) => {
    cartInfo.innerHTML = '';

    if (allProducts.length == 0) {
        cartTotal.classList.add('hidden');
        cartInfo.innerHTML = `
            <div class="cartEmpty">
                <p class="emptyCart">El carrito está vacio</p>
            </div>
        `
    } else {
        allProducts.forEach(product => {
            const productDiv = `
            <div class="infoCartProduct">
                <span class="productCartCount">${product.quantity}</span>
                <p class="productTitleCart">${product.title}</p>
                <span class="productPriceCart">${product.price}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="iconClose" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            `

            cartInfo.insertAdjacentHTML('beforeend', productDiv);

        });
    }

};

// ----------------- Establecer totales -----------------
function setTotals(productsTotal, totalAmount) {
    totalOfProducts = productsTotal;
    total = totalAmount
}

// ----------------- Establecer totales -----------------
function establishCounts(totalOfProducts, total) {
    let finalTotalAmount = Math.max(0, total.toFixed(2))
    valorTotal.innerText = `${finalTotalAmount}`;
    countProducts.innerText = `${totalOfProducts}`;
}


// ----------------- Eliminar productos del carrito -----------------
rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('iconClose')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;
        const productPrice = parseFloat(product.querySelector('.productPriceCart').textContent);

        let removedProduct;
        allProducts = allProducts.filter(product => {
            if (product.title !== title) {
                return true;
            } else {
                removedProduct = product;
                return false;
            }
        });

        product.remove();

        totalOfProducts = totalOfProducts - removedProduct.quantity;
        total = total - (removedProduct.quantity * productPrice);

        valorTotal.innerText = `${total}`;
        countProducts.innerText = `${totalOfProducts}`;

        if (allProducts.length === 0) {
            cartInfo.innerHTML = `
                <div class="cartEmpty">
                    <p class="emptyCart">El carrito está vacío</p>
                </div>
            `;
            cartTotal.classList.add('hidden');
        }
        establishCounts(totalOfProducts, total)
    }
});