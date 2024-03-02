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
        } // while
        return newNode;
    }
}
const myTree = new MyBinaryTree();
myTree.add(5);
myTree.add(10);
myTree.add(6);
myTree.add(4);
console.log(myTree);
