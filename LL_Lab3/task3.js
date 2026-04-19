class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function insertAtHead(head, value) {
    
    let newNode = new Node(value);
    
    
    newNode.next = head;
    
    
    return newNode;
}


console.log("--- Lab 3: Insert at Head ---");
let head = new Node(20, new Node(30)); 
console.log("Стара голова:", head.val); 
let newHead = insertAtHead(head, 10);
console.log("Нова голова після вставки 10:", newHead.val); 
console.log("Наступний після неї:", newHead.next.val); 