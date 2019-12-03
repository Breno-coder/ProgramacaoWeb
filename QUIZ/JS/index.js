let btn = document.getElementById("entrar");
let senha = document.getElementById("senha");
let usernase = document.getElementById("username");
btn.addEventListener("mousedown", function(){
if (senha.value == "admin" && username.value == "admin") {
    window.location.href = "introducao.html";
}    
});