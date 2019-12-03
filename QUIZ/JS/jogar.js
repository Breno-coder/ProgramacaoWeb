let perguntar = document.getElementById("pergunta");
let prox  = document.getElementById("proximo");
let i=-1, k=0,certas=0, erradas=0, contadordevezes = 0;;

let op = [document.getElementById("op1"), document.getElementById("op2"), document.getElementById("op3"), document.getElementById("op4"), document.getElementById("op5")];

let quest = [
    'O que significa a sigla DOM?',
    'JavaScript e Java são iguais?',
    'O criador do JavaScript foi:',
    'O criador do php foi:',
    'O criador da linguagem c foi:',
    'O criador da linguagem Java foi:',
    'O criador do linux nasceu em:',
    'Quem criou o World Wide Web?',
    'Quem escreveu o primeiro algoritmo?',
    'Quem criou a linguagem ruby:'
];

let btnResposta =   [["Document Object Model","Document Object Manipulate","Document Object Modify","Delete Object Model"],
                    ["Sim","Não","Não sei","Sim tiveram o mesmo criador"],
                    ["Brendan Eich","Rasmus Lerdorf","Larry Wall","Zeev Suraski"],
                    ["Donald Knuth","Steve Jobs","Rasmus Lerdorf","Niklaus Wirth"],
                    ["John Backus","Dennis Ritchie","Alan Turing","Richard Matthew Stallman"],
                    ["Eric Steven Raymond","Linus Torvalds","Brian Kernighan","James Gosling"],
                    ["04/06/1969","17/01/1970","28/12/1969","30/08/1970"],
                    ["Steve Wozniak","Bjarne Stroustrup","Ken Thompson","Tim Berners-Lee"],
                    ["Steve Jobs","Ada Lovelace","Rob Pike","Donald Knuth"],
                    ["Yukihiro Matsumoto","Grace Hopper","Donald Knuth","Roberto Ierusalimschy"]];

let tempogasto = [];

prox.addEventListener("click", function(){
i++;
});
prox.addEventListener("click", function alterar(evento){ perguntar.innerHTML = quest[i]});
prox.addEventListener("click",function alterbtn(){
    if (i < 11) {
        if (i == 10) {
            perguntar.innerHTML = `Respostas certas: ${certas} | Respostas erradas: ${erradas}`;
            op[k].innerHTML = `1º - ${tempogasto[0]}.   | 2º - ${tempogasto[1]}. | 3º - ${tempogasto[2]}.`;
            op[k+1].innerHTML = `4º - ${tempogasto[3]}. | 5º - ${tempogasto[4]}. |6º - ${tempogasto[5]}.`;
            op[k+2].innerHTML = `7º - ${tempogasto[6]}. | 8º - ${tempogasto[7]}. |`;
            op[k+3].innerHTML = `9º - ${tempogasto[8]}. | 10º - ${tempogasto[9]}.|`;
            op[k+4].remove();
        }
        op[k].innerHTML = btnResposta[i][k];
        op[k+1].innerHTML = btnResposta[i][k+1];
        op[k+2].innerHTML = btnResposta[i][k+2];
        op[k+3].innerHTML = btnResposta[i][k+3];

        validajogo();
        
        if (i < 10) {
            setInterval(() => {
            op[k+4].innerHTML = "Tempo Gasto : "+ min + "m"+" e "+ sec +"s"; 
            }, 10);
        }
        tempogasto[i] = min +"m"+" : "+ sec + " s";
        min=0;
        sec=0;
    }
    else
    {
    window.location.href = "introducao.html"
    }
});

let sec = 1, min=0;
let cronometro = setInterval(() => {
    if (sec == 60) {
        min++;
        sec=0;
    }
        sec = sec + 1;
}, 1000);

function validajogo(){
    contadordevezes = 0;
    op[0].addEventListener("click", function() {
        if (contadordevezes == 0 && i<10) {
            if (i==0 || i==2 || i==9) {
                contadordevezes++;
                return certas++;
            }
            else
            {
                contadordevezes++;
                return erradas++;
            }
        }
        else{
            contadordevezes++;
        }
    });

    op[1].addEventListener("click", function() {
        if (contadordevezes == 0) {
            if (i==1 || i==4 || i==8) {
                contadordevezes++;
                return certas++;
            }
            else
            {
                contadordevezes++;
                return erradas++;
            }
        }
        else{
            contadordevezes++;
        }
    });

    op[2].addEventListener("click", function() {
        if (contadordevezes == 0) {
            if (i==3 || i==6) {
                contadordevezes++;
                return certas++;
            }
            else
            {
                contadordevezes++;
                return erradas++;
            }
        }
        else{
            contadordevezes++;
        }

    });

    op[3].addEventListener("click",function() {
        if (contadordevezes == 0) {
            if (i==5 || i==7) {
                contadordevezes++;
                return certas++;
            }
            else
            {
                contadordevezes++;
                return erradas++;
            }
        }
        else{
            contadordevezes++;
        }
    });
}