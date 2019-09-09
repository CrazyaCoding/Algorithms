// 阮一峰版本
var quickSort = function(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let pivotIndex = Math.floor(arr.length / 2);
	let pivot = arr.splice(pivotIndex, 1)[0];
	let left = [];
	let right = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat([ pivot ], quickSort(right));
};

/* let format = quickSort([ 1, 4, 7, 8, 3, 2, 6, 9, 5 ]);
console.log(format); */

function generatorArr(len) {
	let arr = [];
	for (let i = 0; i <= len; i++) {
		arr.push(Math.random() * 100);
	}
	return arr;
}
let arr = generatorArr(1000000);

console.time('quick sort3-ryf');
quickSort(arr);
console.timeEnd('quick sort3-ryf');
