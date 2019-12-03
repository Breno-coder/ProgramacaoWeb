function cli(elemento, cor){
    elemento.style.color=cor;
}

function inic(){
    alert("Você apertou um botão do mouse!");
}

function bl(){
    let tex = document.getElementById("bl");
    alert("O foco foi removido");
}

function ch(){
    let op = document.getElementById("escolha").value;
    alert(`O valor escolhido foi: ${op}`);
}