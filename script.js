let todoName = document.querySelector('.todo-name')
let nameBtn = document.querySelector('.name-btn')
let todoAdd = document.querySelector('.todo-add')
let addName = document.querySelector('.add-name')
let btnAdd = document.querySelector('.btn-add')
let containerTodo = document.querySelector('.container-todo')

btnAdd.addEventListener('click', function(e){
    e.preventDefault()

    let inputValue = addName.value.trim()

    if(inputValue === ''){
        alert('COLOQUE UM NOME DE LISTA PARA PROSSEGUIR!')
    }

    else{

        let newTodo = document.createElement('div')
        newTodo.classList.add('todo')
        
        
        let checkBtn = document.createElement('button')
        checkBtn.classList.add('check-todo')
        checkBtn.innerHTML = "<i  class='bx bx-check'></i>"
        newTodo.appendChild(checkBtn)
        
        
        let todoTitle = document.createElement('h3')
        todoTitle.classList.add('todo-title')
        todoTitle.innerText = inputValue
        newTodo.appendChild(todoTitle)
        
        let deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete-todo')
        // deleteBtn.setAttribute('onclick', 'deleteClick()');
        deleteBtn.innerHTML = "<i class='bx bx-trash'></i>"
        newTodo.appendChild(deleteBtn)
        
        containerTodo.appendChild(newTodo)

        addName.value = ''
        addName.focus()
        
    }
})


document.addEventListener('click', (e) => {
        let elTarget = e.target;
        let parentTarget = elTarget.closest('.todo');

        if(elTarget.classList.contains('delete-todo')){
                parentTarget.remove()
        }
        if(elTarget.classList.contains('check-todo')){
                parentTarget.classList.toggle('done')
        }

        
})

function btnLuz(){
        let sunButton = document.querySelector('.sun-button')
        let startSun = document.querySelector('.start-sun')
        let iconsInsta = document.querySelector('#icon-insta')
        let addName = document.querySelector('.add-name')
        let todoBtn = document.querySelector('.todo')

        sunButton.classList.toggle('bright')
        startSun.classList.toggle('bright')
        iconsInsta.classList.toggle('bright')
        addName.classList.toggle('bright')
        document.body.classList.toggle('bright')
        todoBtn.classList.toggle('done')


}

