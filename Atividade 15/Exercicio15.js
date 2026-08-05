function abrirCurso() {

    let curso = document.getElementById("curso").value;

    if (curso == "") {
        return;
    }

    let resposta = confirm("Deseja abrir a página do curso?");

    if (resposta) {

        let janela = window.open("", "", "width=600,height=300");

        janela.document.write("<h1>" + curso + "</h1>");

        if (curso == "ADS") {
            janela.document.write("<p>Curso voltado para programação e desenvolvimento de sistemas.</p>");
        }

        if (curso == "Logística") {
            janela.document.write("<p>Curso voltado para gestão de transportes e estoques.</p>");
        }

        if (curso == "Gestão") {
            janela.document.write("<p>Curso voltado para administração de empresas.</p>");
        }

        if (curso == "Manufatura") {
            janela.document.write("<p>Curso voltado para processos industriais modernos.</p>");
        }

        if (curso == "Eletrônica") {
            janela.document.write("<p>Curso voltado para eletrônica aplicada ao setor automotivo.</p>");
        }

    }

}