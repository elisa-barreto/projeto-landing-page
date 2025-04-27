const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

function esconderImagens() {
  imagensPainel.forEach((imagem) => {
    imagem.classList.remove("mostrar");
  });
}

function mostrarImagem() {
  imagensPainel[imagemAtual].classList.add("mostrar");
}

function atualizarOpacidadeBotoes() {
  const totalDeImagens = imagensPainel.length - 1;

  if (imagemAtual === totalDeImagens) {
    setaAvancar.classList.add("ultimo");
  } else {
    setaAvancar.classList.remove("ultimo");
  }

  if (imagemAtual === 0) {
    setaVoltar.classList.add("ultimo");
  } else {
    setaVoltar.classList.remove("ultimo");
  }
}

setaAvancar.addEventListener("click", function () {
  const totalDeImagens = imagensPainel.length - 1;
  if (imagemAtual === totalDeImagens) {
    return;
  }

  imagemAtual++;

  esconderImagens();
  mostrarImagem();
  atualizarOpacidadeBotoes();
});

setaVoltar.addEventListener("click", function () {
  if (imagemAtual === 0) {
    return;
  }

  imagemAtual--;

  esconderImagens();
  mostrarImagem();
  atualizarOpacidadeBotoes();
});

atualizarOpacidadeBotoes();
