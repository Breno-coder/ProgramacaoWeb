//Questão 1:
let rodas = prompt("Digite o número de rodas que o carro desejado possui: ");
let motor = prompt("Digite o tipo de motor que o carro indicado possui: ");
alert("Confira o console!");
if (rodas == 4 && motor =="elétrico") {
    console.log("O carro é elétrico");
}else{
    console.log("Error!");
}
//----------//---------//----------//---------//---------//-----------//----------//----------//---------//----------//---------//
//Questão 2:
let a = prompt("Digite um valor para a: ");
b = prompt("Digite um valor para b: ");
c = prompt("Digite um valor para c: ");
parseFloat(b, a, c);
let resul;
let delta = (b*b) -4*a*c;
alert("Confira o console!");
if (delta < 0) {
    resul = "Resultado Inconclusivo! Não há solução real possivel!"
    console.log(`O valor de delta é: ${delta} --- ${resul}`);

} else {
    let solucao1 = -b + Math.sqrt(delta) / (2*a)
    let solucao2 = -b - Math.sqrt(delta) / (2*a)
    console.log(`Solução (${solucao1},${solucao2})`);
}


//----------//---------//----------//---------//---------//-----------//----------//----------//---------//----------//---------//
//Questão 3:
let idade = prompt("Digite a idade desejada: "), sentenca;
alert("Confira no console!");
idade > 18 ? sentenca = "A pessoa indicada é maior de idade." : sentenca = "A pessoa indicada não é meior de idade.";
console.log(sentenca);
//----------//---------//----------//---------//---------//-----------//----------//----------//---------//----------//---------//
//Questão 4:
let animal = prompt("Digite o nome do animal indicado: ");
alert("Confira no console!");
switch (animal) {
    case "pinguim":
            console.log(`${animal} - ave`);
        break;
    case "leão":
            console.log(`${animal} - mamífero`);
            break;
    case "camaleão":
            console.log(`${animal} - réptil`);
        break;
    case "caranguejo":
            console.log(`${animal} - crustáceo`);
        break;
    case "formiga":
            console.log(`${animal} - inseto`);
        break;
    case "tigre":
            console.log(`${animal} - mamífero`);
        break;
    case "urso":
            console.log(`${animal} - mamífero`);
        break;
    case "baleia":
            console.log(`${animal} - mamífero`);
        break;
    case "vaca":
            console.log(`${animal} - mamífero`);
        break;
    case "tucano":
            console.log(`${animal} - ave`);
        break;

    default:
        console.log("Resultado Inconclusivo!");
        break;
}
//----------//---------//----------//---------//---------//-----------//----------//----------//---------//----------//---------//