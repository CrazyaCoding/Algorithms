// 查找单链表中的倒数第K个结点（k > 0），例如 1->2->3->4->6->7->9->10 链表倒数第3个节点是7，输入值为链表和k
/**
 * 
 * @param {*} head 链表头节点
 * @param {*} k 倒数第k个
 */
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
