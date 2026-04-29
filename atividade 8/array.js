function calcularNumeros(numeros){

    let soma = numeros.reduce((a,b)=>a+b);

    let quadrado1 = Math.pow(numeros[0],2);
    let quadrado2 = Math.pow(numeros[1],2);

    return "A soma dos três números é: " + soma +
           "<br>O quadrado do primeiro é: " + quadrado1 +
           "<br>O quadrado do segundo é: " + quadrado2;
}

function colocarNumeros(){

    let numeros = [
        Number(document.getElementById("n1").value),
        Number(document.getElementById("n2").value),
        Number(document.getElementById("n3").value)
    ];

    let resultado = calcularNumeros(numeros);

    document.getElementById("resultadoNumeros").innerHTML = resultado;
}



function formarPalavras(a, b, c, d, e){

    let letras = [a, b, c, d, e];
    let palavras = [];

    while(palavras.length < 10){

        let palavra = "";

        for(let i = 0; i < 5; i++){
            let indice = Math.floor(Math.random() * letras.length);
            palavra += letras[indice];
        }

        if(!palavras.includes(palavra)){
            palavras.push(palavra);
        }
    }

    return palavras;
}

function testarPalavras(){

    let letras = [
        document.getElementById("l1").value.toUpperCase(),
        document.getElementById("l2").value.toUpperCase(),
        document.getElementById("l3").value.toUpperCase(),
        document.getElementById("l4").value.toUpperCase(),
        document.getElementById("l5").value.toUpperCase()
    ];

    let resultado = formarPalavras.apply(null, letras);

    document.getElementById("resultadoPalavras").innerHTML =
        resultado.join("<br>");
}