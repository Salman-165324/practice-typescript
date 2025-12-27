import console = require("node:console");

const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }]

function getLastItem<Type>(array: Type[]):Type {
   


    const lastItem= array[array.length - 1]; 

    if(!lastItem){
        throw new Error ("Array is empty"); 

    }
    

    return lastItem; 
    
    
}

/**
 * Mini-challenge: call `getLastItem` (and console.log the returned value)
 * on each of the 3 arrays above. Hover over different values to see what the Intellisense
 * says about the types for each one.
 */

const lastItem = getLastItem<number>(gameScores);
console.log(lastItem); 
console.log(getLastItem(favoriteThings))
