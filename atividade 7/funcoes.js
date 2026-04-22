function maior(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    
    document.getElementById("paragMaior").innerHTML = 
    ("Maior : " + Math.max(num1,num2,num3));
}

function ordem(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);

    let ordena = [num1,num2,num3]
    document.getElementById("paragOrdem").innerHTML = 
    ("Ordem Crescente : "+ ordena.sort((x,y) => x-y));
}

function palindromo(){
    let texto = document.getElementById("texto").value;
    let textoCort = texto.toLowerCase().replace(/\s/g, "");

    let invertido = textoCort.split("").reverse().join("");

    textoCort == invertido? 
    (document.getElementById("paragPalin").innerHTML = 
    ("É um palíndromo <br> Frase: "+ texto ))
    :(document.getElementById("paragPalin").innerHTML = 
    ("Não é um palíndromo <br> Frase: "+ texto));
}

function subconjunto(){

    let palavra1 = document.getElementById("palavra1").value;
    let palavra2 = document.getElementById("palavra2").value;

    if(!palavra1 || !palavra2){

        document.getElementById("paragSub").innerHTML = "erro";
        return;

    }

    if(palavra1.includes(palavra2)){

        document.getElementById("paragSub").innerHTML =
        "É um subconjunto";

    }else{

        document.getElementById("paragSub").innerHTML =
        "Não é um subconjunto";
    }
}

function diaSemana(){

    let data = document.getElementById("data").value;

    let dias = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    let d = new Date(data + "T00:00");

    document.getElementById("paragDia").innerHTML =
    "Dia da semana: " + dias[d.getDay()];
}