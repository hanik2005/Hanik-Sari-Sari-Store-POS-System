const transactions = [];

let currentSale = [];

let transactionID = 1;

let totalDue = 0;


let category;

const groceryItems = [
  { product_id: 1, product_name: "Dried Mangoes (200g)", product_price: 180, image: "images/1.jpg", category: "Snacks" },//
  { product_id: 2, product_name: "Banana Chips (200g)", product_price: 120, image: "images/2.jpg", category: "Snacks" },//
  { product_id: 3, product_name: "Tablea Chocolate (250g)", product_price: 200, image: "images/3.jpg", category: "Sweets & Desserts" },//
  { product_id: 4, product_name: "Coconut Oil (500ml)", product_price: 180, image: "images/4.jpg", category: "Cooking Essentials" },//
  { product_id: 5, product_name: "Mango Jam (250g)", product_price: 160, image: "images/5.jpg", category: "Sweets & Desserts" },//
  { product_id: 6, product_name: "Peanut Brittle (200g)", product_price: 150, image: "images/6.jpg", category: "Snacks" },//
  { product_id: 7, product_name: "Cashew Nuts (250g)", product_price: 280, image: "images/7.jpg", category: "Snacks" },//
  { product_id: 8, product_name: "Philippine Coffee Beans (250g)", product_price: 320, image: "images/8.jpg", category: "Beverages" },//
  { product_id: 9, product_name: "Native Vinegar (500ml)", product_price: 120, image: "images/9.jpg", category: "Condiments & Seasonings" },//
  { product_id: 10, product_name: "Philippine Honey (250ml)", product_price: 250, image: "images/10.jpg", category: "Cooking Essentials" },//
  { product_id: 11, product_name: "Coconut Sugar (500g)", product_price: 180, image: "images/11.jpg", category: "Condiments & Seasonings" },//
  { product_id: 12, product_name: "Rice Crackers (200g)", product_price: 100, image: "images/12.jpg", category: "Snacks" },//
  { product_id: 13, product_name: "Salted Fish (Danggit, 250g)", product_price: 220, image: "images/13.jpg", category: "Seafood" },//
  { product_id: 14, product_name: "Longganisa (Frozen, 500g)", product_price: 280, image: "images/14.jpg", category: "Meat & Poultry" },//
  { product_id: 15, product_name: "Tocino (Frozen, 500g)", product_price: 300, image: "images/15.jpg", category: "Meat & Poultry" },//
  { product_id: 16, product_name: "Chicharon (100g)", product_price: 120, image: "images/16.jpg", category: "Snacks" },//
  { product_id: 17, product_name: "Pandesal Pack (12 pcs)", product_price: 80, image: "images/17.jpg", category: "Bakery" },//
  { product_id: 18, product_name: "Native Brown Rice (1kg)", product_price: 90, image: "images/18.jpg", category: "Rice & Grains" },//
  { product_id: 19, product_name: "White Rice (1kg)", product_price: 70, image: "images/19.jpg", category: "Rice & Grains" },//
  { product_id: 20, product_name: "Corn Coffee (250g)", product_price: 150, image: "images/20.jpg", category: "Beverages" },//
  { product_id: 21, product_name: "Coconut Water (1L)", product_price: 100, image: "images/21.jpg", category: "Beverages" },//
  { product_id: 22, product_name: "Calamansi Juice (1L)", product_price: 120, image: "images/22.jpg", category: "Beverages" },//
  { product_id: 23, product_name: "Guava Jelly (250g)", product_price: 160, image: "images/23.jpg", category: "Sweets & Desserts" },//
  { product_id: 24, product_name: "Bagoong (250g)", product_price: 90, image: "images/24.jpg", category: "Condiments & Seasonings" },//
  { product_id: 25, product_name: "Fish Sauce (Patis, 500ml)", product_price: 110, image: "images/25.jpg", category: "Condiments & Seasonings" },//
  { product_id: 26, product_name: "Soy Sauce (500ml)", product_price: 95, image: "images/26.jpg", category: "Condiments & Seasonings" },//
  { product_id: 27, product_name: "Native Salt (250g)", product_price: 50, image: "images/27.jpg", category: "Condiments & Seasonings" },//
  { product_id: 28, product_name: "Coconut Milk Powder (200g)", product_price: 140, image: "images/28.jpg", category: "Cooking Essentials" },//
  { product_id: 29, product_name: "Instant Noodles (Pack of 6)", product_price: 75, image: "images/29.jpg", category: "Instant Foods" },//
  { product_id: 30, product_name: "Native Cheese (Kesong Puti, 250g)", product_price: 180, image: "images/30.jpg", category: "Dairy & Eggs" },//
  { product_id: 31, product_name: "Eggs (Dozen)", product_price: 90, image: "images/31.jpg", category: "Dairy & Eggs" },//
  { product_id: 32, product_name: "Fresh Tilapia (1kg)", product_price: 160, image: "images/32.jpg", category: "Seafood" },//
  { product_id: 33, product_name: "Fresh Bangus (Milkfish, 1kg)", product_price: 180, image: "images/33.jpg", category: "Seafood" },//
  { product_id: 34, product_name: "Fresh Chicken (1kg)", product_price: 200, image: "images/34.jpg", category: "Meat & Poultry" },//
  { product_id: 35, product_name: "Fresh Pork (1kg)", product_price: 280, image: "images/35.jpg", category: "Meat & Poultry" },//
  { product_id: 36, product_name: "Fresh Beef (1kg)", product_price: 350, image: "images/36.jpg", category: "Meat & Poultry" },//
  { product_id: 37, product_name: "Native Vegetables Basket", product_price: 250, image: "images/37.jpg", category: "Vegetables" },//
  { product_id: 38, product_name: "Bananas (1kg)", product_price: 60, image: "images/38.jpg", category: "Fresh Fruits" },//
  { product_id: 39, product_name: "Mangoes (1kg)", product_price: 120, image: "images/39.jpg", category: "Fresh Fruits" },//
  { product_id: 40, product_name: "Papaya (1kg)", product_price: 70, image: "images/40.jpg", category: "Fresh Fruits" },//
  { product_id: 41, product_name: "Pineapple (Whole)", product_price: 90, image: "images/41.jpg", category: "Fresh Fruits" },//
  { product_id: 42, product_name: "Coconut (Whole)", product_price: 50, image: "images/42.jpg", category: "Fresh Fruits" },//
  { product_id: 43, product_name: "Native Peanuts (250g)", product_price: 100, image: "images/43.jpg", category: "Snacks" },//
  { product_id: 44, product_name: "Camote (Sweet Potato, 1kg)", product_price: 80, image: "images/44.jpg", category: "Vegetables" },//
  { product_id: 45, product_name: "Ube Halaya (250g)", product_price: 180, image: "images/45.jpg", category: "Sweets & Desserts" },//
  { product_id: 46, product_name: "Leche Flan (Whole)", product_price: 250, image: "images/46.jpg", category: "Sweets & Desserts" },//
  { product_id: 47, product_name: "Bibingka (Whole)", product_price: 200, image: "images/47.jpg", category: "Sweets & Desserts" },//
  { product_id: 48, product_name: "Puto (Dozen)", product_price: 120, image: "images/48.jpg", category: "Sweets & Desserts" },//
  { product_id: 49, product_name: "Kakanin Sampler Pack", product_price: 300, image: "images/49.jpg", category: "Sweets & Desserts" },//
  { product_id: 50, product_name: "Native Chocolate Drink (Sikwate, 250ml)", product_price: 90, image: "images/50.jpg", category: "Beverages" }
];

const paymentInput = document.getElementById("payment");
const changeText = document.getElementById("change");

paymentInput.addEventListener("input", () => {

    const payment = Number(paymentInput.value) || 0;

    const change = payment - totalDue;

    changeText.textContent = change >= 0 ? change.toFixed(2) : "0.00";

});





const categorySelect = document.getElementById("categorySelect");

categorySelect.innerHTML = `
    <option value="all">All Categories</option>
`;

const categories = [...new Set(groceryItems.map(item => item.category))]; // it creates a new set that 
// has uniques categories deleting the same categories, the dots converts object set into regular array

categories.forEach(category => {

    categorySelect.innerHTML += `
        <option value="${category}">
            ${category}
        </option>
    `;

});

const productList = document.getElementById("productList");

function displayProducts(category = "all") {

    productList.innerHTML = "";


    //SEARCH VALUE
    const search = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const filteredProducts = groceryItems.filter(product => {

        const matchCategory =
            category === "all" ||
            product.category === category;

        //RETURN SEARCH VALUE
        const matchSearch =
            product.product_name
            .toLowerCase()
            .includes(search);


        //RETURN EITHER THE MATCH CATEGORY OR MATCH SEARCH
        return matchCategory && matchSearch;

    });

    filteredProducts.forEach(product => {

        productList.innerHTML += `
        <div class="product-card">

            <img src="${product.image}" alt="${product.product_name}">

            <h3>${product.product_name}</h3>

            <p>${product.category}</p>

            <h2>₱${product.product_price}</h2>

            <button onclick="selectProduct(${product.product_id})">
                Add
            </button>

        </div>
        `;

    });

    // show message if no products match
    if(filteredProducts.length === 0){

        productList.innerHTML = `
            <h2 style="grid-column:1/-1;text-align:center;">
                No products found.
            </h2>
        `;

    }

}
function selectProduct(product_id){
    const product = groceryItems.find(item => item.product_id === product_id);

    const existing = currentSale.find(item => item.product_id === product_id);

    if(existing){

        existing.quantity++;

    }else{

        currentSale.push({

            ...product,

            quantity:1

        });

    }

    console.log(currentSale);
    updateCurrentSale();
}

function updateCurrentSale() {

    const currentSaleItems = document.getElementById("currentSaleItems");

    currentSaleItems.innerHTML = "";

    totalDue = 0;

    currentSale.forEach(item => {

        const subtotal = item.product_price * item.quantity;

        totalDue += subtotal;

        currentSaleItems.innerHTML += `
            <div class="currentSale-item">

                <img src="${item.image}" alt="${item.product_name}">

                <div class="currentSale-info">

                    <h4>${item.product_name}</h4>

                    <p>₱${item.product_price} x ${item.quantity} = ₱${subtotal}</p>

                    <div class="quantity-controls">

                        <button onclick="decreaseQuantity(${item.product_id})">−</button>

                        <span>${item.quantity}</span>

                        <button onclick="increaseQuantity(${item.product_id})">+</button>

                    </div>

                    <button class="remove-btn"
                        onclick="removeItem(${item.product_id})">
                        🗑 Remove
                    </button>

                </div>

            </div>
        `;

    });

    document.getElementById("currentSaleTotal").textContent =
        totalDue.toFixed(2);
}
function increaseQuantity(productID){

    const item = currentSale.find(product => product.product_id === productID);

    if(item){

        item.quantity++;

        updateCurrentSale();

    }

}
function decreaseQuantity(productID){

    const item = currentSale.find(product => product.product_id === productID);

    if(!item) return;

    item.quantity--;

    if(item.quantity <= 0){

        removeItem(productID);

        return;

    }

    updateCurrentSale();

}
function removeItem(productID){

    currentSale = currentSale.filter(product => product.product_id !== productID);

    updateCurrentSale();

}
//====================//STARTING POINT// ========================
categorySelect.addEventListener("change", function () {

    
    displayProducts(this.value);

});


//SEARCH VALUE
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

    displayProducts(categorySelect.value);

});


document.addEventListener("DOMContentLoaded", ()=>{
    console.log("hello");
    category = "all";
    displayProducts(category);
})
//====================//STARTING POINT// ========================




document.getElementById("checkoutBtn").addEventListener("click", () => {

    const customerName =
    document.getElementById("customerName").value.trim() ||
    "Walk-in Customer";

    if (currentSale.length === 0) {

        alert("No products selected.");
        return;

    }

    const payment = Number(document.getElementById("payment").value);

    if (isNaN(payment) || payment < totalDue) {

        alert("Insufficient payment.");
        return;

    }

    const change = payment - totalDue;

    let transactions =
        JSON.parse(localStorage.getItem("transactions")) || [];

    const transaction = {

        transactionID: transactions.length + 1,

        customerName: customerName,

        date: new Date().toLocaleString(),

        items: currentSale.map(item => ({ ...item })),

        total: totalDue,

        payment: payment,

        change: change

    };

    localStorage.setItem(
        "currentReceipt",
        JSON.stringify(transaction)
    );

    transactions.push(transaction);

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

    window.location.href = "receipt.html";

});