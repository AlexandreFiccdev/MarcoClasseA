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
    const sections = [
        { id: 'home', button: 'a[href="#home"] .button-topnav' },
        { id: 'sobre', button: 'a[href="#sobre"] .button-topnav' },
        { id: 'especialidades', button: 'a[href="#especialidades"] .button-topnav' },
        { id: 'projetos', button: 'a[href="#projetos"] .button-topnav' },
        { id: 'contato', button: 'a[href="#contato"] .button-topnav' },
    ];

    const buttons = document.querySelectorAll('.button-topnav');
    let mostVisibleSection = null;
    let maxVisibleHeight = 0;

    sections.forEach(section => {
        const element = document.getElementById(section.id);
        const rect = element.getBoundingClientRect(); // Posição da seção relativa à janela de visualização

        const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
        if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            mostVisibleSection = section;
        }
    });

    if (mostVisibleSection) {
        buttons.forEach(button => button.classList.remove('active'));
        document.querySelector(mostVisibleSection.button).classList.add('active');
    }
}

window.onload = updateButtonColor;
window.onscroll = updateButtonColor;


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
