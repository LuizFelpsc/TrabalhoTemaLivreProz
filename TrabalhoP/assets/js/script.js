// Quando a página termina de ser carregada
document.addEventListener('DOMContentLoaded', function () {

    // Inicialização do gráfico com Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2021', '2022', '2023'],
            datasets: [{
                label: 'Porcentagem de pessoas com depressão',
                data: [10.7, 15.5, 18.7], 
                backgroundColor: [
                    'rgba(0, 255, 0, 0.4)',
                    'rgba(255, 255, 0, 0.4)',
                    'rgba(255, 0, 0, 0.4)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.1)',
                    'rgba(54, 162, 235, 0.1)',
                    'rgba(255, 206, 86, 0.1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100, 
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
    
            plugins: {
                legend: {
                    display: false  // Oculta a legenda para economizar espaço
                }
            },
            responsive: true,  // Torna o gráfico responsivo
            maintainAspectRatio: false,  // Permite que o aspect ratio seja ajustado
            aspectRatio: 1  // Ajusta a altura do gráfico (maior valor aumentará a altura)
        }
    });

    // Função para rolar para o topo da página
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Adiciona uma animação de rolar suave
        });
    }

    // Adiciona um ouvinte de evento para mostrar ou ocultar o botão de rolar para o topo
    window.addEventListener('scroll', scrollFunction);

    function scrollFunction() {
        var topButton = document.getElementById("topButton");

        // Mostra o botão quando a rolagem está abaixo de 20 pixels do topo da página
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    }

    // Carrossel
    let currentIndex = 0;
    const carousel = document.getElementById('carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;

    // Atualiza a transformação CSS para mover o carrossel para a posição correta
    function updateCarousel() {
        const newTransformValue = -currentIndex * 100 + '%';
        carousel.style.transform = 'translateX(' + newTransformValue + ')';
    }

    // Avança para o próximo slide e atualiza o carrossel
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    // Retrocede para o slide anterior e atualiza o carrossel
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    // Adiciona ouvinte de eventos para as teclas de seta
    document.addEventListener('keydown', function (event) {
        switch (event.code) {
            case 'ArrowRight':
                nextSlide();
                break;
            case 'ArrowLeft':
                prevSlide();
                break;
        }
    });

    // Adiciona eventos de clique aos botões no HTML
    document.getElementById('prev-btn').addEventListener('click', prevSlide);
    document.getElementById('next-btn').addEventListener('click', nextSlide);

    // Adiciona evento de clique ao botão de rolar para o topo
    document.getElementById('topButton').addEventListener('click', scrollToTop);
});