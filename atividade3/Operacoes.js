function operacoes(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let soma = num1+num2;
    let sub = num1-num2;
    let mult = num1*num2;
    let div = num1/num2;
    let rest = num1%num2;

     document.getElementById("parag").textContent = (
        "Número 1: " + num1 + 
        "\n - Número 1: " + num2 +
        "\n - Soma: " +soma +
        "\n - Subtração: " +sub +
        "\n - Multiplicação: "+mult+
        "\n - Divisão: "+div+
        "\n - Resto: " +rest);
}