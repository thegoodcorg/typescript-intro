let numbers: number[];

numbers = [1,2,3,4,5];


// ! arrays have a type of object
// console.log(typeof numbers)

let strings: string[];

strings = ["hello", "jimmothy", "corgi"]

let coord: [number, string];

coord = [0,'1'];

let mixedTypes: [number, string, boolean];


// ! using the spread operator to set the first two values of mixedTypes to the values in coord.
mixedTypes = [...coord, true];

// --


// ! any type will accept any type of variable

let justLikeJS: any;

justLikeJS = 2;

justLikeJS = "this is a string";

// ! when using a void type in a function, it shows that nothing will be returned.

function printToTheConsole() : void {
    console.log('some text');
}
