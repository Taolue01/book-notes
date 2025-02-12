/**
 * 排序算法: 插入排序、冒泡排序、并归排序、快速排序、
 * 选择排序、希尔排序、堆排序 等
 *
 *
 *
 * 选择排序步骤
 * 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
 * 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 * 重复第二步，直到所有元素均排序完毕。
 *
 * 希尔排序的基本思想是：先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，
 * 待整个序列中的记录"基本有序"时，再对全体记录进行依次直接插入排序。
 *
 * 快速排序：
 * 快速排序使用分治法（Divide and conquer）策略。快速排序应该算是在冒泡排序基础上的递归分治法。
 *
 *
 *
*/
// 01 冒泡排序
function bubbleSort(values) {
    var i = 0, j = 1;
    for (i = 0; i < values.length; i++) {
        for (j = i + 1; j < values.length; j++) {
            if (values[j] < values[j - 1]) {
                var temp = values[j];
                values[j] = values[j - 1];
                values[j - 1] = temp;
            }
        }
    }
    return values;
}
// 02 选择排序
function selectionSort(values) {
    for (var i = 0; i < values.length; i++) {
        var selectedIndex = i;
        for (var j = i; j < values.length; j++) {
            if (values[j] < values[selectedIndex]) {
                selectedIndex = j;
            }
        }
        if (selectedIndex !== i) {
            var temp = values[i];
            values[i] = values[selectedIndex];
            values[selectedIndex] = temp;
        }
    }
    return values;
}
// 03 插入排序
function insertSort(values) {
    for (var i = 1; i < values.length; i++) {
        var temp = values[i];
        var j = i - 1;
        for (j = i - 1; j >= 0; j--) {
            if (temp < values[j]) {
                values[j + 1] = values[j];
            }
            else {
                break;
            }
        }
        values[j + 1] = temp;
    }
    return values;
}
// 04 并归排序
function mergeSort(values) {
    if (values.length <= 1) {
        return values;
    }
    var length = values.length;
    var middleIndex = Math.floor(length / 2);
    var left = values.slice(0, middleIndex);
    var right = values.slice(middleIndex, length);
    if (left.length >= 2) {
        left = mergeSort(left);
    }
    if (right.length >= 2) {
        right = mergeSort(right);
    }
    return merge(left, right);
}
function merge(left, right) {
    var result = [];
    var index = 0;
    var i = 0, j = 0;
    while (true) {
        if (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result[index] = left[i];
                i++;
            }
            else {
                result[index] = right[j];
                j++;
            }
        }
        else if (i >= left.length) {
            result[index] = right[j];
            j++;
        }
        else if (j >= right.length) {
            result[index] = left[i];
            i++;
        }
        index++;
        if (index >= left.length + right.length) {
            break;
        }
    }
    return result;
}
// 05 希尔排序
function shellSort(values) {
    var length = values.length;
    var gap = Math.floor(values.length / 2) - 1;
    while (gap < length / 3) {
        gap = gap * 3 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (var i = gap; i < length; i++) {
            var j = i - gap;
            var temp = values[i];
            while (j > 0 && values[j] > temp) {
                values[j + gap] = values[j];
                j -= gap;
            }
            values[j + gap] = temp;
        }
    }
    return values;
}
// 06 快速排序
function quickSort(values, left, right) {
    var length = values.length, index;
    left = typeof left !== 'number' ? 0 : left;
    right = typeof right !== 'number' ? length - 1 : right;
    if (left < right) {
        index = partition(values, left, right);
        quickSort(values, left, index - 1);
        quickSort(values, index + 1, right);
    }
    return values;
}
function partition(values, left, right) {
    var pivot = left;
    var index = left + 1;
    for (var i = index; i <= right; i++) {
        if (values[i] < values[pivot]) {
            swap(values, i, index);
            index++;
        }
    }
    swap(values, pivot, index - 1);
    return index - 1;
}
function swap(values, i, j) {
    var temp = values[i];
    values[i] = values[j];
    values[j] = temp;
}
// 07 堆排序
// 08 计数排序
function countSort(values) {
    if (values.length < 1) {
        return values;
    }
    var max = values[0];
    for (var i = 1; i < values.length; i++) {
        if (max < values[i]) {
            max = values[i];
        }
    }
    var set = new Array(max + 1);
    for (var i = 0; i < values.length; i++) {
        if (set[values[i]] > 0) {
            set[values[i]] += 1;
        }
        else {
            set[values[i]] = 1;
        }
    }
    var result = [], index = 0;
    while (true) {
        if (set[index] > 0) {
            result.push(index);
            set[index] -= 1;
        }
        else {
            index += 1;
        }
        if (index > set.length) {
            break;
        }
    }
    return result;
}
function main() {
    var arr1 = [1, 3, 10, 2, 100, 5, 8, 4];
    console.log(selectionSort(arr1));
    arr1 = [1, 3, 10, 2, 100, 5, 8, 4];
    console.log(bubbleSort(arr1));
    arr1 = [1, 3, 10, 2, 100, 5, 8, 4];
    console.log(insertSort(arr1));
    arr1 = [1, 3, 10, 2, 100, 5, 8, 4];
    console.log(shellSort(arr1));
    arr1 = [1, 3, 10, 2, 100, 5, 8, 4];
    console.log(quickSort(arr1, 0, 8));
    arr1 = [1, 3, 10, 2, 100, 5, 8, 4];
    console.log(mergeSort(arr1));
    arr1 = [1, 3, 10, 2, 100, 5, 8, 4];
    console.log('count sort:', countSort(arr1));
    var N = 50;
    var addResult = AddFrom1ToNIterative(N);
    console.log('add from 1 to n result:', addResult);
    addResult = AddFrom1ToNRecursive(N);
    console.log('add from 1 to n result recursive:', addResult);
}
main();
function AddFrom1ToNRecursive(n) {
    return n <= 0 ? 0 : n + AddFrom1ToNRecursive(n - 1);
}
function AddFrom1ToNIterative(n) {
    var result = 0;
    for (var value = 1; value <= n; value++) {
        result += value;
    }
    return result;
}
