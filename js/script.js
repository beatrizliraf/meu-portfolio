// tres constantes para referenciar as ITEM nas DIVS Projetos

/* tres constantes para referenciar os id das divs no projeto */

const form = document.getElementById("form");
const videoForm = document.querySelector("#videoForm");

form.addEventListener("click", () => {
    form.classList.toggle("active");
    videoForm.classList.toggle("active");
})

const resp = document.getElementById("resp");
const videoResp = document.querySelector("#videoResp");

resp.addEventListener("click", () => {
    resp.classList.toggle("active");
    videoResp.classList.toggle("active");
})

const site = document.getElementById("site");
const videoSite = document.querySelector("#videoSite");

site.addEventListener("click", () => {
    site.classList.toggle("active");
    videoSite.classList.toggle("active");
})