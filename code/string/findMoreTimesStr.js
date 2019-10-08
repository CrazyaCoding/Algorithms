// 题目: 判断一个字符串中出现次数最多的字符，并统计次数
// addwdwdbaaaiabiaaibabajabkajaaa

/**
 * 思路一 计算出各个字符出现的次数 最后找出次数最多的
 * @param {*} str 
 */
function findMoreTimesStr(str) {
	let times = 0, // 用来存放出现的最多的次数
		x = ''; // 用来存放出现次数最多的字符
	let obj = {}; // 定义一个空对象 {a:3, b:4, ...} key是不重复的str字符串 value是出现的次数

	for (let i = 0; i < str.length; i++) {
		let key = str[i];

		if (obj[key] > 0) {
			// 已经在obj中，次数加1
			obj[key] = obj[key] + 1;
		} else {
			// 初始化该字符的次数
			obj[key] = 1;
		}
	}
	// 遍历对象 找出最大次数的
	for (let key in obj) {
		if (obj[key] > times) {
			x = key;
			times = obj[key];
		}
	}
	return {
		x,
		times
	};
}

/**
 * 思路二 利用数组的排序 和 正则
 * 先将字符串变成数组，使用sort按照字母顺序排序
 * 在变成字符串，利用正则，将相同字符分成一组
 * 在按照小数组长度进行排序，大长度在前
 * @param {*} str 
 */

// 正则表达式中的小括号"()"。是代表分组的意思。 如果再其后面出现\1则是代表与第一个小括号中要匹配的内容相同。
// 注意：\1必须与小括号配合使用
// 'aaaddebbc'
function findMoreTimesStr2(str) {
	// 将字符串变成数组 ["a", "a", "a", "d", "d", "e", "b", "b", "c"]
	let arr = str.split('');
	// 将数组按照字母顺序排序 ["a", "a", "a", "b", "b", "c", "d", "d", "e"]
	arr.sort();
	// 将数组重新组装成字符串
	let newStr = arr.join('');
	// 将字符串匹配成多个数组 相同字母在一起 ["aaa", "bb", "c", "dd", "e"]
	let newArr = newStr.match(/([a-z])\1*/g);
	newArr.sort((a, b) => {
		return a.length > b.length;
	});
	// console.log(newArr); // ["aaa", "bb", "c", "dd", "e"]
	return {
		x: newArr[0],
		times: newArr[0].length
	};
}

// 思路三 去重 在用重复的数组再去重 剩下的就是最多的 字符串出现次数就是去重的次数
// ...
