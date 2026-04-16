

function ToggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('active');
}

function loadHeader() {
    document.getElementById('header-box').innerHTML = `
        <header>
            <div class="inner-header">            
                <img src="./images/logotype.webp" alt="logotype" class="logotype">        
                <div class="header-text">
                    <h1>Göran Rosenberg</h1>
                    <p>Web Developer</p>
                </div>
            </div>
            <nav class="desktop-nav">
                <a href="about.html">Om mig</a>
                <a href="projects.html">Projekt</a>
                <a href="#skills">Kompetenser</a>
            
            </nav>

            <button class="menu-toggle" id="toggleMobileMenu" onclick="ToggleMobileMenu()">
                <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" aria-hidden="true" focusable="false">
                    <rect x="6" y="6" width="60" height="6.8"></rect>
                    <rect x="6" y="28" width="60" height="6.8"></rect>
                    <rect x="6" y="50" width="60" height="6.8"></rect>
                </svg>
            </button>

            <nav class="mobile-nav">
                <ul>
                <li><a href="about.html">Om mig</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Kompetenser</a></li>
                </ul>
            </nav>
        </header>`;
}