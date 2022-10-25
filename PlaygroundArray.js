"use strict";
exports.__esModule = true;
var PlaygroundArray = /** @class */ (function () {
    function PlaygroundArray(message) {
        var _this = this;
        var mapExample = message.map(function (x) {
            _this.mapHelp(x);
            return x;
        });
        var filterExample = message.filter(function (x) {
            if (_this.filterHelp(x))
                return x;
        });
        var initialValue = 0;
        var reduceExample = message.reduce(this.reduceHelp);
        console.log(mapExample);
        console.log(filterExample);
        console.log(reduceExample);
    }
    PlaygroundArray.prototype.mapHelp = function (param) {
        console.log("greet, " + param);
        return param;
    };
    PlaygroundArray.prototype.filterHelp = function (param) {
        return param.charAt(0) == 'k' ? true : false;
    };
    PlaygroundArray.prototype.reduceHelp = function (previousValue, currentValue, index) {
        console.log(previousValue);
        console.log(currentValue);
        console.log(index);
        return previousValue + currentValue;
    };
    return PlaygroundArray;
}());
exports["default"] = PlaygroundArray;
var paramData = ["one", "two", "kool", "kalm"];
var sample = new PlaygroundArray(paramData);
