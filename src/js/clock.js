function primeiraMaiuscula(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function capturarHorarioAtual() {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, '0'); 
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');

  document.getElementById('currentTime').textContent = `${horas}:${minutos}:${segundos}`; 
}

function atualizarDataAtual() {
  const agora = new Date();
  const diaSemana = primeiraMaiuscula(agora.toLocaleDateString('pt-BR', { weekday: 'long' }));
  const dia = agora.getDate().toString().padStart(2, '0');
  const mes = agora.toLocaleDateString('pt-BR', { month: 'long' });
  const ano = agora.getFullYear();

  document.getElementById('currentDate').textContent = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
}
function atualizarTudo() {
  capturarHorarioAtual();
  atualizarDataAtual();
}

atualizarTudo();
setInterval(atualizarTudo, 1000);
