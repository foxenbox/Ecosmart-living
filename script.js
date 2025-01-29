let cart = [];
function addToCart(product, price) {
    cart.push({product, price});
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById('cart-items');
    let total = 0;
    cartItems.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.innerText = `${item.product} - €${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    document.getElementById('cart-total').innerText = total.toFixed(2);
}

function checkout() {
    window.location.href = "checkout.html";
}

document.addEventListener("DOMContentLoaded", function() {
    const paymentForm = document.getElementById("payment-form");
    if (paymentForm) {
        paymentForm.addEventListener("submit", function(event) {
            event.preventDefault();
            window.location.href = "order-success.html";
        });
    }
});
