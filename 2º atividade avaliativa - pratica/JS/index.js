let btn = document.getElementById("btncalcula");

btn.addEventListener("click",function calculanotas() {
    let notas = [document.getElementById("nota1").value,document.getElementById("nota2").value, document.getElementById("nota3").value];
    let media = 0;
    media = (notas[0] + notas[1] + notas[2]) / 3;
    if (media > 70) {
        alert("Aprovado!");
    } else {
        alert("Reprovado");
    }

});