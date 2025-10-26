const btnIniciar = document.getElementById('btnEntrada');
const btnPausar = document.getElementById('btnPausa');
const btnRetornar = document.getElementById('btnRetorno');
const btnFinalizar = document.getElementById('btnSaida');

  btnIniciar.addEventListener("click", ()=>{
    const horarioEntrada = new Date();
    const horas = horarioEntrada.getHours().toString().padStart(2, '0'); 
    const minutos = horarioEntrada.getMinutes().toString().padStart(2, '0');
    document.getElementById('firstEntry').textContent = `${horas}:${minutos}`;

    const horarioSaidaPrevisto = new Date(horarioEntrada);
    horarioSaidaPrevisto.setHours(horarioEntrada.getHours() + 8);
    const horaPrevista = horarioSaidaPrevisto.getHours().toString().padStart(2, '0'); 
    const minutoPrevisto = horarioSaidaPrevisto.getMinutes().toString().padStart(2, '0');
    document.getElementById('expectedExit').textContent = `${horaPrevista}:${minutoPrevisto}`;

    btnIniciar.disabled = true;
    btnPausar.disabled = false;
    btnRetornar.disabled = true;
    btnFinalizar.disabled = false;
  });
  
  btnPausar.addEventListener("click", ()=>{
    btnIniciar.disabled = true;
    btnPausar.disabled = true;
    btnRetornar.disabled = false;
    btnFinalizar.disabled = true;
  });
  
  btnRetornar.addEventListener("click", ()=>{
    btnIniciar.disabled = true;
    btnPausar.disabled = false;
    btnRetornar.disabled = true;
    btnFinalizar.disabled = false;
  });

  btnFinalizar.addEventListener("click", ()=>{
    btnIniciar.disabled = false;
    btnPausar.disabled = true;
    btnRetornar.disabled = true;
    btnFinalizar.disabled = true;
  });