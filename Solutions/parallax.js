// ;window.scrollTo(0, 0);
// setTimeout(letScroll, 3500);
// setTimeout(enableParallax, 3500);

// function letScroll() {
//     document.querySelector('body').style.overflowY = 'scroll';
// }

// function enableParallax() {
//     //  document.querySelector('.menu').style.pointerEvents = "all";
//      document.querySelector('header section').style.pointerEvents = "all";
//      document.getElementById('descendBtn').style.pointerEvents = "all";
//      parallaxItems.forEach((el) => {el.style.transition = "0.5s cubic-bezier(.2, .49, .32, .99)"});
// }

// const parallaxItems = document.querySelectorAll(".parallax");

// let x = 0, y = 0;

// document.querySelector('header section').addEventListener('mousemove', (e) => {
//      x = e.clientX - window.innerWidth / 2;
//      y = e.clientY - window.innerHeight / 2;


//      parallaxItems.forEach((el) => {
//           let speedx = el.dataset.speedx;
//           let speedy = el.dataset.speedy;
//           let z = el.dataset.speedy / el.dataset.speedx;

//           el.style.transform = `translateX(calc(-50% + ${-x * speedx}px)) translateY(calc(-50% + ${y * speedy}px)) perspective(2500px) translateZ(${z}px)`;
//           // console.log(speedx);
//      });
//      // console.log(x, y);
// })

// document.querySelector('.menu').addEventListener('mousemove', (e) => {
//      x = e.clientX - window.innerWidth / 2;
//      y = e.clientY - window.innerHeight / 2;


//      parallaxItems.forEach((el) => {
//           let speedx = el.dataset.speedx;
//           let speedy = el.dataset.speedy;
//           let z = el.dataset.speedy / el.dataset.speedx;

//           el.style.transform = `translateX(calc(-50% + ${-x * speedx}px)) translateY(calc(-50% + ${y * speedy}px)) perspective(2500px) translateZ(${z}px)`;
//           // console.log(speedx);
//      });
//      // console.log(x, y);
// })

// let timeline = gsap.timeline();


// Array.from(parallaxItems).filter((el) => !el.classList.contains("text")).forEach((el) => {
//      timeline.from(
//           el, {
//                top : `${el.offsetHeight / 2 + +el.dataset.distance}px`,
//                duration : 3.5,
//                ease : "power3.out",
//           },
//           "1.5"
//      );
// });

// const descendBtn = document.getElementById('descendBtn');

// descendBtn.addEventListener('click', descend);

// function descend() {
//     window.scroll({
//         top : window.innerHeight,
//         left : 0,
//         behavior : 'smooth',
//     });
// }