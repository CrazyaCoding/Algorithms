/**
 * 双向链表
 * 要实现双向链表，首先要给Node类增加一个previous属性
 */

// 节点类
function Node(element) {
	this.element = element; // 当前节点的元素
	this.next = null; // 下一个节点的链接
	this.previous = null; // 增加的上一个节点链接
}

// 链表类
class LinkedList {
	constructor() {
		this.head = new Node('head');
	}
	// 查找节点
	find(item) {
		let curNode = this.head;
		while (curNode.element !== item) {
			curNode = curNode.next;
		}
		return curNode;
	}
	// 插入节点 插入原节点之后
	// 跟单向链表相似，增加新节点的previou属性，使其指向原节点
	insert(newElement, oldNode) {
		let newNode = new Node(newElement);
		let curNode = this.find(oldNode);
		newNode.next = curNode.next;
		newNode.previous = curNode;
		curNode.next = newNode;
	}
	// 删除节点
	// 双向链表的删除方法比但链表效率高，不需要查找前驱节点。只要找出待删除节点，然后将该节点的前驱节点的next属性指向后继节点，
	// 后继节点的前驱属性指向前驱节点，然后在删除该节点的属性
	remove(item) {
		let curNode = this.find(item);
		if (curNode.next === null) {
			// 如果是最后一个
			curNode.previous.next = null;
			curNode.previous = null;
		} else {
			// 不是最后一个
			curNode.previous.next = curNode.next;
			curNode.next.previous = curNode.previous;
			curNode.next = null;
			curNode.previous = null;
		}
	}
	// 查找最后一个元素
	findLast() {
		let curNode = this.head;
		while (!(curNode.next === null)) {
			curNode = curNode.next;
		}
		return curNode;
	}
	// 显示链表
	display() {
		let curNode = this.head;
		while (!(curNode.next === null)) {
			console.log(curNode.next.element);
			curNode = curNode.next;
		}
	}
	// 反向显示链表
	displayReverse() {
		let curNode = this.findLast();
		while (!(curNode.previous === null)) {
			console.log(curNode.element);
			curNode = curNode.previous;
		}
	}
}

let fruits = new LinkedList();

fruits.insert('Apple', 'head');
fruits.insert('Banana', 'Apple');
fruits.insert('Pear', 'Banana');

console.log(fruits.display());
console.log('=================');
// console.log(fruits.head);
/* console.log(fruits.displayReverse());
console.log('=================');
fruits.remove('Banana');
console.log(fruits.display()); */

/* 
// 反转双向链表
function reverseTwoLinkedList(head) {
	if (!head || !head.next) {
		return head;
	}
	let pre = null,
		next = null;
	while (head !== null) {
		next = head.next;
		head.next = pre; // 将当前链表的next属性指向前一个节点
		head.previous = next; // 将当前节点的previous指向下一个节点
		// 循环递增
		pre = head; // 将当前节点变为上一个
		head = next; // 将下一个节点变为当前节点
	}
	return pre;
}

console.log('反转双向链表', reverseTwoLinkedList(fruits.head));
 */
