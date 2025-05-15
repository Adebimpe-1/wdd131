// Populate current year
const yearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Populate last modified date
const lastModPara = document.getElementById('lastModified');
lastModPara.textContent = `Last Modified: ${document.lastModified}`;