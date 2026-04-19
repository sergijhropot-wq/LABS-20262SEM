class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function countNodes(head) {
    let count = 0;
    let current = head; 
    
    
    while (current !== null) {
        count++;
        current = current.next; 
    }
    
    return count;
}


console.log("--- Lab 2: Count Nodes ---");
let head = new Node(10, new Node(20, new Node(30))); 
console.log("Кількість вузлів:", countNodes(head)); 