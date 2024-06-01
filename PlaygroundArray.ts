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
type complexData = {
    items: [
        {
            name: '';
            value: '';
        }
    ];
    paramData: ['one', 'two', 'kool', 'kalm'];
};

export default class PlaygroundArray {
    greeting: string;
    arrayString: Array<string>;

    constructor(message: Array<string>) {
        this.arrayString = message;

        //this.originalExample();
    }

    originalExample() {
        let mapExample = this.arrayString.map((x) => {
            this.mapHelp(x);
            return x;
        });
        let filterExample = this.arrayString.filter((x) => {
            if (this.filterHelp(x)) return x;
        });
        let initialValue = 0;
        let reduceExample = this.arrayString.reduce(this.reduceHelp);

        console.log(mapExample);
        console.log(filterExample);
        console.log(reduceExample);
    }

    mapHelp(param: string) {
        console.log('greet, ' + param);
        return param;
    }
    filterHelp(param: string) {
        return param.charAt(0) == 'k' ? true : false;
    }
    reduceHelp(previousValue: string, currentValue: string, index: number) {
        console.log(previousValue);
        console.log(currentValue);
        console.log(index);
        return previousValue + currentValue;
    }
    /**
     * The lowest tempurature over the past week.
     */

    reduceWeatherLowByWeek(previousValue: string, currentValue: string, index: number) {
        return previousValue < currentValue ? previousValue : currentValue;
    }
}

const paramData = ['one', 'two', 'kool', 'kalm'];
const esampleData: complexData = {
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
    const reducer = (sum, val) => sum + val;
    const initialValue = 0;
    return paramArray.map((item) => (item > 1 ? item : 0)).reduce(reducer, initialValue);
}

console.log(func([1, 2, 3, 4]));
