// Nav Function slide//
const navSlide = () =>{
    const tablet = document.querySelector(".tablet_nav");
    tablet.style.width = '100%'
};

const closeNav = () =>{
    const tablet = document.querySelector(".tablet_nav");
    tablet.style.width = '0%';
    alert('good bye');
}

const hamEl = document.querySelector(".hamburger");
hamEl.addEventListener('click', navSlide)
const tabEl = document.querySelector(".tab_title");
tabEl.addEventListener('click', closeNav);

// console.log(tabEl);