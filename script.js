// === SCRIPT.JS ===

// Fungsi untuk menyorot baris dengan medali emas terbanyak
document.addEventListener("DOMContentLoaded", function() {
  const rows = document.querySelectorAll("tbody tr");
  const highlightBtn = document.createElement("button");
  highlightBtn.id = "highlightBtn";
  highlightBtn.textContent = "Tampilkan Provinsi dengan Emas Terbanyak";
  document.body.appendChild(highlightBtn);

  highlightBtn.addEventListener("click", function() {
    let maxGold = 0;
    let bestRow = null;

    // cari nilai emas terbanyak
    rows.forEach(row => {
      const gold = parseInt(row.children[1].textContent);
      if (gold > maxGold) {
        maxGold = gold;
        bestRow = row;
      }
    });

    // reset semua warna dulu
    rows.forEach(row => row.style.backgroundColor = "");
    // beri warna khusus pada provinsi terbaik
    if (bestRow) {
      bestRow.style.backgroundColor = "#ffeb3b";
      alert(Provinsi dengan emas terbanyak adalah: ${bestRow.children[0].textContent} (${maxGold} emas));
    }
  });
});