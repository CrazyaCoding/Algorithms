function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let middle = Math.floor(arr.length / 2);
	let left = arr.slice(0, middle);
	let right = arr.slice(middle);
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let result = [];
	while (left.length > 0 && right.length > 0) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	return result.concat(left, right);
}

let format = mergeSort([ 1, 4, 7, 8, 3, 2, 6, 9, 5 ]);
console.log(format);
