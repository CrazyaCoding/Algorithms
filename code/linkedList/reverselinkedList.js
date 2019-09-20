/**
 * 反转单向链表 
 * 迭代法
 * @param {Node} head 头节点
 */
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

// 1 -> 2 -> 3 -> 4 -> 5 -> null
// null <- 1 <- 2 <- 3 <- 4 <- 5

/**
 * 反转单向链表
 * 递归法
 * head 一直是个变量 到递归底层head是倒数第二个节点
 * new_head的反转连接 设置head.next.next属性 靠的是对象的引用属性 
 */
function reverseLinkedList2(head) {
	if (!head || !head.next) {
		return head;
	}
	let new_head = reverseLinkedList2(head.next); // 递归到最里层 取最后一个节点 变为头节点
	head.next.next = head; // 将反转后的链表的尾节点与当前节点相连
	head.next = null;
	return new_head;
}

/**
 * 反转双向链表
 * 迭代法
 */
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
