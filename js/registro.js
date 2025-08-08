document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const message = document.getElementById("registerMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const rol = document.getElementById("rol").value;

    // Validaciones
    if (!nombre || !email || !password || !confirmPassword || !rol) {
      message.innerHTML = `<div class="alert alert-warning">Todos los campos son obligatorios</div>`;
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      message.innerHTML = `<div class="alert alert-danger">Formato de correo inválido</div>`;
      return;
    }

    if (password.length < 6) {
      message.innerHTML = `<div class="alert alert-danger">La contraseña debe tener al menos 6 caracteres</div>`;
      return;
    }

    if (password !== confirmPassword) {
      message.innerHTML = `<div class="alert alert-danger">Las contraseñas no coinciden</div>`;
      return;
    }

    // Registro exitoso simulado
    message.innerHTML = `<div class="alert alert-success">Registro exitoso para el usuario: <strong>${nombre}</strong></div>`;
    form.reset();
  });
});
