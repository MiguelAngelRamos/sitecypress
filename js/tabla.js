document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("usersTableBody");
  const searchInput = document.getElementById("searchInput");
  const countUsers = document.getElementById("countUsers");

  // utils
  const norm = (s = "") =>
    s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
  const debounce = (fn, wait = 150) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  };

  // pintar tabla
  function renderTable(users) {
    tableBody.innerHTML = "";
    users.forEach((user) => {
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

  // cargar datos
  fetch("/assets/data/usuarios.json")
    .then((response) => response.json())
    .then((data) => {
      // estado inicial estable
      renderTable(data);

      // filtro en tiempo real con debounce y normalización
      searchInput.addEventListener(
        "input",
        debounce(() => {
          const filter = norm(searchInput.value);
          const filteredData = data.filter(
            (user) => norm(user.nombre).includes(filter) || norm(user.rol).includes(filter)
          );
          renderTable(filteredData);
        }, 150)
      );
    })
    .catch((error) => console.error("Error cargando usuarios:", error));
});
