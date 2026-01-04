const todoList = [
    {
        name: 'make dinner', 
        dueDate: '2026-01-03'
    },
    {
        name: 'wash dishes',
        dueDate: '2026-01-03'
    }
];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach(function(todoObject, index) {
        const { name } = todoObject;
        const { dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <div>
                <button onclick="
                    todoList.splice(${i}, 1);
                    renderTodoList();
                " style="width: 100px;" class="delete-todo-button">Delete</button>
            </div>`;
        todoListHTML += html;
    });

    /* for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate; we can use the destructuring to do that
        const { name } = todoObject;
        const { dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <div>
                <button onclick="
                    todoList.splice(${i}, 1);
                    renderTodoList();
                " style="width: 100px;" class="delete-todo-button">Delete</button>
            </div>`;
        todoListHTML += html;
    } */

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
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
