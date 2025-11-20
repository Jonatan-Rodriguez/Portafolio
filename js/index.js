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


/* ==========================================
   LÓGICA DE TRADUCCIÓN E IDIOMAS
   ========================================== */

// --- DICCIONARIO DE TRADUCCIONES ---
const translations = {
    es: {
        nav_about: "Sobre mí",
        nav_portfolio: "Portafolio",
        nav_contact: "Escribeme",
        nav_menu: "Menú",
        hero_greeting: "¡Hola! Me llamo,",
        hero_role: "Full-Stack Developer",
        section_about: "Sobre mi",
        tab_profile: "Perfil",
        tab_studies: "Estudios",
        tab_skills: "Skills",
        profile_text: `Como Desarrollador <b>Full-Stack</b>, me especializo en el ecosistema de <b>JavaScript</b>,
        construyendo aplicaciones robustas y escalables con el stack <b>PERN</b> (PostgreSQL,
        Express, React, Node.js).<br>
        En el <b>Frontend</b>, creo interfaces de usuario dinámicas con React y manejo estados complejos
        con Redux.<br>
        Para el <b>Backend</b>, desarrollo APIs RESTful eficientes usando Node.js y Express,
        conectándolas a <b>bases de datos</b> PostgreSQL que gestiono con el ORM Sequelize.<br>
        Apasionado por el diseño y el emprendimiento. Estoy en constante aprendizaje.<br>
        Formado en <a href="https://www.coderhouse.com" target="_blank"><u>Coderhouse</u></a> 🚀 y <a href="https://www.soyhenry.com" target="_blank"><u>Soy Henry</u></a> ⭐.`,
        studies_complete: "Completos",
        studies_current: "Cursando actualmente",
        download_cv: "Descargar C.V.",
        section_portfolio: "Portafolio",
        project_demo: "Demo",
        project_code: "Codigo",
        footer_work: "Trabajemos juntos",
        footer_contact: "Contactame aquí.",
        footer_created: "Creado con ❤ por Jona"
    },
    en: {
        nav_about: "About me",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact me",
        nav_menu: "Menu",
        hero_greeting: "Hi! My name is,",
        hero_role: "Full-Stack Developer",
        section_about: "About me",
        tab_profile: "Profile",
        tab_studies: "Studies",
        tab_skills: "Skills",
        profile_text: `As a <b>Full-Stack Developer</b>, I specialize in the <b>JavaScript</b> ecosystem,
        building robust and scalable applications with the <b>PERN</b> stack (PostgreSQL,
        Express, React, Node.js).<br>
        On the <b>Frontend</b>, I build dynamic user interfaces with React and manage complex states
        with Redux.<br>
        For the <b>Backend</b>, I develop efficient RESTful APIs using Node.js and Express,
        connecting them to PostgreSQL <b>databases</b> which I manage with the Sequelize ORM.<br>
        Passionate about design and entrepreneurship. I am constantly learning.<br>
        Trained at <a href="https://www.coderhouse.com" target="_blank"><u>Coderhouse</u></a> 🚀 and <a href="https://www.soyhenry.com" target="_blank"><u>Soy Henry</u></a> ⭐.`,
        studies_complete: "Completed",
        studies_current: "Currently studying",
        download_cv: "Download C.V.",
        section_portfolio: "Portfolio",
        project_demo: "Demo",
        project_code: "Code",
        footer_work: "Let's work together",
        footer_contact: "Contact me here.",
        footer_created: "Created with ❤ by Jona"
    },
    jp: {
        nav_about: "私について",
        nav_portfolio: "ポートフォリオ",
        nav_contact: "お問い合わせ",
        nav_menu: "メニュー",
        hero_greeting: "こんにちは！",
        hero_role: "フルスタックエンジニア",
        section_about: "私について",
        tab_profile: "プロフィール",
        tab_studies: "学歴",
        tab_skills: "スキル",
        profile_text: `<b>フルスタックエンジニア</b>として、<b>JavaScript</b>エコシステムを専門とし、
        <b>PERN</b>スタック (PostgreSQL、Express、React、Node.js) を使用して堅牢でスケーラブルなアプリケーションを構築しています。<br>
        <b>フロントエンド</b>では、Reactを使用して動的なユーザーインターフェースを作成し、Reduxで複雑な状態を管理します。<br>
        <b>バックエンド</b>では、Node.jsとExpressを使用して効率的なRESTful APIを開発し、
        Sequelize ORMで管理するPostgreSQL<b>データベース</b>に接続します。<br>
        デザインと起業家精神に情熱を注いでいます。常に学び続けています。<br>
        <a href="https://www.coderhouse.com" target="_blank"><u>Coderhouse</u></a> 🚀 と <a href="https://www.soyhenry.com" target="_blank"><u>Soy Henry</u></a> ⭐ で研修を受けました。`,
        studies_complete: "完了",
        studies_current: "現在学習中",
        download_cv: "履歴書をダウンロード",
        section_portfolio: "ポートフォリオ",
        project_demo: "デモ",
        project_code: "コード",
        footer_work: "一緒に働きましょう",
        footer_contact: "ご連絡はこちら",
        footer_created: "Jonaによって作成されました ❤"
    }
};

// --- FUNCIÓN PARA ABRIR/CERRAR MENÚ (CLICK) ---
// Esta función se llama desde el HTML con onclick="toggleLanguageDropdown(this)"
window.toggleLanguageDropdown = function(btn) {
    // Cierra otros menús abiertos primero (si hubiera)
    const allSelectors = document.querySelectorAll('.language-selector');
    const currentSelector = btn.closest('.language-selector');
    
    allSelectors.forEach(sel => {
        if (sel !== currentSelector) sel.classList.remove('active');
    });

    // Alterna el actual
    currentSelector.classList.toggle('active');
}

// --- CERRAR AL HACER CLICK AFUERA ---
document.addEventListener('click', function(event) {
    const isClickInside = event.target.closest('.language-selector');
    
    // Si el click NO fue dentro de un selector, cerramos todos los que estén activos
    if (!isClickInside) {
        document.querySelectorAll('.language-selector.active').forEach(sel => {
            sel.classList.remove('active');
        });
    }
});

// --- FUNCIÓN PARA CAMBIAR IDIOMA ---
// Esta función se llama desde el HTML con onclick="changeLanguage('es')"
window.changeLanguage = function(lang) {
    // 1. Cerrar el menú automáticamente al seleccionar
    document.querySelectorAll('.language-selector.active').forEach(sel => {
        sel.classList.remove('active');
    });

    // 2. Actualizar texto del botón principal (ES, EN, JP)
    document.querySelectorAll('.current-lang').forEach(span => {
        span.textContent = lang.toUpperCase();
    });

    // 3. Aplicar traducciones con animación
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        // Verificar si existe traducción para esa clave
        if (translations[lang][key]) {
            // A. Añadir clase para desvanecer (fade-out) - Opacidad 0
            element.classList.add('fade-text');
            
            // B. Esperar a que termine la transición CSS (300ms)
            setTimeout(() => {
                // C. Cambiar el contenido HTML (innerHTML permite etiquetas como <b> o <br>)
                element.innerHTML = translations[lang][key];
                
                // D. Quitar la clase para aparecer (fade-in) - Opacidad 1
                element.classList.remove('fade-text');
            }, 300); 
        }
    });
}