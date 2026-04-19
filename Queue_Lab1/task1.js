function execute(program) {
    
    let q = []; // 
    
    for (let i = 0; i < program.length; i++) {
        let command = program[i];
        
        if (command.startsWith("push")) {
            
            let val = parseInt(command.split(" ")[1]);
            q.push(val); 
        } 
        else if (command === "pop") {
            if (q.length === 0) {
                console.log("Queue is empty!");
            } else {
                q.shift(); 
            }
        } 
        else if (command === "peek") {
            if (q.length === 0) {
                console.log("Queue is empty!");
            } else {
                console.log(q[0]); 
            }
        }
    }
}


console.log("--- Queue Lab 1: Execute Program ---");
let commands = ["push 3", "push 7", "peek", "pop", "push 5"];
console.log("Виконуємо команди:", commands);
console.log("Результат (залишок у черзі):", execute(commands)); 