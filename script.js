let turno = 1;
let quemJoga = "Aguardando Início";
let sequenciaJogo;
let pontos;
let resposta;
let contador;
let pontuacao;

function startGame() {
  const jogar = document.getElementById("inicio");
  jogar.addEventListener("click", init);
}

function init() {
  turno = 1;
  quemJoga = "Aguardando Início";
  sequenciaJogo = [];
  pontos = turno;
  resposta = [];
  contador = 0;
  proximo();
  const jogo = document.getElementById("jogo");
  jogo.addEventListener("click", clickEvent);
}


function proximo() {
  let mensagem = document.getElementById("vez");
  mensagem.innerHTML = "Grave a sequência!";
  let timeout = 1500;
  sequenciaJogo.push(Math.floor(Math.random() * 4));
  sequenciaJogo.map((cor) => {
    switch (cor) {
      case 0:
        let verde = document.getElementById("verde");
        setTimeout(() => {
          verde.classList.add("ativoVerde");
        }, timeout);
        timeout += 1200;
        setTimeout(() => {
          verde.classList.remove("ativoVerde");
        }, timeout);
        timeout += 250;
        break;
      case 1:
        let vermelho = document.getElementById("vermelho");
        setTimeout(() => {
          vermelho.classList.add("ativoVermelho");
        }, timeout);
        timeout += 1200;
        setTimeout(() => {
          vermelho.classList.remove("ativoVermelho");
        }, timeout);
        timeout += 250;
        break;
      case 2:
        let amarelo = document.getElementById("amarelo");
        setTimeout(() => {
          amarelo.classList.add("ativoAmarelo");
        }, timeout);
        timeout += 1200;
        setTimeout(() => {
          amarelo.classList.remove("ativoAmarelo");
        }, timeout);
        timeout += 250;
        break;
      case 3:
        let azul = document.getElementById("azul");
        setTimeout(() => {
          azul.classList.add("ativoAzul");
        }, timeout);
        timeout += 1200;
        setTimeout(() => {
          azul.classList.remove("ativoAzul");
        }, timeout);
        timeout += 250;
        break;
    }
  });
  contador = 0;
  setTimeout(() => {
    mensagem.innerHTML = "Sua Vez!";
  }, timeout);
  let pAcertos = document.querySelector(".acertos");
  pAcertos.innerText = "TURNO " + turno;
  turno++;
}

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
  body.appendChild(vez);
  body.appendChild(container);
  divVerdeAmarelo.appendChild(botaoVerde);
  divVerdeAmarelo.appendChild(botaoAmarelo);
  divVermelhoAzul.appendChild(botaoVermelho);
  divVermelhoAzul.appendChild(botaoAzul);
  container.appendChild(divVerdeAmarelo);
  container.appendChild(divVermelhoAzul);
  body.appendChild(pAcertos);
  
  button.innerText = "INICIAR JOGO";
  button.setAttribute("id", "inicio");
  container.setAttribute("class", "jogo");
  container.setAttribute("id", "jogo");
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

function clickEvent(event) {
  let tamanhoSequencia = sequenciaJogo.length;
  pontuacao = turno - 1;
  if (contador === 0) {
    resposta = [];
  }
  foiClicado = event.target;
  contador++;
  if (foiClicado.id === "verde" && sequenciaJogo[contador - 1] === 0) {
    let verde = document.getElementById("verde");
    verde.classList.add("ativoVerde");
    setTimeout(() => {
      verde.classList.remove("ativoVerde");
    }, 500);
    resposta.push(0);
  } else if (
    foiClicado.id === "vermelho" &&
    sequenciaJogo[contador - 1] === 1
  ) {
    let vermelho = document.getElementById("vermelho");
    vermelho.classList.add("ativoVermelho");
    setTimeout(() => {
      vermelho.classList.remove("ativoVermelho");
    }, 500);
    resposta.push(1);
  } else if (foiClicado.id === "amarelo" && sequenciaJogo[contador - 1] === 2) {
    let amarelo = document.getElementById("amarelo");
    amarelo.classList.add("ativoAmarelo");
    setTimeout(() => {
      amarelo.classList.remove("ativoAmarelo");
    }, 500);
    resposta.push(2);
  } else if (foiClicado.id === "azul" && sequenciaJogo[contador - 1] === 3) {
    let azul = document.getElementById("azul");
    azul.classList.add("ativoAzul");
    setTimeout(() => {
      azul.classList.remove("ativoAzul");
    }, 500);
    resposta.push(3);
  } else {
    alert("Você errou!!! Sua pontuação foi: " + (pontuacao - 1));
    let retorno = document.getElementById("vez");
    retorno.innerHTML = "Reinicie o Jogo!";
    startGame();
  }

  if (resposta.length === tamanhoSequencia) {
    proximo();
  }
}

criaJogo();
startGame();

