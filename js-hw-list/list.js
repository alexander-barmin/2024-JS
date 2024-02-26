/*
    Домашнее задание по JavaScript.
    Написать класс, реализующий двусвязный список.
    Предусмотреть методы поиска, вставки, удаления, изменения элемента и определения длины списка.
*/

class MyItem {
    constructor(_value) {
        this._value = _value;
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
