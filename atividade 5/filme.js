let totalPessoas = 0;
let somaIdades = 0;
let maiorIdade = 0;
let menorIdade = 0;

let qtdPessimo = 0;
let qtdOtimoBom = 0;

let homens = 0;
let mulheres = 0;
let outros = 0;

function adicionarPessoa() {
    let idade = Number(document.getElementById("idade").value);
    let sexo = document.getElementById("sexo").value;
    let opiniao = Number(document.getElementById("opiniao").value);

    if (!idade) {
        alert("Preencha a idade!");
        return;
    }

    totalPessoas++;

    somaIdades += idade;

    if (idade > maiorIdade) maiorIdade = idade;
    if (idade < menorIdade) menorIdade = idade;

    if (opiniao === 1) qtdPessimo++;
    if (opiniao === 3 || opiniao === 4) qtdOtimoBom++;

    if (sexo === "M") homens++;
    else if (sexo === "F") mulheres++;
    else outros++;

    alert("Pessoa adicionada!");

    // limpa campos
    document.getElementById("idade").value = "";
}

function resultadoFinal() {
    if (totalPessoas === 0) {
        alert("Nenhuma pessoa cadastrada!");
        return;
    }

    let media = somaIdades / totalPessoas;
    let porcentagem = (qtdOtimoBom / totalPessoas) * 100;

    document.getElementById("parag").innerHTML = ` 
        Resultados: <br>
        <bold>Média de idade: </bold> ${media.toFixed(2)} <br>
        <bold> Maior idade: </bold> ${maiorIdade} <br>
        <bold> Menor idade:</bold> ${menorIdade} <br>
        <bold> Quantidade de péssimo:</bold> ${qtdPessimo} <br>
        <bold> Porcentagem de ótimos e bons:</bold> ${porcentagem.toFixed(2)}% <br>
        <bold>Quantidade de Homens:</bold> ${homens} <br>
        <bold>Quantidade de Mulheres:</bold> ${mulheres} <br>
        <bold>Quantidade de Outros:</bold> ${outros}
    `;
}