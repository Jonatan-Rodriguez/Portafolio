let estudios = document.getElementById(`estudios`);
let perfil = document.getElementById(`perfil`);
let skills = document.getElementById(`skills`);

// Elementos del slider
let slider = document.querySelector(".info-slider");
let skillL = document.getElementById(`skillL`);
let skillR = document.getElementById(`skillR`);

// Estado inicial: Ocultar los sub-items de skills
skillL.classList.add("info-none");
skillR.classList.add("info-none");


perfil.addEventListener(`click`, ()=>{
    // Mover slider a la posición 1 (0%)
    slider.style.transform = "translateX(0%)";
    
    // Actualizar pestaña activa
    perfil.classList.add("item");
    estudios.classList.remove("item");
    skills.classList.remove("item");

    // Ocultar sub-items de skills (si vienes desde allí)
    skillL.classList.add("info-none");
    skillR.classList.add("info-none");
});

estudios.addEventListener(`click`, ()=>{
    // Mover slider a la posición 2 (-100%)
    slider.style.transform = "translateX(-100%)";

    // Actualizar pestaña activa
    perfil.classList.remove("item");
    estudios.classList.add("item");
    skills.classList.remove("item");

    // Ocultar sub-items de skills (si vienes desde allí)
    skillL.classList.add("info-none");
    skillR.classList.add("info-none");
});

skills.addEventListener(`click`, ()=>{
    // Mover slider a la posición 3 (-200%)
    slider.style.transform = "translateX(-200%)";

    // Actualizar pestaña activa
    perfil.classList.remove("item");
    estudios.classList.remove("item");
    skills.classList.add("item");

    // Mostrar sub-items de skills
    skillL.classList.remove("info-none");
    skillR.classList.remove("info-none");
});

//observer

const vinculoSobreMi = document.getElementById('vinculoSobreMi');
const vinculoPortafolio = document.getElementById('vinculoPortafolio');
const sobreMi = document.getElementById('sobreMi');
const portafolio = document.getElementById('portafolio');

const cargarImagen = (entradas, observador) => {
	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
            if(entrada.target.id == "sobreMi"){
                vinculoSobreMi.classList.add('vinculo--observer');
            }

            if(entrada.target.id == "portafolio"){
                vinculoPortafolio.classList.add('vinculo--observer');
            }
            
		} else {
		    if(entrada.target.id == "sobreMi"){
                vinculoSobreMi.classList.remove('vinculo--observer');
            }

            if(entrada.target.id == "portafolio"){
                vinculoPortafolio.classList.remove('vinculo--observer');
            }
		}
	});
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	threshold: 0.5
});

observador.observe(sobreMi);
observador.observe(portafolio);

// funcion de menu

let switchMenu = document.getElementById(`burger`);
let menu = document.getElementById(`menu`);
let vinculoSobreMiMenu = document.getElementById(`vinculoSobreMiMenu`);
let vinculoPortafolioMenu = document.getElementById(`vinculoPortafolioMenu`);

switchMenu.addEventListener(`click`, () =>{

    menu.classList.toggle(`menu-translate`);
});

vinculoSobreMiMenu.addEventListener(`click`, () =>{
    setTimeout(() => {
        menu.classList.toggle(`menu-translate`);
        switchMenu.checked = false;
    }, 300);
});

vinculoPortafolioMenu.addEventListener(`click`, () =>{
    setTimeout(() => {
        menu.classList.toggle(`menu-translate`);
        switchMenu.checked = false;
    }, 300);
});










/* let estudios = document.getElementById(`estudios`);
let perfil = document.getElementById(`perfil`);
let skills = document.getElementById(`skills`);

let infoPerfil = document.getElementById(`infoPerfil`);
let infoEstudios = document.getElementById(`infoEstudios`);
let infoSkills = document.getElementById(`infoSkills`);

let skillL = document.getElementById(`skillL`);
let skillR = document.getElementById(`skillR`);

perfil.addEventListener(`click`, ()=>{

    infoPerfil.classList.add("info");
    infoEstudios.classList.remove("info");
    infoSkills.classList.remove("info");
    
    perfil.classList.add("item");
    estudios.classList.remove("item");
    skills.classList.remove("item");

    skillL.classList.add("info-none");
    skillR.classList.add("info-none");
});

estudios.addEventListener(`click`, ()=>{

    infoPerfil.classList.remove("info");
    infoEstudios.classList.add("info");
    infoSkills.classList.remove("info");

    perfil.classList.remove("item");
    estudios.classList.add("item");
    skills.classList.remove("item");

    skillL.classList.add("info-none");
    skillR.classList.add("info-none");
});

skills.addEventListener(`click`, ()=>{

    infoPerfil.classList.remove("info");
    infoEstudios.classList.remove("info");
    infoSkills.classList.add("info");

    perfil.classList.remove("item");
    estudios.classList.remove("item");
    skills.classList.add("item");

    skillL.classList.remove("info-none");
    skillR.classList.remove("info-none");
});

//observer

const vinculoSobreMi = document.getElementById('vinculoSobreMi');
const vinculoPortafolio = document.getElementById('vinculoPortafolio');
const sobreMi = document.getElementById('sobreMi');
const portafolio = document.getElementById('portafolio');

const cargarImagen = (entradas, observador) => {
	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
            if(entrada.target.id == "sobreMi"){
                vinculoSobreMi.classList.add('vinculo--observer');
            }

            if(entrada.target.id == "portafolio"){
                vinculoPortafolio.classList.add('vinculo--observer');
            }
            
		} else {
		    if(entrada.target.id == "sobreMi"){
                vinculoSobreMi.classList.remove('vinculo--observer');
            }

            if(entrada.target.id == "portafolio"){
                vinculoPortafolio.classList.remove('vinculo--observer');
            }
		}
	});
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	threshold: 0.5
});

observador.observe(sobreMi);
observador.observe(portafolio);


// funcion de menu

let switchMenu = document.getElementById(`burger`);
let menu = document.getElementById(`menu`);
let vinculoSobreMiMenu = document.getElementById(`vinculoSobreMiMenu`);
let vinculoPortafolioMenu = document.getElementById(`vinculoPortafolioMenu`);

switchMenu.addEventListener(`click`, () =>{

    menu.classList.toggle(`menu-translate`);
});

vinculoSobreMiMenu.addEventListener(`click`, () =>{
    setTimeout(() => {
        menu.classList.toggle(`menu-translate`);
        switchMenu.checked = false;
    }, 300);
});

vinculoPortafolioMenu.addEventListener(`click`, () =>{
    setTimeout(() => {
        menu.classList.toggle(`menu-translate`);
        switchMenu.checked = false;
    }, 300);
}); */