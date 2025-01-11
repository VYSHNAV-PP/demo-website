// Array of products
const products = [
    {id: 1, name: 'Product 1', category: 'cakes', image: 'img/product-1.jpg'},
    {id: 2, name: 'Product 2', category: 'cakes', image: 'img/product-2.jpg'},
    {id: 3, name: 'Product 3', category: 'cakes', image: 'img/product-3.jpg'},
    {id: 4, name: 'Bread', category: 'bread', image: 'img/cakes.jpg'},
    {id: 5, name: 'Buns', category: 'bread', image: 'img/jeera.jpg'},
    {id: 6, name: 'Rusk', category: 'bread', image: 'img/cookie.jpg'},
    {id: 7, name: 'Crispy Biscuits', category: 'biscuits', image: 'img/product1.jpg'},
    {id: 8, name: 'Nippat Biscuits', category: 'biscuits', image: 'img/product2.jpg'},
    {id: 9, name: 'Khari Biscuits', category: 'biscuits', image: 'img/service-1.jpg'}
];

// Function to render the product images dynamically with smooth animation
function renderProducts(filteredProducts) {
    const container = document.getElementById('product-images');
    container.innerHTML = filteredProducts.map(product => `
        <div class="product-container">
            <img src="${product.image}" alt="${product.name}" />
            <p style="text-align: center; margin-top: 5px; font-size: 14px; color: #333;">${product.name}</p>
        </div>
    `).join('');

    // Delay the fade-in animation for each product
    const productContainers = container.querySelectorAll('.product-container');
    productContainers.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, index * 100); // Stagger the animation a little
    });

    // After rendering, show the container with a fade-in
    container.style.opacity = '1';
}

// Function to show products based on selected category
function showProducts(category) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('selected'));

    // Set the selected tab
    const activeTab = document.getElementById(`tab-${category}`);
    if (activeTab) activeTab.classList.add('selected');

    // Fade out the current products before showing new ones
    const container = document.getElementById('product-images');
    container.style.opacity = '0'; // Fade out

    // After the fade-out, render the new products
    setTimeout(() => {
        if (category === 'all') {
            renderProducts(products); // Show all products
        } else {
            const filteredProducts = products.filter(product => product.category === category);
            renderProducts(filteredProducts); // Show filtered products based on category
        }
    }, 500); // Wait for fade-out effect to complete
}

// This function runs when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1); // Get the part after '#'

    if (hash) {
        showProducts(hash); // Show selected category
    } else {
        showProducts('all'); // Default to 'all' if no category in the URL
    }
});
