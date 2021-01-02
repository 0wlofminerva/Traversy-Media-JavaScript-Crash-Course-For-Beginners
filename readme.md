                     **  notetaking **

Javascript Course For Beginners

What is Javascript?

    – High level, interpreted programming language
    – Conforms to the ECMAScript specification
    – Multi-paradigm
    – Runs on  the client/browser as well as on the server (Node.js)

Why learn Javascript?

    – It is the programming language of the browser
    – Build very interactive user interfaces with frameworks like React
    – Used in buuilding very fast serrver side and full stack applications
    – Used in mobile development (React Native, NativeScript, Ionic)
    – Used in desktop applicatiioin development (Electrron JS)

What you will learn in this course

    – Variables & Data Types
    – Arrays
    – Object Literals
    – Methods for strings, arrays, objects, etc
    – Loops - for, while, for...of, forEach, map
    – Conditionals (if, ternary & switch)
    – Functions (normal & arrow)

Further Learning

– modern Javascript from the beginning
    21 Hour Udemy Course

    Youtube

        – Javascript DOM Crash Course - 4 parts
        – JS OOP Crash Course
        – High Order Array Methods Video
        – Async JS Crash Course
        – Fetch API & Ajax Crash Courses
        – Vanilla JS Playlist (Full of small projects)
        – Frameworks crash courses

// output to the console from our script
// https://developer.mozilla.org/en-US/docs/Web/API/Console_API
// Mozilla Developer Network
// The best documentation for Javascript

    // console.log('Hello World');
    // console.error('This is an error');
    // console.warn('This is a warning');
    // Etc ...

– var, let, const

    var, youu dont want really use it anymore,
    now that you have let & const,
    // because var is globaly scope.

    // if you have a conditional,
    // an if statement, and we set a variable,
    // and then outside of that block,
    // outside of that statement there is another variable with the same name,
    // there can be a conflict, and it can cause problems, so for the most part you dont use var anymore.

–let, const 

    were added with ES6 or ES2015,
    ES stands for ECMAScript, so that was a huge upgrade to javascript,
    that gave us a lot of functionality.

    The differences between let & const is that with let you can reassign values.

let age = 30;

console.log(age);

//

let age = 30;
age = 31; // Reassigned variable

console.log(age);

//

const age = 30; // const is short for constat, which means it can be change
age = 31; // it cant be directly reassigned

console.log(age);

// Uncaught TypeError: invalid assignment to const 'age'

//

This begs the question, when do we use let and when do we use const?
Some people just use let, other people do is:
Always use const unless you know you are gonna reassign the value.
This makes you code more robust, more secure, less prompt to errors

Am example of something I would reassign wouuld be a score in a game:

let score; // Initialize

score = 10;

console.log(score);

//

const score; // Even if we dont reassign it we cant even initialize

console.log(score);
// Uncaught SyntaxError: missing = in const declaration

// Because you have to add a value if you use const

const score = 10;

console.log(score);

//

But for the most part you are not gonna reassign the values like this:
const score = 10;
and when you are dealing with arrays, objects, and stuff, you can change the values within the array of objects, you just can reassing the entire thing.



