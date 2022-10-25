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
import axios from "axios"

export default class PlaygroundArray {
    greeting: string;
   
    constructor(message: Array<string>) {
      let mapExample = message.map(x => {
        this.mapHelp(x);
        return x;
      });
      let filterExample = message.filter(x => {
        if(this.filterHelp(x)) return x;
      });
      let initialValue = 0;
      let reduceExample = message.reduce(this.reduceHelp);

      console.log(mapExample);
      console.log(filterExample);
      console.log(reduceExample);
    }
   
    mapHelp(param: string) {
      console.log("greet, " + param);
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
  }

const paramData = ["one", "two","kool","kalm"];
   
let sample = new PlaygroundArray(paramData);
