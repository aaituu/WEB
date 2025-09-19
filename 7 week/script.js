// -------- Part 1 --------
$(document).ready(function () {
    console.log("jQuery is ready!");

    $('#changeText').click(function () {
        $('#part1Output').text("Text changed by jQuery!");
    });

    // -------- Part 2 --------
    $('#hideBtn').click(() => $('#effectParagraph').hide());
    $('#showBtn').click(() => $('#effectParagraph').show());
    $('#toggleBtn').click(() => $('#effectParagraph').toggle());

    // -------- Part 3 --------
    const block = $('#colorBox');
    $('#changeColor').click(() => {
        const newColor = block.css('background-color') === 'rgb(173, 216, 230)' ? 'lightgreen' : 'lightblue';
        block.css('background-color', newColor);
    });
    $('#changeFont').click(() => {
        const newSize = block.css('font-size') === '16px' ? '28px' : '16px';
        block.css('font-size', newSize);
    });

    // Task 4: Add/Remove List Items
    let count = $('#itemList li').length;
    $('#addItem').click(() => {
        count++;
        $('#itemList').append(`<li class="list-group-item">Item ${count}</li>`);
    });
    $('#removeItem').click(() => {
        $('#itemList li:last').remove();
        count = Math.max(count - 1, 0);
    });

    // Task 5: Mouse Events
    $(document).ready(function() {
        $('#mouseBox').hover(
            function() {
                $(this).css('background-color', 'lightcoral');
            },
            function() {
                $(this).css('background-color', '');
            }
        );
    });

    // Task 6: Keyboard Events
    $('#keyInput').on('keyup', function () {
        $('#keyOutput').text($(this).val());
    });

    // -------- Part 4: To-Do List --------
    let tasks = [];
    function renderTasks() {
        $('#taskList').empty();
        tasks.forEach((task, index) => {
            $('#taskList').append(`
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span class="${task.completed ? 'completed' : ''}" data-index="${index}">${task.text}</span>
                            <button class="btn btn-danger btn-sm delete-btn" data-index="${index}">Delete</button>
                        </li>
                    `);
        });
    }

    function toggleComplete(index) {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    }

    $('#taskList').on('click', 'span', function () {
        const idx = $(this).data('index');
        toggleComplete(idx);
    });

    $('#taskList').on('click', '.delete-btn', function () {
        const idx = $(this).data('index');
        tasks.splice(idx, 1);
        renderTasks();
    });

    $('#addTask').click(() => {
        const text = $('#taskInput').val().trim();
        if (text) {
            tasks.push({ text, completed: false });
            $('#taskInput').val('');
            renderTasks();
        }
    });

    $('#taskInput').keypress((e) => {
        if (e.key === 'Enter') $('#addTask').click();
    });
});