 const numHearts = 50;

    for (let i = 0; i < numHearts; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = `${Math.random() * window.innerWidth}px`;
      heart.style.top = `${Math.random() * window.innerHeight}px`;
      heart.style.animationDuration = `${5 + Math.random() * 5}s`;
      document.body.appendChild(heart);
    }


// Altere para a data que vocês começaram, por exemplo:


const dataInicio = new Date(2021, 8, 25, 0, 0, 0); // 10 de junho de 2023 (junho = 5)

function atualizarTempo() {
  const agora = new Date();
  const diffMs = agora - dataInicio;

  const segundosTotais = Math.floor(diffMs / 1000);
  const dias = Math.floor(segundosTotais / (60 * 60 * 24));
  const horas = Math.floor((segundosTotais % (60 * 60 * 24)) / (60 * 60));
  const minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
  const segundos = segundosTotais % 60;

  const tempoTexto = `${dias} dias, ${horas}h ${minutos}min ${segundos}s`;

  document.getElementById("tempoPassado").textContent = tempoTexto;
}

// Atualiza a cada segundo
atualizarTempo();
setInterval(atualizarTempo, 1000);
