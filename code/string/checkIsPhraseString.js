// 题目： 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写
// 比如：aba、abba、1234554321、1a2b3cc3b2a1 这些都是回文串 回文串的长度可能是基数也可能是偶数

/**
 * 思路一
 * 循环字符串 取首字符和相应位置的尾字符 做对比 如果不一样就证明不是回文串 返回false
 * 时间复杂度O(n) 空间复杂度O(1)
 */
function checkIsPhraseString(str) {
	if(!str || str.length <= 1) {
		throw new Error('输入参数为空或者长度不合法～');
	}

	let arrStr = str.toLowerCase(),// 全部变为小写
		len = arrStr.length;
	for(let i=0; i< len; i++) {
		let endIndex = len - 1 - i; // 尾部索引
		if(endIndex <= i) { // 如果两个索引相遇了 说明已经全部判断完 确认为回文串 直接返回
			return true;
		}
		if(arrStr[i] !== arrStr[endIndex]) { // 判断首尾两个字符串是否一样
			return false;
		}
	}

	return true;
}

/**
 * 思路二
 * 重新创造一个新字符串 与之逆向的 如果两字符串相同 则为回文串
 * 时间复杂度 O(n)？？
 */
function checkIsPhraseString2(str) {
	if(!str || str.length <= 1) {
		throw new Error('输入参数为空或者长度不合法～');
	}
	let newStr = str, // 复制一个新串 
		reverseStr = newStr.toLowerCase().split('').reverse().join(''); // 利用数组的颠倒元素顺序的方法 得到一个逆序的串
	return str === reverseStr;
}

/**
 * 思路三
 * 取中间数 在用数组分割开 将后半部分数据逆序 与前半部分进行匹配 一样则为回文串
 * 需要考虑字符串长度奇偶数的问题
 * 与上述第二个方法区别用半个数组进行逆序
 */
function checkIsPhraseString3(str) {
	if(!str || str.length <= 1) {
		throw new Error('输入参数为空或者长度不合法～');
	}

	let arr = str.split('');
	let middle = Math.floor(str.length/2); // 长度为4 取值2; 长度为5 取值2
	let leftArr= arr.splice(0, middle); // leftArr为剪掉的项目 arr为剩下的项目

	if(middle !== arr.length) { // 如果是奇数 去除多余的中间那个数
		arr.shift();
	}

	return arr.join('') === leftArr.reverse().join('');
}
