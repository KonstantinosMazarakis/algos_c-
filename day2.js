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


//      fullTree
//        root
//       <-- 25 -->
//    /               \
//   15                 50
// /    \            /       \
// 10     22        35       70
// /  \  /  \      /  \    /    \
// 4 12  18 24   31    44   66   90
//

toArrPreorder(node = this.root, vals = []) {
    if (node) {
      vals.push(node.data);
      this.toArrPreorder(node.left, vals);
      this.toArrPreorder(node.right, vals);
    }
    return vals;
  }

  toArrInorder(node = this.root, vals = []) {
    if (node) {
      this.toArrInorder(node.left, vals);
      vals.push(node.data);
      this.toArrInorder(node.right, vals);
    }
    return vals;
  }

  toArrPostorder(node = this.root, vals = []) {
    if (node) {
      this.toArrPostorder(node.left, vals);
      this.toArrPostorder(node.right, vals);
      vals.push(node.data);
    }
    return vals;
  }


// Size
// Return the total number of nodes in the tree

size(node = this.root){
    if(node == null){
      return 0;
    }
    return 1 + this.size(node.left) + this.size(node.right);
  }

// Height
// Return the number of nodes that make up the longest branch in a tree
height(node = this.root){
    if(!node){
      return 0;
    }
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

// isFull
// Return true or false whether every node has either 0 or 2 children
isFull(){
    // your code here
}


}

var myBST = new BST();
var nodeA = new Node(25)
myBST.root = nodeA;
myBST.root.left = new Node(15);
myBST.root.left.left = new Node(10);
myBST.root.left.right = new Node(22);
myBST.root.left.right.left = new Node(18);
myBST.root.left.right.right = new Node(24);


myBST.root.right = new Node(50);
myBST.root.right.right = new Node(70);
myBST.root.right.right.right = new Node(90);
myBST.root.right.left = new Node(35);





console.log(myBST.size());
console.log(myBST.height())





// var myBST = new BST();
// console.log(myBST.isEmpty());
// var nodeA = new Node(6);
// myBST.root = nodeA;
// myBST.root.left = new Node(4);
// myBST.root.left.left = new Node(3);
// myBST.root.left.left.left = new Node(2);
// myBST.root.left.left.left.left = new Node(1);
// console.log(myBST.isEmpty());
// console.log(myBST.min());
// myBST.root.right = new Node(10);
// myBST.root.right.right = new Node(12);
// myBST.root.right.right.right = new Node(16);
// console.log(myBST.max());
// console.log(myBST.contains(8))
// console.log(myBST.contains(2))


