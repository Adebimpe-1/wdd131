// Static values matching weather section
const temperatureC = 8; // Celsius
const windSpeedKmh = 15; // km/h

// Calculate wind chill factor using Celsius formula
function calculateWindChill(tempC, windKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

// Display wind chill if conditions met, else display N/A
function displayWindChill() {
    const windChillElement = document.getElementById('windChill');
    if (temperatureC <= 10 && windSpeedKmh > 4.8) {
        const wc = calculateWindChill(temperatureC, windSpeedKmh);
        windChillElement.textContent = wc.toFixed(1) + ' °C';
    } else {
        windChillElement.textContent = 'N/A';
    }
}

// Update footer with current year and last modified date
function updateFooterDates() {
    const yearSpan = document.getElementById('currentYear');
    const modifiedSpan = document.getElementById('lastModified');
    const now = new Date();
    yearSpan.textContent = now.getFullYear();
    modifiedSpan.textContent = document.lastModified;
}

// Execute functions after DOM content loaded
window.addEventListener('DOMContentLoaded', () => {
    displayWindChill();
    updateFooterDates();
});
