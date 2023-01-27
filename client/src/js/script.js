//todo adding navbar funcationality
// const navmenu = document.querySelector('.mobile-nav')
const navlinks = document.querySelector('.mobile-nav-links')    

document.addEventListener('click', (e) => {
    if(e.target.matches('.bi-list')){
        navlinks.classList.remove('hide')
    }
    if(e.target.matches('.bi-x')){
        navlinks.classList.add('hide')
    }
    if(!e.target.matches('.mobile-nav-links') && !e.target.matches('.bi-list')){
        navlinks.classList.add('hide')
    }
})
// todo sticky navbar on scrolling up
let lastScroll = 0;
const header = document.querySelector('header')
const widenav = document.querySelector('.wide-nav')
window.addEventListener('scroll', () => {
    if(window.scrollY > 20 && window.scrollY < lastScroll) {
        header.classList.add('stick');
        widenav.classList.add('blur');
    } else {
        header.classList.remove('stick');
        widenav.classList.remove('blur');
    }
    lastScroll = window.scrollY;    
});

// todo back to top button

const backTopBtn = document.querySelector(".back-to-top")
window.onscroll;
const showOnPx = 3300;
const scrollContainer = () => {
    return document.documentElement || document.body;
}
const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
      })
}
if (scrollContainer().scrollTop < showOnPx) {
    backTopBtn.classList.add("hide")
}
document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backTopBtn.classList.remove("hide")
    } else {
        backTopBtn.classList.add("hide")
    }
})
backTopBtn.addEventListener('click', goToTop)

// todo readmore

const readMoreText = document.querySelector('.read-more')
const readMoreBtn = document.querySelector('.read-more-btn')

readMoreBtn.addEventListener('click',  e => {
    const isHidden = readMoreText.classList.toggle("hideme");
    readMoreBtn.textContent = `Read ${isHidden ? "more..." : "less"}`;
});



/*
    // - add navbar functionality 
    // - back to top button
    // - add resume/404/github repos pages.
    // - make the pressing area bigger on featured project
    // - organize your github, make noteworthy projects added dynamically with the github api.
    // - make sure all the links working correct.
    // - readmore functionality
*/