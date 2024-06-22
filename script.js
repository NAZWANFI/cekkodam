function jalankanFungsi(){
    const kumpulanJawaban = [
      "SIGIT RENDANG",
      "HARIMAU KBB",
      "HARIMAU KALIMANTAN",
      "NYAI BRORO",
      "KUCING KEPALA 2",
      "BEBEK GYAT",
      "MONYET MEWING",
      "GENDEROWO",
      "POCONG BANCI",
      "KOSONG",
      "KOSONG",
      "SEPIDERMEN",
      "DODOL GARUT",
      "HARIMAU PUTIH",
      "BAGONG",
      "LELE CAMEUH",
      "KUYANG",
      "TUYUL BERAMBUT",
      "MACAN TUTUT",
      "SINGA BOTAK",
      "MOJAROBAT",
      "NURUL YAQIN",
      "RAJEH",
      "IJAT SUMBING",
      "UNI BAKWAN",
      "KAK GEM PAHAM",
      "DORA GANTENG",
      "NAGA API",
      "ADUDU",
      "TUYUL IPIN",
      "MARINA",
      "LOLY KOCELAH",
      "ALOK PLI PAYEL",
      "PECEL GURAME",
      "ULAR SEPUH",
      "PANCASONA",
      "KRIS EMAS",
      "RIZZ GYAT",
      "KNALPOT SAMLONG",
      "KUNCI INGGRIS",
      "PELEK ERCIBI",
      "PANJI MELETUK",
      "MACAN SPEK 63",
      "BABATOK HULU",
      "GETOK MEJIK",
      "CEKER BABAT",
      "PERTAMAX TOBRUT",
      "KUNTI TOBRUT",
      "BIAWAK SAD BOY",
      "BELUT PETIR",

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