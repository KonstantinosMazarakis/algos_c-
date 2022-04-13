// Node
class Node {
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null; 
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    // all our methods go here
    isEmpty(){
        // This returns true if root is empty which means there is nothing in the tree
        // It returns false if root is NOT null which means something is there
        return this.root == null;
    }

    // How do I find the smallest value in my tree?
    // The smallest value is going to be at the furthest left location
    min(){
        // I need to start at the top of the tree (root)
        // Then I need to go as far left as possible
        // until the node I am on points to null on the left
        var runner = this.root;
        // we need a while loop to take us down the tree
        // Because we don't know how far down the branch goes
        while(runner.left != null){
            runner = runner.left;
        }
        return runner.data;
    }

    // How do I find the largest value in my tree?
    // The largest value is going to be at the furthest right location
    max(){
        // Start at the top of the tree
        var runner = this.root;
        while(runner.right != null){
            runner = runner.right;
        }
        return runner.data;
    }
    
    // Contains
    // Given a value, return true or false whether that value is contained in the tree
    contains(val){
        if (this.root == null){
            console.log("list is empty")
        }
        let runner = this.root
    while(runner.left != null){
        if(runner.data == val){
            return true
        }
        runner = runner.left
    }
    runner = this.root
    while(runner.right != null){
        if(runner.data == val){
            return true
        }
        runner = runner.right
    }
    return false
}

// Insert and InsertRecursive
// Given a value, insert it into the correct location in the binary search tree
insert(val){
    let newNode = new Node(val);
    if (this.isEmpty()){
        this.root = newNode;
        return this;
    }
    let runner = this.root;
    while (runner){
        console.log(runner.data);
        if(val < runner.data){
            if (runner.left === null){
                runner.left = newNode;
                
                return this;
            }
            else {
                runner = runner.left;
            }
        }
        else if (val > runner.data){
            if (runner.right === null){
                runner.right = newNode;
                return this;
            }
            else {
                runner = runner.right;
            }
        }
    }
}




// Range
// Calculate the range of the values in your tree by subtracting the max value from the min value
range() {
    return this.max() - this.min();
}

}

var myBST = new BST();
console.log(myBST.isEmpty());
var nodeA = new Node(6);
myBST.root = nodeA;
myBST.root.left = new Node(4);
myBST.root.left.left = new Node(3);
myBST.root.left.left.left = new Node(2);
myBST.root.left.left.left.left = new Node(1);
console.log(myBST.isEmpty());
console.log(myBST.min());
myBST.root.right = new Node(10);
myBST.root.right.right = new Node(12);
myBST.root.right.right.right = new Node(16);
console.log(myBST.max());
console.log(myBST.contains(8))
console.log(myBST.contains(2))


