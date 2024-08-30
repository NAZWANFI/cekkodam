function jalankanFungsi(){
    const kumpulanJawaban = [
      "HARIMAU KBB",
      "HARIMAU KALIMANTAN",
      "NYAI RORO",
      "ULAR KEPALA 2",
      "MONYET MEWING",
      "GENDEROWO",
      "POCONG BANCI",
      "KOSONG",
      "KOSONG",
      "SEPIDERMEN",
      "DODOL GARUT",
      "HARIMAU PUTIH",
      "LELE CAMEUH",
      "KUYANG",
      "TUYUL BERAMBUT",
      "MACAN TUTUT",
      "SINGA BOTAK",
      "MOJAROBAT",
      "NURUL YAQIN",
      "RAJEH",
      "UNI BAKWAN",
      "KAK GEM PAHAM",
      "DORA GANTENG",
      "NAGA API",
      "TUYUL IPIN",
      "PECEL GURAME",
      "ULAR SEPUH",
      "PANCASONA",
      "KERIS EMAS",
      "KNALPOT SAMLONG",
      "KUNCI INGGRIS",
      "MACAN RAINBOW",
      "GETOK MEJIK",
      "CEKER BABAT",
      "LILIN",
      "KUNTI BOTI",
      "BIAWAK SAD BOY",
      "BELUT PETIR",
      "KOSONG",

    ];

    const jawabanAcak = Math.floor(Math.random() *
    kumpulanJawaban.length);
    const hasilAcak = kumpulanJawaban [jawabanAcak];

    document.getElementById("jawaban").innerHTML = hasilAcak;
    document.getElementById("tampilSekali").disabled = true;
  }

 function cekInput() {
  var inputNama = document.getElementById("userName").value.trim();
  var btnCek = document.getElementById("tampilSekali");
  var btCek = document.getElementById("resetButton");


   if (inputNama.length > 0) {
      btnCek.disabled = false;
      btCek.disabled = false;
   }
   else { btnCek.disabled = true;
          btCek.disabled = true;
   }
 }

 function resetForm() {
    // Reset input nama
    document.getElementById('userName').value = '';

    // Aktifkan kembali tombol "Cek"
    document.getElementById('tampilSekali').disabled = true;
    document.getElementById('resetButton').disabled = true;
    document.getElementById('jawaban').textContent = "";
}
function redirTiktok() {
  window.location.href ="https://www.tiktok.com/@varvintercakiti"
}
