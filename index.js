const menuTarefa = document.querySelector('.tarefas-container');
const input = document.querySelector('.campo-tarefa');
const button = document.querySelector('.btn');
button.addEventListener('click', addTarefa);


function addTarefa() {
  if(!input.value == '') {
    const tarefa = document.createElement('div');
    tarefa.classList.add('tarefa');
    tarefa.innerHTML = `<input type="checkbox" name="check" id="check"></input><p>${input.value}</p>`;
    menuTarefa.appendChild(tarefa);
  }
  
}