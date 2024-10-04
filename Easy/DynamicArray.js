class DynamicArray {
    
    constructor(capacity) {
        this.arr = new Array(capacity);
        this.capacity = capacity;
        this.size = 0;
    }
    
    get(i) {
        return this.arr[i];
    }

    
    set(i, n) {
        this.arr[i] = n;
    }

    
    pushback(n) {
        if(this.size == this.capacity){
            this.resize();
        }
        this.arr[this.size] = n;
        this.size += 1;
    }

    
    popback() {
        this.size -= 1;
        return this.arr[this.size]
    }

    
    resize() {
        this.capacity = (2 * this.capacity);
        let newArr = new Array(this.capacity);

        for(let i = 0; i < this.size; i++){
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }

    
    getSize() {
        return this.size
    }

    
    getCapacity() {
        return this.capacity;
    }
}
