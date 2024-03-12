document.getElementById("lanjut").addEventListener("click", lanjut);
var pilihan = document.getElementById("pilihan");
var jumlah = document.getElementsByName("input").value;

function lanjut() {
  for (i = 1; i <= jumlah; i++) {
    var label = document.createElement("label");
    label.innerHTML = "pilihan" + i;
    var input = document.createElement("input");
    input.name = "input";
    pilihan.appendChild(label);
    pilihan.appendChild(input);
    pilihan.appendChild(document.createElement("br"));
  }
}
