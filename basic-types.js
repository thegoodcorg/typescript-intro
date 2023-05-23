var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numbers;
numbers = [1, 2, 3, 4, 5];
// ! arrays have a type of object
// console.log(typeof numbers)
var strings;
strings = ["hello", "jimmothy", "corgi"];
var coord;
coord = [0, '1'];
var mixedTypes;
// ! using the spread operator to set the first two values of mixedTypes to the values in coord.
mixedTypes = __spreadArray(__spreadArray([], coord, true), [true], false);
// --
// ! any type will accept any type of variable
var justLikeJS;
justLikeJS = 2;
justLikeJS = "this is a string";
// ! when using a void type in a function, it shows that nothing will be returned.
function printToTheConsole() {
    console.log('some text');
}
var age = null;
var personData = {
    name: 'Tim',
    age: age,
};
var personAge;
personAge = personData.age;
