/**
 * 循环链表
 * 头节点的next属性指向自身即可
 */
// 节点
class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

// 链表类
class LinkedList {
	constructor() {
		this.head = new Node('head');
		// 初始化将头节点的next属性指向自身
		this.head.next = this.head;
	}
	// 查找节点
	find(item) {
		let curNode = this.head;
		// 因为是循环的 所以不用判空
		while (curNode.element !== item) {
			curNode = curNode.next;
		}
		return curNode;
	}
	// 插入节点 插入原节点之后
	insert(newElement, oldNode) {
		let newNode = new Node(newElement);
		let curNode = this.find(oldNode);
		newNode.next = curNode.next;
		curNode.next = newNode;
	}
	// 删除节点
	remove(item) {
		let prevNode = this.findPrev(item);
		// 因为是循环的 so不用判空 前节点直接指向下一个节点即可
		prevNode.next = prevNode.next.next;
	}
	// 查找前一个节点
	findPrev(item) {
		let curNode = this.head;
		while (curNode.next.element !== item) {
			curNode = curNode.next;
		}
		return curNode;
	}
	// 显示链表
	display() {
		let curNode = this.head;
		while (!(curNode.next.element === this.head.element)) {
			console.log(curNode.next.element);
			curNode = curNode.next;
		}
		console.log(curNode.next);
	}
}

let fruits = new LinkedList();

fruits.insert('Apple', 'head');
fruits.insert('Banana', 'Apple');
fruits.insert('Pear', 'Banana');

console.log(fruits.display());
// Apple
// Banana
// Pear
// Node {element: "head", next: Node}
console.log('===========');

fruits.remove('Banana');
console.log(fruits.display());
