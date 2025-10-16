const products = [
    { id: "fc-1888", name: "flux capacitor", averageRating: 4.5 },
    { id: "fc-2050", name: "power laces", averageRating: 4.7 },
    { id: "fs-1987", name: "time circuits", averageRating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averageRating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averageRating: 5.0 },
];

const productSelect = document.getElementById("product");

products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});


const yearSpan = document.getElementById("yearspan");
if (yearSpan) {
    const now = new Date();
    yearSpan.textContent = now.getFullYear();
}

const lastModifiedElem = document.getElementById("lastModified");
if (lastModifiedElem) {
    lastModifiedElem.textContent = `Last Modified: ${document.lastModified}`;
}
