const taskList = document.getElementById('taskList');

function addTask() {
    const taskTitle = document.getElementById('taskTitle').value;
    const taskStartDate = document.getElementById('taskStartDate').value;
    const taskEndDate = document.getElementById('taskEndDate').value;

    if (taskTitle === '' || taskStartDate === '' || taskEndDate === '') {
        alert('Please enter all task details.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskTitle} - <small>Start: ${taskStartDate} to End: ${taskEndDate}</small></span>
        <div>
            <button class="complete" onclick="completeTask(this)">Complete</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    taskList.appendChild(li);

    document.getElementById('taskTitle').value = '';
    document.getElementById('taskStartDate').value = '';
    document.getElementById('taskEndDate').value = '';
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    taskList.removeChild(li);
}

function completeTask(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle('completed');
}

function filterTasks(status) {
    const tasks = taskList.getElementsByTagName('li');
    for (const task of tasks) {
        switch (status) {
            case 'completed':
                task.style.display = task.classList.contains('completed') ? '' : 'none';
                break;
            case 'pending':
                task.style.display = task.classList.contains('completed')