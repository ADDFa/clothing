const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
        </div>
    </div>
    <p class="footer-title">Alamat Toko</p>
    <p class="info">Jalan Danau ( Hotel Nusa Indah ) Kota Bengkulu <br> Jalan Batang Bangau Kota Manna</p>
    <p class="info">support emails - hijabbyshakeel@clothing.com, customersupport-@hijabbyshakeel.com</p>
    <p class="info">telephone - 082373936609 </p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="http://www.instagram.com/hijab.by.shakeel/" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();