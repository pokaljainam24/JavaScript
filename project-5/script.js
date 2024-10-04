document.getElementById('add-task-btn').addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');
    const priorityInput = document.getElementById('priority-input');
    const tasksTableBody = document.getElementById('tasks-table').querySelector('tbody');

    const completedCounter = document.getElementById("completed-counter");
    const uncompletedCounter = document.getElementById("uncompleted-counter");

    const taskValue = taskInput.value.trim();
    const priorityValue = priorityInput.value;

    if (!taskValue) {
        alert('Please enter a task.');
        return;
    }

  
    let tasks = [];

    const taskRow = document.createElement('tr');
    taskRow.className = 'task-item';
    taskRow.innerHTML = `
        <td>${taskValue}</td>
        <td class="priority">${priorityValue}</td>
        <td><button class="complete-btn">Complete..✅</button></td>
    `;

    tasks.push({ taskValue, priorityValue });

    tasksTableBody.appendChild(taskRow);

    // button toggle functionality
    const completeButton = taskRow.querySelector('.complete-btn');
    completeButton.addEventListener('click', function () {
        // Toggle "Edit" and "Delete" options
        if (completeButton.textContent.includes('Complete')) {
            completeButton.textContent = 'Edit/Delete';
            completeButton.style.backgroundColor = 'white';

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit ✏️';
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete 🗑️';

            const actionTd = document.createElement('td');
            actionTd.appendChild(editBtn);
            actionTd.appendChild(deleteBtn);

            taskRow.appendChild(actionTd);

            editBtn.addEventListener('click', function () {
                taskInput.value = taskValue;
                priorityInput.value = priorityValue;
                tasksTableBody.removeChild(taskRow);
            });

            deleteBtn.addEventListener('click', function () {
                const taskIndex = tasks.indexOf({ taskValue, priorityValue });
                if (taskIndex !== -1) {
                    tasks.splice(taskIndex, 1); 
                }
                tasksTableBody.removeChild(taskRow);
            });

        } else {
            completeButton.textContent = 'Complete..✅';
            completeButton.style.backgroundColor = '';
            taskRow.querySelector('td:last-child').remove();
        }
    });

    
    taskInput.value = ''; // Clear input fields
    priorityInput.value = 'Medium'; // Reset priority to default
});
