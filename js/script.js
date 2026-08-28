const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));

  const bars = menuToggle.querySelectorAll('span');
  if (isOpen) {
    bars[0].style.transform = 'translateY(7px) rotate(45deg)';
    bars[1].style.opacity = '0';
    bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    bars[0].style.transform = '';
    bars[1].style.opacity = '';
    bars[2].style.transform = '';
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');

    if (window.innerWidth <= 940) {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');

      menuToggle.querySelectorAll('span')[0].style.transform = '';
      menuToggle.querySelectorAll('span')[1].style.opacity = '';
      menuToggle.querySelectorAll('span')[2].style.transform = '';
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 940) {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.querySelectorAll('span')[0].style.transform = '';
    menuToggle.querySelectorAll('span')[1].style.opacity = '';
    menuToggle.querySelectorAll('span')[2].style.transform = '';
  }
});

const translations = {
    es: {
        "nav.home": "Inicio",
        "nav.about": "Sobre nosotros",
        "nav.services": "Servicios",
        "nav.gallery": "Galería",
        "nav.contact": "Contacto",
        "nav.quote": "COTIZAR AHORA",
        "page.title": "Agro SEMAG - Inicio",
        "hero.eyebrow": "TECNOLOGÍA QUE TRANSFORMA",
        "hero.title": "Aplicaciones precisas<br>para <strong>mayor productividad</strong><br>con drones <span>DJI Agriculture</span>",
        "hero.description": "Aplicaciones más eficientes y sostenibles para su cultivo. Menos costos, más resultados.",
        "hero.benefitPrecision": "Alta precisión",
        "hero.benefitCost": "Menos costos",
        "hero.benefitSafety": "Seguro y sostenible",
        "hero.button": "CONOCÉ MÁS",
        "hero.infoSupport": "SOPORTE TÉCNICO",
        "hero.infoSupportDescription": "Antes, durante y después de cada aplicación.",
        "hero.infoRegion": "ATENCIÓN EN LA REGIÓN",
        "hero.infoRegionDescription": "Santa Rita, Alto Paraná y zonas aledañas.",
        "hero.infoTechnology": "TECNOLOGÍA AVANZADA",
        "hero.infoTechnologyDescription": "Drones DJI Agriculture",
        "hero.infoPilots": "PILOTOS CERTIFICADOS",
        "hero.infoPilotsDescription": "Profesionales capacitados",
        "benefits.eyebrow": "BENEFICIOS DE LA TECNOLOGÍA CON DRONES",
        "benefits.title": "Más eficiencia en cada hectárea",
        "benefits.description": "La tecnología de drones DJI Agriculture permite aplicar insumos de forma precisa y uniforme, optimizando recursos y protegiendo su inversión.",
        "benefits.item1": "Reducción de hasta 70% en el uso de agua",
        "benefits.item2": "Hasta 30% de ahorro en defensivos",
        "benefits.item3": "Aplicaciones precisas, uniformes y seguras",
        "benefits.item4": "Menor compactación del suelo",
        "benefits.item5": "Más seguridad para el operador y el ambiente",
        "benefits.item6": "Mapeo y reportes en tiempo real",
        "about.eyebrow": "Sobre nosotros",
        "about.title": "AGROSEMAG",
        "about.description": "Agrosemag nació en 2019 con el objetivo de revolucionar el día a día del productor rural, brindando innovaciones tecnológicas para aumentar la producción y el rendimiento del agronegocio.",
        "about.button": "SOBRE NOSOTROS",
        "solutions.highlight": "SOLUCIONES",

"solutions.drones.title": "DRONES AGRÍCOLAS",
"solutions.drones.description": "Equipos DJI para pulverización, siembra y mapeo.",

"solutions.tanks.title": "TANQUES DE APLICACIÓN",
"solutions.tanks.description": "Soluciones resistentes y eficientes para todo tipo de cultivo.",

"solutions.sprayers.title": "PULVERIZADORES TRADICIONALES",
"solutions.sprayers.description": "Equipos de alta performance para su maquinaria.",

"solutions.parts.title": "REPUESTOS Y ACCESORIOS",
"solutions.parts.description": "Amplio stock de piezas originales y compatibles.",

"solutions.monitors.title": "MONITORES AGRÍCOLAS",
"solutions.monitors.description": "Tecnología para el control y monitoreo de su operación.",

"solutions.signal.title": "SEÑAL DE PRECISIÓN VÍA SATÉLITE",
"solutions.signal.description": "Precisión centimétrica para guiado y aplicaciones.",

"solutions.support.title": "ASISTENCIA TÉCNICA ESPECIALIZADA",
"solutions.support.description": "Servicio técnico, capacitación y soporte postventa.",

"solutions.button": "VER TODAS LAS SOLUCIONES",
"brands.represent": "Representamos",
"brands.accent": "à:",
"cta.title": "¿Listo para llevar tu <span>producción</span> al siguiente nivel?",
"cta.description": "Contactanos y recibí asesoramiento personalizado sin compromiso.",
"cta.button": "HABLÁ CON UN ASESOR",
"footer.description": "Ofrecemos tecnología de punta con drones DJI Agriculture, productos de calidad y un equipo comprometido con el crecimiento del agro.",

"footer.navigation": "NAVEGACIÓN",
"footer.services": "SERVICIOS",
"footer.products": "PRODUCTOS",
"footer.contact": "CONTACTO",

"footer.address": "Santa Rita, Alto Paraná - Py",
"footer.hours": "Lun a Vie: 07:00 - 17:00<br>Sáb: 07:00 - 12:00",

"footer.rights": "Todos los derechos reservados.",
"footer.developed": "Layout exclusivo desarrollado para M.M.",
    },

    pt: {
        "nav.home": "Início",
        "nav.about": "Sobre nós",
        "nav.services": "Serviços",
        "nav.gallery": "Galeria",
        "nav.contact": "Contato",
        "nav.quote": "CONTATAR",
        "page.title": "Agro SEMAG - Início",
        "hero.eyebrow": "TECNOLOGIA QUE TRANSFORMA",
        "hero.title": "Aplicações precisas<br>para <strong>maior produtividade</strong><br>com drones <span>DJI Agriculture</span>",
        "hero.description": "Aplicações mais eficientes e sustentáveis para seu cultivo. Menos custos, mais resultados.",
        "hero.benefitPrecision": "Alta precisão",
        "hero.benefitCost": "Menores custos",
        "hero.benefitSafety": "Seguro e sustentável",
        "hero.button": "CONHEÇA MAIS",
        "hero.infoSupport": "SUPORTE TÉCNICO",
        "hero.infoSupportDescription": "Antes, durante e depois de cada aplicação.",
        "hero.infoRegion": "ATENDIMENTO NA REGIÃO",
        "hero.infoRegionDescription": "Santa Rita, Alto Paraná e regiões próximas.",
        "hero.infoTechnology": "TECNOLOGIA AVANÇADA",
        "hero.infoTechnologyDescription": "Drones DJI Agriculture",
        "hero.infoPilots": "PILOTOS CERTIFICADOS",
        "hero.infoPilotsDescription": "Profissionais capacitados",
        "benefits.eyebrow": "BENEFÍCIOS DA TECNOLOGIA COM DRONES",
        "benefits.title": "Mais eficiência em cada hectare",
        "benefits.description": "A tecnologia de drones DJI Agriculture permite aplicar insumos de forma precisa e uniforme, otimizando recursos e protegendo seu investimento.",
        "benefits.item1": "Redução de até 70% no uso de água",
        "benefits.item2": "Até 30% de economia em defensivos",
        "benefits.item3": "Aplicações precisas, uniformes e seguras",
        "benefits.item4": "Menor compactação do solo",
        "benefits.item5": "Mais segurança para o operador e o meio ambiente",
        "benefits.item6": "Mapeamento e relatórios em tempo real",
        "about.eyebrow": "Sobre nós",
        "about.title": "AGROSEMAG",
        "about.description": "A Agrosemag nasceu em 2019 com o objetivo de revolucionar o dia a dia do produtor rural, trazendo inovações tecnológicas para aumentar a produção e o rendimento do agronegócio.",
        "about.button": "SOBRE NÓS",
        "solutions.highlight": "SOLUÇÕES",

"solutions.drones.title": "DRONES AGRÍCOLAS",
"solutions.drones.description": "Equipamentos DJI para pulverização, semeadura e mapeamento.",

"solutions.tanks.title": "TANQUES DE APLICAÇÃO",
"solutions.tanks.description": "Soluções resistentes e eficientes para todos os tipos de cultivo.",

"solutions.sprayers.title": "PULVERIZADORES TRADICIONAIS",
"solutions.sprayers.description": "Equipamentos de alto desempenho para seu maquinário.",

"solutions.parts.title": "PEÇAS E ACESSÓRIOS",
"solutions.parts.description": "Amplo estoque de peças originais e compatíveis.",

"solutions.monitors.title": "MONITORES AGRÍCOLAS",
"solutions.monitors.description": "Tecnologia para controle e monitoramento da sua operação.",

"solutions.signal.title": "SINAL DE PRECISÃO VIA SATÉLITE",
"solutions.signal.description": "Precisão centimétrica para orientação e aplicações.",

"solutions.support.title": "ASSISTÊNCIA TÉCNICA ESPECIALIZADA",
"solutions.support.description": "Serviço técnico, capacitação e suporte pós-venda.",

"solutions.button": "VER TODAS AS SOLUÇÕES",
"brands.represent": "Representamos",
"brands.accent": "à:",
"cta.title": "Pronto para levar sua <span>produção</span> ao próximo nível?",
"cta.description": "Entre em contato e receba uma orientação personalizada, sem compromisso.",
"cta.button": "FALE COM UM CONSULTOR",
"footer.description": "Oferecemos tecnologia de ponta com drones DJI Agriculture, produtos de qualidade e uma equipe comprometida com o crescimento do agro.",

"footer.navigation": "NAVEGAÇÃO",
"footer.services": "SERVIÇOS",
"footer.products": "PRODUTOS",
"footer.contact": "CONTATO",

"footer.address": "Santa Rita, Alto Paraná - PY",
"footer.hours": "Seg a Sex: 07:00 - 17:00<br>Sáb: 07:00 - 12:00",

"footer.rights": "Todos os direitos reservados.",
"footer.developed": "Layout exclusivo desenvolvido para M.M.",
    },
    

    en: {
        "nav.home": "Home",
        "nav.about": "About us",
        "nav.services": "Services",
        "nav.gallery": "Gallery",
        "nav.contact": "Contact",
        "nav.quote": "GET A QUOTE",
        "page.title": "Agro SEMAG - Home",
        "hero.eyebrow": "TECHNOLOGY THAT TRANSFORMS",
        "hero.title": "Precise applications<br>for <strong>greater productivity</strong><br>with <span>DJI Agriculture</span> drones",
        "hero.description": "More efficient and sustainable applications for your crops. Lower costs, better results.",
        "hero.benefitPrecision": "High precision",
        "hero.benefitCost": "Lower costs",
        "hero.benefitSafety": "Safe and sustainable",
        "hero.button": "LEARN MORE",
        "hero.infoSupport": "TECHNICAL SUPPORT",
        "hero.infoSupportDescription": "Before, during and after every application.",
        "hero.infoRegion": "REGIONAL SERVICE",
        "hero.infoRegionDescription": "Santa Rita, Alto Paraná and nearby areas.",
        "hero.infoTechnology": "ADVANCED TECHNOLOGY",
        "hero.infoTechnologyDescription": "DJI Agriculture drones",
        "hero.infoPilots": "CERTIFIED PILOTS",
        "hero.infoPilotsDescription": "Qualified professionals",
        "benefits.eyebrow": "BENEFITS OF DRONE TECHNOLOGY",
        "benefits.title": "More efficiency in every hectare",
        "benefits.description": "DJI Agriculture drone technology enables precise and uniform application, optimizing resources and protecting your investment.",
        "benefits.item1": "Up to 70% reduction in water usage",
        "benefits.item2": "Up to 30% savings on crop protection products",
        "benefits.item3": "Precise, uniform and safe applications",
        "benefits.item4": "Lower soil compaction",
        "benefits.item5": "Greater safety for the operator and the environment",
        "benefits.item6": "Real-time mapping and reporting",
        "about.eyebrow": "About us",
        "about.title": "AGROSEMAG",
        "about.description": "Agrosemag was founded in 2019 with the goal of revolutionizing the daily lives of rural producers by bringing technological innovations to increase agricultural production and performance.",
        "about.button": "ABOUT US",
        "solutions.highlight": "SOLUTIONS",

"solutions.drones.title": "AGRICULTURAL DRONES",
"solutions.drones.description": "DJI equipment for spraying, seeding and mapping.",

"solutions.tanks.title": "APPLICATION TANKS",
"solutions.tanks.description": "Resistant and efficient solutions for all types of crops.",

"solutions.sprayers.title": "TRADITIONAL SPRAYERS",
"solutions.sprayers.description": "High-performance equipment for your machinery.",

"solutions.parts.title": "PARTS & ACCESSORIES",
"solutions.parts.description": "Wide stock of original and compatible parts.",

"solutions.monitors.title": "AGRICULTURAL MONITORS",
"solutions.monitors.description": "Technology for controlling and monitoring your operation.",

"solutions.signal.title": "SATELLITE PRECISION SIGNAL",
"solutions.signal.description": "Centimeter-level precision for guidance and applications.",

"solutions.support.title": "SPECIALIZED TECHNICAL SUPPORT",
"solutions.support.description": "Technical service, training and after-sales support.",

"solutions.button": "VIEW ALL SOLUTIONS",
"brands.represent": "We represent",
"brands.accent": ":",
"cta.title": "Ready to take your <span>production</span> to the next level?",
"cta.description": "Contact us and receive personalized advice with no obligation.",
"cta.button": "TALK TO AN ADVISOR",
"footer.description": "We offer cutting-edge technology with DJI Agriculture drones, quality products and a team committed to the growth of agriculture.",

"footer.navigation": "NAVIGATION",
"footer.services": "SERVICES",
"footer.products": "PRODUCTS",
"footer.contact": "CONTACT",

"footer.address": "Santa Rita, Alto Paraná - PY",
"footer.hours": "Mon to Fri: 07:00 - 17:00<br>Sat: 07:00 - 12:00",

"footer.rights": "All rights reserved.",
"footer.developed": "Exclusive layout developed for M.M.",        
    }
};

const languageButtons = document.querySelectorAll(".language-button");

function changeLanguage(language) {
    const selectedTranslations = translations[language];

    if (!selectedTranslations) {
        return;
    }

    document.documentElement.lang =
        language === "pt" ? "pt-BR" : language;

    document.title = selectedTranslations["page.title"];

    const translatableElements = document.querySelectorAll("[data-i18n]");

    translatableElements.forEach((element) => {
        const key = element.dataset.i18n;
        const translatedText = selectedTranslations[key];

        if (translatedText) {
            element.innerHTML = translatedText;
        }
    });

    languageButtons.forEach((button) => {
        button.classList.toggle(
            "active",
            button.dataset.language === language
        );
    });

    localStorage.setItem("agrosemag-language", language);
}

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const language = button.dataset.language;

        changeLanguage(language);
    });
});

const savedLanguage =
    localStorage.getItem("agrosemag-language") || "es";

changeLanguage(savedLanguage);

const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
