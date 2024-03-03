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

    get height(): number {
        let leftHeight = this.left ? this.left.height + 1 : 0;
        let rightHeight = this.right ? this.right.height + 1 : 0;
        return Math.max(leftHeight, rightHeight);
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

    addItem(newItem: number): MyNode {
        const newNode = new MyNode(newItem);
        if (this._root === null) {
            return this._root = newNode;
        }
        return this._addNode(this._root, newNode);
    }
    private _addNode(rootNode: MyNode, newNode: MyNode): MyNode {
        let retVal: MyNode;
        if (newNode.value < rootNode.value) {
            if (rootNode.left === null) {
                retVal = rootNode.left = newNode;
            }
            else {
                retVal = this._addNode(rootNode.left, newNode);
            }
        }
        else {
            if (rootNode.right === null) {
                retVal = rootNode.right = newNode;
            }
            else {
                retVal = this._addNode(rootNode.right, newNode);
            }
        }
        return retVal;
    }

    preOrder(node: MyNode | null, callback: any) {
        if (!node) {
            return;
        }
        if (callback) {
            callback(node);
        }
        this.preOrder(node.left, callback);
        this.preOrder(node.right, callback);
    }
    inOrder(node: MyNode | null, callback: any) {
        if (!node) {
            return;
        }
        this.inOrder(node.left, callback);
        if (callback) {
            callback(node);
        }
        this.inOrder(node.right, callback);
    }
    postOrder(node: MyNode | null, callback: any) {
        if (!node) {
            return;
        }
        this.postOrder(node.left, callback);
        this.postOrder(node.right, callback);
        if (callback) {
            callback(node);
        }
    }
    traverseDFS(callback: any, method: string) {
        if (method === 'preOrder') {
            return this.preOrder(this._root, callback);
        }
        if (method === 'inOrder') {
            return this.inOrder(this._root, callback);
        }
        return this.postOrder(this._root, callback);
    }

    searchItem(itemValue: number): MyNode | null {
        return this._searchNode(this._root, itemValue);
    }

    private _searchNode(node: MyNode | null, itemValue: number): MyNode | null {
        if (node === null) {
            return null;
        }
        if (node.value === itemValue) {
            return node;
        }
        if (itemValue < node.value) {
            return this._searchNode(node.left, itemValue);
        }
        else {
            return this._searchNode(node.right, itemValue);
        }
    }
    changeNode(value: number, newValue: number): MyNode | null {
        const found = this.searchItem(value);
        if (found) {
            found.value = newValue;
        }
        return found;
    }

    deleteItem(itemValue: number): MyNode | null {
        if (this._root === null) {
            return null;
        }
        return this._root = this._deleteNode(this._root, itemValue);
    }

    private _deleteNode(currentNode: MyNode, itemValue: number): any {
        // если нашли нужный элемент, начинаем процедуру удаления
        if (currentNode.value === itemValue) {
            // обработка самого простого случая, вместо узла возвращается null
            if (currentNode.left === null && currentNode.right === null) {
                return null;
            }

            // обработка двух случаев, с только одним из поддеревьев
            if (currentNode.left === null) {
                return currentNode.right;
            }

            if (currentNode.right === null) {
                return currentNode.left;
            }

            // если у ноды есть оба потомка
            const minNodeInRightSubtree = this._findMinElementRight(currentNode.right);
            // заменили текущий элемент минимальным из правого поддерева
            currentNode.value = minNodeInRightSubtree.value;

            // ищем в правом поддереве минимальный элемент,
            // значение которого уже вставлено на место текущего
            currentNode.right = this._deleteNode(currentNode.right, minNodeInRightSubtree.value);
            return currentNode;
        }

        // попадаем сюда, если элемент не был найден,
        // просто проваливаемся в дерево глубже и глубже

        // производится рекурсивный вызов этой же функции,
        // при этом если элемент не будет найден,
        // то алгоритм просто будет возвращать существующую ссылку на поддерево,
        // которая присвоится в ту же позицию
        if (itemValue < currentNode.value) {
            if (currentNode.left === null) {
                console.warn('Item not found!');
                return currentNode;
            }

            // проваливаемся в левое поддерево,
            // после рекурсивной отработки функции _deleteNode
            // будет возвращен текущий элемент,
            // который в предыдущем вызове будет присвоен
            currentNode.left = this._deleteNode(currentNode.left, itemValue);

            // присваивание на рекурсивный уровень выше,
            // может быть как в левое поддерево,так и в правое,
            // на текущем уровне мы не знаем какое поддерево обрабатываем
            return currentNode;
        }

        // аналогичная обработка для правого поддерева
        if (itemValue > currentNode.value) {
            if (currentNode.right === null) {
                console.warn('Item not found!');
                return currentNode;
            }

            currentNode.right = this._deleteNode(currentNode.right, itemValue);
            return currentNode;
        }
    }

    private _findMinElementRight(node: MyNode): MyNode {
        if (node.left === null) {
            return node;
        }
        return this._findMinElementRight(node.left);
    }
    get hight (): number {
        if (this._root === null) {
            return 0;
        }
        return this._root.height;
    }
}

const myTree = new MyBinaryTree();
//--- insert item
myTree.addItem(5);
myTree.addItem(4);
myTree.addItem(7);
myTree.addItem(6);
myTree.addItem(8);
myTree.addItem(4);
myTree.addItem(3);
myTree.addItem(2);
console.log(myTree);
console.log('out all item tree -> depth-first search (DFS)');
myTree.traverseDFS( (node: MyNode) => { console.log(node.value); }, 'preOrder');

console.log('hight tree:', myTree.hight);

console.log('search item 7:', myTree.searchItem(7));

console.log('delete item 7');
myTree.deleteItem(7);
console.log('search item 7:', myTree.searchItem(7));
console.log('hight tree:', myTree.hight);
console.log(myTree);
myTree.traverseDFS( (node: MyNode) => { console.log(node.value); }, 'preOrder');
