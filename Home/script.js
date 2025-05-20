(function() {
    const locomotiveScroll = new LocomotiveScroll();
})();

function right() {
    const quotes = document.querySelectorAll('[id^="quote-"]');
    
    quotes.forEach(quote => {
        let currentIndex = parseInt(quote.getAttribute('data-index'));
        let newIndex = (currentIndex - 1 + 6) % 6;
        quote.setAttribute('data-index', newIndex);
        quote.setAttribute('data-status', newIndex === 0 ? 'active' : 'inactive');
    });
}

function left() {
    const quotes = document.querySelectorAll('[id^="quote-"]');
    
    
    quotes.forEach(quote => {
        let currentIndex = parseInt(quote.getAttribute('data-index'));
        let newIndex = (currentIndex + 1) % 6;
        quote.setAttribute('data-index', newIndex);
        quote.setAttribute('data-status', newIndex === 0 ? 'active' : 'inactive');
    });
}

let text = document.querySelectorAll('.xSlide');

const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log("entry");
        if (entry.isIntersecting) {
            gsap.fromTo(text, {x: '50%', opacity: 0}, {x: '0%', opacity: 1, duration: 0.7});
        } else {
            gsap.to(text, {x: '0%', opacity: 0});
        }
    });
});

const staggerElements = document.querySelectorAll('.xSlide');
staggerElements.forEach((e1) => staggerObserver.observe(e1));

// DOM Element Selections
const menu = document.querySelector('.menu');
const textElement = document.querySelector('.text p');
const menuList = document.querySelectorAll('.item');
const logo = document.querySelector('.logo');

// Page Navigation Links
const pageList = ["./index.html", "./Issues/issues.html", "./Solutions/solutions.html", "./About/about.html"];

// Menu Toggle Function
function shift() {
    menu.classList.toggle("opened");
}

// Page Load and Animation Functions
function loadPage(i) {
    window.open(pageList[i], "_self");
}

function animateColumn(el, index) {
    for (let i = 0; i < 4; i++) {
        if (i !== index) menuList[i].style.display = "none";
    }
    el.style.width = "100vw";
    el.style.color = "transparent";
}

// Scroll to Top Function with Smooth Behavior
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Event Listeners
menuList.forEach((el, i) => {
    el.addEventListener('click', () => {
        animateColumn(el, i);
        setTimeout(() => loadPage(i), 500);
    });
});

logo.addEventListener('click', () => {
    loadPage(0); // Redirects to index.html
});

// Text Animation
textElement.innerHTML = textElement.innerText.split('').map(
    (char, i) => `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
).join('');

// Loading Screen Timeout
setTimeout(() => {
    document.getElementById('loadIn').style.display = "none";
}, 3500);
