"use strict";
/*
    Домашнее задание по JavaScript.
    Написать класс, реализующий бинарное дерево.
    Предусмотреть методы поиска, вставки, удаления, изменения элемента и определения высоты дерева.
*/
class MyNode {
    constructor(value) {
        this._value = value;
        this._left = null;
        this._right = null;
    }
    set value(val) {
        this._value = val;
    }
    set left(val) {
        this._left = val;
    }
    set right(val) {
        this._right = val;
    }
    get value() {
        return this._value;
    }
    get left() {
        return this._left;
    }
    get right() {
        return this._right;
    }
}
class MyBinaryTree {
    constructor() {
        this._root = null;
    }
    add(value) {
        const newNode = new MyNode(value);
        if (!this._root) {
            this._root = newNode;
            return newNode;
        }
        let curNode = this._root;
        while (curNode) {
            if (newNode.value < curNode.value) {
                if (!curNode.left) {
                    curNode.left = newNode;
                    return newNode;
                }
                else {
                    curNode = curNode.left;
                }
            }
            else {
                if (!curNode.right) {
                    curNode.right = newNode;
                    return newNode;
                }
                else {
                    curNode = curNode.right;
                }
            }
        }
        return newNode;
    }
    preOrder(node, callback) {
        if (!node) {
            return;
        }
        if (callback) {
            callback(node);
        }
        this.preOrder(node.left, callback);
        this.preOrder(node.right, callback);
    }
    inOrder(node, callback) {
        if (!node) {
            return;
        }
        this.inOrder(node.left, callback);
        if (callback) {
            callback(node);
        }
        this.inOrder(node.right, callback);
    }
    postOrder(node, callback) {
        if (!node) {
            return;
        }
        this.postOrder(node.left, callback);
        this.postOrder(node.right, callback);
        if (callback) {
            callback(node);
        }
    }
    traverseDFS(callback, method) {
        if (method === 'preOrder') {
            return this.preOrder(this._root, callback);
        }
        if (method === 'inOrder') {
            return this.inOrder(this._root, callback);
        }
        return this.postOrder(this._root, callback);
    }
    traverseBFS() {
        const queue = [this._root];
        console.log(queue);
    }
}
const myTree = new MyBinaryTree();
myTree.add(5);
myTree.add(6);
myTree.add(4);
myTree.add(8);
myTree.add(7);
myTree.add(3);
myTree.add(2);
myTree.add(4);
myTree.add(1);
//console.log(myTree);
/*
myTree.traverseDFS((node: MyNode) => { console.log(node.value) },
    'postOrder'
);
*/
myTree.traverseBFS();
