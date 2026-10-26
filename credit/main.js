function validasiKartuKredit() {
    const output = document.getElementById("output");
    const noKartu = document.getElementById("noRek").value.split("").map(Number);
    const multiply = [];
    let leftOverSum = 0;
    let multiplySum = 0;

    if (noKartu.length != 16) {
        output.innerHTML = `<p>nomor kartu kredit yang kamu input tidak berjumlah 16 digit</p>`
    } else {
        for (let i = 0; i < noKartu.length; i+=2) {
            let numMultiply = noKartu[i]*2;
            if (numMultiply > 9){
                let j = numMultiply.toString().split("").map(Number);
                multiply.push(j[0]+j[1]);
        } else {
            multiply.push(numMultiply);
        }
        }
        for (let i = 1; i <= noKartu.length; i+=2) {
            leftOverSum += noKartu[i];
        }
        for (let i = 0; i < multiply.length; i++) {
            multiplySum += multiply[i];
        }
        const sum = multiplySum + leftOverSum;
        const validasi = sum.toString().split("").map(Number);
        if (validasi[validasi.length-1] == 0) {
            var massage = "VALID";
        } else {
            massage = "INVALID"
        }
        output.innerHTML = `<p>Kartu Kredit kamu dinyatakan <strong>${massage}</strong></P>`;
    }
}

//4003600000000014
//