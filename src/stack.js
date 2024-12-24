const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {                 
    this.stack = new Array            //дис стек = новый массив
  }

  push(element) {                     //
    this.stack.push(element)          //просто пушим в массив наш элемент
  }

  pop() {
    return this.stack.pop()           //удаляем последний элемент
  }

  peek() {
    return this.stack[this.stack.length - 1];       //вернуть последний элемент массив[массив.длина - 1]
  }                                                 //т.е. просто вернуть без удаления
}

module.exports = {
  Stack
};
