// 题目 单词翻转 例如 I am a student =》 student a am I

// 步骤1: 仅仅做了反转
function wordReversal(words) {
	if (!words || words.length <= 1) {
		return words;
	}
	return words.split(' ').reverse().join(' ');
}

// 步骤2: 去除首尾空格 例如 input:" hello world " output:"world hello"
function wordReversal2(words) {
	if (!words || words.length <= 1) {
		return words;
	}
	return words.split(' ').reverse().join(' ').trim();
}

// 步骤3: 再去除单词中间多余空格 input:" hello   world " output:"world hello"
function wordReversal5(words) {
	if (!words || words.length <= 1) {
		return words;
	}
	let reversalWords = words.split(' ').reverse().join(' ');

	// 匹配两个以上空格连着的情况 删除掉一个
	return reversalWords.replace(/\s{2,}/, ' ').trim();
}

// tips: 去除首尾空格的方法
String.prototype.trim = function() {
	return this.trim();
};
String.prototype.trim = function() {
	return this.trimStart().trimEnd();
};
String.prototype.trim = function() {
	return this.replace(/^\s*/, '').replace(/\s*$/, '');
};
String.prototype.trim = function() {
	return this.replace(/^\s+/, '').replace(/\s+$/, '');
};
String.prototype.trim = function() {
	return this.substring(Math.max(this.search(/\S/), 0), this.search(/\S\s*$/) + 1);
};
String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, '');
};
