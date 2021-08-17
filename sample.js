"use strict";
exports.__esModule = true;
/**
 * what do i want? Where do I go from here?
 */
var axios_1 = require("axios");
var Sample = /** @class */ (function () {
    function Sample(message) {
        console.log(message);
        this.greeting = message;
        var someObject = {};
        someObject["attr"] = "Right on.";
        console.log(someObject["attr"]);
    }
    Sample.prototype.greet = function () {
        axios_1["default"]
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(function (response) { return (console.log(response)); });
        console.log("Hello, " + this.greeting);
    };
    return Sample;
}());
var sample = new Sample("busta");
// sample.greet();
