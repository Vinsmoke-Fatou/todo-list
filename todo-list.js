const todoList = [];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const { name } = todoObject;
        const { dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <div>
                <button
                    class="delete-todo-button js-delete-todo-button" style="width: 100px;"
                >Delete</button>
            </div>`;
        todoListHTML += html;


    });
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    
    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
        });
    });

}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    const dateinputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateinputElement.value;

    todoList.push({
        // name = name,
        // dueDate = dueDate
        name,
        dueDate
    });    

    inputElement.value = ''; //reset the text

    renderTodoList();   
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
});
