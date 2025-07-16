// Animación de entrada para las fotos
document.querySelectorAll('.foto').forEach((foto, idx) => {
  foto.style.opacity = 0;
  setTimeout(() => {
    foto.style.transition = 'opacity 1.2s, transform 1.2s';
    foto.style.opacity = 1;
    foto.style.transform += ' scale(1.08)';
  }, 500 + idx * 350);
});

// Confeti usando canvas-confetti
function lanzarConfeti() {
  if (window.confetti) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// Lanza confeti al cargar la página
window.onload = lanzarConfeti;

// Animación de mensaje central
const mensaje = document.querySelector('.mensaje h1');
mensaje.style.opacity = 0;
setTimeout(() => {
  mensaje.style.transition = 'opacity 1.5s';
  mensaje.style.opacity = 1;
}, 1500);
