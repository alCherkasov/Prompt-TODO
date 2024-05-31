import { addTask, removeTask, transTask, formatTasks, getTasks } from './modules/taskManager.js';

let selectAction = () => {
    let userInput = +prompt(`Выберите действие (введите номер): 
    
0. Выйти из программы; 
1. Добавить задачу; 
2. Удалить задачу; 
3. Повысить приоритет задачи; 
4. Показать все задачи.
    `);

    if(isNaN(userInput)) {
        alert('Ошибка! Недопустимое значение!');
        selectAction();
        return;
    }

    switch (userInput){
        case 0:
            alert('Выход из программы...');
            break;
        case 1:
            let taskDescription = prompt('Добавьте задачу');
            if(taskDescription === null || taskDescription.trim() === '') {
                selectAction();
                return;
            }
            addTask(taskDescription);
            selectAction();
            break;
        case 2:
            let taskToRemove = +prompt(`Какую задачу вы хотите удалить?\n${formatTasks()}`);
            if(taskToRemove === 0) {
                selectAction();
                return;
            }
            if(isNaN(taskToRemove) || taskToRemove < 1 || taskToRemove > getTasks().length) {
                alert('Такой задачи не существует! Попробуйте ещё раз');
                selectAction();
                return;
            }
            removeTask(taskToRemove);
            selectAction();
            break;
        case 3:
            let taskToTrans = +prompt(`Какую задачу вы хотите переместить в начало списка?\n${formatTasks()}`);
            if(taskToTrans === 0) {
                selectAction();
                return;
            }
            if(isNaN(taskToTrans) || taskToTrans < 1 || taskToTrans > getTasks().length) {
                alert('Такой задачи не существует! Попробуйте ещё раз');
                selectAction();
                return;
            }
            transTask(taskToTrans);
            selectAction();
            break;
        case 4:
            alert(formatTasks());
            selectAction();
            break;
        case 5:
            for (let i = 0; i < 5; i++) {
                addTask(`Автоматическая задача ${i+1}`);
            }
            alert('Пять задач были добавлены автоматически!');
            selectAction();
            break;
        default:
            alert('Недоступная задача! Попробуйте ещё раз');
            selectAction();
    }
}

selectAction();