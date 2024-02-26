/*
    Домашнее задание по JavaScript.
    Написать класс, реализующий двусвязный список.
    Предусмотреть методы поиска, вставки, удаления, изменения элемента и определения длины списка.
*/

class MyItem {
    constructor(value) {
        this._value = value;
        this._next = null;
        this._prev = null;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    set next(node) {
        this._next = node;
    }
    set prev(node) {
        this._prev = node;
    }
    get next() {
        return this._next;
    }
    get prev() {
        return this._prev;
    }
}

class MyList {
    constructor() {
        this._start = null;
        this._end = null;
        this._count = 0;
    }

    set start(item) {
        this._start = item;
    }
    set end(item) {
        this._end = item;
    }
    get start() {
        return this._start;
    }
    get end() {
        return this._end;
    }
    get count() {
        return this._count;
    }

    print() {
        if (!this._start) {
            console.log('empty!');
        }
        else {
            let curr = this._start;
            while (curr) {
                console.log(curr && curr.value);
                curr = curr.next;
            }
        }
    }

    search(value) {
        if (!this._start) {
            return null;
        }
        let curr = this._start;
        while (curr) {
            if (curr.value === value) {
                return curr;
            }
            curr = curr.next;
        }
        return null;
    }

    append(value) {
        const item = new MyItem(value);
        if (!this._start) {
            this._start = item;
        }
        if (this._end) {
            this._end.next = item;
        }
        item.prev = this._end;
        this._end = item;
        this._count++;
        return this;
    }

    prepend(value) {
        const item = new MyItem(value);
        if (this._start) {
            item.next = this._start;
        }
        this._start = item;
        if (!this._end) {
            this._end = item;
        }
        this._count++;
        return this;
    }

    insertAfter(after, value) {
        const found = this.search(after);
        if (!found) {
            return null;
        }
        const item = new MyItem(value);
        if (!found.next) {
            console.log('end!!!');
            this._end = item;
        }
        item.next = found.next;
        item.prev = found;
        found.next = item;
        this._count++;
        return this;
    }

    change(value, newValue) {
        const found = this.search(value);
        if (!found) {
            return null;
        }
        found.value = newValue;
        return found;
    }
}

const item = new MyItem('str1');
console.log('my first item:', item && item.value);

const list = new MyList();
list.append("str2");
list.prepend("str1");
console.log('my first list (count item %d):', list && list.count);
list.print();

let found = list.search('str2');
console.log('found item -> %s.', found && found.value);

list.insertAfter('str1', 'str3');
found = list.search('str3');
console.log('found insert item -> %s, changed list:', found && found.value);
list.print();

list.change('str3', 'str3fix');
found = list.search('str3fix');
console.log('found changed item -> %s, changed list:', found && found.value);
list.print();
