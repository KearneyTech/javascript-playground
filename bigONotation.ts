/**
 * Code examples based on the following article,
 *
 * https://hackernoon.com/the-big-o-notation-in-javascript
 */

export default class Main {
    //This code will run n times. The time complexity of this code is O(n).
    forLoop(n: number) {
        for (let i = 0; i < n; i++) {
            console.log(i);
        }
    }

    //This code will run n times. The time complexity of this code is O(n).
    whileLoop(n: number) {
        let i = 0;
        while (i < n) {
            console.log(i);
            i++;
        }
    }

    //This code will run n times. The time complexity of this code is O(n).
    doWhileLoop(n: number) {
        let i = 0;
        do {
            console.log(i);
            i++;
        } while (i < n);
    }

    //This code will run n times. The time complexity of this code is O(n).
    searchLinear(array: Array<any>, value: any) {
        array.forEach((element, index) => {
            if (element === value) {
                return index;
            }
        });
        return -1;
    }

    //This code will run log(n) times. The time complexity of this code is O(log(n)).
    searchBinary(array: Array<any>, value: any) {
        let start = 0;
        let end = array.length - 1;
        let middle = Math.floor(end / 2);

        while (array[middle] !== value && start <= end) {
            if (value < array[middle]) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
            middle = Math.floor((start + end) / 2);
        }

        if (array[middle] === value) {
            return middle;
        }
        return -1;
    }

    //This code will run n^2 times. The time complexity of this code is O(n^2).
    sortBubble(array: Array<any>) {
        for (let i = array.length; i > 0; i--) {
            for (let j = 0; j < i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                }
            }
        }
        return array;
    }

    //This code will run n^2 times. The time complexity of this code is O(n^2).
    sortSelection(array: Array<any>) {
        for (let i = 0; i < array.length; i++) {
            let lowest = i;
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[lowest]) {
                    lowest = j;
                }
            }
            if (i !== lowest) {
                let temp = array[i];
                array[i] = array[lowest];
                array[lowest] = temp;
            }
        }
        return array;
    }

    //This code will run n^2 times. The time complexity of this code is O(n^2).
    sortInsertion(array: Array<any>) {
        for (let i = 1; i < array.length; i++) {
            let currentVal = array[i];
            for (let j = i - 1; j >= 0 && array[j] > currentVal; j--) {
                array[j + 1] = array[j];
            }
            array[i + 1] = currentVal;
        }
        return array;
    }

    //This code will run n log(n) times. The time complexity of this code is O(n log(n)).
    sortMerge(array: Array<any>) {
        if (array.length <= 1) return array;
        let mid = Math.floor(array.length / 2);
        let left = this.sortMerge(array.slice(0, mid));
        let right = this.sortMerge(array.slice(mid));
        return this.helperMerge(left, right);
    }

    helperMerge(left: Array<any>, right: Array<any>) {
        let results = new Array<any>();
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                results.push(left[i]);
                i++;
            } else {
                results.push(right[j]);
                j++;
            }
        }
        while (i < left.length) {
            results.push(left[i]);
            i++;
        }
        while (j < right.length) {
            results.push(right[j]);
            j++;
        }
        return results;
    }

    //This code will run n log(n) times. The time complexity of this code is O(n log(n)).
    sortQuick(array: Array<any>, left = 0, right = array.length - 1) {
        if (left < right) {
            let pivotIndex = this.helperPivot(array, left, right);
            this.sortQuick(array, left, pivotIndex - 1);
            this.sortQuick(array, pivotIndex + 1, right);
        }
        return array;
    }

    helperPivot(array: Array<any>, start = 0, end = array.length + 1) {
        let pivot = array[start];
        let swapIdx = start;
        for (let i = start + 1; i < array.length; i++) {
            if (pivot > array[i]) {
                swapIdx++;
                this.helperSwap(array, swapIdx, i);
            }
        }
        this.helperSwap(array, start, swapIdx);
        return swapIdx;
    }

    helperSwap(array: Array<any>, i: number, j: number) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
