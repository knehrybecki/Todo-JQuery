
const inputText = $('.input-text')
const buttonAddTodo = $('.add-item')
const todoList = $('.todo__list')

const filtrAll = $('.filtr-all')
const filtrTodo = $('.filtr-todo')
const filtrDone = $('.filtr-done')

let todo = []

const createNewTodo = getText => {
    const list = $('<li>', {
         class: 'todo__item',
         text: getText
     })
 
     return list
}

inputText.keyup(event => event.keyCode === 13 ? addTodo() : null)

buttonAddTodo.click(() => addTodo())

const addTodo = () => {
    if (inputText.val() === '') {
        alert("Please write any text")
    }

    else {
        const newTodo = createNewTodo(inputText.val())
 
        newTodo.appendTo(todoList)

        createTodoControls(newTodo)
    }

    todo = todo.concat([
        {
            todo: inputText.val()
        }
    ])

    inputText.val('')
}

const createTodoControls = todoItem => {
    const allButton = $('<div>', {
        class: 'todo__item-all-button'
    }).appendTo(todoItem)

    const acceptedButton = $('<button>', {
        class: 'todo__item-accepted'
    }).appendTo(allButton)

    $('<i>', {
        class: 'fa-solid fa-check'
    }).appendTo(acceptedButton)

    const deleteButton = $('<button>', {
        class: 'todo__item-deleted'
    }).appendTo(allButton)

    $('<i>', {
        class: 'fa-solid fa-trash'
    }).appendTo(deleteButton)
    
    deleteButton.click(event => event.currentTarget.parentElement.parentElement.remove())

    acceptedButton.click(event => event.currentTarget.parentElement.parentElement.classList.add('checked'))
}

const filters = () => {
    filtrAll.click(() => { 
        $('.todo__item').show(500) 
    })

    filtrTodo.click(() => { 
        $('.todo__item').show(500)
        $('.todo__item.checked').hide(400)
    })

    filtrDone.click(() => {     
        $('.todo__item').hide(400)
        $('.todo__item.checked').show(500)
    })
}

filters()
