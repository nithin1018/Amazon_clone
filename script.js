const todoList = [{
   name: 'make dinner',
   dueDate: '2022-12-22'
},{
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];
renderTodoList();
function renderTodoList(){

let todoListHtml = '';

todoList.forEach((todoObject,index) =>   {
        const {name,dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button">Delete</button>
        `;
        todoListHtml += html;

})

//-------this is normal way of the above code ----------------
//------------above is a much simpler way-----------
/*

for(let i = 0;i<todoList.length;i++){
    const todoObject = todoList[i]; 
    const name = todoObject.name;
     const dueDate = todoObject.dueDate
    const {name,dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick = "
    todoList.splice(${i},1);
    renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    todoListHtml += html;
}
    */


document.querySelector('.js-todo-list').innerHTML = todoListHtml;

document.querySelectorAll('.delete-todo-button').forEach((deleteButton,index) =>{
    deleteButton.addEventListener('click', (event) => {
        todoList.splice(index,1);
        renderTodoList();
       
    });

});

document.querySelectorAll('.delete-todo-button').forEach((deleteButton) =>{
    deleteButton.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'red';
    });
    deleteButton.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = '';  // Reset to default
    });
});
}


const todoButton = document.querySelector('.js-add-todo-button');

todoButton.addEventListener('click', (event)=> {
addTodo();
event.target.style.backgroundColor = 'purple';
setTimeout(() => {
    event.target.style.backgroundColor = '';
}, 200);

});

todoButton.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'yellow';
});

todoButton.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = '';  // Reset to default
});



function addTodo(){
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;
   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;
   todoList.push({
    // name: name,
    // dueDate: dueDate
    name,
    dueDate
});

   inputElement.value = '';
   
   renderTodoList();
}