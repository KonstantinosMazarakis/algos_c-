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



// Depth First Search Preorder
// Use your skills with BSTs to return an array that contains all the values in the tree using the concept of depth first search preorder. 
// Preorder: [root][left][right] -> for each node of this tree, we will read the data of that node, then visit the left subtree and then the right subtree
// Should get back [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]

// Depth First Search Inorder
// Now use your skills to return an array that contains all the values using DFS Inorder. 
// Inorder: [left][root][right] -> for each node, visit the left subtree, then read the data of the node, then visit the right subtree
// Should get back [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]

// Depth First Search Postorder
// Finally, return an array that contains all the values using DFS Postorder.
// Postorder: [left][right][root] -> visit left subtree, right subtree, then visit and read the data of the node
// Should get back [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]



}

var myBST = new BST();
var nodeA = new Node(25)
myBST.root = nodeA;
myBST.root.left = new Node(15);
myBST.root.left.left = new Node(10);
myBST.root.left.left.left = new Node(4);
myBST.root.left.right = new Node(22);
myBST.root.left.right.left = new Node(18);
myBST.root.left.right.right = new Node(24);


myBST.root.right = new Node(50);
myBST.root.right.right = new Node(70);
myBST.root.right.right.right = new Node(90);
myBST.root.right.left = new Node(35);
myBST.root.right.left.left = new Node(31);
myBST.root.right.left.right = new Node(44);
myBST.root.right.right.left = new Node(66);









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


