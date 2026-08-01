const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const report = document.getElementById("report");

let totalSales = 0;

// Store quantity sold per product
const productSales = {};

if(transactions.length === 0){

    report.innerHTML = "<h2>No transactions found.</h2>";

}else{

    transactions.forEach(transaction=>{

        totalSales += transaction.total;

        report.innerHTML += `
        <div class="transaction">

        <h2>🧾 Transaction #${transaction.transactionID}</h2>

        <p><strong>Date:</strong> ${transaction.date}</p>

        <p><strong>Customer:</strong> ${transaction.customerName}</p>
        `;

        transaction.items.forEach(item=>{

            // Count quantities sold
            if(productSales[item.product_name]){

                productSales[item.product_name] += item.quantity;

            }else{

                productSales[item.product_name] = item.quantity;

            }

            report.innerHTML += `
            <div class="item">

            <span>${item.product_name} × ${item.quantity}</span>

            <span>₱${(item.product_price * item.quantity).toFixed(2)}</span>

            </div>
            `;

        });

        report.innerHTML += `
        <div class="total">

        Total: ₱${transaction.total.toFixed(2)}

        </div>

        </div>
        `;

    });

    // Find most purchased product
    let mostPurchased = "";

    let highestQuantity = 0;

    for(const product in productSales){

        if(productSales[product] > highestQuantity){

            highestQuantity = productSales[product];

            mostPurchased = product;

        }

    }

    report.innerHTML += `

    <div class="summary">

    <h2>📈 Sales Summary</h2>

    <p><strong>Total Sales:</strong> ₱${totalSales.toFixed(2)}</p>

    <p><strong>Most Purchased Product:</strong> ${mostPurchased}</p>

    <p><strong>Total Quantity Sold:</strong> ${highestQuantity}</p>

    <p><strong>Total Transactions:</strong> ${transactions.length}</p>

    </div>

    `;

}

document.getElementById("removeTransactions").addEventListener("click", ()=>{

    if(confirm("Are you sure you want to remove all transactions?")){

        localStorage.removeItem("transactions");

        location.reload();

    }

});