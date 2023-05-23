let numbers: number[];

numbers = [1,2,3,4,5];


// !type alias. This is like an object in C#. Adding a ? to the end of a property to make it an optional property.
type Game = {
    title: string;
    genres: string[];
    price?: number;
}

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

let age = null;

let personData = {
    name: 'Tim',
    age,
}

let personAge: number | null;

personAge = personData.age;



let anything = 0;


let game: Game = {
    title: "Super Mario Sunshine",
    genres: ["platformer", "adventure"],
    price: 60
}

console.log(game.price)


let gameTwo: Game = {
    title: "Super Mario Sunshine",
    genres: ["platformer", "adventure"]
}

let games: Game[] =[game, gameTwo]


// ! having a null value will break the code, unless you use the nullish coalesing operator. this works like a ternary statement in Js. 
for (const game of games) {
    console.log((game.price ?? 0) * 100)
    console.log(game.price?.toString())
}