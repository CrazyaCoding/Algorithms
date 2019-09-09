function bubbleSort(array) {
	let len = array.length;
	if (len <= 1) {
		return array;
	}
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			if (array[j] > array[j + 1]) {
				[ array[j], array[j + 1] ] = [ array[j + 1], array[j] ];
			}
		}
	}
	return array;
}
let format = bubbleSort([ 1, 3, 4, 2, 7, 9, 5, 6, 8 ]);
console.log(format);
