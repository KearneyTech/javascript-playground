"use strict";
/**
 * Code examples based on the following article,
 *
 * https://hackernoon.com/the-big-o-notation-in-javascript
 */
exports.__esModule = true;
var Main = /** @class */ (function () {
    function Main() {
    }
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
    return Main;
}());
exports["default"] = Main;
