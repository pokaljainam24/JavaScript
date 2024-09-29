document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const priorityInput = document.getElementById('priority-input');
    const tasksTableBody = document.getElementById('tasks-table').querySelector('tbody');

    const taskValue = taskInput.value.trim();
    const priorityValue = priorityInput.value;

    if (!taskValue) {
        alert('Please enter a task.');
        return;
    }

    // User enter task details show in output screen logics
    const taskRow = document.createElement('tr');
    taskRow.className = 'task-item';
    taskRow.innerHTML = `
        <td>${taskValue}</td>
        <td class="priority">${priorityValue}</td>
        <td><button class="complete-btn">Complete</button></td>
    `;

    // Remove task on button click
    taskRow.querySelector('.complete-btn').addEventListener('click', function() {
        tasksTableBody.removeChild(taskRow);
    });

    tasksTableBody.appendChild(taskRow);

    // Clear input fields
    taskInput.value = '';
    priorityInput.value = ''; // Reset priority to default
});
