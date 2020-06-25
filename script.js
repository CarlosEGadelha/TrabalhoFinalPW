/* jshint esversion: 6 */

var tituloFilme = [];
var direcaoFilme = [];
var anoFilme = [];
var generoFilme = [];
var escolhaFilme = [];
var notaFilme = [];

/* Função para gravar os dados dos inputs */
function gravarNota() {
    const titulo = document.querySelector("#titulo").value;
    const direcao = document.querySelector("#direcao").value;
    const ano = document.querySelector("#ano").value;
    const genero = document.querySelector("#genero").value;
    const escolha = document.getElementById("campoEscolha");
    const text = escolha.options[escolha.selectedIndex].text;
    const nota = document.getElementById("campoNota");
    const textNota = nota.options[nota.selectedIndex].text;

    tituloFilme.push(titulo);
    direcaoFilme.push(direcao);
    anoFilme.push(ano);
    generoFilme.push(genero);
    escolhaFilme.push(text);
    notaFilme.push(textNota);

    atualizarListaNotas();

    /* limpa os inputs */
    document.querySelector("#titulo").value = null;
    document.querySelector("#direcao").value = null;
    document.querySelector("#ano").value = null;
    document.querySelector("#genero").value = null;
    document.querySelector("#campoEscolha").value = "Escolha";
    document.querySelector("#campoNota").value = "Nota";
}

/* função para atualizar a lista */
function atualizarListaNotas() {
    const elements = document.querySelectorAll(".item-show");
    for (let i = 0; i < elements.length; i++) {
        elements[i].parentNode.removeChild(elements[i]);
    }

    for (let i = 0; i < tituloFilme.length; i++) {
        const cloneItem = document.querySelector("#base-item").cloneNode(true);
        const parent = document.querySelector("#content");
        parent.appendChild(cloneItem);

        cloneItem.className = "item-show";

        /* Para excluir um card */ 
        cloneItem.querySelector("#apagar").onclick = function (){
            tituloFilme.splice(i, 1);
            direcaoFilme.splice(i, 1);
            anoFilme.splice(i, 1);
            generoFilme.splice(i, 1);
            escolhaFilme.splice(i, 1);
            notaFilme.splice(i, 1);

            atualizarListaNotas();
        }

        /* Edita um card */
        cloneItem.querySelector("#editar").onclick = function(){
            /* apaga o botao gravar */
            const armazenar = document.getElementById("gravar");
            armazenar.parentNode.removeChild(armazenar);
            
            /* cria um botao salvar */
            const container = document.getElementById("header");
            const botaoSalvar = document.createElement("button");
            botaoSalvar.setAttribute("type", "button");
            botaoSalvar.appendChild(document.createTextNode("Salvar"))
            botaoSalvar.id = "salvar";
            container.appendChild(botaoSalvar);

            /* puxa os dados do card para os inputs */
            const titulo = tituloFilme[i];
            const direcao = direcaoFilme[i];
            const ano = anoFilme[i];
            const genero = generoFilme[i];
            const escolha = escolhaFilme[i];
            const nota = notaFilme[i];
            let inputTitulo = document.getElementById("titulo");
            let inputDirecao = document.getElementById("direcao");
            let inputAno = document.getElementById("ano");
            let inputGenero = document.getElementById("genero");
            let inputEscolha = document.getElementById("campoEscolha");
            let inputNota = document.getElementById("campoNota");
            inputTitulo.value = titulo;
            inputDirecao.value = direcao;
            inputAno.value = ano;
            inputGenero.value = genero;
            inputEscolha.value = escolha;
            inputNota.value = nota;

            botaoSalvar.onclick = function(){
                /* Puxa os novos dados do input */
                const titulo = document.querySelector("#titulo").value;
                const direcao = document.querySelector("#direcao").value;
                const ano = document.querySelector("#ano").value;
                const genero = document.querySelector("#genero").value;
                const escolha = document.getElementById("campoEscolha");
                const text = escolha.options[escolha.selectedIndex].text;
                const nota = document.getElementById("campoNota");
                const textNota = nota.options[nota.selectedIndex].text;

                tituloFilme[i] = titulo;
                direcaoFilme[i] = direcao;
                anoFilme[i] = ano;
                generoFilme[i] = genero;
                escolhaFilme[i] = text;
                notaFilme[i] = textNota;

                atualizarListaNotas();

                /* limpa os inputs */
                document.querySelector("#titulo").value = null;
                document.querySelector("#direcao").value = null;
                document.querySelector("#ano").value = null;
                document.querySelector("#genero").value = null;
                document.querySelector("#campoEscolha").value = "Escolha";
                document.querySelector("#campoNota").value = "Nota";

                /* apaga o botao salvar */
                botaoSalvar.parentNode.removeChild(botaoSalvar);

                /* cria de volta o botão gravar lembreta */
                container.appendChild(armazenar);
            }
        }

        cloneItem.querySelector(".item-titulo").textContent = tituloFilme[i];
        cloneItem.querySelector(".item-direcao").textContent = direcaoFilme[i];
        cloneItem.querySelector(".item-ano").textContent = anoFilme[i];
        cloneItem.querySelector(".item-genero").textContent = generoFilme[i];
        cloneItem.querySelector(".item-escolha").textContent = escolhaFilme[i];
        cloneItem.querySelector(".item-nota").textContent = notaFilme[i];
    }
}
