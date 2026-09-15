// Banners virtuais da loja (Promocionais / Lançamentos)
let imagens = [
    "/src/assets/Elden_ring.jpg", // Banner principal / DLC
    "/src/assets/Nightreign.jpg", // Colecionáveis
    "/src/assets/Sote.jpg"  // Edições Especiais
];

let index = 0;
let tempo = 3500; // 3.5 segundos por slide

const imgBanner = document.getElementById("imgBanner");

function slideShow() {
    imgBanner.src = imagens[index];
    index++;

    if (index >= imagens.length) {
        index = 0;
    }
}

// Executa a primeira vez e configura o intervalo correto
slideShow();
setInterval(slideShow, tempo);

// Lógica do Menu Hamburguer
const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener('click', () => {
    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open");
});
