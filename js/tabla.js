document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("usersTableBody");
  const searchInput = document.getElementById("searchInput");
  const countUsers = document.getElementById("countUsers");

  // Cargar datos desde JSON
  fetch("assets/data/usuarios.json")
    .then(response => response.json())
    .then(data => {
      renderTable(data);

      // Filtro en tiempo real
      searchInput.addEventListener("input", () => {
        const filter = searchInput.value.toLowerCase();
        const filteredData = data.filter(user =>
          user.nombre.toLowerCase().includes(filter) ||
          user.rol.toLowerCase().includes(filter)
        );
        renderTable(filteredData);
      });
    })
    .catch(error => console.error("Error cargando usuarios:", error));

  // Función para renderizar tabla
  function renderTable(users) {
    tableBody.innerHTML = "";
    users.forEach(user => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.nombre}</td>
        <td>${user.email}</td>
        <td>${user.rol}</td>
      `;
      tableBody.appendChild(row);
    });
    countUsers.textContent = `Total de usuarios: ${users.length}`;
  }
});
