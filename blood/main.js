function goldarah_siAnak () {
    const result = document.getElementById("result");
    let siAyah = JSON.parse(document.getElementById("golDarAyah").value);
    let siIbu = JSON.parse(document.getElementById("golDarIbu").value);
    let siAnak = [siAyah[0]+siIbu[0], siAyah[0]+siIbu[1], siIbu[0]+siAyah[1], siIbu[1]+siAyah[1]];
    console.log(siAnak)
    let siAnakUniq = siAnak.filter((item, index) => {
        return siAnak.indexOf(item) == index;
    });
    console.log(siAnakUniq);
    let persentase = 100/siAnakUniq.length+"%";
    console.log(persentase)

    result.innerHTML = `<p><strong>Kemungkinan Golongan Darah Anda:</strong></p><ul>${siAnakUniq.map(siAnakUniq => `<li>${siAnakUniq}<span>${persentase}</span></li>`).join("")}</ul>`;
}