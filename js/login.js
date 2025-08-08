document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const message = document.getElementById("loginMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validaciones
    if (!username || !password) {
      message.innerHTML = `<div class="alert alert-warning">Todos los campos son obligatorios</div>`;
      return;
    }

    // Credenciales de ejemplo
    if (username === "admin" && password === "1234") {
      message.innerHTML = `<div class="alert alert-success">Login exitoso</div>`;
    } else {
      message.innerHTML = `<div class="alert alert-danger">Usuario o contraseña incorrectos</div>`;
    }
  });
});
