// To experiment with error handling, "threshold" values cause errors randomly
var THRESHOLD_A = 8; // can use zero 0 to guarantee error
var tetheredGetNumber = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var randomInt = Date.now();
        var value = randomInt % 10;
        if (value < THRESHOLD_A) {
            resolve(value);
        }
        else {
            reject("Too large: " + value);
        }
    }, 500);
});
function determineParity(value) {
    var isOdd = value % 2 === 1;
    return { value: value, isOdd: isOdd };
}
function troubleWithGetNumber(reason) {
    var err = new Error("Trouble getting number " + reason);
    throw err;
}
function promiseGetWord(parityInfo) {
    return new Promise(function (resolve, reject) {
        if (parityInfo.value >= THRESHOLD_A - 1) {
            reject("Still too large: " + parityInfo.value);
        }
        else {
            resolve(parityInfo);
        }
    });
}
tetheredGetNumber
    .then(determineParity, troubleWithGetNumber)
    .then(function (param) {
    promiseGetWord(param);
})
    .then(function (info) {
    console.log("Resolved");
    //console.log(`Got: ${info.value}, ${info.wordEvenOdd ? 'odd' : 'even'}`);
    return info;
})["catch"](function (reason) {
    if (reason.cause) {
        console.error('Had previously handled error');
    }
    else {
        console.error("Trouble somewhere: " + reason);
    }
})["finally"](function () { return console.log('All done finally'); });
