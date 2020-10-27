const novaTarefa = document.querySelector('#novaTarefa');
const btnAdicionar = document.querySelector('#btnAdicionar');
const listaTarefas = document.querySelector('#tarefas')
let tarefas = [];

if(getLocalStorage()) tarefas = getLocalStorage();


btnAdicionar.addEventListener('click', function(e) {

    if(!novaTarefa.value) return;
    tarefas.push({tarefa: novaTarefa.value});
    novaTarefa.value = '';
    saveTarefas();
    
})

novaTarefa.addEventListener('keypress', function(e) {

    if(e.keyCode === 13) {
        if(!novaTarefa.value) return;

        tarefas.push({tarefa: novaTarefa.value});
        novaTarefa.value = '';
        novaTarefa.focus();
        saveTarefas();
    }
})

function getLocalStorage(){

    if(localStorage.getItem('tarefas')){
        return JSON.parse(localStorage.getItem('tarefas'));
    }else{
        return null;
    }
}

function showTarefas(){
    listaTarefas.innerHTML = '';

    for(i in tarefas){

        li = document.createElement('li');
        p = document.createElement('p');
        btn = document.createElement('button');

        p.innerText = tarefas[i].tarefa + ' ';
        btn.setAttribute('onClick', `deleteTarefa(${i})`);
        btn.innerText = 'remover';

        p.appendChild(btn);
        li.appendChild(p);

        listaTarefas.appendChild(li);
        console.log(tarefas[i].tarefa);
    }
}

function deleteTarefa(tarefa){

    tarefas.splice(tarefa, 1);
    saveTarefas()
}

function saveTarefas(){
    
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    tarefas = getLocalStorage();
    showTarefas();
}

showTarefas(tarefas);
