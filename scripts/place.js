// Set current year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Static weather values
const temperature = 45; // in °F, statically
const windSpeed = 10; // in mph, statically

// Function to calculate wind chill
function calculateWindChill(temp, wind) {
  // Formula for wind chill in °F
  // Wind chill calculation based on the North American standard:
  // Wind Chill = 35.74 + 0.6215*T - 35.75*(V^0.16) + 0.4275*T*(V^0.16)
  return Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16));
}

// Function to display wind chill if conditions are met
function showWindChill() {
  const temp = temperature;
  const wind = windSpeed;
  const windChillEl = document.getElementById('windChill');
  if (temp <= 50 && wind > 3) {
    const chill = calculateWindChill(temp, wind);
    windChillEl.textContent = chill;
  } else {
    windChillEl.textContent = "N/A";
  }
}

// Call the function on page load
window.onload = showWindChill;