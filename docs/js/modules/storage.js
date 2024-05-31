// Сохранение задач в локальное хранилище
export const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Загрузка задач из локального хранилища
export const loadTasks = () => {
    let savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
}