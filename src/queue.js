const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    return this.head;
  }

  //метод для добавления элемента в конец списка (тот же принцип что и аппенд в связанном списке)
  enqueue(value) {     
    const newNode = new ListNode(value);   //новый узел

    //если нет начала и конца, то
    if (!this.head && !this.tail) {    //если нет начала и конца, то
        this.head = newNode;           //хеад = новый.узел         
        this.tail = newNode;           //тейл - он же
    
        return this             //т.к. не было элементов в листе, дальше идти смысла нету
    }


    //если начало и хвост есть, то:
    this.tail.next = newNode;     //хвост.некст смотрит на нулл (А-В-С-null), поэтому 
                                  //вместо null делаем newNode (новый элемент) (А-В-С-'Z')
                                    
    this.tail = newNode;          //теперь подправим сссылку на наш хвост, т.к. this.tail пока = "С"
                                  //теперь он this.tail = "Z"    
    return this      //в конце вернуть текущий список
}

  dequeue() {
    let currentNode = this.head;        //лет карент = хеад (первый элемент)
    this.head = currentNode.next;       //хеад = карент.некст
    return currentNode.value            //вернуть вэлью карента (старого хеда)
  }
}

module.exports = {
  Queue
};
