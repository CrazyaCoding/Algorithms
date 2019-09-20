/**
 * 单向链表
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
	insert(newElement, oldNode) {
		let newNode = new Node(newElement);
		let curNode = this.find(oldNode);
		newNode.next = curNode.next;
		curNode.next = newNode;
	}
	// 删除节点
	remove(item) {
		let prevNode = this.findPrev(item);
		if (!(prevNode.next === null)) {
			// 前一个节点一定不是空 兼容代码
			prevNode.next = prevNode.next.next;
		}
	}
	// 查找前一个节点
	findPrev(item) {
		let curNode = this.head;
		while (!(curNode.next == null) && curNode.next.element !== item) {
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
}

/* // ======================================
let fruits = new LinkedList();

fruits.insert('Apple', 'head');
fruits.insert('Banana', 'Apple');
fruits.insert('Pear', 'Banana');

console.log(fruits.display()); // Apple Banana Pear 
*/

/* // ======================================
// 反转单向链表
function reverseLinkeList(head) {
	if (!head || !head.next) {
		return head;
	}
	let pre = null,
		next = null;
	while (head !== null) {
		next = head.next; // 下一个节点
		head.next = pre; // 当前节点的next指向前一个节点
		// 循环的递增处理部分
		pre = head; // 将当前节点变成上一个节点
		head = next; // 将下一个节点变成当前节点
	}
	return pre;
}
let fruits = new LinkedList();

fruits.insert('Apple', 'head');
fruits.insert('Banana', 'Apple');
fruits.insert('Pear', 'Banana');
console.log('反转单向链表', reverseLinkeList(fruits.head));
 */

/* // ======================================
// 反转单向链表 递归法
function reverseLinkedList2(head) {
	// head 一直是个变量 到递归底层head是倒数第二个节点
	if (!head || !head.next) {
		return head;
	}
	let new_head = reverseLinkedList2(head.next); // 递归到最里层 取最后一个节点 变为头节点
	head.next.next = head; // 将反转后的链表的尾节点与当前节点相连
	head.next = null;
	return new_head;
}

let fruits = new LinkedList();

fruits.insert('Apple', 'head');
fruits.insert('Banana', 'Apple');
fruits.insert('Pear', 'Banana');

console.log('反转单向链表', reverseLinkedList2(fruits.head));
*/

/* // ======================================
// 合并两个有序链表
// 递归法
function merge(pHead1, pHead2) {
	// pHead1 pHead2 为每次参加递归的头指针
	let p = null; // 每次链接到新链表的节点，初始化为空
	if (!pHead1) {
		return pHead2;
	}
	if (!pHead2) {
		return pHead1;
	}
	if (pHead1.element < pHead2.element) {
		p = pHead1;
		p.next = merge(pHead1.next, pHead2);
	} else {
		p = pHead2;
		p.next = merge(pHead1, pHead2.next);
	}
	return p;
}

console.log('==================');
let num1 = new LinkedList();
num1.insert(1, 'head');
num1.insert(3, 1);
num1.insert(5, 3);
num1.insert(7, 5);
console.log(num1);

let num2 = new LinkedList();
num2.insert(2, 'head');
num2.insert(4, 2);
num2.insert(6, 4);
num2.insert(8, 6);
console.log(num2);
console.log('==================');
let mergedLinkedList = merge(num1.head.next, num2.head.next);
console.log(mergedLinkedList);
 */

/* // ======================================
// 合并两个有序链表
// 迭代法
function merge2(pHead1, pHead2) {
	let p = {};
	if (!pHead1) {
		return pHead2;
	}
	if (!pHead2) {
		return pHead2;
	}
	let tmpl_p = p;
	while (pHead1 !== null && pHead2 != null) {
		if (pHead1.element < pHead2.element) {
			tmpl_p.next = pHead1;
			pHead1 = pHead1.next;
		} else {
			tmpl_p.next = pHead2;
			pHead2 = pHead2.next;
		}
		console.log('==');
		console.log(p);
		console.log(tmpl_p);
		tmpl_p = tmpl_p.next;
	}

	tmpl_p.next = pHead1 || pHead2;
	return p.next;
}
console.log('==================');
let num1 = new LinkedList();
num1.insert(1, 'head');
num1.insert(3, 1);
num1.insert(5, 3);
num1.insert(7, 5);
console.log(num1);

let num2 = new LinkedList();
num2.insert(2, 'head');
num2.insert(4, 2);
num2.insert(6, 4);
num2.insert(8, 6);
console.log(num2);
console.log('==================');
let mergedLinkedList = merge2(num1.head.next, num2.head.next);
console.log(mergedLinkedList);
 */

// ======================================
// 查找倒数第k个元素
function findNode(head, k) {
	if (!k || k < 1) {
		throw new Error('k参数不合法');
	}
	let p1 = head, // 一个指针
		p2 = head; // 要寻找的节点
	// p2先移动k步 或者先移动到末尾
	// 这里从0开始算 所以是到k-1结束 为最后一个
	// 肯定默认k<=节点长度
	for (let i = 0; i < k - 1; i++) {
		if (p1.next === null) {
			break;
		}
		p1 = p1.next;
	}
	// 现在p1与p2 中间相隔k-1-1个节点(-1-1相当于减去p1 p2本身) 所以当p1是最后一个的时候 p2正好是倒数第k个
	// null不算一个节点 所以p1.next是最后一个节点 到此循环截止
	while (p1.next !== null) {
		p1 = p1.next;
		p2 = p2.next;
	}
	return p2;
}
console.log('==================');
let num = new LinkedList();
num.insert(1, 'head');
num.insert(2, 1);
num.insert(3, 2);
num.insert(4, 3);
num.insert(5, 4);
num.insert(6, 5);
num.insert(7, 6);
num.insert(8, 7);

let node = findNode(num.head.next, 4);
console.log(node);
