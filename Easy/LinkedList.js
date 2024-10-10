class ListNode{
    constructor(val, nextNode = null){
        this.val = val;
        this.next = nextNode;
    }
}

class LinkedList {
    constructor() {
        //dummy node
        this.head = ListNode(-1);
        this.tail = self.head;
    }

    get(index) {
        current = this.head.next;
        cursor = 0;
        while(cursor != index && cursor != null){
            current = current.next;
            cursor += 1;
        }
        if(cursor == index){
            return current.val;
        } else{
            return -1; //out of bounds
        }
    }

    insertHead(val) {
        node = ListNode(val);
        node.next = this.head.next;
        this.head.next = node;
        //checking if list is empty
        if(node.next == null){
            this.tail = node;
        }
    }

    insertTail(val) {
        this.tail.next = ListNode(val);
        this.tail = this.tail.next;
    }

    remove(index) {
        cursor = 0;
        current = self.head;
        while(cursor < index && cursor != null){
            cursor += 1;
            current = current.next;
        }
        if(current){
            if(current.next == this.tail){
                this.tail = current;
            }
            current.next = current.next.next;
            return true;
        }
        return false;
    }

    getValues() {
        current = this.head.next;
        results = [];

        while(current){
            results //append
        }

        return results;
    }
}