class DynamicArray {
    /*
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.arr = new Array(capacity);
    }

    /*
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /*
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

     /*
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        let inserted = false;
        if (this.getSize() == this.getCapacity()) {
            this.arr[this.arr.length] = n;
            return null;
        }
        for (let counter = this.arr.length; counter >= 0; counter--) {
            if (this.arr[counter] !== undefined) {
                if (counter == this.arr.length - 1) {
                    this.arr[this.arr.length] = n;
                    inserted = true;
                } else{
                    this.arr[counter + 1] = n;
                    inserted = true;
                }
            }
            if (inserted == false) {
                    this.arr[0] = n;
                    return null;
            }
        }
    }

    /*
     * @returns {number}
     */
    popback() {
        for (let counter = this.arr.length - 1; counter >= 0; counter--) {
            if (this.arr[counter] !== undefined) {
                let lastElement = this.arr[counter + 1];
                this.arr[counter + 1] = undefined;
                return lastElement;
            } else if (counter == 0){
                let lastElement = this.arr[this.arr.length - 1];
                this.arr[this.arr.length - 1] = undefined;
                return lastElement;
            }
        }
    }

    /*
     * @returns {void}
     */
    resize() {
        let doubleArr = new Array(this.arr.length * 2);

        for(let count = 0; count < arr.length; count++){
            doubleArr[count] = arr[count];
        }
        return doubleArr;
    }

    /*
     * @returns {number}
     */
    getSize() {
        let elements = 0;

        if (!this.arr) {
            return 0;
        }

        for (let count = 0; count < this.arr.length; count++) {
            if(this.arr[count] != undefined){
                elements++;
            }
        }

        return elements;
    }

    /*
     * @returns {number}
     */
    getCapacity() {
        let capacity = 0;

        if(!this.arr){
            return 0;
        } else{
            capacity = this.arr.length;
        }
        return capacity;
    }
}
