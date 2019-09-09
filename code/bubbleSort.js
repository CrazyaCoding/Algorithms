function bubbleSort(arr = {}) {
	let len = arr.length;
	if (len <= 0) {
		return [];
	}
	for (let i = 0; i < len - 1; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

let format = bubbleSort([ 1, 3, 4, 2, 7, 9 ]);
console.log(format);
