// Импорт функций из storage.js
import { saveTasks, loadTasks } from './storage.js';

// Загрузка задач из локального хранилища при инициализации
const tasks = loadTasks();

// Добавление задачи
export const addTask = (taskDescription) => {
    tasks.push(taskDescription.trim());
    saveTasks(tasks);
    alert('Задача добавлена!');
}

// Удаление задачи
export const removeTask = (taskNumber) => {
    tasks.splice(taskNumber - 1, 1);
    saveTasks(tasks);
    alert('Задача удалена!');
}

// Перемещение задачи в начало списка
export const transTask = (taskNumber) => {
    let movingTask = tasks.splice(taskNumber - 1, 1)[0];
    tasks.unshift(movingTask);
    saveTasks(tasks);
    alert('Готово!');
}

// Форматирование списка задач для отображения
export const formatTasks = () => {
    if(tasks.length === 0) {
        return 'Нет задач';
    }
    return tasks.map((task, index) => `${index + 1}. ${task}`).join('\n');
}

// Получение списка задач
export const getTasks = () => tasks;

