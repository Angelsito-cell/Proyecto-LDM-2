document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("login-modal");
  const skip = document.getElementById("skip-login");
  const login = document.getElementById("login-btn");
  const register = document.getElementById("register-btn");
  const userInput = document.getElementById("login-user");
  const passInput = document.getElementById("login-pass");
  const errorMessage = document.getElementById("login-error");

  // Mostrar solo si no ha iniciado sesión o saltado antes
  if (!localStorage.getItem("loginDismissed")) {
    modal.style.display = "flex";
  } else {
    modal.style.display = "none";
  }

  // Continuar sin iniciar sesión
  skip.addEventListener("click", () => {
    localStorage.setItem("loginDismissed", "true");
    modal.style.display = "none";
  });

  // Validación de inicio de sesión
  login.addEventListener("click", () => {
    const user = userInput.value.trim();
    const pass = passInput.value.trim();

    if (user === "Alejandro_Profe777" && pass === "diseño_responsive_123") {
      alert("¡Inicio de sesión exitoso! Bienvenido, Alejandro.");
      localStorage.setItem("loginDismissed", "true");
      modal.style.display = "none";
    } else {
      userInput.value = "";
      passInput.value = "";
      errorMessage.textContent = "Nombre o contraseña incorrectos.";
    }
  });

  // Botón de "Crear cuenta" (puedes adaptarlo)
  register.addEventListener("click", () => {
    alert("Función de registro no implementada.");
  });

  // Redirecciones a páginas reales de login externo
  document.querySelector(".google").addEventListener("click", () => {
    window.open("https://accounts.google.com/signin", "_blank");
  });

  document.querySelector(".facebook").addEventListener("click", () => {
    window.open("https://www.facebook.com/login", "_blank");
  });

  document.querySelector(".x").addEventListener("click", () => {
    window.open("https://twitter.com/i/flow/login", "_blank");
  });
});
