const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');     //class Node создает НОВЫЙ узел где задает ему число === constructor(data) {this.data = data; this.left = null; this.rigth = null)

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {               
    this.rootX = null;                        //объект.кореньХ = null
  }

  root() {
    return this.rootX;                        //метод вернуть кореньХ
  }

  add(data) {                                 //создать узел с параметром дата (номер)
    const newNode = new Node(data)            //конст новый узел с парметром дата (номер)
    if (!this.rootX) {                        //если узла нет, то: 
      this.rootX = newNode;                   //создать новый Node (сам класс выше в коде)   
      return;                                 //и все, ретерн
    }  

    let currentNode = this.rootX;               //если узел есть, то: лет карентУзкл = дис.узелХ (т.е. текщий объект.узелХ)
    while (currentNode) {                       //пока есть объекты.с_узломХ
      if (newNode.data < currentNode.data) {    //если новый узел.дата < текущий узел.дата
        if (!currentNode.left) {                //и если у текущего узла нету св-ва лефт, то:
          currentNode.left = newNode;           //текущий узел.лефт = новый узел
          return;                               //ретерн
        }
        currentNode = currentNode.left;         //если у текущего узла есть лефт, то текущий узел = текущий узел.лефт и в начала (т.к. там цикл вайл)
      } else {
        if (!currentNode.rigth) {               //то же что и с левым, но с правым
          currentNode.rigth = newNode;
          return;
        }
        currentNode = currentNode.rigth;
      }
    }
  }

  has(data) {                                     
    function hasNode(data, node) {              //функция с параметрами (дата и узел)
      if (!node) {                              //если нет корня 
        return false                            //ретерн - фэлс
      }    
      if (data === node.data) {                 //если дата === узел.дата (т.е. если искомое число === числу в узле)
        return true                             //ретерн тру
      } else {                                  //если искомое число !== узел.число
        if (data < node.data) {                 //если меньше, то
          return hasNode(data, node.left)       //вызываем рекурсию для левого чилда (с параметрами дата, узел = узел.левый чилд)
        } 
          return hasNode(data, node.rigth)      //вызываем рекурсию для правого чилда (с параметрами дата, узел = узел.правый чилд)       
      } 
    }                                           //пока не получим (!node или data === node.data) - т.е. когда-ниудь будет чот нету узла, тогда или фэлс или тру 
    return hasNode(data, this.rootX);           //вернуть в 1 раз для искомого числа и нашего корня (дальше сама себя будет вызывать рукурсивно)
  }

  find(data) {
    function findNode(data, node) {             //функция найти узел (парметры число, узел) +- похожа на has(data), только ввозвращает сам узел или нулл
      if (!node) {                              //если узла нету 
        return null                             //вернуть нулл
      }
      if ( data === node.data) {                //если дата === узел.дата, то
        return node;                            //вернут узел
      } else {
        if (data < node.data) {                 //если дата < узел.дата, то 
          return findNode(data, node.left)      //вернуть результат функции рекурсивно для (дата и узел.левый)
        }                                       //если дата > узел.дата, то
          return findNode(data, node.rigth)     //вернуть результат функции рекурсивно для (дата и узел.правый)     
      }
    }
    return findNode(data, this.rootX)           //вернуть 1 раз для дата и корня
  }

  remove(data) {
      //console.log(this.rootX)
      this.root = removeNode(data, this.rootX);         //корень = результат выполнения removeNode (с параметрами число и узел)

      function removeNode(data, node) {                 //функция (параметры число и узел)
        
        if (data < node.data) {                         //если число < узел.число, то: 
          //console.log(`${data} < ${node.data}`)
          node.left = removeNode(data, node.left);      //узел.лефт = результат выполнения removeNode (число и узел.лефт)
          return node;                                  //вернуть узел 
        }
        else if (data > node.data) {                    //если число < узел.число, то:
          //console.log(`${data} > ${node.data}`)
          node.rigth = removeNode(data, node.rigth);    //узел.райт = результат выполнения removeNode (число и узел.райт)
          return node;                                  //вернуть узел 
        } 
        else if (data === node.data) {                  //когда дата = узел.дата (нашли искомый узел):
          if (!node.left && !node.rigth) {              //если нету левого и правого чилдов, то:
            //console.log(`${data} = ${node.data}`)
            return null;                                //вернуть нулл (т.е. у узла вместо числа будет нулл)
          } 
          else if (!node.left) {                        //если у узла нету лефта, то:
            node = node.rigth;                          //узел = узел.правый
            return node;                                //вернуть узел (т.е. вместо нашего узла поднимаем его правый)
          }
          else if (!node.rigth) {                       //если у узла нету райта, то:
            node = node.left;                           //узел = узел.левый
            return node;                                //вернуть узел (т.е. вместо нашего узла поднимаем его левый)
          }
          else {                                        //если есть и левый и правый, то:
            let minRigth = node.rigth;                  //лет минРайт = узел.райт
            while (minRigth.left) {                     //пока у минРайта есть лефт,:
              minRigth = minRigth.left;                 //минрайт = его лефт, т.е. находим самый-самый лефт (наименьшее значение правой ветки)
            }                                       
            node.data = minRigth.data;                             //когда нашли минРайт (дальше нету лефта), то узел.дата = минрайт.дата
            node.rigth = removeNode(minRigth.data, node.rigth);    //а узел.райт = результат removeNode(минрайт.дата, узел.дата). т.е. тут 
            return node;                                           //минрайт сравнится с узлом, и т.к. они теперь равны, то минрайт будет как бы 
          }                                                        //искомое число, и оно удалится  
        }
      }
    }

    min() {
      let isMin = this.rootX;
      while (isMin.left) {
        isMin = isMin.left
      }
      return isMin.data
    }

    max() {
      let isMax = this.rootX;
      while (isMax.rigth) {
        isMax = isMax.rigth
      }
      return isMax.data
    }
}

module.exports = {
  BinarySearchTree
};