const popup = document.getElementById("orderPopup");
const closeBtn = document.querySelector(".close");
const buyButtons = document.querySelectorAll(".cart-btn");

buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        popup.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target == popup) {
        popup.style.display = "none";
    }
});


// Search Function
const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");

searchInput.addEventListener("keyup", function () {
    const value = searchInput.value.toLowerCase();

    products.forEach(product => {
        const name = product.querySelector("h3").textContent.toLowerCase();

        if (name.includes(value)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});


// Payment Popup
const continueBtn = document.getElementById("continueBtn");
const paymentPopup = document.getElementById("paymentPopup");
const paidBtn = document.getElementById("paidBtn");

continueBtn.addEventListener("click", () => {
    popup.style.display = "none";
    paymentPopup.style.display = "flex";
});


document.getElementById("closePayment").addEventListener("click", () => {
    paymentPopup.style.display = "none";
});


paidBtn.addEventListener("click", () => {
    window.open(
        "https://wa.me/917300617677?text=Hello%20I%20have%20completed%20the%20payment.",
        "_blank"
    );
});// Show products from Admin Panel on Home Page
window.addEventListener("DOMContentLoaded", function () {

    let container = document.getElementById("productsContainer");

    if (!container) return;

    let adminProducts = localStorage.getItem("products");

    if (adminProducts) {
        container.innerHTML += adminProducts;
    }

});