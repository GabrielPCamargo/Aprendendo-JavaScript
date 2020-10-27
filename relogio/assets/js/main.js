function criaRelogio() {
  const timer = document.querySelector('.relogio');
  let segundos = 0;
  let intervalo;

  function segundosToDate(segundos) {
    const hora = new Date(segundos * 1000);
    return hora.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC',
    });
  }

  function adicionaSegundos() {
    intervalo = setInterval(() => {
      segundos += 1;
      timer.innerHTML = segundosToDate(segundos);
    }, 1000);
  }


  document.addEventListener('click', function (e) {
    const element = e.target;

    if (element.classList.contains('iniciar')) {
      timer.classList.remove('pausado');
      clearInterval(intervalo);
      adicionaSegundos();
    }

    if (element.classList.contains('pausar')) {
      clearInterval(intervalo);
      timer.classList.add('pausado');
    }

    if (element.classList.contains('zerar')) {
      clearInterval(intervalo);
      segundos = 0;
      timer.innerHTML = '00:00:00';
      timer.classList.remove('pausado');
    }


  })
}
