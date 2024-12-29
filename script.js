const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.arrow.right');
const prevButton = document.querySelector('.arrow.left');

let currentIndex = 0;

function updateCarousel() {
    const width = items[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Vai para o próximo slide
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Volta para o slide anterior
    updateCarousel();
});



function updateButtonColor() {
    const scrollPosition = window.scrollY;

    const homePosition = document.getElementById('home').offsetTop;
    const sobrePosition = document.getElementById('sobre').offsetTop;
    const especialidadesPosition = document.getElementById('especialidades').offsetTop;
    const projetosPosition = document.getElementById('projetos').offsetTop;
    const contatoPosition = document.getElementById('contato').offsetTop;

    const buttons = document.querySelectorAll('.button-topnav');

    if (scrollPosition >= contatoPosition - 50) {
        buttons.forEach(button => button.classList.remove('active'));
        document.querySelector('a[href="#contato"] .button-topnav').classList.add('active');
    } else if (scrollPosition >= projetosPosition - 50) {
        buttons.forEach(button => button.classList.remove('active'));
        document.querySelector('a[href="#projetos"] .button-topnav').classList.add('active');
    } else if (scrollPosition >= especialidadesPosition - 50) {
        buttons.forEach(button => button.classList.remove('active'));
        document.querySelector('a[href="#especialidades"] .button-topnav').classList.add('active');
    } else if (scrollPosition >= sobrePosition - 50) {
        buttons.forEach(button => button.classList.remove('active'));
        document.querySelector('a[href="#sobre"] .button-topnav').classList.add('active');
    } else {
        buttons.forEach(button => button.classList.remove('active'));
        document.querySelector('a[href="#home"] .button-topnav').classList.add('active');
    }
}
    
window.onload = function () {
    updateButtonColor();
};

window.onscroll = function () {
    updateButtonColor();
};

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const modalMenu = document.getElementById('modal-menu');
    const closeModal = document.getElementById('close-modal');

    menuButton.addEventListener('click', () => {
        modalMenu.style.display = 'flex'; // Abre o modal
    });

    closeModal.addEventListener('click', () => {
        modalMenu.style.display = 'none'; // Fecha o modal
    });

    // Fecha o modal ao clicar fora do conteúdo
    modalMenu.addEventListener('click', (event) => {
        if (event.target === modalMenu) {
            modalMenu.style.display = 'none';
        }
    });
});
