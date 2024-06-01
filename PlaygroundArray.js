'use strict';
exports.__esModule = true;
var PlaygroundArray = /** @class */ (function () {
    function PlaygroundArray(message) {
        this.arrayString = message;
        //this.originalExample();
    }
    PlaygroundArray.prototype.originalExample = function () {
        var _this = this;
        var mapExample = this.arrayString.map(function (x) {
            _this.mapHelp(x);
            return x;
        });
        var filterExample = this.arrayString.filter(function (x) {
            if (_this.filterHelp(x)) return x;
        });
        var initialValue = 0;
        var reduceExample = this.arrayString.reduce(this.reduceHelp);
        console.log(mapExample);
        console.log(filterExample);
        console.log(reduceExample);
    };
    PlaygroundArray.prototype.mapHelp = function (param) {
        console.log('greet, ' + param);
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
    /**
     * The lowest tempurature over the past week.
     */
    PlaygroundArray.prototype.reduceWeatherLowByWeek = function (
        previousValue,
        currentValue,
        index
    ) {
        return previousValue < currentValue ? previousValue : currentValue;
    };
    return PlaygroundArray;
})();
exports['default'] = PlaygroundArray;
var paramData = ['one', 'two', 'kool', 'kalm'];
var esampleData = {
    items: [
        {
            name: '',
            value: ''
        }
    ],
    paramData: ['one', 'two', 'kool', 'kalm']
};
//let sample = new PlaygroundArray(paramData);
//let outerLimits = paramData.reduce(sample.reduceHelp);
//console.log(outerLimits);
//object
//function
//array
//execute
//result
function func(paramArray) {
    var reducer = function (sum, val) {
        return sum + val;
    };
    var initialValue = 0;
    return paramArray
        .map(function (item) {
            return item > 1 ? item : 0;
        })
        .reduce(reducer, initialValue);
}
console.log(func([1, 2, 3, 4]));
