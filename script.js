// Function to add a product to the cart
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart.`);
}

// Function to update the cart display on the cart page
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    
    totalPrice.textContent = `Total: $${total}`;
}

// Function to clear the cart after checkout
function checkout() {
    alert('Thank you for your purchase! This is just a testing website, no real transaction has occurred.');
    localStorage.removeItem('cart');
    window.location.href = 'checkout.html';
}

// Call updateCart function when the cart page is loaded
if (document.getElementById('cart-items')) {
    updateCart();
}
