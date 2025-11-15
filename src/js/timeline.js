function salvarInfJson() {
  const textoJson = JSON.stringify(window.arrayRegistros);
  localStorage.setItem('JsonKey', textoJson);
}

function carregarInfJson() {
  const textoJson = localStorage.getItem('JsonKey');
  if (!textoJson) return [];
  
  try {
    return JSON.parse(textoJson);
  } catch (erro) {
    console.log('erro ao carregar:', erro);
    return [];
  }
}


const entradaTimeLine = document.getElementById('btnEntrada');
const pausaTimeLine = document.getElementById('btnPausa');
const retornoTimeLine = document.getElementById('btnRetorno');
const saidaTimeLine = document.getElementById('btnSaida');
const timeLineGrid = document.getElementById('timelineGrid');
const timeLineEmpty = document.getElementsByClassName('empty-timeline');
let timeLineRow = document.querySelector('.timeline-row');

window.arrayRegistros = carregarInfJson();
window.tiposRegistro = {
  entrada: { icone: '🚪', texto: 'Entrada', classe: 'punch-entrada' },
  pausa: { icone: '☕', texto: 'Pausa', classe: 'punch-pausa' },
  retorno: { icone: '▶️', texto: 'Retorno', classe: 'punch-retorno' },
  saida: { icone: '🏠', texto: 'Saída', classe: 'punch-saida' }
};

window.indiceEditando = null;

function renderizarTudo() {
  document.querySelectorAll('.timeline-row').forEach(row => row.remove());
  
  if (window.arrayRegistros.length === 0) {
    timeLineEmpty[0];
    return;
  }
  
  timeLineEmpty[0].style.display = 'none';
  
  const registrosPorData = {};
  
  window.arrayRegistros.forEach((registro, indice) => {
    const dataKey = `${registro.dia}-${registro.semana}`;
    
    if (!registrosPorData[dataKey]) {
      registrosPorData[dataKey] = {
        dia: registro.dia,
        semana: registro.semana,
        registros: []
      };
    }
    registrosPorData[dataKey].registros.push({ ...registro, indice });
  });
  

  Object.values(registrosPorData).forEach(grupo => {

    const htmlDia = `
      <div class="timeline-row">
        <div class="timeline-date today">
          <div class="timeline-day">${grupo.dia}</div>
          <div class="timeline-weekday">${grupo.semana}</div>
        </div>
      </div>`;
    
    timeLineGrid.insertAdjacentHTML('beforeend', htmlDia);
    const linhaAtual = timeLineGrid.lastElementChild;
    
    grupo.registros.forEach(registro => {
      const config = window.tiposRegistro[registro.tipo];
      
      const htmlRegistro = `
        <div class="timeline-cell">
          <div class="punch-dot ${config.classe}">${config.icone}</div>
          <div class="punch-time">${registro.hora}</div>
          <div style="font-size: 11px; color: #999;">${config.texto}</div>
          ${registro.descricao 
            ? `<div class="record-description">${registro.descricao}</div>` 
            : `<div class="add-description-btn" data-indice="${registro.indice}">➕ Adicionar descrição</div>`
          }
        </div>`;
      
      linhaAtual.insertAdjacentHTML('beforeend', htmlRegistro);
    });
  });
  
  document.querySelectorAll('.add-description-btn').forEach(botao => {
    botao.addEventListener('click', () => {
      window.indiceEditando = parseInt(botao.dataset.indice);
      abrirModalDescricao();
    });
  });
}

function adicionarRegistro(tipo) {

  const agora = new Date();
  const hora = agora.getHours().toString().padStart(2, '0');
  const minuto = agora.getMinutes().toString().padStart(2, '0');
  
  const hoje = new Date();
  const dia = hoje.getDate().toString().padStart(2, '0');
  const semana = primeiraMaiuscula(hoje.toLocaleDateString('pt-BR', { weekday: 'short' }));
  
  if (window.arrayRegistros.length === 0) {
    timeLineEmpty[0].style.display = 'none';
  }
  
  const registro = {
    tipo: tipo,
    hora: `${hora}:${minuto}`,
    data: agora.toISOString(),
    dia: dia,
    semana: semana,
    descricao: ''
  };
  window.arrayRegistros.push(registro);
  salvarInfJson();
  renderizarTudo();
}
  function abrirModalDescricao(){
    const modal = document.getElementById('modalOverlay');
    modal.classList.add('active');
  }


entradaTimeLine.addEventListener("click", () => adicionarRegistro('entrada'));
pausaTimeLine.addEventListener("click", () => adicionarRegistro('pausa'));
retornoTimeLine.addEventListener("click", () => adicionarRegistro('retorno'));
saidaTimeLine.addEventListener("click", () => adicionarRegistro('saida'));

renderizarTudo();