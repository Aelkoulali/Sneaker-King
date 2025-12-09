// Declare list of products
const Data = [
    {
        id : 1,
        name : "Crayola",
        img: { "src": "Public/Products/Adidas/Crayola" },
        brand : "Adidas",
        price : "100",
        type : "Basketball",
        isNew : false,
    },
    {
        id : 2,
        name : "Lite Racer Adapt 4",
        img : { "src": "Public/Products/Adidas/Lite Racer Adapt 4" },
        brand : "Adidas",
        price : "90",
        type : "Running",
        isNew : false,
    },
    {
        id : 3,
        name : "Yeezy Boost 350",
        img : { "src": "Public/Products/Adidas/Yeezy Boost 350" },
        brand : "Adidas",
        price : "230",
        type : "Fitness",
        isNew : true,
    },
    {
        id : 4,
        name : "Yeezy 500",
        img : { "src": "Public/Products/Adidas/Yeezy 500" },
        brand : "Adidas",
        price : "200",
        type : "Basketball",
        isNew : false,
    },
    {
        id : 5,
        name : "Jordan 1",
        img : { "src": "Public/Products/Jordan/Jordan 1" },
        brand : "Jordan",
        price : "125",
        type : "Basketball",
        isNew : false,
    },
    {
        id : 6,
        name : "Jordan 4",
        img : { "src": "Public/Products/Jordan/Jordan 4" },
        brand : "Jordan",
        price : "150",
        type : "Basketball",
        isNew : false,
    },
    {
        id : 7,
        name : "Jordan 1 Retro",
        img : { "src": "Public/Products/Jordan/Jordan 1 Retro" },
        brand : "Jordan",
        price : "135",
        type : "Basketball",
        isNew : true,
    },
    {
        id : 8,
        name : "Jordan 11 Retro",
        img : { "src": "Public/Products/Jordan/Jordan 11 Retro" },
        brand : "Jordan",
        price : "250",
        type : "Basketball",
        isNew : false,
    },
    {
        id : 9,
        name : "Nike Ck Racer",
        img : { "src": "Public/Products/Nike/Nike Ck Racer" },
        brand : "Nike",
        price : "70",
        type : "Running",
        isNew : false,
    },
    {
        id : 10,
        name : "Nike Kobe 6",
        img : { "src": "Public/Products/Nike/Nike Kobe 6" },
        brand : "Nike",
        price : "250",
        type : "Basketball",
        isNew : true,
    },
    {
        id : 11,
        name : "Nike Metcon 1",
        img : { "src": "Public/Products/Nike/Nike Metcon 1" } ,
        brand : "Nike",
        price : "150",
        type : "Fitness",
        isNew : false,
    },
    {
        id : 12,
        name : "Puma Axelion",
        img : { "src": "Public/Products/Puma/Puma Axelion" },
        brand : "Puma",
        price : "60",
        type : "Fitness",
        isNew : false,
    },
    {
        id : 13,
        name : "Puma Fusion Grip",
        img : { "src": "Public/Products/Puma/Puma Fusion Grip" },
        brand : "Puma",
        price : "70",
        type : "Golf",
        isNew : false,
    },
    {
        id : 14,
        name : "Skechers GOrun",
        img : { "src": "Public/Products/Puma/Puma Fusion Grip" } ,
        brand : "Skechers",
        price : "65",
        type : "Running",
        isNew : false,
    },
    {
        id : 15,
        name : "Skechers Summits Training",
        img : { "src": "Public/Products/Skechers/Skechers Summits Training" } ,
        brand : "Skechers",
        price : "70",
        type : "Fitness",
        isNew : false,
    },
    {
        id : 16,
        name : "Skechers Edgeride",
        img : { "src": "Public/Products/Skechers/Skechers Edgeride" },
        brand : "Skechers",
        price : "80",
        type : "Running",
        isNew : false,
    },
    {
        id : 17,
        name : "UA Surge 4",
        img : { "src": "Public/Products/Under Armour/UA Surge 4" },
        brand : "Under Armour",
        price : "80",
        type : "Running",
        isNew : false,
    },
    {
        id : 18,
        name : "UA GS Curry",
        img : { "src": "Public/Products/Under Armour/UA GS Curry" },
        brand : "Under Armour",
        price : "250",
        type : "Basketball",
        isNew : true,
    },
    {
        id : 19,
        name : "UA HAVOC 3",
        img :  { "src": "Public/Products/Under Armour/UA HAVOC 3" },
        brand : "Under Armour",
        price : "180",
        type : "Basketball",
        isNew : false,
    },
    {
        id : 20,
        name : "UA Charged 10",
        img :  { "src": "Public/Products/Under Armour/UA Charger 10" },
        brand : "Under Armour",
        price : "90",
        type : "Running",
        isNew : false,
    },
];

// Declare variables
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const cardProductContainer = document.getElementById("container-cards");
const filterBrand = document.querySelector(".filter-brand");
const filterType = document.querySelector(".filter-type");
const filterPrice = document.querySelector(".filter-price");
const filterNew = document.querySelector(".filter-new");

// Get All product cards
const productCards = document.querySelectorAll(".card-product");

// Function to filter and display products
function filterProducts() {
    const query = searchInput.value.toLowerCase();
    const brand = filterBrand.value;
    const type = filterType.value;
    const price = filterPrice.value;
    const isNew = filterNew.checked;

    productCards.forEach(card => {
        const productName = card.querySelector(".card-title h6").textContent.toLowerCase();
        const productBrand = card.querySelector(".card-brand")? card.querySelector(".card-brand").textContent.toLowerCase() : "";
        const productType = card.querySelector(".card-type")? card.querySelector(".card-type").textContent.toLowerCase() : "";
        const productPrice = parseFloat(card.querySelector(".card-price").textContent.replace("$", ""));
        const productIsNew = card.querySelector(".card-new") ? true : false;

        // Deafult vidibility is hidden
        let isVisible = true;

        // Apply search filter (name, brand,type)
        if (query && !productName.includes(query) && !productBrand.includes(query) && !productType.includes(query)) {
            isVisible = false;
        }
        // Apply brand filter
        if (brand && productBrand !== brand.toLowerCase()) {
            isVisible = false;
        }
        // Apply type filter
        if (type && productType !== type.toLowerCase()) {
            isVisible = false;
        }
        // Apply price filter
        if (selectedPrice === "under50" && productPrice >= 100) {
            isVisible = false;
            } else if (selectedPrice === "50to100" && (productPrice < 100 || productPrice >= 200)) {
            isVisible = false;
            } else if (selectedPrice === "over100" && productPrice < 200) {
            isVisible = false;
        }
        // Apply new filter
        if (selectedNew == "new" && !isNew) {
            isVisible = false;
        }

        // Set card visibility
        card.style.display = isVisible ? "block" : "none";
    });
}

// Search event listener
searchForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    filterProducts(); // Apply filter when search form is submitted
});