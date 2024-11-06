//Height and depth of a node in binary tree
var height = -1;

// Structure of a Binary Tree Node
class StudyNode {
    constructor() {
        this.data = 0;
        this.left = null;
        this.right = null;
    }
    data: number;
    left: any;
    right: any;
}

// Utility function to create
// a new Binary Tree Node
function newNode(item) {
    var temp = new StudyNode();
    temp.data = item;
    temp.left = temp.right = null;
    return temp;
}

// Function to find the depth of
// a given node in a Binary Tree
function findDepth(root, x) {
    // Base case
    if (root == null) return -1;

    // Initialize distance as -1
    var dist = -1;

    // Check if x is current node=
    if (
        root.data == x ||
        // Otherwise, check if x is
        // present in the left subtree
        (dist = findDepth(root.left, x)) >= 0 ||
        // Otherwise, check if x is
        // present in the right subtree
        (dist = findDepth(root.right, x)) >= 0
    )
        // Return depth of the node
        return dist + 1;

    return dist;
}

// Function to find the depth of a
// Binary Tree using depth-first (DFS) approach.
function findTreeDepth(root) {
    // Base case
    if (root == null) return 0;

    // Initialize distance as 0
    var dist = 0;

    const leftDepth = findTreeDepth(root.left);
    const rightDepth = findTreeDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

// Helper function to find the height
// of a given node in the binary tree
function findHeightUtil(root, x) {
    // Base Case
    if (root == null) {
        return -1;
    }

    // Store the maximum height of
    // the left and right subtree
    var leftHeight = findHeightUtil(root.left, x);

    var rightHeight = findHeightUtil(root.right, x);

    // Update height of the current node
    var ans = Math.max(leftHeight, rightHeight) + 1;

    // If current node is the required node
    if (root.data == x) height = ans;

    return ans;
}

// Function to find the height of
// a given node in a Binary Tree
function findHeight(root, x) {
    // Stores height of the Tree
    findHeightUtil(root, x);

    // Return the height
    return height;
}

// Driver Code
// Binary Tree Formation
//       5
//     /   \
//   10     15
//  /  \    / \
// 20  25  30  35
//       \
//        45
var root = newNode(5);
root.left = newNode(10);
root.right = newNode(15);
root.left.left = newNode(20);
root.left.right = newNode(25);
root.left.right.right = newNode(45);
root.right.left = newNode(30);
root.right.right = newNode(35);
var k = 25;
// Function call to find the
// depth of a given node
console.log(`Depth: ${findDepth(root, k)}`); // 2
// Function call to find the
// height of a given node
console.log(`Height: ${findHeight(root, k)}`); // 1
// Function call to find the
// depth of the tree
console.log(`Tree Depth: ${findTreeDepth(root)}`); // 4?




// Recursive javascript program for level
// order traversal of Binary Tree


// Function to print level order traversal of tree
function printLevelOrder(root) {
    var h = bfsHeight(root);
    var i;
    for (i = 1; i <= h; i++)
        printCurrentLevel(root, i);
}

// Print nodes at the current level
function printCurrentLevel(root, level) {
    if (root == null)
        return;
    if (level == 1)
        console.log(root.data + " ");
    else if (level > 1) {
        printCurrentLevel(root.left, level - 1);
        printCurrentLevel(root.right, level - 1);
    }
}

// Compute the "height" of a tree
function bfsHeight(root) {
    if (root == null)
        return 0;
    else {
        var lheight = bfsHeight(root.left);
        var rheight = bfsHeight(root.right);
        if (lheight > rheight)
            return (lheight + 1);
        else
            return (rheight + 1);
    }
}

let bfsRoot = newNode(1);
bfsRoot.left = newNode(2);
bfsRoot.right = newNode(3);
bfsRoot.left.left = newNode(4);
bfsRoot.left.right = newNode(5);
printLevelOrder(bfsRoot);

