'use strict';
/**
 * Code examples based on the following article,
 *
 * https://hackernoon.com/the-big-o-notation-in-javascript
 */
exports.__esModule = true;
var Main = /** @class */ (function () {
    function Main() {}
    //This code will run n times. The time complexity of this code is O(n).
    Main.prototype.forLoop = function (n) {
        for (var i = 0; i < n; i++) {
            console.log(i);
        }
    };
    //This code will run n times. The time complexity of this code is O(n).
    Main.prototype.whileLoop = function (n) {
        var i = 0;
        while (i < n) {
            console.log(i);
            i++;
        }
    };
    //This code will run n times. The time complexity of this code is O(n).
    Main.prototype.doWhileLoop = function (n) {
        var i = 0;
        do {
            console.log(i);
            i++;
        } while (i < n);
    };
    //This code will run n times. The time complexity of this code is O(n).
    Main.prototype.searchLinear = function (array, value) {
        array.forEach(function (element, index) {
            if (element === value) {
                return index;
            }
        });
        return -1;
    };
    //This code will run log(n) times. The time complexity of this code is O(log(n)).
    Main.prototype.searchBinary = function (array, value) {
        var start = 0;
        var end = array.length - 1;
        var middle = Math.floor(end / 2);
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
    };
    //This code will run n^2 times. The time complexity of this code is O(n^2).
    Main.prototype.sortBubble = function (array) {
        var _a;
        for (var i = array.length; i > 0; i--) {
            for (var j = 0; j < i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    (_a = [array[j + 1], array[j]]), (array[j] = _a[0]), (array[j + 1] = _a[1]);
                }
            }
        }
        return array;
    };
    //This code will run n^2 times. The time complexity of this code is O(n^2).
    Main.prototype.sortSelection = function (array) {
        for (var i = 0; i < array.length; i++) {
            var lowest = i;
            for (var j = i + 1; j < array.length; j++) {
                if (array[j] < array[lowest]) {
                    lowest = j;
                }
            }
            if (i !== lowest) {
                var temp = array[i];
                array[i] = array[lowest];
                array[lowest] = temp;
            }
        }
        return array;
    };
    //This code will run n^2 times. The time complexity of this code is O(n^2).
    Main.prototype.sortInsertion = function (array) {
        for (var i = 1; i < array.length; i++) {
            var currentVal = array[i];
            for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
                array[j + 1] = array[j];
            }
            array[i + 1] = currentVal;
        }
        return array;
    };
    //This code will run n log(n) times. The time complexity of this code is O(n log(n)).
    Main.prototype.sortMerge = function (array) {
        if (array.length <= 1) return array;
        var mid = Math.floor(array.length / 2);
        var left = this.sortMerge(array.slice(0, mid));
        var right = this.sortMerge(array.slice(mid));
        return this.helperMerge(left, right);
    };
    Main.prototype.helperMerge = function (left, right) {
        var results = new Array();
        var i = 0;
        var j = 0;
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
    };
    //This code will run n log(n) times. The time complexity of this code is O(n log(n)).
    Main.prototype.sortQuick = function (array, left, right) {
        if (left === void 0) {
            left = 0;
        }
        if (right === void 0) {
            right = array.length - 1;
        }
        if (left < right) {
            var pivotIndex = this.helperPivot(array, left, right);
            this.sortQuick(array, left, pivotIndex - 1);
            this.sortQuick(array, pivotIndex + 1, right);
        }
        return array;
    };
    Main.prototype.helperPivot = function (array, start, end) {
        if (start === void 0) {
            start = 0;
        }
        if (end === void 0) {
            end = array.length + 1;
        }
        var pivot = array[start];
        var swapIdx = start;
        for (var i = start + 1; i < array.length; i++) {
            if (pivot > array[i]) {
                swapIdx++;
                this.helperSwap(array, swapIdx, i);
            }
        }
        this.helperSwap(array, start, swapIdx);
        return swapIdx;
    };
    Main.prototype.helperSwap = function (array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
    return Main;
})();
exports['default'] = Main;
