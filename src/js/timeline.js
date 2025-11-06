const entradaTimeLine = document.getElementById('btnEntrada');
const pausaTimeLine = document.getElementById('btnPausa');
const retornoTimeLine = document.getElementById('btnRetorno');
const saidaTimeLine = document.getElementById('btnSaida');
const timeLineGrid = document.getElementById('timelineGrid');

let array = []
const tiposRegistro = {
  entrada: { icone: '🚪', texto: 'Entrada', classe: 'punch-entrada' },
  pausa: { icone: '☕', texto: 'Pausa', classe: 'punch-pausa' },
  retorno: { icone: '▶️', texto: 'Retorno', classe: 'punch-retorno' },
  saida: { icone: '🏠', texto: 'Saída', classe: 'punch-saida' }
};

function adicionarRegistro(tipo) {
  const agora = new Date();
  const hora = agora.getHours().toString().padStart(2, '0');
  const minuto = agora.getMinutes().toString().padStart(2, '0');
  
  const registro = {
    tipo: tipo,
    hora: `${hora}:${minuto}`,
    data: agora
  };
  array.push(registro);
  
  const config = tiposRegistro[tipo];

  const html = `
  <div class = "timeline-grid" id="timelineGrid">
  <div class = "timeline-row">
    <div class="timeline-date today">
      <div class="timeline-day">6</div>
      <div class="timeline-weekday">qui.</div>
    </div>
      <div class="timeline-cell">
      <div class="punch-dot ${config.classe}">${config.icone}</div>
      <div class="punch-time">${hora}:${minuto}</div>
      <div style="font-size: 11px; color: #999;">${config.texto}</div>
      <div class="add-description-btn">➕ Adicionar descrição</div>
    </div>
  </div>
  </div>
  </div>
  `;

  timeLineGrid.insertAdjacentHTML('beforeend', html)
}

entradaTimeLine.addEventListener("click", () => adicionarRegistro('entrada'));
pausaTimeLine.addEventListener("click", () => adicionarRegistro('pausa'));
retornoTimeLine.addEventListener("click", () => adicionarRegistro('retorno'));
saidaTimeLine.addEventListener("click", () => adicionarRegistro('saida'));