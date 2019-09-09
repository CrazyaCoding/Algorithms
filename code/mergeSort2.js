function merge(arr, start, mid, end) {
	var i = start,
		j = mid + 1;
	var temp = [];
	//数据复制一份将a[start..end]复制到temp[start..end],start不一定为0
	for (var m = start; m <= end; m++) {
		temp[m] = arr[m];
	}

	for (var n = start; n <= end; n++) {
		if (i > mid) {
			//左边用尽（取右半边的元素）
			arr[n] = temp[j++];
		} else if (j > end) {
			//右边用尽（取左半边的元素）
			arr[n] = temp[i++];
		} else if (temp[j] < temp[i]) {
			//右半边的元素小于左半边的元素（取右半边的元素）
			arr[n] = temp[j++];
		} else {
			//右半边的元素大于左半边的元素（取左半边的元素）
			arr[n] = temp[i++];
		}
	}
}
/**
 * 自底向上的归并
 * @param arr
 */
function mergeSort2(arr) {
	var len = arr.length;
	for (var sz = 1; sz < len; sz = 2 * sz) {
		for (var start = 0; start < len - sz; start = start + 2 * sz) {
			merge(arr, start, start + sz - 1, Math.min(start + 2 * sz - 1, len - 1));
		}
	}
}

let format = mergeSort2([ 1, 4, 7, 8, 3, 2, 6, 9, 5 ]);
console.log(format);
