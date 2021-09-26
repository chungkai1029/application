function linkedListStack() {
    // Keep track of list and size
    let length = 0;
    let head = null;
    //let current;
    // Node
    let Node = function (args) {
        this.element = args;
        this.next = null
    }
    // Push data into stack
    this.push = function (args) {
        // Create new node
        let node = new Node(args);
        let current;
        // Add new node at the top
        current = head;
        node.next = current
        head = node;
        length++;
    }
    // Pop data from stack
    this.pop = function () {
        let current = head;
        // If current element exist, remove it and make the next element as the first one.
        if (current) {
            let args = current.element;
            current = current.next;
            head = current;
            length--;
            console.log(args);
        } else {
            console.log(null);
        }
    }
    this.size = function () {
        console.log(length);
    }
}

const myStack = new linkedListStack()
myStack.size();
myStack.pop() // null
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.pop() // 3
myStack.size() // 2
