document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os links de navegação
    const navLinks = document.querySelectorAll("nav a");

    // Função para remover a classe "focus" de todos os links
    function removeFocus() {
        navLinks.forEach(link => {
            link.classList.remove("focus");
        });
    }

    // Função para remover a classe "light" de todos os links
    function removeDark() {
        navLinks.forEach(link => {
            link.classList.remove("dark");
        });
    }

    function addDark() {
        navLinks.forEach(link => {
            link.classList.add("dark");
        });
    }

    // Função para adicionar a classe "focus" e "light" ao link correto
    function updateNav() {
        const scrollY = window.scrollY;

        const homeSection = document.querySelector("#home").offsetTop - 100;
        const curiosidadesSection = document.querySelector("#curiosidades").offsetTop - 100;
        const projetosSection = document.querySelector("#projetos").offsetTop - 100;
        const habilidadesSection = document.querySelector("#habilidades").offsetTop - 100;

        removeFocus();
        removeDark();

        if (scrollY >= homeSection && scrollY < curiosidadesSection) {
            navLinks[0].classList.add("focus");
        } else if (scrollY >= curiosidadesSection && scrollY < projetosSection) {
            navLinks[1].classList.add("focus");
            addDark();
        } else if (scrollY >= projetosSection && scrollY < habilidadesSection) {
            navLinks[2].classList.add("focus");
        } else if (scrollY >= habilidadesSection) {
            navLinks[3].classList.add("focus");
        }
    }

    // Atualiza a navegação ao carregar a página e ao rolar a página
    window.addEventListener("scroll", updateNav);
    updateNav();
});
