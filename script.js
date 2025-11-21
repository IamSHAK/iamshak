/*const img = document.getElementById('wiggle-img');

let angle = 0;
let direction = 1;

setInterval(() => {
    angle += 2 * direction;
    if (angle > 10 || angle < -10) direction *= -1;
    img.style.transform = `rotate(${angle}deg)`;
}, 50);

// Carousel Functionality
const track = document.querySelector(".carousel-track");
const cards = Array.from(document.querySelectorAll(".project-card"));
const btnLeft = document.querySelector(".carousel-btn.left");
const btnRight = document.querySelector(".carousel-btn.right");

const cardsPerView = 4;
const cardWidth = 300 + 40; // width + gap

// Animation lock to stop crashing on spam clicks
let isMoving = false;

// Clone first & last sets for infinite loop
const firstClones = cards.slice(0, cardsPerView).map(c => c.cloneNode(true));
const lastClones = cards.slice(-cardsPerView).map(c => c.cloneNode(true));

lastClones.forEach(c => track.prepend(c));
firstClones.forEach(c => track.append(c));

// Start in correct position
let index = cardsPerView;
track.style.transform = `translateX(-${index * cardWidth}px)`;

// Slide function
function moveToIndex() {
    if (isMoving) return;        // ⛔ prevent double animations
    isMoving = true;

    track.style.transition = "transform 0.45s ease";
    track.style.transform = `translateX(-${index * cardWidth}px)`;
}

// Infinite wraparound
track.addEventListener("transitionend", () => {
    // When sliding left past clones
    if (index === 0) {
        index = cards.length;
        track.style.transition = "none";
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    // When sliding right past clones
    if (index === cards.length + cardsPerView) {
        index = cardsPerView;
        track.style.transition = "none";
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    // Unlock after transition ends
    setTimeout(() => {
        isMoving = false;
    }, 20);
});

// BUTTONS
btnRight.addEventListener("click", () => {
    if (isMoving) return;
    index++;
    moveToIndex();
    resetAutoSlide();
});

btnLeft.addEventListener("click", () => {
    if (isMoving) return;
    index--;
    moveToIndex();
    resetAutoSlide();
});

// ⭐ AUTO-SLIDE ⭐
let slideInterval = setInterval(() => {
    if (!isMoving) {
        index++;
        moveToIndex();
    }
}, 3000);

// Reset auto-slide when user interacts
function resetAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        if (!isMoving) {
            index++;
            moveToIndex();
        }
    }, 3000);
}

// OPTIONAL: Pause on hover
const carousel = document.querySelector(".carousel-container");

carousel.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
});

carousel.addEventListener("mouseleave", () => {
    resetAutoSlide();
}); */