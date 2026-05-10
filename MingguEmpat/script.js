let nama;
let kenalan;
const umur = 16;

function inputNama() {
    let input = document.querySelector("#namaInput");
    nama = input.value;
    input.value = "";
    kenalan = "Halo, nama saya " + nama + " dan umur saya " + umur + " tahun.";
}


function sapa() {
    alert(kenalan);
}

console.log(kenalan);