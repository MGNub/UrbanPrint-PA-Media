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