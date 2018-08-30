// 数组原地去重
let nums = [0,0,1,1,1,2,2,3,3,4];
function removeRepeat(arr) {
	let temp = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] === temp) {
			arr.splice(i, 1);
			i--;
			temp = arr[i];
		}else {
			temp = arr[i];
		}
	}
	console.log(arr)
	return arr.length;
}

console.log(removeRepeat(nums));

// 找到两排序数组重复的数字
let nums1 = [0,1,2,4,7,7,10,19,21,45,55,66];
let nums2 = [-1, 4,5,8,10,20,21,32,33,54,55,65,100];
function findSame(nums1, nums2) {
	let i = 0, j = 0, res = [];
	while(i < nums1.length || j < nums2.length) {
		nums1[i] = i >= nums1.length ? Number.MAX_VALUE : nums1[i];
		nums2[j] = j >= nums2.length ? Number.MAX_VALUE : nums2[j];
		if (nums1[i] > nums2[j]) {
			j++;
		}else if (nums1[i] < nums2[j]) {
			i++;
		}else {
			res.push(nums1[i]);
			i++;
			j++;
		}
	}
	return res = res[res.length-1] === Number.MAX_VALUE ? res.slice(0,res.length-1) : res;
}
console.log(findSame(nums1, nums2));



// let strArr = readline().split(" ");
// ["72106547548473106236", "982161082972751393"];
// 大数相乘
let strArr = ["72106547548473106236", "982161082972751393"];
let longStr, shortArr;
if (strArr[0].length > strArr[1].length) {
	longStr = strArr[0];
	shortStr = strArr[1];
}else {
	longStr = strArr[1];
	shortStr = strArr[0];
}
let resArr = [];
longStr = longStr.split("").reverse().join("");
shortStr = shortStr.split("").reverse().join("");
console.log(longStr,shortStr)
for (let i = 0, len = shortStr.length; i < len; i++) {
	let tempArr = Array.from({length: longStr.length+shortStr.length}, item => item = 0);
	let flag = 0;
	let cur = parseInt(shortStr[i]);
	let _len = longStr.length;
	let j;
	for (j = 0; j < _len; j++) {
		let temp = cur * parseInt(longStr[j]);
		if (flag) {
			temp = temp + flag;
		}
		flag = Math.floor(temp/10);
		tempArr[i+j] = temp%10;
	}
	if (flag) {
		tempArr[i+j] = flag;
	}
	resArr.push(tempArr);
}
let res = resArr.reduce((prev, cur) => {
	return addStr(prev, cur);
});
console.log(res)
let result = res.reverse().join("").replace(/^0+(\d+)/,"$1");
console.log(result);
function addStr(arr1, arr2) {
	let flag = 0;
	let result = Array.from({length: arr1.length}).fill(0);
	for (let m = 0, len = arr1.length; m < len; m++) {
		let temp = arr1[m] + arr2[m];
		if (flag) {
			temp += 1;
		}
		flag = Math.floor(temp/10);
		result[m] = temp%10;
	}
	if (flag) {
		result[result.length-1] = flag;
	}
	return result;
}


