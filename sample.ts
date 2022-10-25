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

export default class Sample {
    greeting: string;
   
    constructor(message: string) {
      console.log(message);
      this.greeting = message;

      let someObject = {};
      someObject["attr"] = "Right on.";
      console.log(someObject["attr"]);
    }
   
    greet() {
      axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (console.log(response)))
      console.log("Hello, " + this.greeting);
    }
  }
   
let sample = new Sample("busta");
sample.greet();