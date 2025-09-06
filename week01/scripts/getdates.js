(function () {
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        const now = new Date();
        yearSpan.textContent = now.getFullYear();
    }
   
    const lastModifiedElem = document.getElementById('lastModified');
    if (lastModifiedElem) {
        
        lastModifiedElem.textContent = 'Last Modified: ' + document.lastModified;
    }
})();