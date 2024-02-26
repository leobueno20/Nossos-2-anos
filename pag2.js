var imagens = document.querySelectorAll(".imagem");

        // Adiciona um event listener para cada imagem
        for (var i = 0; i < imagens.length; i++) {
            imagens[i].addEventListener("click", function() {
                abrirImagem(this);
            });
        }

        function abrirImagem(imagemClicada) {
            var modal = document.getElementById("modal");
            var imagemModal = document.getElementById("imagemModal");

            // Exibe o modal após 2 segundos
            setTimeout(function() {
                modal.style.display = "flex";
                imagemModal.src = imagemClicada.src;
            }, 50);
            
        }

        function fecharImagem() {
            var modal = document.getElementById("modal");
            modal.style.display = "none";

            
        }