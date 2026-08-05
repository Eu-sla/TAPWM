function validar() {

    let nome = document.nomeform.elements["nome"].value.trim();
    let comentario = document.nomeform.elements["comentario"].value.trim();
    let email = document.getElementById("email").value.trim();
    if (nome.length < 10) {
        alert("O nome deve possuir no mínimo 10 caracteres.");
        return false;
    }
    if (email == "") {
        alert("Informe um e-mail válido.");
        return false;
    }
    if (comentario.length < 20) {
        alert("O comentário deve possuir no mínimo 20 caracteres.");
        return false;
    }
    let pesquisa = document.getElementsByName("pesquisa");
    let resposta = "";
    for (let i = 0; i < pesquisa.length; i++) {
        if (pesquisa[i].checked) {
            resposta = pesquisa[i].value;
            break;
        }
    }
    if (resposta == "") {
        alert("Responda a pesquisa.");
        return false;
    }
    if (resposta == "nao") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre a esta página!");
    }
    return true;
}