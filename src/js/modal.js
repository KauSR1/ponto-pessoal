const modalBtnSave = document.getElementById('btnModalSave');
const modalBtnCancel = document.getElementById('btnModalCancel');
const modal = document.getElementById('modalOverlay');

modalBtnSave.addEventListener('click', () => {
  const textarea = document.getElementById('modalTextarea');
  const texto = textarea.value.trim();

  if (!texto) {
    alert("Digite algo!");
    return;
  }

  window.arrayRegistros[window.indiceEditando].descricao = texto;
  renderizarAtividades(); 
  salvarInfJson();
  renderizarTudo();
  
  console.log('Salvo:', window.arrayRegistros[window.indiceEditando]);
  
  modal.classList.remove('active');
  textarea.value = '';
});

modalBtnCancel.addEventListener('click', () => {
  modal.classList.remove('active');
});