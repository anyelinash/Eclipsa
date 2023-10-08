document.addEventListener('DOMContentLoaded', function() {
    const luna = document.querySelector('.luna');
    const centerX = window.innerWidth / 2.2;
    const centerY = window.innerHeight / 2.9;
    const radiusX = 190; // Radio en el eje X
    const radiusY = 190; // Radio en el eje Y
    let angle = 0;
    let animationPaused = false;

    luna.addEventListener('mouseenter', () => {
        animationPaused = true;
    });

    luna.addEventListener('mouseleave', () => {
        animationPaused = false;
        updatePosition();
    });

    function updatePosition() {
        if (!animationPaused) {
            const x = centerX + radiusX * Math.cos(angle);
            const y = centerY + radiusY * Math.sin(angle);
            luna.style.transform = `translate(${x}px, ${y}px)`;
            angle += 0.008; // Ajusta la velocidad de la animación
            requestAnimationFrame(updatePosition);
        }
    }

    updatePosition();
});
