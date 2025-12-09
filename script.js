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
let filteredData = Data;

// Function to display products based on search button click
searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent form from refreshing the page

    const query = searchInput.value.trim().toLowerCase();

    filteredData = Data.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.type.toLowerCase().includes(query)
    );

    displayProducts();
});
