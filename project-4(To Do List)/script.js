document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('date-input');
    const priorityInput = document.getElementById('priority-input');
    const tasksContainer = document.getElementById('tasks-container');

    const taskValue = taskInput.value.trim();
    const dateValue = dateInput.value;
    const priorityValue = priorityInput.value;

    if (!taskValue) {
        alert('Please enter a task.');
        return;
    }

    if (!dateValue) {
        alert('Please select a date.');
        return;
    }

    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        ${taskValue} - Due: ${dateValue} - <span class="priority">${priorityValue}</span>
        <button class="complete-btn">Complete</button>
    `;

    // Toggle span visibility on task click
    taskItem.addEventListener('click', function(event) {
        const spanTag = this.querySelector('span');
        if (event.target.className !== 'complete-btn') {
            spanTag.style.display === 'none' ? 'inline' : 'none';
        }
    });

    // Remove task on "Complete" button click
    taskItem.querySelector('.complete-btn').addEventListener('click', function() {
        tasksContainer.removeChild(taskItem);
    });

    tasksContainer.appendChild(taskItem);

    // Update task counters
    const tasksDueToday = document.getElementById('tasks-due-today');
    const overdueTasks = document.getElementById('overdue-tasks');

    if (dateValue === today) {
        tasksDueToday.textContent = parseInt(tasksDueToday.textContent) + 1;
    } else if (dateValue < today) {
        overdueTasks.textContent = parseInt(overdueTasks.textContent) + 1;
    }

    // Clear input fields
    taskInput.value = '';
    dateInput.value = '';
    priorityInput.value = 'Medium'; // Reset priority to default
});
