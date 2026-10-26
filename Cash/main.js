

function hitungKembalian() {
    const hargaBarang = document.getElementById("hargaBarang").valueAsNumber;
    const uangBayar = document.getElementById("uangBayar").valueAsNumber;
    const hasilKembalian = document.getElementById("hasilKembalian");

    if (hargaBarang < 0 || uangBayar < 0) {
        hasilKembalian.textContent = "Masukkan harga barang dan uang bayar yang valid.";
        return;
    }

    if (uangBayar < hargaBarang) {
        hasilKembalian.textContent = "Uang bayar kurang dari harga barang.";
        return;
    }

    let kembalian = uangBayar - hargaBarang;
    const pecahanKembalian = [];
    const daftarPecahan = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500];

    for (const pecahan of daftarPecahan) {
        while (kembalian >= pecahan) {
            pecahanKembalian.push(pecahan);
            kembalian -= pecahan;
        }
    }

    if (kembalian > 0) {
        pecahanKembalian.push(kembalian);
    }

    hasilKembalian.innerHTML = `<p>Kembalian anda adalah ${uangBayar - hargaBarang}</p><p>Pecahan kembalian:</p><ul>${pecahanKembalian.map(pecahan => `<li>${pecahan}</li>`).join("")}</ul>`;
}