
function stickyScroll() {
    const t = document.body.getBoundingClientRect().top;

    if (t > -10) {
        gsap.to(text.chars, {y: '0%'});
    } 
    if (t < -200) {
        gsap.to(text.chars, {y: '100%', stagger: 0.03});
    }

    const list = document.getElementsByClassName('childSticky');
    const list2 = document.querySelectorAll('.childSticky p');
    for (let i = 0; i < list.length; i++) {
        list[i].style.marginTop = "calc(" + (20*i) + "rem + " + t + "px";
    }

    if (t < (document.querySelector('header').offsetHeight - window.innerHeight) * -1) {
        document.getElementById('beforeText').classList.add('fadeDown');
        document.getElementById('afterText').classList.add('fadeDown');
    } else if (t < document.querySelector('header').offsetHeight - window.innerHeight / 2) {
        document.getElementById('beforeText').classList.remove('fadeDown');
        document.getElementById('afterText').classList.remove('fadeDown');
    }
}

let text = new SplitType('.headerTitleP');

window.onscroll = stickyScroll;

window.onload = () => {
    const list = document.getElementsByClassName('childSticky');
    const list2 = document.querySelectorAll('.childSticky p');

    gsap.fromTo(text.chars, {y: '100%'}, {y: '0%', stagger: 0.03, delay: '2'});
    // gsap.to(text.chars, {y: '0%', stagger: 0.05});

    for (let i = 0; i < list.length; i++) {
        list[i].style.top = "calc(35rem + " + (80*i) + "vh";
        list2[i].style.top = "calc(10rem - " + list2[i].offsetHeight / 2 + "px)";
    }
    document.querySelector('header').style.height = "calc(" + (20*list.length) + "rem + " + (80*(list.length)) + "vh + 100vh)";
    // document.querySelector('header').style.height = "1000vh";
};

const left = document.getElementById('left');

const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100;

    left.style.width = `${p}%`;
}

document.onmousemove = e => handleOnMove(e);

document.ontouchmove = e => handleOnMove(e.touches[0]); 