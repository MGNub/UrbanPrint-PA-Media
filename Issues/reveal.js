const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log("entry")
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements.forEach((e1) => observer.observe(e1));
hiddenElements2.forEach((e1) => observer.observe(e1));