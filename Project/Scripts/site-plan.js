document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.site-nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    // Optional: close nav on link click (for mobile)
    document.querySelectorAll('.site-nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show');
        });
    });

    // Update footer year dynamically
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
