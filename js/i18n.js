/* ==========================================================
   Sistema simples de tradução PT/EN
   Aplica texto conforme atributos data-i18n="chave"
   ========================================================== */

var translations = {
  pt: {
    "nav.home": "Home",
    "nav.projects": "Projetos",
    "nav.about": "Sobre",
    "nav.contact": "Contato",

    "footer.rights": "© 2026 Marcos Alcantara.",
    "footer.artstation": "ArtStation",
    "footer.linkedin": "LinkedIn",
    "footer.email": "E-mail",

    "common.imgSoon": "Imagem em breve",

    "home.kicker": "Disponível para estágio em arte de jogos",
    "home.h1": "Modelo personagens, construo cenas e prototipo mecânicas jogáveis.",
    "home.lead": "Sou estudante de Game Design com foco em arte 3D — da escultura de personagens ao level design em engine. Uso Blender, Substance Painter e Unity para transformar ideias em algo que o jogador possa explorar.",
    "home.cta.projects": "Ver projetos",
    "home.cta.contact": "Entrar em contato",
    "home.h1card.title": "Modelagem 3D",
    "home.h1card.desc": "Personagens e props com workflow poly-a-poly em Blender, texturizados no Substance 3D Painter.",
    "home.h2card.title": "Level design",
    "home.h2card.desc": "Prototipagem de espaços jogáveis em Unity e Unreal, pensando em ritmo, leitura e combate.",
    "home.h3card.title": "Narrativa e mundo",
    "home.h3card.desc": "Criação de narrativas e contexto para os jogos, dando motivo para cada mecânica e cada sala.",

    "projects.h1": "Projetos",
    "projects.lead": "Uma seleção do que venho construindo — de jogos completos em engine até estudos de personagem em 3D. Cada projeto aqui foi uma forma de aprender uma parte diferente do processo.",

    "project1.tag1": "Unreal Engine 5",
    "project1.tag2": "Blueprint",
    "project1.title": "FPS estilo COD Zombies",
    "project1.desc": "Jogo de tiro em primeira pessoa inspirado no modo Zumbi de Call of Duty, construído em Unreal Engine 5 usando Blueprints. Projeto de aprendizado focado em combate, ondas de inimigos e sistemas de jogo em UE5.",
    "project1.status": "Em desenvolvimento — projeto de aprendizado",
    "project1.cta": "Jogar no itch.io",

    "project2.tag1": "Unity (URP)",
    "project2.tag2": "Roguelike",
    "project2.title": "Catapimbas — dungeon crawler FPS roguelike",
    "project2.desc": "Dungeon crawler em primeira pessoa com geração de runs no estilo roguelike, desenvolvido em Unity com URP. Foco em level design modular e no ritmo de exploração e combate entre andares.",
    "project2.status": "Em desenvolvimento",
    "project2.cta": "Jogar no itch.io",

    "project3.tag1": "Blender",
    "project3.tag2": "Substance Painter",
    "project3.title": "Cavaleiro medieval — character art",
    "project3.desc": "Personagem 3D criado para um desafio comunitário de temática apocalíptica. Modelagem poly-a-poly em Blender e texturização em Substance 3D Painter, com estudo de iluminação para o render final.",
    "project3.status": "Concluído",
    "project3.cta": "Ver no ArtStation",

    "about.h1": "Sobre mim",
    "about.lead": "Um pouco da minha trajetória, formação e das ferramentas que uso no dia a dia.",
    "about.bio1": "Sou estudante de Game Design, atualmente cursando bacharelado no Centro Universitário FAM (2024–2027). Desenvolvo projetos 2D e 3D com foco em mecânicas de jogo, level design e narrativa, sempre tentando entender o motivo por trás de cada sistema que construo.",
    "about.bio2": "Antes de entrar em jogos, me formei tecnicamente em Design de Interiores pela ETEC, o que me deu uma base sólida em modelagem de ambientes e leitura espacial — algo que hoje aplico direto no level design. Também sou fluente em inglês, com formação pela CNA Idiomas.",
    "about.bio3": "No momento, estou em busca de uma oportunidade de estágio na área de arte de jogos, para aplicar e evoluir o que venho construindo nos meus projetos pessoais.",
    "about.soft1": "Criatividade",
    "about.soft2": "Trabalho em equipe",
    "about.soft3": "Organização",

    "about.tl1.period": "2024 — 2027",
    "about.tl1.title": "Bacharelado em Game Design",
    "about.tl1.desc": "Centro Universitário FAM — apresentação de projetos, criação de narrativas, modelagem 3D, texturização e animação.",
    "about.tl2.period": "2020 — 2023",
    "about.tl2.title": "Técnico em Design de Interiores",
    "about.tl2.desc": "ETEC — desenvolvimento de plantas e modelagem de ambientes, participação em feiras, exposições e projetos integradores. Capitão do time de basquete.",
    "about.tl3.period": "2016 — 2020",
    "about.tl3.title": "Inglês — CNA Idiomas",
    "about.tl3.desc": "Fluência em inglês, com projetos de comunicação, apresentações e conversação.",

    "about.tools.title": "Ferramentas e habilidades",
    "about.skill1.name": "Blender",
    "about.skill1.level": "Avançado",
    "about.skill2.name": "Unity",
    "about.skill2.level": "Intermediário",
    "about.skill3.name": "Photoshop",
    "about.skill3.level": "Edição e concept",
    "about.skill4.name": "Illustrator",
    "about.skill4.level": "Vetorização",
    "about.skill5.name": "Figma",
    "about.skill5.level": "UI básico",
    "about.skill6.name": "CapCut",
    "about.skill6.level": "Edição de vídeo",

    "about.certs.title": "Certificações",
    "about.cert1": "Modelagem 3D — Curso LowPolyPros",
    "about.cert2": "Inglês Nível Master 1 — CNA Idiomas",
    "about.cert3": "Técnico em Design de Interiores — ETEC Itaquera II",

    "contact.h1": "Vamos conversar",
    "contact.lead": "Estou em busca de uma oportunidade de estágio na área de arte de jogos. Se meu trabalho combina com o que você procura, entre em contato por qualquer um dos canais abaixo.",
    "contact.email.title": "E-mail",
    "contact.phone.title": "Telefone",
    "contact.linkedin.title": "LinkedIn",
    "contact.artstation.title": "ArtStation"
  },

  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",

    "footer.rights": "© 2026 Marcos Alcantara.",
    "footer.artstation": "ArtStation",
    "footer.linkedin": "LinkedIn",
    "footer.email": "Email",

    "common.imgSoon": "Image coming soon",

    "home.kicker": "Available for a game art internship",
    "home.h1": "I model characters, build scenes, and prototype playable mechanics.",
    "home.lead": "I'm a Game Design student focused on 3D art — from character sculpting to in-engine level design. I use Blender, Substance Painter, and Unity to turn ideas into something a player can actually explore.",
    "home.cta.projects": "View projects",
    "home.cta.contact": "Get in touch",
    "home.h1card.title": "3D modeling",
    "home.h1card.desc": "Characters and props with a poly-by-poly workflow in Blender, textured in Substance 3D Painter.",
    "home.h2card.title": "Level design",
    "home.h2card.desc": "Prototyping playable spaces in Unity and Unreal, with an eye on pacing, readability, and combat.",
    "home.h3card.title": "Narrative and world",
    "home.h3card.desc": "Building narrative and context for each game, giving every mechanic and room a reason to exist.",

    "projects.h1": "Projects",
    "projects.lead": "A selection of what I've been building — from full in-engine games to 3D character studies. Each one taught me a different part of the process.",

    "project1.tag1": "Unreal Engine 5",
    "project1.tag2": "Blueprint",
    "project1.title": "COD Zombies-style FPS",
    "project1.desc": "A first-person shooter inspired by Call of Duty's Zombies mode, built in Unreal Engine 5 using Blueprints. A learning project focused on combat, enemy waves, and core UE5 game systems.",
    "project1.status": "In development — learning project",
    "project1.cta": "Play on itch.io",

    "project2.tag1": "Unity (URP)",
    "project2.tag2": "Roguelike",
    "project2.title": "Catapimbas — FPS dungeon crawler roguelike",
    "project2.desc": "A first-person dungeon crawler with roguelike run generation, built in Unity with URP. Focused on modular level design and the pacing of exploration and combat between floors.",
    "project2.status": "In development",
    "project2.cta": "Play on itch.io",

    "project3.tag1": "Blender",
    "project3.tag2": "Substance Painter",
    "project3.title": "Medieval knight — character art",
    "project3.desc": "A 3D character made for a community apocalypse-themed challenge. Poly-by-poly modeling in Blender and texturing in Substance 3D Painter, with a lighting study for the final render.",
    "project3.status": "Completed",
    "project3.cta": "View on ArtStation",

    "about.h1": "About me",
    "about.lead": "A bit about my background, education, and the tools I use day to day.",
    "about.bio1": "I'm a Game Design student, currently pursuing a bachelor's degree at Centro Universitário FAM (2024–2027). I develop 2D and 3D projects focused on game mechanics, level design, and narrative, always trying to understand the reason behind every system I build.",
    "about.bio2": "Before moving into games, I trained as an Interior Design technician at ETEC, which gave me a solid base in environment modeling and spatial reading — something I apply directly to level design today. I'm also fluent in English, trained at CNA Idiomas.",
    "about.bio3": "Right now, I'm looking for an internship opportunity in game art, to apply and grow what I've been building in my personal projects.",
    "about.soft1": "Creativity",
    "about.soft2": "Teamwork",
    "about.soft3": "Organization",

    "about.tl1.period": "2024 — 2027",
    "about.tl1.title": "Bachelor's in Game Design",
    "about.tl1.desc": "Centro Universitário FAM — project presentation, narrative creation, 3D modeling, texturing, and animation.",
    "about.tl2.period": "2020 — 2023",
    "about.tl2.title": "Interior Design technician",
    "about.tl2.desc": "ETEC — floor plan development and environment modeling, participation in fairs, exhibitions, and integrative projects. Basketball team captain.",
    "about.tl3.period": "2016 — 2020",
    "about.tl3.title": "English — CNA Idiomas",
    "about.tl3.desc": "Fluent in English, with communication projects, presentations, and conversation practice.",

    "about.tools.title": "Tools and skills",
    "about.skill1.name": "Blender",
    "about.skill1.level": "Advanced",
    "about.skill2.name": "Unity",
    "about.skill2.level": "Intermediate",
    "about.skill3.name": "Photoshop",
    "about.skill3.level": "Editing and concept art",
    "about.skill4.name": "Illustrator",
    "about.skill4.level": "Vector art",
    "about.skill5.name": "Figma",
    "about.skill5.level": "Basic UI",
    "about.skill6.name": "CapCut",
    "about.skill6.level": "Video editing",

    "about.certs.title": "Certifications",
    "about.cert1": "3D Modeling — LowPolyPros Course",
    "about.cert2": "English Master 1 Level — CNA Idiomas",
    "about.cert3": "Interior Design Technician — ETEC Itaquera II",

    "contact.h1": "Let's talk",
    "contact.lead": "I'm looking for an internship opportunity in game art. If my work fits what you're looking for, reach out through any of the channels below.",
    "contact.email.title": "Email",
    "contact.phone.title": "Phone",
    "contact.linkedin.title": "LinkedIn",
    "contact.artstation.title": "ArtStation"
  }
};

(function () {
  var STORAGE_KEY = "site-lang";

  function getSavedLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* ignora se storage não estiver disponível */ }
  }

  function applyLang(lang) {
    var dict = translations[lang] || translations.pt;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "pt-BR");
    saveLang(lang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var initial = getSavedLang() || "pt";
    applyLang(initial);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  });
})();
