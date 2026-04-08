function jogar(){
    let jog = parseInt(document.getElementById("num1").value);
    let escolha ="";
    if(jog == 1) escolha = "Pedra";
    if(jog == 2) escolha = "Papel";
    if(jog == 3) escolha = "Tesoura";

    let computador = Math.floor((Math.random() * 3) + 1);
    let escComp = "";
    if(computador == 1) escComp= "Pedra";
    if(computador == 2) escComp = "Papel";
    if(computador == 3) escComp = "Tesoura";
    
    let resultado ="";
    let escolhaUsua = "Você escolheu: " + escolha + "<br>";
    escolhaUsua += "Computador escolheu: " + escComp + "<br>";

    if(jog == computador){
        resultado += "Empate!";
    }
    else if(jog == 1 && computador == 3){
        resultado += "Você venceu! Pedra quebra Tesoura.";
    }
    else if(jog == 3 && computador == 2){
        resultado += "Você venceu! Tesoura corta Papel.";
    }
    else if(jog == 2 && computador == 1){
        resultado += "Você venceu! Papel cobre Pedra.";
    }
    else{
        resultado += "Computador venceu!";
    }

    document.getElementById("parag").innerHTML = resultado;
}