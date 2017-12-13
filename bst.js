"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib = require("./util");
var BNode = /** @class */ (function () {
    function BNode(data, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.data = data;
        this.left = left;
        this.right = right;
    }
    return BNode;
}());
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.insert = function (data) {
        var n = new BNode(data);
        if (this.root === null) {
            this.root = n;
        }
        else {
            var current = this.root;
            var parent_1;
            while (true) {
                parent_1 = current;
                if (data < current.data) {
                    current = current.left;
                    if (current === null) {
                        parent_1.left = n;
                        break;
                    }
                }
                else {
                    current = current.right;
                    if (current === null) {
                        parent_1.right = n;
                        break;
                    }
                }
            }
        }
    };
    BST.prototype.inOrder = function (node) {
        if (node !== null) {
            if (node.left) {
                this.inOrder(node.left);
            }
            lib.log(node.data + ' ');
            if (node.right) {
                this.inOrder(node.right);
            }
        }
    };
    BST.prototype.preOrder = function (node) {
        if (node !== null) {
            lib.log(node.data);
            if (node.left) {
                this.preOrder(node.left);
            }
            if (node.right) {
                this.preOrder(node.right);
            }
        }
    };
    BST.prototype.postOrder = function (node) {
        if (node !== null) {
            if (node.left) {
                this.postOrder(node.left);
            }
            if (node.right) {
                this.postOrder(node.right);
            }
            lib.log(node.data);
        }
    };
    Object.defineProperty(BST.prototype, "min", {
        get: function () {
            if (this.root === null) {
                return null;
            }
            else {
                var current = this.root;
                while (current.left !== null) {
                    current = current.left;
                }
                return current.data;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BST.prototype, "max", {
        get: function () {
            if (this.root === null) {
                return null;
            }
            else {
                var current = this.root;
                while (current.right !== null) {
                    current = current.right;
                }
                return current.data;
            }
        },
        enumerable: true,
        configurable: true
    });
    BST.prototype.find = function (data) {
        if (this.root === null) {
            return null;
        }
        else {
            var current = this.root;
            while (current !== null) {
                if (current.data === data) {
                    return current;
                }
                else if (current.data > data) {
                    current = current.left;
                }
                else {
                    current = current.right;
                }
            }
            return null;
        }
    };
    BST.prototype.remove = function (data) {
        return this.badRemove(data);
    };
    // 删掉data数值节点，新建另外一棵树。如果真的用这个内存使用应该会相当可怕……
    BST.prototype.badRemove = function (data) {
        var nodeValues = [];
        if (this.root === null) {
            return false;
        }
        else {
            iter(this.root);
            var pos = nodeValues.indexOf(data);
            if (pos < 0) {
                return false;
            }
            else {
                nodeValues.splice(pos, 1);
                this.root = null;
                for (var _i = 0, nodeValues_1 = nodeValues; _i < nodeValues_1.length; _i++) {
                    var value = nodeValues_1[_i];
                    this.insert(value);
                }
                return true;
            }
        }
        function iter(node) {
            if (node !== null) {
                nodeValues.push(node.data);
                if (node.left) {
                    iter(node.left);
                }
                if (node.right) {
                    iter(node.right);
                }
            }
        }
    };
    BST.prototype.iterNodeNumbers = function (node, callback) {
        if (node !== null) {
            callback();
            if (node.left) {
                this.iterNodeNumbers(node.left, callback);
            }
            if (node.right) {
                this.iterNodeNumbers(node.right, callback);
            }
        }
    };
    BST.prototype.iterSlideNumbers = function (node, callback) {
        if (node !== null) {
            if (node.left) {
                callback();
                this.iterSlideNumbers(node.left, callback);
            }
            if (node.right) {
                callback();
                this.iterSlideNumbers(node.right, callback);
            }
        }
    };
    Object.defineProperty(BST.prototype, "numberOfNode", {
        get: function () {
            var n = 0;
            this.iterNodeNumbers(this.root, function () {
                n++;
            });
            return n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BST.prototype, "numberOfSlide", {
        get: function () {
            var n = 0;
            this.iterSlideNumbers(this.root, function () {
                n++;
            });
            return n;
        },
        enumerable: true,
        configurable: true
    });
    return BST;
}());
exports.BST = BST;
