document.addEventListener('DOMContentLoaded', function () {
    const sateliteElement = document.querySelector('.satelite');
    const centerX = window.innerWidth / 2.1;
    const centerY = window.innerHeight / 2.7;
    const radiusX = 130; // Radio en el eje X
    const radiusY = 120; // Radio en el eje Y
    let angle = 0;
    let animationPaused = false;
  
    sateliteElement.addEventListener('mouseenter', () => {
      animationPaused = true;
    });
  
    sateliteElement.addEventListener('mouseleave', () => {
      animationPaused = false;
      updatePosition();
    });
  
    function updatePosition() {
      if (!animationPaused) {
        const x = centerX + radiusX * Math.cos(angle);
        const y = centerY + radiusY * Math.sin(angle);
        sateliteElement.style.transform = `translate(${x}px, ${y}px)  rotate(${angle}rad)`;
        angle += 0.02; 
        requestAnimationFrame(updatePosition);
      }
    }
  
    updatePosition();
  });
  