// Array of products
const products = [
    {id: 1, name: 'Fruit Cake', category: 'cakes', image: 'img/cakes/fruit-cake.jpeg'},
    {id: 2, name: 'Black Forest Cake', category: 'cakes', image: 'img/cakes/black forest 2.jpeg'},
    {id: 3, name: 'Honey Cake', category: 'cakes', image: 'img/cakes/honey-cake.jpg'},
    {id: 4, name: 'Pineapple', category: 'cakes', image: 'img/cakes/pineapplecake.jpg'},
    {id: 9, name: 'Strawberry Cake', category: 'cakes', image: 'img/cakes/strawberry cake.jpeg'},
    {id: 6, name: 'Cupcake', category: 'cakes', image: 'img/cakes/cup-cake.jpeg'},
    {id: 7, name: 'Vanilla Cake', category: 'cakes', image: 'img/cakes/vanilla cake.jpeg'},
    {id: 8, name: 'Sponge Cake', category: 'cakes', image: 'img/cakes/sponge-cake.jpg'},
    {id: 9, name: 'Apple Cake', category: 'cakes', image: 'img/cakes/apple-cake.jpg'},
    {id: 10, name: 'Chocolate Cake', category: 'cakes', image: 'img/cakes/chocolate cake 2.jpeg'},
    {id: 11, name: 'Plum Cake', category: 'cakes', image: 'img/cakes/plum cake.jpeg'},
    {id: 12, name: 'Choco Cupcake', category: 'cakes', image: 'img/cakes/choco-cupcake.jpeg'},
    {id: 13, name: 'Torte Cravings', category: 'cakes', image: 'img/cakes/piece-cake.jpeg'},

    {id: 14, name: 'Cream Bun', category: 'bun', image: 'img/breads and buns/cream bun.jpeg'},
    {id: 15, name: 'Bread Toast', category: 'bread', image: 'img/breads and buns/bread-toast.jpeg'},
    {id: 16, name: 'Kara Rusk', category: 'bread', image: 'img/breads and buns/kara rusk.jpeg'},
    {id: 17, name: 'Rusk Bread', category: 'bread', image: 'img/breads and buns/rusk.jpeg'},
    {id: 18, name: 'Plain Bread', category: 'bread', image: 'img/breads and buns/bread.jpeg'},
    

    {id: 19, name: 'Milk Biscuit', category: 'biscuits', image: 'img/biscuits/milk.jpg'},
    {id: 20, name: 'Ragi Biscuit', category: 'biscuits', image: 'img/biscuits/ragi biscuits.jpeg'},
    {id: 21, name: 'Salt and Kaara Biscuit', category: 'biscuits', image: 'img/biscuits/Salt and kaara 2.jpeg'},
    {id: 22, name: 'Ajwain Biscuit', category: 'biscuits', image: 'img/biscuits/om-rusk.jpeg'},
    {id: 23, name: 'Sweet and Salt Biscuit', category: 'biscuits', image: 'img/biscuits/sweet.jpg'},
    {id: 24, name: 'Coconut Biscuit', category: 'biscuits', image: 'img/biscuits/coconut biscuit.jpeg'},
    {id: 25, name: 'Cashew Biscuit', category: 'biscuits', image: 'img/biscuits/casw.jpeg'},
    {id: 26, name: 'Butter Biscuit', category: 'biscuits', image: 'img/biscuits/butter-biscuit.jpg'},
    {id: 27, name: 'Wheat and Jaggery Biscuit', category: 'biscuits', image: 'img/biscuits/wheat and jaggery.jpeg'},


    {id: 28, name: 'Wheat Rusk', category: 'bread', image: 'img/breads and buns/rusk.jpg'},
    {id: 29, name: 'Kara Bun', category: 'bun', image: 'img/breads and buns/Kara-bun.jpeg'},
    {id: 31, name: 'Jam Bun', category: 'bun', image: 'img/breads and buns/jam-bun.jpeg'},
    {id: 32, name: 'Coconut Fruit Bun', category: 'bun', image: 'img/breads and buns/Coconut.jpeg'},
    {id: 33, name: 'Potato Bun', category: 'bun', image: 'img/breads and buns/potatobun.jpeg'},

    
    {id: 34, name: 'Donut', category: 'others', image: 'img/breads and buns/donut.jpg'},
    {id: 35, name: 'Nipat', category: 'others', image: 'img/breads and buns/nipat.jpeg'},
    
    {id: 36, name: 'Vegetable Puffs', category: 'others', image: 'img/puffs/veg-puff.jpeg'},
    {id: 37, name: 'Egg Puffs', category: 'others', image: 'img/puffs/egg_puffs.jpeg'},
    {id: 38, name: 'Paneer Puffs', category: 'others', image: 'img/breads and buns/nipat.jpeg'},
    {id: 39, name: 'Gatti Puffs', category: 'others', image: 'img/puffs/gatti_puffs.jpeg'},
    {id: 40, name: 'Fruit Puffs', category: 'others', image: 'img/puffs/fruit puff.jpeg'},
    {id: 41, name: 'Banana Cake', category: 'others', image: 'img/cakes/banana-cake.jpeg'},
    {id: 30, name: 'Small Bun', category: 'bun', image: 'img/breads and buns/small bun.jpeg'},
    {id: 42, name: 'Sweet Bread', category: 'bread', image: 'img/breads and buns/bread.jpg'},
    {id: 43, name: 'Paneer Puff', category: 'others', image: 'img/puffs/paneer.jpg'}

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
