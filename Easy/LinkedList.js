class LinkedList {
    constructor() {
        let linkedList = { head: {
            value: null,
            next: null
        }}
        let tail = this.head;
    }

    get(index) {
        let cursor = this.head;
        while(cursor != index){
            cursor = cursor.next;
        }

        return cursor;
    }

    insertHead(val) {
        let cursor = { head: {
            value: null,
            next: null
        }}
            cursor.head = this.head;
        while(cursor.next != null){
            cursor.value = this.value;
        }
        this.head.value = val;
    }

    insertTail(val) {
        this.tail.value = val;
        this.tail = this.next;
    }

    remove(index) {

    }

    getValues() {

    }
}