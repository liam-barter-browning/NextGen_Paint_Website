document.addEventListener("DOMContentLoaded", function() {
    // Update year in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }
});