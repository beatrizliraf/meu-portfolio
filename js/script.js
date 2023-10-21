// tres constantes para referenciar as ITEM nas DIVS Projetos 

const form = document.getElementById('Formulario');
const site = document.getElementById('Site Responsivo');
const port = document.getElementById('Site');

const videoFormulario = document.querySelector('.videoFormulario');
const videoSiteResponsivo = document.querySelector('.videoSiteResponsivo');
const videoSite= document.querySelector('.videoSite');

// evento de click
form.addEventListener('click',() =>{
    form.classList.toggle('active');
    videoFormulario.classList.toogle('active');
});

site.addEventListener('click',() =>{
    site.classList.toggle('active');
    videoSiteResponsivo.classList.toogle('active');
});

port.addEventListener('click',() =>{
    port.classList.toggle('active');
    videoSite.classList.toogle('active');
});