class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function searchLinkedList(head, target) {
    let current = head;
    
    
    while (current !== null) {
        if (current.val === target) return true; 
        current = current.next;
    }
    
    return false; 
}


console.log("--- Lab 5: Search Linked List ---");
let head = new Node(10, new Node(20, new Node(30)));
console.log("Чи є 20 у списку?", searchLinkedList(head, 20)); 
console.log("Чи є 99 у списку?", searchLinkedList(head, 99));