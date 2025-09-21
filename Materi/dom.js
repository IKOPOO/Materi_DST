// 1. Data Selector
const judul = document.getElementById("judul");   // by ID
const paragraf = document.querySelector(".paragraf"); // by class

// 2. Element Manipulation
document.getElementById("ubahTeks").addEventListener("click", function() {
  paragraf.textContent = "Teks paragraf sudah diubah!";
});

// 3. JS Styling
document.getElementById("ubahWarna").addEventListener("click", function() {
  judul.style.color = "blue";
  judul.style.fontSize = "32px";
});

// 4. Event + Tambah Elemen Baru
document.getElementById("tambahElement").addEventListener("click", function() {
  const newP = document.createElement("p");
  newP.textContent = "Paragraf baru ditambahkan dengan DOM!";
  document.getElementById("container").appendChild(newP);
});
