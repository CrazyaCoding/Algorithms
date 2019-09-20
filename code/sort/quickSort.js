// 划分操作函数
function partition(array, left, right) {
	const pivot = array[Math.floor((left + right) / 2)];
	let i = left,
		j = right;
	while (i <= j) {
		while (compare(array[i], pivot) === -1) {
			i++;
		}
		while (compare(array[j], pivot) === 1) {
			j--;
		}
		if (i <= j) {
			swap(array, i, j);
			i++;
			j--;
		}
	}
	return i;
}

// 比较函数
function compare(a, b) {
	if (a === b) {
		return 0;
	}
	return a < b ? -1 : 1;
}
// 交换位置
function swap(array, a, b) {
	[ array[a], array[b] ] = [ array[b], array[a] ];
}

function quick(array, left, right) {
	let index;
	if (array.length > 1) {
		index = partition(array, left, right);
		if (left < index - 1) {
			quick(array, left, index - 1);
		}
		if (right > index) {
			quick(array, index, right);
		}
	}
	return array;
}

function quickSort(array) {
	return quick(array, 0, array.length - 1);
}

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

console.time('quickSort');
quickSort(arr);
console.timeEnd('quickSort');
