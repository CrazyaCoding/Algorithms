// 合并两个有序链表，使新链表也是有序的 1->4->7->10，2->3->6->9 合并后为 1->2->3->4->6->7->9->10
/**
 * 递归法
 * @param {*} pHead1 
 * @param {*} pHead2 
 */
function merge(pHead1, pHead2) {
	// pHead1 pHead2 为每次参加递归的头指针
	let p = null; // 创建个新链表 用于存储合并后的链表 每次链接到新链表的节点，初始化为空
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

/**
 * 迭代法
 */
function merge2(pHead1, pHead2) {
	let p = {}; // 这里定义一个对象也可以 实例化一个链表也可以
	if (!pHead1) {
		return pHead2;
	}
	if (!pHead2) {
		return pHead2;
	}
	let tmpl_p = p; // 多一个存储空间 指向p的引用 因为后续while要用这个循环自增
	// 下面给tmpl_p.next赋值的时候 修改的是tmpl_p、p的共同引用 p的整体指向不变 tmpl_p像指针一样 从头指到尾
	while (pHead1 !== null && pHead2 != null) {
		if (pHead1.element < pHead2.element) {
			tmpl_p.next = pHead1; // 同时当前p下的某个节点.next = pHead1
			pHead1 = pHead1.next; // pHead1移动为下一个节点
		} else {
			tmpl_p.next = pHead2; // 同时当前p下的某个节点.next = pHead2
			pHead2 = pHead2.next; // pHead2移动为下一个节点
		}
		tmpl_p = tmpl_p.next; // 将tmpl_p 移动为下一个节点
	}
	tmpl_p.next = pHead1 || pHead2;
	return p.next;
}
