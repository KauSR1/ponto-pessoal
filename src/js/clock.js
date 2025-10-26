function primeiraMaiuscula(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function capturarHorarioAtual() {
  const horario = new Date();
  const horas = horario.getHours().toString().padStart(2, '0'); 
  const minutos = horario.getMinutes().toString().padStart(2, '0');
  const segundos = horario.getSeconds().toString().padStart(2, '0');

  document.getElementById('currentTime').textContent = `${horas}:${minutos}:${segundos}`; 
}

function atualizarDataAtual() {
  const hoje = new Date();
  const semana = primeiraMaiuscula(hoje.toLocaleDateString('pt-BR', { weekday: 'long' }));
  const dia = hoje.getDate().toString().padStart(2, '0');
  const mes = hoje.toLocaleDateString('pt-BR', { month: 'long' });
  const ano = hoje.getFullYear();

  document.getElementById('currentDate').textContent = `${semana}, ${dia} de ${mes} de ${ano}`;
}
function atualizarTudo() {
  capturarHorarioAtual();
  atualizarDataAtual();
}

atualizarTudo();
setInterval(atualizarTudo, 1000);
