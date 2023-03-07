const filterBtns = document.querySelectorAll(".filter-btn");
const itemTemplate = document.querySelector("#post-item-template");
const postsGrid = document.querySelector(".posts-grid");
filterBtns.forEach((filterBtn)=>{
    filterBtn.addEventListener("click", function(e) {
        if (!e.target.closest(".filter-options")) this.querySelector(".filter-options").classList.toggle("hide");
    });
});
const fetchData = async ()=>{
    try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        data.forEach((project)=>{
            renderItems(project);
        });
    } catch (error) {
        console.log(error);
        return;
    }
};
fetchData();
function renderItems(project) {
    console.log(project);
    const item = itemTemplate.content.cloneNode(true);
    const imgWrapper = item.querySelector(".post-img-wrapper");
    imgWrapper.classList.add(project.class);
    const image = item.querySelector("[data-img]");
    image.src = `/api/images/${project.imgName}`;
    image.alt = project.title;
    const title = item.querySelector("[data-title]");
    title.textContent = project.title;
    const postLinks = item.querySelector(".post-links");
    project.links.forEach((link)=>{
        let aTag = document.createElement("a") //  name, url
        ;
        let iTag = document.createElement("i") //  icon
        ;
        aTag.href = link.url;
        aTag.title = link.name;
        aTag.target = "_blank";
        iTag.classList.add("bi", link.icon);
        aTag.append(iTag);
        postLinks.append(aTag);
        if (link.name === "Live Demo") {
            console.log("found", link);
            title.href = link.url;
        }
    });
    const tags = item.querySelector(".post-tags");
    project.tags.forEach((tag)=>{
        let span = document.createElement("span");
        span.textContent = tag;
        tags.append(span);
    });
    postsGrid.append(item);
}

//# sourceMappingURL=freelance.2af9da6c.js.map
