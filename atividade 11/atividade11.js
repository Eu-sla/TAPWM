
function Retangulo(base, altura){

    this.base = base;
    this.altura = altura;

    this.calcular = function(){

        return this.base * this.altura;
    }
}

function calcularArea(){

    let base = Number(document.getElementById("base").value);

    let altura = Number(document.getElementById("altura").value);

    let retangulo = new Retangulo(base, altura);

    document.getElementById("resultadoArea").innerHTML =
        "Área do retângulo: " + retangulo.calcular();
}



class Conta{

    constructor(nome, banco, numero, saldo){
        this.nome = nome;
        this.banco = banco;
        this.numero = numero;
        this.saldo = saldo;
    }
}


class Corrente extends Conta{

    constructor(nome, banco, numero, saldo, saldoEspecial){
        super(nome, banco, numero, saldo);
        this.saldoEspecial = saldoEspecial;
    }
}


class Poupanca extends Conta{

    constructor(nome, banco, numero, saldo, juros, vencimento){
        super(nome, banco, numero, saldo);
        this.juros = juros;
        this.vencimento = vencimento;
    }
}


function mostrarCorrente(){
    let conta = new Corrente(document.getElementById("nome").value, document.getElementById("banco").value, 
    document.getElementById("numero").value, document.getElementById("saldo").value,
    document.getElementById("saldoEspecial").value);
    document.getElementById("resultadoConta").innerHTML = "<b>Conta Corrente</b><br><br> Nome: " + conta.nome +
    "<br>Banco: " + conta.banco + "<br>Número: " + conta.numero + "<br>Saldo: " + conta.saldo +
    "<br>Saldo Especial: " + conta.saldoEspecial;
}



function mostrarPoupanca(){
    let conta = new Poupanca(document.getElementById("nome").value, document.getElementById("banco").value,
    document.getElementById("numero").value, document.getElementById("saldo").value,
    document.getElementById("juros").value, document.getElementById("vencimento").value);
    document.getElementById("resultadoConta").innerHTML = "<b>Conta Poupança</b><br><br> Nome: " + conta.nome +
    "<br>Banco: " + conta.banco + "<br>Número: " + conta.numero + "<br>Saldo: " + conta.saldo +
    "<br>Juros: " + conta.juros + "<br>Vencimento: " + conta.vencimento;
}