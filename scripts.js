function promoTimer() {
  let timer = document.getElementById("timer");

  let tempoLimite = 60 * 30; // 30 minutos

  setInterval(() => {
    let hora = parseInt(tempoLimite / (60 * 60));
    let minutos = parseInt((tempoLimite / 60) % 60);
    let segundos = parseInt(tempoLimite % 60);
    let displayTimer = `${hora}:${minutos}:${segundos}`;
    timer.innerHTML = displayTimer;
    if (tempoLimite > 0) tempoLimite--;
    else return;
  }, 1000);
}

promoTimer();

function javascriptRender() {
  const conteudo = [
    {
      title: "Escalas",
      conteudo: [
        { title: "Maior", link: "" },
        { title: "Menor", link: "" },
        { title: "Pentatonica maior", link: "" },
        { title: "Pentatonica m7", link: "" },
      ],
    },
    {
      title: "Arpeggios",
      conteudo: [
        { title: "Maiores", link: "" },
        { title: "Menores", link: "" },
      ],
    },
  ];

  const conteudoDiv = document.getElementById("conteudo");
  conteudoDiv.innerHTML = conteudo.map((tipo) => {
    let assuntos = tipo.conteudo.map(
      (assunto) =>
        "<li><a href=" + assunto.link + ">" + assunto.title + "</a></li>"
    );
    return "<li><h4>" + tipo.title + "</h4><ol>" + assuntos[0] + "</ol></li>";
  });
}
