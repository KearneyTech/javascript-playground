// To experiment with error handling, "threshold" values cause errors randomly
const THRESHOLD_A = 8; // can use zero 0 to guarantee error

const tetheredGetNumber: Promise<number> = new Promise(
    (resolve: Function, reject: Function) => {
        setTimeout(() => {
            const randomInt = Date.now();
            const value = randomInt % 10;
            if (value < THRESHOLD_A) {
                resolve(value);
            } else {
                reject(`Too large: ${value}`);
            }
        }, 500);
    }
);

function determineParity(value: number) {
    const isOdd = value % 2 === 1;
    return { value, isOdd };
}

function troubleWithGetNumber(reason: any) {
    const err = new Error(`Trouble getting number ${reason}`);
    throw err;
}

function promiseGetWord(parityInfo: { value: number; isOdd: boolean }) {
    return new Promise((resolve, reject) => {
        if (parityInfo.value >= THRESHOLD_A - 1) {
            reject(`Still too large: ${parityInfo.value}`);
        } else {
            resolve(parityInfo);
        }
    });
}

tetheredGetNumber
    .then(determineParity, troubleWithGetNumber)
    .then((param: any) => {
        promiseGetWord(param);
    })
    .then((info: any) => {
        console.log(`Resolved`);
        //console.log(`Got: ${info.value}, ${info.wordEvenOdd ? 'odd' : 'even'}`);
        return info;
    })
    .catch((reason) => {
        if (reason.cause) {
            console.error('Had previously handled error');
        } else {
            console.error(`Trouble somewhere: ${reason}`);
        }
    })
    .finally(() => console.log('All done finally'));
