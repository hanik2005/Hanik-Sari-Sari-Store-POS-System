const receipt = JSON.parse(localStorage.getItem("currentReceipt"));

const receiptDiv = document.getElementById("receipt");

if (!receipt) {

    receiptDiv.innerHTML = "<h2>No receipt found.</h2>";

} else {

    let totalItems = 0;

    let rows = "";

    receipt.items.forEach(item => {

        const subtotal = item.product_price * item.quantity;

        totalItems += item.quantity;

        rows += `
        <tr>
            <td>${item.product_name}</td>
            <td>${item.quantity}</td>
            <td>₱${item.product_price}</td>
            <td>₱${subtotal}</td>
        </tr>
        `;

    });

    receiptDiv.innerHTML = `
        <div class="receipt-header">

            <h1>Hanik Sari-Sari Store</h1>

            <p>Official Receipt</p>

        </div>

        <hr>

        <div class="receipt-info">

            <p><strong>Transaction #:</strong> ${receipt.transactionID}</p>

            <p><strong>Customer:</strong> ${receipt.customerName}</p>

            <p><strong>Date:</strong> ${receipt.date}</p>

        </div>

        <table>


            <colgroup>

                <col style="width:55%">

                <col style="width:15%">

                <col style="width:15%">

                <col style="width:15%">

            </colgroup>

            <thead>

                <tr>

                    <th>Item</th>

                    <th>Qty</th>

                    <th>Price</th>

                    <th>Subtotal</th>

                </tr>

            </thead>

            <tbody>

                ${rows}

            </tbody>

        </table>

        <hr>

        <div class="summary">

            <p>Total Items <span>${totalItems}</span></p>

            <p>Total <span>₱${receipt.total.toFixed(2)}</span></p>

            <p>Payment <span>₱${receipt.payment.toFixed(2)}</span></p>

            <p>Change <span>₱${receipt.change.toFixed(2)}</span></p>

        </div>

        <hr>

        <div class="footer">

            <h2>Thank You!</h2>

            <p>Please Come Again</p>

        </div>
    `;

}