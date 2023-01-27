const cardTemplate = document.querySelector('#noteworthy-projects')
const showMoreButton = document.querySelector('.cool-link')
const cardsContainer = document.querySelector('.github-projects-grid')

// const observer = new MutationObserver((entries) => {
//     entries.forEach(entry => {
//         const childElements = cardsContainer.querySelectorAll('.card');
//         console.log("Child elements:", childElements)
//     })
// })

// observer.observe(cardsContainer, { childList: true });

const fetchData = async () => {
    try {
        const response = await fetch("/github");
        const data = await response.json();
        data.forEach(project => {
            renderProjects(project)
        })
    } catch (error) {
        console.log(error);
        return
    }
}
fetchData()

function renderProjects(project){
    const card = cardTemplate.content.cloneNode(true)

    const name = card.querySelector('.card-header')
    name.textContent = project.name

    const description = card.querySelector('.card-content')
    description.textContent = project.description

    const langUsed = card.querySelector('.card-footer')
    for(let language in project.languages) {
        const li = document.createElement('li')
        li.textContent = language
        langUsed.append(li)
    }
    
    const liveLinkIcon = card.querySelector('.project-live-link')
    const cardLinkWrapper = card.querySelector('.card-link')
    if (project.homepage === "") {
        liveLinkIcon.classList.add('hide');
        cardLinkWrapper.href = project.html_url;
    } else {
        liveLinkIcon.href = project.homepage;
        cardLinkWrapper.href = project.homepage
    }

    const githubLink = card.querySelector('.project-github')
    githubLink.href = project.html_url

    cardsContainer.append(card)

}
