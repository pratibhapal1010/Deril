document.addEventListener("DOMContentLoaded", function () {

    const yes = document.getElementById("yes");
    const no = document.getElementById("no");
    const confirmation = document.querySelector(".confirmation");
    const container = document.querySelector(".container");

    // YES CLICK 💖
    yes.addEventListener("click", function () {
        container.style.display = "none";
        confirmation.style.display = "block";
    });

    // NO BUTTON RUNS AWAY 😂
    no.addEventListener("mouseover", function () {
        no.style.position = "absolute";

        let x = Math.random() * (window.innerWidth - 100);
        let y = Math.random() * (window.innerHeight - 50);

        no.style.left = x + "px";
        no.style.top = y + "px";
    });

    // FIX DATE BUTTON 💌
    document.getElementById("fix").addEventListener("click", function () {
        window.location.href =
        "https://wa.me/+918802130983?text=Happy 2nd Anniversary ❤️ Let's go on a date!";
    });

});
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

yes.addEventListener("click", function () {
    popup.style.display = "block";
});

closePopup.addEventListener("click", function () {
    popup.style.display = "none";
    container.style.display = "none";
    confirmation.style.display = "block";
});
document.addEventListener('click', function() {
    const video = document.getElementById('anniversaryVideo');
    if (video.paused) {
        video.play();
    }
}, { once: true }); // Only runs the first time they click
document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop watching once it has faded in
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target all elements with the 'lazy-text' class
    const lazyElements = document.querySelectorAll('.lazy-text');
    lazyElements.forEach(el => observer.observe(el));
});