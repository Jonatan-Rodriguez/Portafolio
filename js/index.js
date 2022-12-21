let estudios = document.getElementById(`estudios`);
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