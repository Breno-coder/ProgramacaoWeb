let perguntar = document.getElementById("pergunta");
let prox  = document.getElementById("proximo");
let i=-1, k=0,certas=0, erradas=0;
let op = [document.getElementById("op1"), document.getElementById("op2"), document.getElementById("op3"), document.getElementById("op4")];

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
                    ["Yukihiro Matsumoto","Grace Hopper","Grace Hopper","Roberto Ierusalimschy"]];

let btnRespostaCerta = [0,1,0,2,1,3,2,3,1,0];

prox.addEventListener("click", function(){
i++;
});
if (i<quest.length) {
   prox.addEventListener("click",function alterar(){ perguntar.innerHTML = quest[i]});
   prox.addEventListener("click",function alterbtn(){
       /*op[i].innerHTML = btnResposta[i][1];
       op[i+1].innerHTML = btnResposta[i][1];
       op[i+2].innerHTML = btnResposta[i][1];
       op[i+3].innerHTML = btnResposta[i][1];*/
   });
}

