var imagens = document.getElementsByClassName("imagem");

// Adiciona um event listener para cada imagem
for (var i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener("click", function() {
        abrirImagem(this);
    });
}

function abrirImagem(imagemClicada) {
    var modal = document.getElementById("modal");
    var imagemModal = document.getElementById("imagemModal");

    // Exibe o modal
    modal.style.display = "flex";

    // Define a imagem no modal como a imagem clicada
    imagemModal.src = imagemClicada.src;
}

function fecharImagem() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}