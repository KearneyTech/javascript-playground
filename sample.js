"use strict";
exports.__esModule = true;
/**
 * what do i want? Where do I go from here? - Promises
 * Thread1 - Start, Wait, Fire
 * Thread2 - Start, Fire
 * // Thread1 start
 * // Thread2 start
 * // Thread2 fire
 * // Thread1 fire
 *
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
exports["default"] = Sample;
var sample = new Sample("busta");
sample.greet();
