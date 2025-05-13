function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>
    `;
    taskList.appendChild(li);
    
    taskInput.value = '';
}

document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});