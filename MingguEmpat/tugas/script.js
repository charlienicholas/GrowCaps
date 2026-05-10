const input = document.getElementById("input-list");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Fungsi untuk menambah tugas
addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  // Validasi input tidak boleh kosong
  if (taskText === "") {
    alert("Tugas tidak boleh kosong!");
    return;
  }

  // Membuat elemen li baru
  const li = document.createElement("li");
  li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Hapus</button>
    `;

  // Menambahkan fungsi hapus pada tombol baru
  li.querySelector(".delete-btn").addEventListener("click", function () {
    li.remove();
  });

  // Menambahkan li ke dalam ul
  todoList.appendChild(li);

  // Mengosongkan input kembali
  input.value = "";
});

// Menambah tugas dengan menekan tombol Enter
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addBtn.click();
  }
});
