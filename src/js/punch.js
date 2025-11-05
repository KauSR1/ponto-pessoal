const btnIniciar = document.getElementById('btnEntrada');
const btnPausar = document.getElementById('btnPausa');
const btnRetornar = document.getElementById('btnRetorno');
const btnFinalizar = document.getElementById('btnSaida');
const statusTrabalho = document.getElementById('statusBadge');
const displayTempoPausa = document.getElementById('breakTime');
const displayTrabalhado = document.getElementById('hoursToday');

let tempoInicialPausa = null;
let intervaloPausa = null;
let tempoTotalPausaEmMs = 0;

function atualizarDisplayPausa(){
  const agora = new Date();
  const diferencaMs = agora - tempoInicialPausa;
  const totalPausas = diferencaMs + tempoTotalPausaEmMs;

  const totalMinutos = Math.floor(totalPausas / 60000);
  const horas = Math.floor(totalMinutos / 60);
  const minutos = totalMinutos % 60;

  const horasStr = horas.toString().padStart(2, '0');
  const minutosStr = minutos.toString().padStart(2, '0');
  displayTempoPausa.textContent = `${horasStr}:${minutosStr}`;
}

function resetarPausa(){
  clearInterval(intervaloPausa);
  tempoInicialPausa = null;
  intervaloPausa = null;
  tempoTotalPausaEmMs = 0;
  displayTempoPausa.textContent = '00:00';
}

let inicioDoTrabalho = null;
let saidaDoTrabalho = null;

function atualizarDisplayTrabalho(){
  const Trabalhando = new Date();
  const tempoTotalTrabalhado = (Trabalhando - inicioDoTrabalho) - tempoTotalPausaEmMs;

  const totalMinutosT = Math.floor(tempoTotalTrabalhado / 60000);
  const horasT = Math.floor(totalMinutosT / 60);
  const minutosT = totalMinutosT % 60;

  const horasTrabalhadas = horasT.toString().padStart(2, '0');
  const minutoTrabalhados = minutosT.toString().padStart(2, '0');
  displayTrabalhado.textContent = `${horasTrabalhadas}:${minutoTrabalhados}`;
}

function resetarTrabalho(){
  clearInterval(saidaDoTrabalho);
  inicioDoTrabalho = null;
  saidaDoTrabalho = null;
  displayTrabalhado.textContent = '00:00';
}


  btnIniciar.addEventListener("click", ()=>{

    inicioDoTrabalho = new Date();
    saidaDoTrabalho = setInterval(atualizarDisplayTrabalho, 60000);
    atualizarDisplayTrabalho();

    statusTrabalho.textContent = 'Trabalhando';
    statusTrabalho.classList.remove('status-idle', 'status-paused', 'status-offline');
    statusTrabalho.classList.add('status-working');
    const horas = inicioDoTrabalho.getHours().toString().padStart(2, '0'); 
    const minutos = inicioDoTrabalho.getMinutes().toString().padStart(2, '0'); 
    document.getElementById('firstEntry').textContent = `${horas}:${minutos}`;

    const horarioSaidaPrevisto = new Date(inicioDoTrabalho);
    horarioSaidaPrevisto.setHours(inicioDoTrabalho.getHours() + 8);
    const horaPrevista = horarioSaidaPrevisto.getHours().toString().padStart(2, '0'); 
    const minutoPrevisto = horarioSaidaPrevisto.getMinutes().toString().padStart(2, '0');
    document.getElementById('expectedExit').textContent = `${horaPrevista}:${minutoPrevisto}`;

    btnIniciar.disabled = true;
    btnPausar.disabled = false;
    btnRetornar.disabled = true;
    btnFinalizar.disabled = false;
  });
  
  btnPausar.addEventListener("click", ()=>{
    clearInterval(saidaDoTrabalho);
    tempoInicialPausa = new Date();
    intervaloPausa = setInterval(atualizarDisplayPausa, 60000);
    atualizarDisplayPausa();

    statusTrabalho.textContent = 'em pausa';
    statusTrabalho.classList.add('status-paused');
    statusTrabalho.classList.remove('status-idle', 'status-working', 'status-offline');
    statusTrabalho.classList.add('status-paused');
    
    btnIniciar.disabled = true;
    btnPausar.disabled = true;
    btnRetornar.disabled = false;
    btnFinalizar.disabled = true;
  });
  
  btnRetornar.addEventListener("click", ()=>{
    saidaDoTrabalho  = setInterval(atualizarDisplayTrabalho, 60000);

    clearInterval(intervaloPausa);
    const tempoEmPause = new Date() - tempoInicialPausa;
    tempoTotalPausaEmMs += tempoEmPause;
    
    atualizarDisplayTrabalho();

    statusTrabalho.textContent = 'Trabalhando';
    statusTrabalho.classList.remove('status-idle', 'status-paused', 'status-offline');
    statusTrabalho.classList.add('status-working');
    btnIniciar.disabled = true;
    btnPausar.disabled = false;
    btnRetornar.disabled = true;
    btnFinalizar.disabled = false;
  });

  btnFinalizar.addEventListener("click", ()=>{

    clearInterval(saidaDoTrabalho);
    resetarTrabalho();
    resetarPausa();
    statusTrabalho.textContent = 'Offline';
    document.getElementById('firstEntry').textContent = "--:--";
    document.getElementById('expectedExit').textContent = "--:--";
    
    statusTrabalho.classList.remove('status-idle', 'status-paused', 'status-offline');
    statusTrabalho.classList.add('status-offline');
    btnIniciar.disabled = false;
    btnPausar.disabled = true;
    btnRetornar.disabled = true;
    btnFinalizar.disabled = true;
  });

