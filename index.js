const menuTarefa = document.querySelector('.tarefas-container');
const input = document.querySelector('.campo-tarefa');

function addTarefa() {
  const tarefa = document.createElement('div');
  tarefa.innerHTML = `<input type="checkbox" name="check" id="check"></input><p>${input.value}</p>`;
  menuTarefa.appendChild(tarefa);
}