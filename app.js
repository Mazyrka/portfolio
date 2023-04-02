let typingEffect = new Typed(".home_page-typing",{
    strings : ["Developer", "Psychologist", "Adventurer"],
    loop : true,
    typeSpeed:60,
    backSpeed:60,

});

document.querySelector(".navbar__btn-ru").addEventListener("click", changeTypeEffectRu);

function changeTypeEffectRu() {
    Object.defineProperty(typingEffect, "strings",  {value : ["Разработчик", "Психолог", "Карьерист"]});
};

document.querySelector(".navbar__btn-active").addEventListener("click", changeTypeEffectEn);

function changeTypeEffectEn() {
    Object.defineProperty(typingEffect, "strings",  {value : ["Developer", "Psychologist", "Adventurer"]});
};
    

const allLang = ["ru", "en"];
let currentLang = "en";
const langBottons = document.querySelectorAll("[data-btn]");
const currentPathName = window.location.pathname;
let currentText = {};

const homeText = {

    "navbar-home": {
        "ru": "Главная",
        "en": "Home"
    },

    "navbar-about": {
        "ru": "Обо мне",
        "en": "About"
    },

    "navbar-project": {
        "ru": "Проекты",
        "en": "Projects"
    },

    "navbar-contact": {
        "ru": "Контакты",
        "en": "Contacts"
    },

    "home-header": {
        "ru": "Привет! Меня зовут Макар.",
        "en": "Hi, my name is Makar! i'm a"
    },

    
    "home-paragraph": {
        "ru": "Амбициозный Front-end разработчик из города Стамбул, Турция 📍",
        "en": "A passionate Front-end Developer based in Istanbul, Turkey 📍"
    },

    "about": {
        "ru": "Обо мне",
        "en": "About me"
    },

    "about-location": {
        "ru": "Целеустремленный Front-End разработчик",
        "en": "A dedicated Front-End Developer based in Turkey, Istanbul 📍"
    },

    "about-info": {
        "ru": `Как junior Front-End разработчик, я
               обладаю внушительным арсеналом навыков в HTML, CSS, JavaScript, React и SCSS. Я преуспеваю в разработке 
               отзывчивых веб-сайтов, которые предлагают плавный пользовательский интерфейс. Мой опыт
               заключается в создании динамичных, привлекательных интерфейсов посредством написания чистого
               оптимизированного кода и использованием передовых методов, инструментов разработки.
               Я также являюсь командным игроком, который преуспевает в сотрудничестве
               с коллективом, для создания выдающихся веб-приложений.
               Я `,
        "en": `As a Junior Front-End Developer, I 
               possess an impressive arsenal of skills in HTML, CSS, 
               JavaScript, React and SCSS. I excel in designing and maintaining
               responsive websites that offer a smooth user experience. My expertise 
               lies in crafting dynamic, engaging interfaces through writing clean 
               and optimized code and utilizing cutting-edge development tools 
               and techniques. I am also a team player who thrives in collaborating 
               with cross-functional teams to produce outstanding web applications.`
    },

    "portfolio": {
        "ru": "Портфолио",
        "en": "Portfolio"
    },

    "project-about": {
        "ru": "Каждый проект - это уникальная разработка 🧩",
        "en": "Each project is a unique piece of development 🧩"
    },

    "project-logo-car-rental-1": {
        "ru": "Аренда автомобилей 🚗",
        "en": "Car rental 🚗"
    },

    "project-text-car-rental-1": {
        "ru": `Сайт аренды автомобилей — это онлайн-платформа, которая позволяет пользователям арендовать автомобили для
               личного или делового использования. Веб-сайт предоставляет интерфейс для поиска, сравнения
               и бронирования автомобилей.`,
        "en": `A car rental website is an online platform that allows users to rent cars for
               personal or business use. The website provides an interface for searching, comparing, 
               and reserving cars.`
    },

    "project-logo-car-rental-2": {
        "ru": "Аренда автомобилей 🚗",
        "en": "Car rental 🚗"
    },

    "project-text-car-rental-2": {
        "ru": `Сайт аренды автомобилей — это онлайн-платформа, которая позволяет пользователям арендовать автомобили для
               личного или делового использования. Веб-сайт предоставляет интерфейс для поиска, сравнения
               и бронирования автомобилей.`,
        "en": `A car rental website is an online platform that allows users to rent cars for
               personal or business use. The website provides an interface for searching, comparing, 
               and reserving cars.`
    },

    "project-logo-car-rental-3": {
        "ru": "Аренда автомобилей 🚗",
        "en": "Car rental 🚗"
    },

    "project-text-car-rental-3": {
        "ru": `Сайт аренды автомобилей — это онлайн-платформа, которая позволяет пользователям арендовать автомобили для
               личного или делового использования. Веб-сайт предоставляет интерфейс для поиска, сравнения
               и бронирования автомобилей.`,
        "en": `A car rental website is an online platform that allows users to rent cars for
               personal or business use. The website provides an interface for searching, comparing, 
               and reserving cars.`
    },

    "project-logo-car-rental-4": {
        "ru": "Аренда автомобилей 🚗",
        "en": "Car rental 🚗"
    },

    "project-text-car-rental-4": {
        "ru": `Сайт аренды автомобилей — это онлайн-платформа, которая позволяет пользователям арендовать автомобили для
               личного или делового использования. Веб-сайт предоставляет интерфейс для поиска, сравнения
               и бронирования автомобилей.`,
        "en": `A car rental website is an online platform that allows users to rent cars for
               personal or business use. The website provides an interface for searching, comparing, 
               and reserving cars.`
    },

    "contact": {
        "ru": "Контакты",
        "en": "Contact"
    },

    "simpletext": {
        "ru": "Вы можете связаться со мной",
        "en": "Don't be shy hit me up"
    },

    "contact-location-text": {
        "ru": "Расположение",
        "en": "Location"
    },

    "contact-location": {
        "ru": "Стамбул, Турция",
        "en": "Istanbul, Turkey"
    },
}

function checkPagePathName() {
    switch (currentPathName) {
        case "/index.html":
            currentText = homeText;
            break;
        default:
            currentText = homeText;
            break;
    }
}
checkPagePathName();

function changeLang() {
    for (const key in currentText) {
        const elem = document.querySelector(`[data-lang=${key}]`)
        if (elem) {
            elem.textContent = currentText[key][currentLang];
        }
    }
}
changeLang();

langBottons.forEach((btn=>{
    btn.addEventListener("click", (event)=>{
        currentLang = event.target.dataset.btn;
        btn.classList.add("navbar__btn-active");
        changeLang();
    })
}))