const tarefa = document.getElementById('tarefa')
const horas = document.getElementById('horas')

function adicionar() {
    const li = document.createElement('li')
    li.innerText = tarefa.value
    const prioridade = document.getElementById('prioridade').value
    if(tarefa.value === ''){
        alert('Digite uma tarefa')
        return;
    }else{
        li.classList.add(prioridade)
    }
    

    tarefa.value = ''

    
    const btnConcluir = document.createElement('button')
    btnConcluir.innerText = 'Concluir'
    btnConcluir.classList.add('botao-estilo')
    
    
    btnConcluir.addEventListener('click', function () {
        // Adicionar classe de concluída
        li.classList.add('concluida')
        

        const conclusao = new Date();
        const data = conclusao.toLocaleDateString();
        const hora = conclusao.toLocaleTimeString();
        

        const span = document.createElement('span');
        span.textContent = ` concluída em ${data} ${hora}`;
        span.style.fontSize = '1em'; 
        span.style.color = 'black'; 

        li.insertBefore(span, btnContainer);
        document.getElementById('concluidas').appendChild(li);
        btnConcluir.remove();
        li.style.backgroundColor = '#00BFFF';
    });
    
    const btnExcluir = document.createElement('button')
    btnExcluir.innerText = 'Excluir'
    btnExcluir.classList.add('botao-excluir')

    btnExcluir.addEventListener('click', function () {
        li.remove()
    })
    

    const btnContainer = document.createElement('div')
    btnContainer.style.display = 'flex'
    btnContainer.style.justifyContent = 'flex-end'
    btnContainer.style.gap = '10px' // Adiciona um espaçamento entre os botões
    btnContainer.appendChild(btnExcluir)
    btnContainer.appendChild(btnConcluir)

    li.appendChild(btnContainer)

    const pendentes = document.getElementById('pendentes')
    pendentes.appendChild(li)
}



