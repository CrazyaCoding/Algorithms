// 题目 找出两字字符串的最长公共子串 字符串X：asdfgh 字符串Y:wesdft 的最长公共子串是sdf

// 先定一个空的字符串，用来承接公共子串
// 以x字符串为基础，去遍历，有点类似冒泡排序
// 内循环做了一些优化，循环最大长度为x的剩余长度，并采用倒循环的方式
// 用字符串的substring方法来提取字符串中位于两个下标中的字符，其中两个下标为循环变量
function publicSubstring(x, y) {
	if (x.length <= 0 || y.length <= 0) {
		return '';
	}
	let common = '', // 承接公共子串
		xLen = x.length;
	for (let i = 0; i < xLen; i++) {
		// 采用倒序方式，最大长度为x的剩余长度
		for (let j = xLen - i; j > 0; j--) {
			common = x.substring(i, j); // 取区间子串去y处 判断是否存在
			if (y.indexOf(common) !== -1) {
				return common;
			}
		}
	}
}

// 百度搜了一圈 都是用动态规划LCS算法 算出来的公共子串 但是是不区分顺序的？？？？？
