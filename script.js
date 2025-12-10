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

// Filter event listeners
filterBrand.addEventListener("change", filterProducts);
filterType.addEventListener("change", filterProducts);
filterPrice.addEventListener("change", filterProducts);
filterNew.addEventListener("change", filterProducts);

// Initial filter on page load
filterProducts();