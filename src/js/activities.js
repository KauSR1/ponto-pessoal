function renderizarAtividades() {
  const atualizarLista = document.getElementById('activityList');
  atualizarLista.innerHTML = '';

  const registrosComDescricao = window.arrayRegistros.filter(r => 
    r.descricao && r.descricao.trim() !== ''
  );

  if (registrosComDescricao.length === 0) {
    atualizarLista.innerHTML = `
      <div class="activity-empty">
        📝 Nenhuma atividade registrada ainda
      </div>
    `;
    return;
  }


  [...window.arrayRegistros].reverse().forEach(registro => {
    const agora = new Date();
    const tempoRegistro = new Date(registro.data);
    const diferencaMinutos = Math.max(0, Math.floor((agora - tempoRegistro) / 60000));
    
    let textoTempo;
    if (diferencaMinutos < 1) {
      textoTempo = 'agora mesmo';
    } else if (diferencaMinutos < 60) {
      textoTempo = `há ${diferencaMinutos}min`;
    } else {
      const horas = Math.floor(diferencaMinutos / 60);
      const minutos = diferencaMinutos % 60;
      textoTempo = minutos > 0 ? `há ${horas}h ${minutos}min` : `há ${horas}h`;
    }

  const descricaoTruncada = registro.descricao.length > 100 
  ? registro.descricao.substring(0, 100) + '...'
  : registro.descricao;

    if (registro.descricao && registro.descricao.trim() !== '') {
      const modalAtividade = `
      <div class="activity-list">
        <div class="activity-item">
          <div class="activity-header">
            <div class="activity-time">
              ${registro.hora} 
              <span class="time-ago">(${textoTempo})</span>
            </div>
            <div class="activity-type">
              ${window.tiposRegistro[registro.tipo].icone} 
              ${window.tiposRegistro[registro.tipo].texto}
            </div>
          </div>
          <div class="activity-text">${descricaoTruncada}</div>
        </div>
      </div>`;
      
      atualizarLista.insertAdjacentHTML('beforeend', modalAtividade);
    }
  });
}