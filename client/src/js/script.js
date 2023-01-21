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

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backTopBtn.classList.remove("hide")
    } else {
        backTopBtn.classList.add("hide")
    }
})
backTopBtn.addEventListener('click', goToTop)

/*
    // - add navbar functionality 
    // - back to top button
    - add thank you/resume/404 pages.
    - make the pressing area bigger on featured project
    - organize your github, make noteworthy projects added dynamically with the github api.
    - make sure all the links working correct.
*/