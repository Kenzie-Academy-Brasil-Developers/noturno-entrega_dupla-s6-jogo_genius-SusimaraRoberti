let turno = 1;
let quemJoga = "Aguardando Início";
let sequenciaJogo = [];
let pontos = 0;

function proximo() {
  let mensagem = document.getElementById("vez");
  mensagem.innerHTML = "Grave a sequência!";
  sequenciaJogo.push(Math.floor(Math.random() * 4));
  sequenciaJogo.map((cor) => {
    switch (cor) {
      case 0:
        let verde = document.getElementById("verde");
        verde.classList.add("ativoVerde");
        setTimeout(() => {
          verde.classList.remove("ativoVerde");
        }, 1500);
        break;
      case 1:
        let vermelho = document.getElementById("vermelho");
        vermelho.classList.add("ativoVermelho");
        setTimeout(() => {
          vermelho.classList.remove("ativoVermelho");
        }, 1500);
        break;
      case 2:
        let amarelo = document.getElementById("amarelo");
        amarelo.classList.add("ativoAmarelo");
        setTimeout(() => {
          amarelo.classList.remove("ativoAmarelo");
        }, 1500);
        break;
      case 3:
        let azul = document.getElementById("azul");
        azul.classList.add("ativoAzul");
        setTimeout(() => {
          azul.classList.remove("ativoAzul");
        }, 1500);
        break;
    }
  });
  mensagem.innerHTML = "Sua Vez!";
  console.log(sequenciaJogo);
}

// falta o listener para que a função acima possa ter continuidade

function criaJogo() {
  const body = document.querySelector("body");
  const button = document.createElement("button");
  const container = document.createElement("div");
  const botaoVerde = document.createElement("div");
  const botaoAmarelo = document.createElement("div");
  const botaoVermelho = document.createElement("div");
  const botaoAzul = document.createElement("div");
  const divVerdeAmarelo = document.createElement("div");
  const divVermelhoAzul = document.createElement("div");
  let vez = document.createElement("p");
  let pAcertos = document.createElement("p");

  body.appendChild(button);
  body.appendChild(container);
  divVerdeAmarelo.appendChild(botaoVerde);
  divVerdeAmarelo.appendChild(botaoAmarelo);
  divVermelhoAzul.appendChild(botaoVermelho);
  divVermelhoAzul.appendChild(botaoAzul);
  container.appendChild(divVerdeAmarelo);
  container.appendChild(divVermelhoAzul);
  body.appendChild(pAcertos);
  body.appendChild(vez);

  button.innerText = "INICIAR JOGO";
  container.setAttribute("class", "jogo");
  botaoVerde.setAttribute("class", "jogo-botãoVerde");
  botaoAmarelo.setAttribute("class", "jogo-botãoAmarelo");
  botaoVermelho.setAttribute("class", "jogo-botãoVermelho");
  botaoAzul.setAttribute("class", "jogo-botãoAzul");
  botaoVerde.setAttribute("id", "verde");
  botaoAmarelo.setAttribute("id", "amarelo");
  botaoVermelho.setAttribute("id", "vermelho");
  botaoAzul.setAttribute("id", "azul");
  vez.innerText = quemJoga;
  vez.setAttribute("class", "vez");
  vez.setAttribute("id", "vez");
  pAcertos.innerText = "TURNO " + turno;
  pAcertos.setAttribute("class", "acertos");
}

criaJogo();
proximo();
