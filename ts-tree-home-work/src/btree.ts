/*
    Домашнее задание по JavaScript.
    Написать класс, реализующий бинарное дерево.
    Предусмотреть методы поиска, вставки, удаления, изменения элемента и определения высоты дерева.
*/

class MyNode {
    private _value: number;
    private _left: MyNode | null;
    private _right: MyNode | null;

    constructor(value: number) {
        this._value = value;
        this._left = null;
        this._right = null;
    }
    set value(val: number) {
        this._value = val;
    }
    set left(val: MyNode) {
        this._left = val;
    }
    set right(val: MyNode) {
        this._right = val;
    }
    get value(): number {
        return this._value;
    }
    get left(): MyNode | null {
        return this._left;
    }
    get right(): MyNode | null {
        return this._right;
    }
}

class MyBinaryTree {
    private _root: MyNode | null;

    constructor() {
        this._root = null;
    }

    add(value: number): MyNode | null {
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
}

const myTree = new MyBinaryTree();
myTree.add(5);
myTree.add(10);
myTree.add(6);
myTree.add(4);
console.log(myTree);
