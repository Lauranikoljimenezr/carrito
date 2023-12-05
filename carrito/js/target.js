const products = [
    { id: "product-01", product: "Delineador", price: 25000, image: "./image/delineador.jpg", "data-category": "Producto de ojos",quantity:10 },
    { id: "product-02", product: "Base", price: 200000, image: "./image/base 2.png", "data-category": "Base y correctores",quantity:9 },
    { id: "product-03", product: "Brocha ovalada", price: 15499, image: "./image/brocha ovalada.jpg", "data-category": "Brochas y herramientas",quantity:12  },
    { id: "product-04", product: "Combo 4", price: 29499, image: "./image/nunu.webp", "data-category": "Brochas y herramientas",quantity:5},
    { id: "product-05", product: "Base lik", price: 25499, image: "./image/contorno.jpg", "data-category": "Base y correctores",quantity:9  },
    { id: "product-06", product: "Corrector", price: 10000, image: "./image/corrector.webp", "data-category": "Base y correctores" ,quantity:7 },
    { id: "product-07", product: "Brochas", price: 46499, image: "./image/brochas.jpg", "data-category": "Brochas y herramientas",quantity:3},
    { id: "product-08", product: "Fijador", price: 80000, image: "./image/fijador.jpg", "data-category": "Brochas y herramientas",quantity:8},
    { id: "product-09", product: "Pestañina", price: 30000, image: "./image/pestañina.png", "data-category": "Producto de ojos",quantity:7},
    { id: "product-10", product: "Combo 3", price: 100000, image: "./image/combo 3.png", "data-category": "Base y correctores",quantity:4},
    { id: "product-11", product: "Delineador de Labios", price: 20000, image: "./image/delineadores de labios.jpg", "data-category": "Labios",quantity:14},
    { id: "product-12", product: "Pomada ceja", price: 9800, image: "./image/pomada ceja.jpg", "data-category": "Producto de ojos",quantity:3},
    { id: "product-13", product: "Sombras Nude", price: 70499, image: "./image/sombras nut.jpg", "data-category": "Producto de ojos",quantity:20 },
    { id: "product-14", product: "Sombras", price: 50000, image: "./image/sombras.jpg", "data-category": "Producto de ojos",quantity:3},
    { id: "product-15", product: "Tinta", price: 5000, image: "./image/tinta.jpg", "data-category": "Labios" ,quantity:10},
    { id: "product-16", product: "Paleta", price: 90000, image: "./image/palee.jpg", "data-category": "Producto de ojos",quantity:11 },
    { id: "product-17", product: "Espoja", price: 40000, image: "./image/esponjas.jpg", "data-category": "Brochas y herramientas" ,quantity:8},
    { id: "product-18", product: "kit brochas", price: 150000, image: "./image/kit brochas.jpg", "data-category": "Brochas y herramientas",quantity:4 },
    { id: "product-19", product: "Cepillo cejas", price: 20000, image: "./image/cepillo cejas.jpg", "data-category": "Brochas y herramientas",quantity:4 },
    { id: "product-20", product: "Paleta colores", price: 150000, image: "./image/paleta colores.webp", "data-category": "Producto de ojos",quantity:9},
    { id: "product-21", product: "combo", price: 70000, image: "./image/combo 3.png", "data-category": "Brochas y herramientas",quantity:2 },
    { id: "product-22", product: "Sombra individual", price: 15000, image: "./image/sombra 3.jpg", "data-category": "Producto de ojos",quantity:8 },
    { id: "product-23", product: "Sombra inviduall Color", price: 15000, image: "./image/sombra 2.jpg", "data-category": "Producto de ojos",quantity:5 },
    { id: "product-24", product: "Brocha", price: 12000, image: "./image/brocha.jpg", "data-category": "Brochas y herramientas",quantity:7},
    { id: "product-25", product: "Gloss", price: 28000, image: "./image/glos.webp", "data-category": "Labios" ,quantity:4},
    { id: "product-26", product: "tten brochas", price: 100000, image: "./image/brochas.jpg", "data-category": "Brochas y herramientas",quantity:8 },
    { id: "product-27", product: "Encrespador", price: 20000, image: "./image/encrespador.avif", "data-category": "Brochas y herramientas",quantity:23},
    { id: "product-28", product: "Iluminador", price: 50000, image: "./image/iluminador.avif", "data-category": "Brochas y herramientas" ,quantity:7},
    { id: "product-29", product: "labial muak", price: 30000, image: "./image/labial.jpg", "data-category": "Labios" },
    { id: "product-30", product: "Base tinta", price: 100000, image: "./image/base tinta.webp", "data-category": "Base y correctores" ,quantity:6},

];
function createCard(product) {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-category", product['data-category']);

    const box = document.createElement("div");
    box.className = "box";

    const cardImg = document.createElement("div");
    cardImg.className = "card-img";
    const img = document.createElement("img");
    img.className = "img3";
    img.src = product.image;
    img.alt = product.product;
    cardImg.appendChild(img);

    const cardInfo = document.createElement("div");
    cardInfo.className = "card-info";
    const title = document.createElement("p");
    title.className = "text-title";
    title.textContent = product.product;
    const description = document.createElement("p");
    description.className = "text-body";
    description.textContent = "Product description and details";
    cardInfo.appendChild(title);
    cardInfo.appendChild(description);

    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";

    const cardd = document.createElement("div");
    cardd.className = "cardd";
    const price = document.createElement("span");
    price.className = "text-title";
    price.textContent = "$" + product.price + " COP";
    let cardButton = document.createElement("div");
    cardButton.className = "card-button";
    const button = document.createElement("button");
    button.className = "addCart";
    const imgButton = document.createElement("img");
    imgButton.className = "imgsize";
    imgButton.src = "image/carrito-de-compras.png";
    button.appendChild(imgButton);
    cardButton.appendChild(button);
    cardd.appendChild(price);
    cardd.appendChild(cardButton);

    const c = document.createElement("div");
    c.className = "c";
    const size = document.createElement("p");
    size.id = "size";
    size.textContent = "Disponible: " + product['quantity'];
    const spanAvailable = document.createElement("span");
    spanAvailable.className = "available";
    spanAvailable.setAttribute("data-id", product.id);
    const sizeCategory = document.createElement("div");
    sizeCategory.className = "sizeCategory";
    sizeCategory.textContent = "Category: " + product['data-category'];
    size.appendChild(spanAvailable);
    c.appendChild(size);
    c.appendChild(sizeCategory);

    card.appendChild(box);
    box.appendChild(cardImg);
    box.appendChild(cardInfo);
    box.appendChild(cardFooter);
    cardFooter.appendChild(cardd);
    cardFooter.appendChild(document.createElement("br"));
    cardFooter.appendChild(document.createElement("br"));
    cardFooter.appendChild(c);

    return card;
}

function displayProducts(productArray) {
    const container = document.getElementById("products-container");

  
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    productArray.forEach(product => {
        const card = createCard(product);
        container.appendChild(card);
    });
}

function sortProducts(order) {
    const sortedProducts = products.slice().sort((a, b) => {
        return order === 'desc' ? b.price - a.price : a.price - b.price;
    });

    displayProducts(sortedProducts);
}

document.addEventListener('DOMContentLoaded', function () {
    displayProducts(products);

    const target = Array.from(document.querySelectorAll('.card'));
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        target.forEach(tarjeta => {
            const title = tarjeta.querySelector('.text-title').textContent.toLowerCase();

            if (title.includes(searchTerm)) {
                tarjeta.style.display = 'block';
            } else {
                tarjeta.style.display = 'none';
            }
        });
    });
});