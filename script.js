// Function to update quantity in the cart
function updateQuantity(productName, price, action) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = cart.find(item => item.name === productName);

    if (product) {
        if (action === 'increase') {
            product.quantity += 1;
        } else if (action === 'decrease' && product.quantity > 0) {
            product.quantity -= 1;
        }

        if (product.quantity === 0) {
            cart = cart.filter(item => item.name !== productName);
        }
    } else if (action === 'increase') {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    document.getElementById(`quantity-${productName}`).textContent = product ? product.quantity : 0;
    updateCart();
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
        li.textContent = `${item.name} x ${item.quantity} - $${item.price * item.quantity}`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    totalPrice.textContent = `Total: $${total}`;
}

if (document.getElementById('cart-items')) {
    updateCart();
}

// Checkout function
function checkout() {
    alert('Thank you for shopping with us! Note: This is a testing website, no real purchase has been made.');
    localStorage.removeItem('cart');
    updateCart();
}
