class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        if(this.length === 1){
            this.tail = {
                value: value,
                next: null
            }
            this.head.next = this.tail;
        } else {
            const oldTail = this.tail;
            this.tail = {
                value: value,
                next: null
            }
            oldTail.next = this.tail;
        }

        this.length++;
    }
    
}

linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(10);

console.log(linkedList)