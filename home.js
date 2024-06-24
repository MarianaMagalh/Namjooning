document.addEventListener('DOMContentLoaded', () => {
    const carrosselSlide = document.querySelector('.carrossel-slide');
    const carrosselItems = document.querySelectorAll('.carrossel-item');

    const btnInicial = document.querySelector('.btn-inicial');
    const btnFinal = document.querySelector('.btn-final');
    
    let contador = 0;

    function updateCarrossel() {
        const size = carrosselItems[0].clientWidth;
        carrosselSlide.style.transform = 'translateX(' + (-size * contador) + 'px)';
    }

    function slideInicial() {
        if (contador >= carrosselItems.length - 1) {
            contador = -1; // Reinicia o contador para começar do primeiro item novamente
        }
        carrosselSlide.style.transition = "transform 0.5s ease-in-out";
        contador++;
        updateCarrossel();
    }

    function slideFinal() {
        if (contador <= 0) {
            contador = carrosselItems.length; // Vai para o último item
        }
        carrosselSlide.style.transition = "transform 0.5s ease-in-out";
        contador--;
        updateCarrossel();
    }

    btnInicial.addEventListener('click', slideInicial);
    btnFinal.addEventListener('click',  slideFinal);

    // Auto-slide (mudar de slide automaticamente a cada 5 segundos)
    setInterval(slideInicial, 5000);

    // Atualiza o carrossel ao redimensionar a janela
    window.addEventListener('resize', updateCarrossel);
});
