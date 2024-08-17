// Function to update quantity in the cart
function updateQuantity(productName, price, action) {
    // Retrieve cart from localStorage or initialize it
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = cart.find(item => item.name === productName);

    if (product) {
        if (action === 'increase') {
            product.quantity += 1;
        } else if (action === 'decrease' && product.quantity > 0) {
            product.quantity -= 1;
        }
        
        // If quantity reaches 0, remove the item from the cart
        if (product.quantity === 0) {
            cart = cart.filter(item => item.name !== productName);
        }
    } else if (action === 'increase') {
        // Add new product to the cart
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    // Update the cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the quantity display
    document.getElementById(`quantity-${productName}`).textContent = product ? product.quantity : 0;

    // Update the cart display on the cart page
    updateCart();
}

// Function to update the cart display on the cart page
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cartItems.innerHTML = ''; // Clear existing items

    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x ${item.quantity} - $${item.price * item.quantity}`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    // Update total price
    totalPrice.textContent = `Total: $${total}`;
}

// Function to handle the checkout process
function checkout() {
    alert('Thank you for shopping with us! Note: This is a testing website, no real purchase has been made.');
    localStorage.removeItem('cart');
    window.location.href = 'checkout.html';
}

// Ensure the cart is updated when the cart page is loaded
if (document.getElementById('cart-items')) {
    updateCart();
}
