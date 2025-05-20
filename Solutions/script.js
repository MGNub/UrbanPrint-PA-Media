// let text = new SplitType('.staggerText');

// const staggerObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log("entry");
//         if (entry.isIntersecting) {
//             gsap.fromTo(text.chars, {y: '100%'}, {y: '0%', stagger: 0.03, delay: '0.2'});
//         } else {
//             gsap.to(text.chars, {y: '0%', duration: 0});
//         }
//     });
// });

// const staggerElements = document.querySelectorAll('.staggerText');
// staggerElements.forEach((e1) => staggerObserver.observe(e1));




// let text2 = new SplitType('.staggerText2');

// const staggerObserver2 = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log("entry");
//         if (entry.isIntersecting) {
//             gsap.fromTo(text2.chars, {y: '100%'}, {y: '0%', stagger: 0.03, delay: '0.2'});
//         } else {
//             gsap.to(text2.chars, {y: '0%', duration: 0});
//         }
//     });
// });

// const staggerElements2 = document.querySelectorAll('.staggerText2');
// staggerElements2.forEach((e1) => staggerObserver2.observe(e1));


// let text3 = new SplitType('.staggerText3');

// const staggerObserver3 = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log("entry");
//         if (entry.isIntersecting) {
//             gsap.fromTo(text3.chars, {y: '100%'}, {y: '0%', stagger: 0.03, delay: '0.2'});
//         } else {
//             gsap.to(text3.chars, {y: '0%', duration: 0});
//         }
//     });
// });

// const staggerElements3 = document.querySelectorAll('.staggerText3');
// staggerElements3.forEach((e1) => staggerObserver3.observe(e1));




// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log("entry")
//     if(entry.isIntersecting) {
//       entry.target.classList.add('show');
//     } else {
//       entry.target.classList.remove('show');
//     }
//   });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((e1) => observer.observe(e1));

const stickySections = [...document.querySelectorAll('.sticky')]

window.addEventListener('scroll', (e) => {
  for(let i = 0; i < stickySections.length; i++){
    transform(stickySections[i])
  }
})

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector('.scroll-section')
  
  let percentage = ((window.scrollY - offsetTop)/ window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 500 ? 500 : percentage;
  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  // var div = document.getElementById('top');
  var maxWidthVw = 100;
  var windowHeight = window.innerHeight;
  var offset = 200 * windowHeight / 100;
  var newWidthVw = maxWidthVw - ((scrollPosition - offset) * 0.1);

  if (newWidthVw < 70) {
    newWidthVw = 70;
  }

  // div.style.width = maxWidthVw + 'vw';

  const solutionsLetters = document.querySelectorAll('#head h1 span');
  console.log(scrollPosition);
  // solutionsLetters[5].style.opacity = '0';
  if (scrollPosition > 1800) {
    solutionsLetters[0].style.opacity = 0;
    solutionsLetters[1].style.opacity = 0;
    solutionsLetters[2].style.opacity = 0;
  } else {
    solutionsLetters[0].style.opacity = 1;
    solutionsLetters[1].style.opacity = 1;
    solutionsLetters[2].style.opacity = 1;
  }
  if (scrollPosition > 1640) {
    solutionsLetters[3].style.opacity = 0;
    solutionsLetters[4].style.opacity = 0;
    solutionsLetters[5].style.opacity = 0;
    solutionsLetters[6].style.opacity = 0;
  } else {
    solutionsLetters[3].style.opacity = 1;
    solutionsLetters[4].style.opacity = 1;
    solutionsLetters[5].style.opacity = 1;
    solutionsLetters[6].style.opacity = 1;
  }
  if (scrollPosition > 1400) {
    solutionsLetters[7].style.opacity = 0;
    solutionsLetters[8].style.opacity = 0;
  } else {
    solutionsLetters[7].style.opacity = 1;
    solutionsLetters[8].style.opacity = 1;
  }
});
