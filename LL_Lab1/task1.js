class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function createLinkedList(values) {
    
    if (!values || values.length === 0) return null;
    
    
    let head = new Node(values[0]);
    let current = head;
    
    
    for (let i = 1; i < values.length; i++) {
        current.next = new Node(values[i]);
        current = current.next;
    }
    
    return head;
}


console.log("--- Lab 1: Array to Linked List ---");
let arr = [10, 20, 30];
let listHead = createLinkedList(arr);
console.log("Перший вузол (head):", listHead.val); 
console.log("Другий вузол:", listHead.next.val);  