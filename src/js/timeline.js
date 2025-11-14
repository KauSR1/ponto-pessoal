const entradaTimeLine = document.getElementById('btnEntrada');
const pausaTimeLine = document.getElementById('btnPausa');
const retornoTimeLine = document.getElementById('btnRetorno');
const saidaTimeLine = document.getElementById('btnSaida');
const timeLineGrid = document.getElementById('timelineGrid');
const timeLineEmpty = document.getElementsByClassName('empty-timeline');
let timeLineRow = document.querySelector('.timeline-row');

window.arrayRegistros = [];
const tiposRegistro = {
  entrada: { icone: '🚪', texto: 'Entrada', classe: 'punch-entrada' },
  pausa: { icone: '☕', texto: 'Pausa', classe: 'punch-pausa' },
  retorno: { icone: '▶️', texto: 'Retorno', classe: 'punch-retorno' },
  saida: { icone: '🏠', texto: 'Saída', classe: 'punch-saida' }
};

window.indiceEditando = null;


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
    data: agora,
    dia: dia,
    semana: semana,
    descricao: ''
  };
  window.arrayRegistros.push(registro);
  
  const config = tiposRegistro[tipo];
  
  if (!timeLineRow) {
    const htmlDia = `
    <div class = "timeline-row">
      <div class="timeline-date today">
        <div class="timeline-day">${dia}</div>
        <div class="timeline-weekday">${semana}</div>
      </div>
    </div>`;
    
    timeLineGrid.insertAdjacentHTML('beforeend', htmlDia);
    timeLineRow = document.querySelector(".timeline-row");
  }
    const htmlEvento = `
    <div class="timeline-cell">
      <div class="punch-dot ${config.classe}">${config.icone}</div>
        <div class="punch-time">${hora}:${minuto}</div>
        <div style="font-size: 11px; color: #999;">${config.texto}</div>
        <div class="add-description-btn" id = "btnDesc">➕ Adicionar descrição</div>
      </div>`;
      
  timeLineRow.insertAdjacentHTML('beforeend', htmlEvento);

let ultimaCelula = timeLineRow.lastElementChild;
const botaoDescricao = ultimaCelula.querySelector('.add-description-btn');
  
  botaoDescricao.addEventListener("click", () =>{
    window.indiceEditando = window.arrayRegistros.length -1;
    abrirModalDescricao();
  });
}

  function abrirModalDescricao(){
    const modal = document.getElementById('modalOverlay');
    modal.classList.add('active');
  }


entradaTimeLine.addEventListener("click", () => adicionarRegistro('entrada'));
pausaTimeLine.addEventListener("click", () => adicionarRegistro('pausa'));
retornoTimeLine.addEventListener("click", () => adicionarRegistro('retorno'));
saidaTimeLine.addEventListener("click", () => adicionarRegistro('saida'));