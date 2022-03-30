let turno = 1
let quemJoga = "SUA VEZ"

function criaJogo(){

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
    container.setAttribute("class","jogo");
    botaoVerde.setAttribute("class","jogo-botãoVerde");
    botaoAmarelo.setAttribute("class","jogo-botãoAmarelo");
    botaoVermelho.setAttribute("class","jogo-botãoVermelho");
    botaoAzul.setAttribute("class","jogo-botãoAzul");
    vez.innerText = quemJoga;
    vez.setAttribute("class","vez");
    pAcertos.innerText = "TURNO " + turno;
    pAcertos.setAttribute("class","acertos");


}

criaJogo();