const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {      //3(1) 1(2) 2(3) 3(4) 4(5) 5(null)    наш l
  while (l && l.value === k) {        //пока l.value === k, смещаемся вправо. Т.е. пропускаем все наки К (т.е. тройки в начале списка)
    l = l.next                        //т.к. в начале списка способом ниже не удалить, он удаляет l.value=k остается 1(2) 2(3) 3(4) 4(5) 5(null)
  }
    
  
  let currentNode = l;                //если l.value !== k, то карент = наш l

         
  while (currentNode.next) {                      //пока у карента есть.некст
    if (currentNode.next.value === k) {           //и этот некст === к
      currentNode.next = currentNode.next.next    //то кар.некст = кар.некст.некст 
    } else {                                      //если некст !== к
      currentNode = currentNode.next              //то каренНод = карентНоде.некст
    }
  } 
  return l          //венуть наш отформатированный l 
}


module.exports = {
  removeKFromList
};
