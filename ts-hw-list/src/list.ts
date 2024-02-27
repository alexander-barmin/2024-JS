/*
    Домашнее задание по JavaScript.
    Написать класс, реализующий двусвязный список.
    Предусмотреть методы поиска, вставки, удаления, изменения элемента и определения длины списка.
*/

class MyItem {
    private _next: MyItem | null = null;
    private _prev: MyItem | null = null;
    private _value: string | null;

    constructor(value : string | null) {
        this._value = value;
    }
    get value() : string | null {
        return this._value;
    }
    set value(value : string | null) {
        this._value = value;
    }
    set next(item : MyItem | null) {
        this._next = item;
    }
    set prev(item : MyItem | null) {
        this._prev = item;
    }
    get next() : MyItem | null {
        return this._next;
    }
    get prev() : MyItem | null {
        return this._prev;
    }
}

class MyList {
    private _start: MyItem | null = null;
    private _end: MyItem | null = null;
    private _count: number = 0;
    constructor() { }

    set start(item: MyItem | null) {
        this._start = item;
    }
    set end(item: MyItem | null) {
        this._end = item;
    }
    get start(): MyItem | null {
        return this._start;
    }
    get end(): MyItem | null {
        return this._end;
    }
    get count(): number {
        return this._count;
    }

    print() {
        if (!this._start) {
            console.log('empty!');
        }
        else {
            let curr: MyItem | null = this._start;
            while (curr) {
                console.log(curr && curr.value);
                curr = curr.next;
            }
        }
    }

    search(value: string): MyItem | null {
        if (!this._start) {
            return null;
        }
        let curr: MyItem | null = this._start;
        while (curr) {
            if (curr.value === value) {
                return curr;
            }
            curr = curr.next;
        }
        return null;
    }

    append(value: string): MyItem | null {
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
        return item;
    }

    prepend(value: string): MyItem | null {
        const item = new MyItem(value);
        if (this._start) {
            item.next = this._start;
        }
        this._start = item;
        if (!this._end) {
            this._end = item;
        }
        this._count++;
        return item;
    }

    insertAfter(after: string, value: string): MyItem | null {
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
        return item;
    }

    change(value: string, newValue: string): MyItem | null {
        const found = this.search(value);
        if (!found) {
            return null;
        }
        found.value = newValue;
        return found;
    }

    delete(value: string): MyItem | null {
        const found = this.search(value);
        if (!found) {
            return null;
        }
        if (found === this._start) {
            this._start = found.next;
            if (this._start) {
                this._start.prev = null;
            }
            if (found === this._end) {
                this._end = null;
            }
        }
        else if (found === this._end) {
            this._end = found.prev;
            if (this._end) {
                this._end.next = null;
            }
        }
        else {
            const prevItem = found.prev;
            const nextItem = found.next;
            if (prevItem) {
                prevItem.next = nextItem;
            }
            if (nextItem) {
                nextItem.prev = prevItem;
            }
        }
        this._count--;
        return found;
    }

    get length(): number {
        let curr = this._start;
        let i = 0;
        while (curr) {
            curr = curr.next;
            i++;
        }
        return i;
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

list.delete('str3fix');
found = list.search('str3fix');
console.log('found changed item -> %s, changed list:', found && found.value);
list.print();

console.log('Count item: %d, length list:%d', list && list.count, list.length);
