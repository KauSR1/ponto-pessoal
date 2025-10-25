const btnIniciar = document.getElementById('btnEntrada');
const btnPausar = document.getElementById('btnPausa');
const btnRetornar = document.getElementById('btnRetorno');
const btnFinalizar = document.getElementById('btnSaida');

  btnIniciar.addEventListener("click", ()=>{
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