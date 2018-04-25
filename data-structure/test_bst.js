"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bst_1 = require("./bst");
var lib = require("./util");
function inorderTest() {
    var nums = new bst_1.BST();
    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);
    lib.log('Inorder: ');
    nums.inOrder(nums.root);
}
lib.doTest(inorderTest);
function preorderTest() {
    var nums = new bst_1.BST();
    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);
    lib.log('Preorder: ');
    nums.preOrder(nums.root);
}
lib.doTest(preorderTest);
function postorderTest() {
    var nums = new bst_1.BST();
    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);
    lib.log('Postorder: ');
    nums.postOrder(nums.root);
}
lib.doTest(postorderTest);
function minmaxTest() {
    var nums = new bst_1.BST();
    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);
    lib.assertEqual(nums.min, 3);
    lib.assertEqual(nums.max, 99);
}
lib.doTest(minmaxTest);
function findTest() {
    var nums = new bst_1.BST();
    nums.insert(233);
    nums.insert(666);
    nums.insert(4396);
    lib.assertEqual(nums.find(4396) !== null, true);
    lib.assertNotEqual(nums.find(4598) !== null, true);
}
lib.doTest(findTest);
function removeTest() {
    var nums = new bst_1.BST();
    nums.insert(1);
    nums.insert(2);
    nums.insert(3);
    nums.inOrder(nums.root);
    nums.remove(1);
    nums.inOrder(nums.root);
}
lib.doTest(removeTest);
function countTest() {
    var nums = new bst_1.BST();
    nums.insert(1);
    nums.insert(2);
    nums.insert(3);
    lib.assertEqual(nums.numberOfNode, 3);
    lib.assertEqual(nums.numberOfSlide, 2);
}
lib.doTest(countTest);
