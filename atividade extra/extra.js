
function mostrarObjetos(){
    let pessoa1 = {
        nome: "João",
        idade: 20,
        hobby: "Violão",
        apresentar: function(){
            return "Olá, meu nome é " + this.nome + ", tenho " + this.idade + " anos e meu hobby é " + this.hobby;
        }
    };
    alert(pessoa1.apresentar());

    let pessoa2 = new Object();
    pessoa2.nome = "Maria";
    pessoa2.idade = 22;
    pessoa2.hobby = "Desenhar";
    pessoa2.apresentar = function(){
        return "Olá, meu nome é " + this.nome + ", tenho " + this.idade + " anos e meu hobby é " + this.hobby;
    }
    alert(pessoa2.apresentar());



    function Pessoa(nome, idade, hobby){
        this.nome = nome;
        this.idade = idade;
        this.hobby = hobby;
        this.apresentar = function(){
            return "Olá, meu nome é " + this.nome + ", tenho " + this.idade + " anos e meu hobby é " + this.hobby;
        }
    }
    let pessoa3 = new Pessoa("Carlos", 30, "Futebol");
    alert(pessoa3.apresentar());



    class PessoaClasse{
        constructor(nome, idade, hobby){
            
            this.nome = nome;
            this.idade = idade;
            this.hobby = hobby;
        }
        apresentar() {
            return "Olá, meu nome é " + this.nome + ", tenho " + this.idade + " anos e meu hobby é " + this.hobby;
        }
    }
    let pessoa4 = new PessoaClasse("Ana", 18, "Ler");
    alert(pessoa4.apresentar());




    let apresentarPessoa5 = {
        apresentar: function(){
            return "Olá, meu nome é " + this.nome + ", tenho " + this.idade + " anos e meu hobby é " + this.hobby;
        }
    };
    let pessoa5 = Object.create(apresentarPessoa5);
    pessoa5.nome = "Pedro";
    pessoa5.idade = 25;
    pessoa5.hobby = "Bike";
    alert(pessoa5.apresentar());
}