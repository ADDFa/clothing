const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/light-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/user1.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="Beranda.html" class="link">Home</a></li>
            <li class="link-item"><a href="Best.html" class="link">Best Selling</a></li>
            <li class="link-item"><a href="series.html" class="link">Series</a></li>
            <li class="link-item"><a href="new.html" class="link">New Product</a></li>
            <li class="link-item"><a href="product.html" class="link"> Details</a></li>
            <li class="link-item"><a href="contact.html" class="link"> Contact</a></li>
        </ul>
    `;
}

createNav();