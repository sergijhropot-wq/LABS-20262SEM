function processTasksFifo(tasks) {
    
    let q = [];
    let result = [];
    
    
    for (let i = 0; i < tasks.length; i++) {
        q.push(tasks[i]);
    }
    
    
    while (q.length > 0) {
        let currentTask = q.shift(); 
        result.push("Виконано: " + currentTask);
    }
    
    return result;
}


console.log("--- Queue Lab 2: Process Tasks FIFO ---");
let myTasks = ["Завдання A (Завантажити файл)", "Завдання B (Обробити дані)", "Завдання C (Зберегти звіт)"];
console.log("Початковий список задач:", myTasks);
console.log("\nРезультат обробки:");
console.log(processTasksFifo(myTasks));