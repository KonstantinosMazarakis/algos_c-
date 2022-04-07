// Node class
class Node {
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

// Singly Linked List class
class SLL {
    constructor(){
        this.head = null;
    }

    // This is where all of our methods are going to live
    // How do we know if the list is empty or not?
    isEmpty(){
        // If this.head is equal to null it will return true, if it is not equal to null it will return false
        return this.head == null;
    }
    // How do we see the values in a singly linked list?
    // Send all my values to an array and print those values out
    toArray(){
        if(this.isEmpty()){
            console.log("Nothing to print");
        } else {
            var arr = [];
            var runner = this.head;
            while(runner){
                arr.push(runner.data);
                runner = runner.next;
            }
            console.log(arr);
        }
    }
    // Add a node to the list
    // The first value MUST be the head
    insertAtBack(val){
        // Step one: check if the list is empty
        if(this.isEmpty()){
            // This statement triggers if there is nothing at the head
            this.head = new Node(val);
        } else {
            // there is something already at head and we need to add to the back of the list
            // I need to go through my list until the .next points to null
            var runner = this.head;
            // Since we don't know how long we'll run, we need a while loop
            while(runner.next != null){
                // while there is still a node to move down to
                runner = runner.next; // this will move me one node down the list
            }
            // We end on the last node
            runner.next = new Node(val);
        }
    }


//(Remove and return the first node in the list)
    //EXTRA: Average (calculate the average of the list based on integer data)
    
    // Given a value, insert that value as a node at the front of your singly linked list
    insertAtFront(val) {
        if(this.isEmpty()){
            this.head = new Node(val);
        } else {
            let newHead = new Node(val);
            newHead.next = this.head;
            this.head = newHead
        }
    }
    
    // Remove and return the head node from your list (remember this means we need a new head)
    removeHead(){
          this.head = this.head.next
          return 
    }
    
    // EXTRA: calculate the average of all the values in your list (ex: if you list contained the values 3, 5, 2, 7, 3, then your average should come out as 4)
    average(){
        if(this.isEmpty()){
            console.log("Nothing to print");
        } else {
            var count = 0;
            var max = 0;
            var runner = this.head;
            while(runner != null){
                count++;
                max = max + runner.data
                runner = runner.next;
            }
            let average = max / count;
            console.log(average)
        }
    }
    
    // Given a value, return true or false whether that value is in your list
contains(val){
    if(this.isEmpty()){
        console.log("Nothing to print");
    } else {
        var runner = this.head;
        while(runner != null){
            if(runner.data == val){
                return true
            }
            runner = runner.next;
        }
        return false
    }
}


recursiveContains(val,runner = this.head){
    if(this.isEmpty()){
        console.log("Nothing to print");
    }else{
        if(runner.data == val){
        return true
        }else{
            if(runner.next == null){
                return false
            }else{
                return this.recursiveContains(val,runner = runner.next)
            }
        }
    }
}
// If you didn't already come up with the solution recursively, try that now! Or, if you did solve it recursively, how might you do it iteratively? 

// Remove and return the last value in your list
removeBack(){
        var runner = this.head;
        while (runner.next.next != null) {
            runner = runner.next;
        }
        runner.next = null
        console.log(runner.data)
    }
    

    
    secondToLast(){
        var runner = this.head;
        while (runner.next.next != null) {
            runner = runner.next;
        }
        return runner.data
    }

    // Given a value, remove that value from the list and return true or false whether it was removed
    removeVal(val){
        if(this.isEmpty()){
            console.log("Nothing to print");
        }else{
            if(this.head.data == val){
                this.removeHead()
                return true
            }
            var runner = this.head;
            while (runner) {
                if(runner.next.data == val){
                    runner.next = runner.next.next
                    return true
                }
                
                runner = runner.next;
            }
        }
        return false
    }


}

var mySll = new SLL();
// mySll.toArray();
// console.log(mySll.isEmpty());
mySll.insertAtBack(3);
mySll.insertAtBack(4);
mySll.insertAtBack(8);
mySll.insertAtBack(4);
mySll.insertAtBack(9);
mySll.insertAtBack(1);
mySll.toArray();
// console.log(mySll.secondToLast());
console.log(mySll.removeAllVal(4));
mySll.toArray();
var sll2 = new SLL();