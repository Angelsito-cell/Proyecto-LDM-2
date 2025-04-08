// Inicialización de Swiper cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper', {
      // Permite que el slider se repita infinitamente
      loop: true,
      // Configuración de la paginación
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Permite que se pueda hacer clic en los puntos de paginación
      },
      // Configuración de la navegación (flechas)
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
  