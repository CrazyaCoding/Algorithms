// 题目：找出两个字符串的最长公共子序列（Longest Common Sequence）
// 上次题目二（publicSunString.js）的进阶版
// 比如字符串1：BDCABA；字符串2：ABCBDAB 则这两个字符串的最长公共子序列长度为4，最长公共子序列是：BCBA

// 太难了！！！！！！！！！！！！！！！
// 这个方法用来生成arr二维数组，用来存储str1 str2两个序列任意位置 公共子序列的长度
function lcs(str1, str2) {
	let arr = []; 
	for(let i = 0; i < str1.length + 1; i++) {
		arr[i] = [];
		for(let j = 0; j < str2.length + 1; j++) {
			arr[i][j] = 0;
		}
	}
	for(let i = 1; i < str1.length + 1; i++) {
		for(let j = 1; j < str2.length + 1; j++) {
			if(str1[i-1] === str2[j-1]) {
				arr[i][j] = arr[i-1][j-1] +1;
			} else if(arr[i-1][j] >= arr[i][j-1]) {
				arr[i][j] = arr[i-1][j];
			} else {
				arr[i][j] = arr[i][j-1];
			}
		}
	}
	let result = [];
	_lcs(str1, str2, str1.length, str2.length, arr, result);
	console.log(result);
	return result.join('');
}
// 这个方法用于将上述生成的数组（也就是最长公共子序列 上述对应生成的数字） 找到对应的位置字符
function _lcs(str1, str2, i, j, arr, result) {
	if(i === 0  || j===0) {
		return;
	}
	if(str1[i-1] === str2[j-1]) {
		_lcs(str1, str2, i-1, j-1, arr, result);
		result.push(str1[i-1]);
	} else if(arr[i][j-1] >= arr[i-1][j]) {
		_lcs(str1, str2, i, j-1, arr, result);
	} else {
		_lcs(str1, str2, i-1, j, arr, result);
	}
}

// var str1 = "asdfg29hj40kl";    var str2 = "qw29e4r0tyuiop";
// lcs(str1, str2);
// [ '2', '9', '4', '0' ]