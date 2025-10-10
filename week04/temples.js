document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('siteNav');

    
    let navVisible = false;

   
    hamburger.setAttribute('aria-expanded', 'false');
    nav.style.display = 'none';

    function showNav() {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'row';
        navVisible = true;
        hamburger.setAttribute('aria-expanded', 'true');
    }

    function hideNav() {
        nav.style.display = 'none';
        navVisible = false;
        hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', function () {
        if (navVisible) {
            hideNav();
        } else {
            showNav();
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 700) {
          
            hamburger.style.display = 'none';
        } else {
            
            nav.style.display = 'none';
            hamburger.style.display = 'inline-block';
            navVisible = false;
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });


    if (window.innerWidth < 700) {
        hamburger.style.display = 'inline-block';
    } else {
        hamburger.style.display = 'none';
        nav.style.display = 'flex';
        navVisible = true;
    }

    // Footer year and last modified (dynamic)
    const yearEl = document.getElementById('year');
    const modifiedEl = document.getElementById('modified');
    const now = new Date();
    yearEl.textContent = now.getFullYear();
    if (document.lastModified) {
        modifiedEl.textContent = document.lastModified;
    } else {
        modifiedEl.textContent = new Date().toLocaleDateString();
    }
});