async function fetchOrders() {
    const res = await fetch('/api/orders');
    const orders = await res.json();
    let html = '<table><tr><th>Product</th><th>Qty</th><th>Price</th><th>Status</th></tr>';
    orders.forEach(o => {
        html += `<tr><td>${o.product}</td><td>${o.quantity}</td><td>${o.price}</td><td>${o.status}</td></tr>`;
    });
    html += '</table>';
    document.getElementById('orders').innerHTML = html;
}

window.onload = fetchOrders;
