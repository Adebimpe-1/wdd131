document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu toggle code (your existing)
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
        if (window.innerWidth > 700) {
            hamburger.style.display = 'none';
            nav.style.display = 'flex';
            navVisible = true;
            hamburger.setAttribute('aria-expanded', 'true');
        } else {
            nav.style.display = 'none';
            hamburger.style.display = 'inline-block';
            navVisible = false;
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // Footer dynamic year and last modified
    const yearEl = document.getElementById('year');
    const modifiedEl = document.getElementById('modified');
    const now = new Date();
    yearEl.textContent = now.getFullYear();
    if (document.lastModified) {
        modifiedEl.textContent = document.lastModified;
    } else {
        modifiedEl.textContent = now.toLocaleDateString();
    }

    // Temple data array including your 3 additional temples
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Barcelona Spain",
            location: "Barcelona, Spain",
            dedicated: "2010, March, 25",
            area: 12000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/barcelona-spain-temple/barcelona-spain-temple-43015-main.jpg"
        },
        {
            templeName: "Tokyo Japan",
            location: "Tokyo, Japan",
            dedicated: "2022, July, 3",
            area: 53997,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
        },
        {
            templeName: "Salt Lake City Utah",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 253968,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
        },
        {
            templeName: "Abijan Ivory Coast Temple",
            location: "Abidjan, Cote d'Ivoire",
            dedicated: "2025, May, 25",
            area: 17362,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg"
        }
    ];

    const templesContainer = document.getElementById('temples-container');

    // Function to create a temple card element
    function createTempleCard(temple) {
        const card = document.createElement('article');
        card.className = 'temple-card';
        card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
      <div class="temple-info">
        <p><strong>Name:</strong> ${temple.templeName}</p>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sqft</p>
      </div>
    `;
        return card;
    }

    // Function to display an array of temples
    function displayTemples(templeArr) {
        templesContainer.innerHTML = ''; 
        templeArr.forEach(t => {
            const card = createTempleCard(t);
            templesContainer.appendChild(card);
        });
    }

    function getDedicationYear(dedicated) {
        return new Date(dedicated).getFullYear();
    }

    // Initial display - all temples
    displayTemples(temples);

    // Filter button event handlers
    document.getElementById('filter-all').addEventListener('click', () => displayTemples(temples));
    document.getElementById('filter-old').addEventListener('click', () => {
        const oldTemples = temples.filter(t => getDedicationYear(t.dedicated) < 1900);
        displayTemples(oldTemples);
    });
    document.getElementById('filter-new').addEventListener('click', () => {
        const newTemples = temples.filter(t => getDedicationYear(t.dedicated) > 2000);
        displayTemples(newTemples);
    });
    document.getElementById('filter-large').addEventListener('click', () => {
        const largeTemples = temples.filter(t => t.area > 90000);
        displayTemples(largeTemples);
    });
    document.getElementById('filter-small').addEventListener('click', () => {
        const smallTemples = temples.filter(t => t.area < 10000);
        displayTemples(smallTemples);
    });
});
