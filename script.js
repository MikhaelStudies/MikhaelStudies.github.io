<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medivive - Products</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Medivive - Products</h1>
    <div class="products-container">

        <!-- Example Product -->
        <div class="product">
            <img src="images/paracetamol.jpg" alt="Paracetamol">
            <h3>Paracetamol</h3>
            <p>Price: $5</p>
            <p>Relieves pain and fever.</p>
            <div class="quantity-control">
                <button class="quantity-btn" onclick="updateQuantity('Paracetamol', 5, 'decrease')">-</button>
                <span id="quantity-Paracetamol">0</span>
                <button class="quantity-btn" onclick="updateQuantity('Paracetamol', 5, 'increase')">+</button>
            </div>
        </div>

        <!-- Additional products go here -->

        <!-- Cart Section -->
        <div class="cart-container">
            <h2>Your Cart</h2>
            <ul id="cart-items"></ul>
            <p id="total-price">Total: $0</p>
            <button class="cart-button" onclick="checkout()">Checkout</button>
        </div>
    </div>

    <script>
        // Cart object to store selected items
        const cart = {};

        // Function to update quantity of a product
        function updateQuantity(productName, price, action) {
            const quantityElement = document.getElementById('quantity-' + productName);
            let quantity = parseInt(quantityElement.textContent);

            if (action === 'increase') {
                quantity++;
            } else if (action === 'decrease' && quantity > 0) {
                quantity--;
            }

            quantityElement.textContent = quantity;

            // Update cart
            if (quantity > 0) {
                cart[productName] = { price, quantity };
            } else {
                delete cart[productName];
            }

            updateCart();
        }

        // Function to update the cart display
        function updateCart() {
            const cartItemsElement = document.getElementById('cart-items');
            const totalPriceElement = document.getElementById('total-price');
            cartItemsElement.innerHTML = '';
            let total = 0;

            for (const [productName, item] of Object.entries(cart)) {
                const li = document.createElement('li');
                li.textContent = `${productName} - ${item.quantity} x $${item.price} = $${item.quantity * item.price}`;
                cartItemsElement.appendChild(li);
                total += item.quantity * item.price;
            }

            totalPriceElement.textContent = `Total: $${total}`;
        }

        // Function to handle checkout
        function checkout() {
            if (Object.keys(cart).length === 0) {
                alert('Your cart is empty. Please add some products.');
            } else {
                alert('Thank you for your purchase! This is a test site, so the transaction won’t be processed.');
                // Clear cart and update display
                for (const product in cart) {
                    const quantityElement = document.getElementById('quantity-' + product);
                    quantityElement.textContent = '0';
                }
                Object.keys(cart).forEach(key => delete cart[key]);
                updateCart();
            }
        }
    </script>
</body>
</html>
