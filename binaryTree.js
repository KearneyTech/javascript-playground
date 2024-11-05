//Height and depth of a node in binary tree
var height = -1;
// Structure of a Binary Tree Node
var StudyNode = /** @class */ (function () {
    function StudyNode() {
        this.data = 0;
        this.left = null;
        this.right = null;
    }
    return StudyNode;
}());
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
    if (root == null)
        return -1;
    // Initialize distance as -1
    var dist = -1;
    // Check if x is current node=
    if (root.data == x ||
        // Otherwise, check if x is
        // present in the left subtree
        (dist = findDepth(root.left, x)) >= 0 ||
        // Otherwise, check if x is
        // present in the right subtree
        (dist = findDepth(root.right, x)) >= 0)
        // Return depth of the node
        return dist + 1;
    return dist;
}
// Function to find the depth of a
// Binary Tree using depth-first (DFS) approach.
function findTreeDepth(root) {
    // Base case
    if (root == null)
        return 0;
    // Initialize distance as 0
    var dist = 0;
    var leftDepth = findTreeDepth(root.left);
    var rightDepth = findTreeDepth(root.right);
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
    if (root.data == x)
        height = ans;
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
console.log("Depth: " + findDepth(root, k)); // 2
// Function call to find the
// height of a given node
console.log("Height: " + findHeight(root, k)); // 1
// Function call to find the
// depth of the tree
console.log("Tree Depth: " + findTreeDepth(root)); // 4?
