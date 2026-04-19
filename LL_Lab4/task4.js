class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function deleteNode(head, value) {
    if (head === null) return null; 
    
   
    if (head.val === value) return head.next;
    
    let current = head;
    
    while (current.next !== null) {
        if (current.next.val === value) {
            
            current.next = current.next.next;
            return head;
        }
        current = current.next;
    }
    return head; 
}


console.log("--- Lab 4: Delete Node ---");
let head = new Node(1, new Node(2, new Node(3)));
console.log("До видалення, другий елемент:", head.next.val); 
head = deleteNode(head, 2);
console.log("Після видалення 2, другий елемент:", head.next.val); 