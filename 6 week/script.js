console.log("JavaScript World");
var number = 123;
var string = "word";
var SecString = "Hello";
var bool = true;
console.log(number + 111);
console.log(SecString + " " + string);

document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector("p").innerHTML = "text after changing";
});

// Task 3
const block = document.getElementById('block');
document.getElementById('changeColor').addEventListener('click', () => {
    block.style.backgroundColor = block.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
});

document.getElementById('changeFont').addEventListener('click', () => {
    block.style.fontSize = block.style.fontSize === '18px' ? '28px' : '18px';
});


// Task 4
const list = document.getElementById('itemList');
let count = list.children.length;


document.getElementById('addItem').addEventListener('click', () => {
    count++;
    const li = document.createElement('li');
    li.textContent = `Item ${count}`;
    list.appendChild(li);
});

document.getElementById('removeItem').addEventListener('click', () => {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
        count--;
    }
});


// Task 5: Mouse Events
const box = document.getElementById('colorBox');
box.addEventListener('mouseover', () => box.style.backgroundColor = 'lightgreen');
box.addEventListener('mouseout', () => box.style.backgroundColor = 'lightblue');

// Task 6: Keyboard Events
const input = document.getElementById('inputField');
const display = document.getElementById('displayValue');
input.addEventListener('keyup', () => {
    display.textContent = input.value;
});

// Task 7: Form Validation
const form = document.getElementById('simpleForm');
const errorMsg = document.getElementById('formError');

form.addEventListener('submit', (e) => {
    if (!form.name.value || !form.email.value || !form.password.value) {
        e.preventDefault(); // блокируем отправку
        errorMsg.style.display = 'block'; // показываем ошибку
    } else {
        errorMsg.style.display = 'none'; // скрываем ошибку
    }
});


// -----------------part 4-----------------
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

let tasks = [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
        <span class="${task.completed ? 'completed' : ''}" onclick="toggleComplete(${index})">${task.text}</span>
        <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
      `;
        taskList.appendChild(li);
    });
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

addTaskBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({ text, completed: false });
        taskInput.value = '';
        renderTasks();
    }
});


taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTaskBtn.click();
});