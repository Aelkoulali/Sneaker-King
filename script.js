// Product  DATA
const Data = [
    { id: 1, name: "Crayola", img: "Public/Products/Adidas/Crayola.png", brand: "Adidas", price: 100, type: "Basketball", isNew: false },
    { id: 2, name: "Lite Racer Adapt 4", img: "Public/Products/Adidas/Lite Racer Adapt 4.png", brand: "Adidas", price: 90, type: "Running", isNew: false },
    { id: 3, name: "Yeezy Boost 350", img: "Public/Products/Adidas/Yeezy Boost 350.png", brand: "Adidas", price: 230, type: "Fitness", isNew: true },
    { id: 4, name: "Yeezy 500", img: "Public/Products/Adidas/Yeezy 500.png", brand: "Adidas", price: 200, type: "Basketball", isNew: false },
    { id: 5, name: "Jordan 1", img: "Public/Products/Jordan/Jordan 1.png", brand: "Jordan", price: 125, type: "Basketball", isNew: false },
    { id: 6, name: "Jordan 4", img: "Public/Products/Jordan/Jordan 4.png", brand: "Jordan", price: 150, type: "Basketball", isNew: false },
    { id: 7, name: "Jordan 1 Retro", img: "Public/Products/Jordan/Jordan 1 Retro.png", brand: "Jordan", price: 135, type: "Basketball", isNew: true },
    { id: 8, name: "Jordan 11 Retro", img: "Public/Products/Jordan/Jordan 11 Retro.png", brand: "Jordan", price: 250, type: "Basketball", isNew: false },
    { id: 9, name: "Nike Revolution 6", img: "Public/Products/Nike/Nike revolution 6.png", brand: "Nike", price: 70, type: "Running", isNew: false },
    { id: 10, name: "Nike Kobe 6", img: "Public/Products/Nike/Nike Kobe 6.png", brand: "Nike", price: 250, type: "Basketball", isNew: true },
    { id: 11, name: "Nike Metcon 1", img: "Public/Products/Nike/Nike Metcon 1.png", brand: "Nike", price: 150, type: "Fitness", isNew: false },
    { id: 12, name: "Puma Axelion", img: "Public/Products/Puma/Puma Axelion.png", brand: "Puma", price: 60, type: "Fitness", isNew: false },
    { id: 13, name: "Puma Fusion Grip", img: "Public/Products/Puma/Puma Fusion Grip.png", brand: "Puma", price: 70, type: "Golf", isNew: false },
    { id: 14, name: "Skechers GOrun", img: "Public/Products/Skechers/Skechers GOrun.png", brand: "Skechers", price: 65, type: "Running", isNew: false },
    { id: 15, name: "Skechers Summits Training", img: "Public/Products/Skechers/Skechers Summits Training.png", brand: "Skechers", price: 70, type: "Fitness", isNew: false },
    { id: 16, name: "Skechers Edgeride", img: "Public/Products/Skechers/Skechers Edgeride.png", brand: "Skechers", price: 80, type: "Running", isNew: false },
    { id: 17, name: "UA Surge 4", img: "Public/Products/Under Armour/UA Surge 4.png", brand: "Under Armour", price: 80, type: "Running", isNew: false },
    { id: 18, name: "UA GS Curry", img: "Public/Products/Under Armour/UA GS Curry.png", brand: "Under Armour", price: 250, type: "Basketball", isNew: true },
    { id: 19, name: "UA Havoc 3", img: "Public/Products/Under Armour/UA Havoc 3.png", brand: "Under Armour", price: 180, type: "Basketball", isNew: false },
    { id: 20, name: "UA Charged 10", img: "Public/Products/Under Armour/UA Charged 10.png", brand: "Under Armour", price: 90, type: "Running", isNew: false }
];

// DOM Elements
const productContainer = document.getElementById("product-container");
const searchInput = document.getElementById("search-input");
const filterBrand = document.querySelector(".filter-brand");
const filterType = document.querySelector(".filter-type");
const filterPrice = document.querySelector(".filter-price");
const filterNew = document.querySelector(".filter-new");


// Generate Card 
function loadProducts(products) {
    productContainer.innerHTML = "";

    products.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("card-product");

        card.setAttribute("data-brand", p.brand.toLowerCase());
        card.setAttribute("data-type", p.type.toLowerCase());
        card.setAttribute("data-price", p.price);
        card.setAttribute("data-new", p.isNew);

        card.innerHTML = `
            <div class="card-image">
                <img src="${p.img}" alt="${p.name}" width="270" height="292">
            </div>
            <div class="description">
                <div class="card-title"><h6>${p.name}</h6></div>
                <div class="card-price">
                    <span>$${p.price}</span>
                    <button class="btn btn-primary btn-sm"><i class="fas fa-shopping-cart"></i></button>
                </div>
            </div>
        `;

        productContainer.appendChild(card);
    });
}

// Add Event Listener for btn btn-primary btn-sm when clicked show add to cart alert
productContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn-primary")) {
        alert("Product added to cart!");
    }
});

// Filter Function
function filterProducts() {
    const search = searchInput.value.toLowerCase();
    const brand = filterBrand.value.toLowerCase();
    const type = filterType.value.toLowerCase();
    const price = filterPrice.value;
    const newFilter = filterNew.value;

    const filtered = Data.filter(p => {
        const nameMatch = p.name.toLowerCase().includes(search);

        const brandMatch = brand ? p.brand.toLowerCase() === brand : true;
        const typeMatch = type ? p.type.toLowerCase() === type : true;

        let priceMatch = true;
        if (price === "under50") priceMatch = p.price < 100;
        if (price === "50to100") priceMatch = p.price >= 100 && p.price < 200;
        if (price === "over100") priceMatch = p.price >= 200;

        const newMatch = newFilter === "new" ? p.isNew === true : true;

        return nameMatch && brandMatch && typeMatch && priceMatch && newMatch;
    });

    loadProducts(filtered);
}


// Listeners
searchInput.addEventListener("input", filterProducts);
filterBrand.addEventListener("change", filterProducts);
filterType.addEventListener("change", filterProducts);
filterPrice.addEventListener("change", filterProducts);
filterNew.addEventListener("change", filterProducts);


// Initial Load
loadProducts(Data);
