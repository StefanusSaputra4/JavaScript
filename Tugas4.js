// Tugas4.js
var tampilanInputs;
var data = [];
var radio = [];
var pilihanElement; // Menambahkan variabel untuk elemen yang menampilkan pilihan

document.getElementById("btn").addEventListener("click", function (e) {
  textInput();
});

function textInput() {
  var jumlah = document.getElementById("jumlah").value;
  tampilanInputs = document.getElementById("tampilanInputs");
  tampilanInputs.innerHTML = "";

  var input = [];

  for (var i = 1; i <= jumlah; i++) {
    var label = document.createElement("label");
    label.textContent = "Pilihan " + i + ":";

    input[i - 1] = document.createElement("input");
    input[i - 1].type = "text";
    input[i - 1].name = "teksTampilan" + i;

    tampilanInputs.appendChild(label);
    tampilanInputs.appendChild(input[i - 1]);
    tampilanInputs.appendChild(document.createElement("br"));
  }

  var button = document.createElement("button");
  button.type = "button";
  button.id = "buttonOK";
  button.textContent = "OK";

  tampilanInputs.appendChild(button);
  tampilanInputs.appendChild(document.createElement("br"));
  tampilanInputs.appendChild(document.createElement("br"));

  document.getElementById("buttonOK").addEventListener("click", function (e) {
    for (var i = 1; i <= jumlah; i++) {
      data[i - 1] = input[i - 1].value;
      console.log(data[i - 1]);
    }

    textRadio();
  });
}

function textRadio() {
  var jumlah = document.getElementById("jumlah").value;
  for (var i = 1; i <= jumlah; i++) {
    var label = document.createElement("label");
    label.innerHTML =
      '<input type="radio" name="teksTampilan" id="Radio' +
      i +
      '">' +
      data[i - 1];
    label.setAttribute("for", "Radio" + i); // Mengganti document.getElementById + i menjadi "Radio" + i

    tampilanInputs.appendChild(label);
  }

  for (i = 1; i <= jumlah; i++) {
    radio[i - 1] = document.getElementById("Radio" + i);
    radio[i - 1].addEventListener("click", function (e) {
      var radios = document.getElementsByName(this.name);

      radios.forEach(function (x) {
        x.checked = false;
      });

      this.checked = true;
    });
  }

  var button = document.createElement("button");
  button.name = "buttonLast";
  button.textContent = "OK";
  button.id = "buttonLast";

  tampilanInputs.appendChild(button);
  tampilanInputs.appendChild(document.createElement("br"));

  document.getElementById("buttonLast").addEventListener("click", function (e) {
    pilihan = "";
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        pilihan = data[i];
        break;
      }
    }
    tampilkanData();
  });
}

function tampilkanData() {
  var nama = document.getElementById("nama").value;
  var pilihanText = document.createElement("p"); // Membuat elemen untuk menampilkan pilihan
  pilihanText.textContent =
    "Nama: " +
    nama +
    ", Jumlah yang di pilih: " +
    jumlah.value +
    ", Pilihan: " +
    pilihan;
  if (!pilihanElement) {
    // Jika elemen belum ada, buat elemen baru
    pilihanElement = document.createElement("div");
    tampilanInputs.appendChild(pilihanElement);
  }
  pilihanElement.innerHTML = ""; // Membersihkan elemen sebelum menambahkan teks baru
  pilihanElement.appendChild(pilihanText); // Menambahkan teks ke dalam elemen
  tampilanInputs.appendChild(pilihanElement);
}
