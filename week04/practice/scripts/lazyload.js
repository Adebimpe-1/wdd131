// lazyload.js
// Adds a class to images when they come into view to trigger the fade-in.
// Although the browser handles loading due to `loading="lazy"`, we use
// a simple IntersectionObserver to apply the fade-in when visible.

(function () {
    // Check for IntersectionObserver support
    if (!('IntersectionObserver' in window)) {
        // Fallback: reveal all images immediately
        document.querySelectorAll('img.lazy-image').forEach(img => {
            img.style.opacity = '1';
            img.style.filter = 'brightness(1)';
            img.setAttribute('data-loaded', 'true');
        });
        return;
    }

    const images = document.querySelectorAll('img.lazy-image');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Mark as visible to trigger CSS fade-in
                img.classList.add('is-visible');
                // Since the browser handles loading, we only need to ensure the
                // loading attribute is applied; it is already set in HTML.
                // Optional: unobserve after it has loaded to save resources
                obs.unobserve(img);
            }
        });
    }, {
        rootMargin: '0px 0px 200px 0px', // preload a bit before it enters viewport
        threshold: 0.01
    });

    images.forEach(img => observer.observe(img));

    // Optional: update last modified date in footer using JS
    const lastModifiedEl = document.getElementById('last-modified');
    if (lastModifiedEl) {
        // Use the document's lastModified string or fallback to current date
        const lm = document.lastModified || new Date().toISOString();
        lastModifiedEl.textContent = lm;
    }
})();