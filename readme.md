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

var, let, const

– var, let, const

    var, youu dont want really use it anymore,
    now that you have let & const,
    // because var is globaly scope.

    // if you have a conditional,
    // an if statement, and we set a variable,
    // and then outside of that block,
    // outside of that statement there is another variable with the same name,
    // there can be a conflict, and it can cause problems, so for the most part you dont use var anymore.

let, const

– let, const 

    let & const have a block-level scope

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

Am example of something I would reassign would be a score in a game:

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

Data types

– Data Types

    – Primitive Data Types

    What types of data we can assign to these variables
    We have permanent data types, which means the data is directly assign to memory, its not a resource

    // String, Numbers, Boolean, null, undefined, Symbol*1
    *1 Symbols was added in ES6, we are not going over symbols, it is beyond the scope of this tutorial, its not something that common.


    const name = 'John'; // String, can have double or single quotes, semicolons are not mandatory
    const age = 30; // Number its just a number with no quotes arround it
    const rating = 4.5; // Decimal Number. Even thought it is a decimal, there is no flow or decimal data ttype in js its just a number
    const isCool = true; // Boolean, its set either true or false, no quotes
    const x = null; // null means its basically empty, its a variable but there is nothing in it
    const y = undefined; // we can explicitly define undefined
    let z; // or we can initialize something using let, if I do let z; with no value, its gonna be undefined aswell

    consolet.log(typeof x)
    
    // if we wanna test the type we can do typeof and put the name of the varible

    consolet.log(typeof name) --> string
    consolet.log(typeof age) --> number
    consolet.log(typeof rating) --> number
    consolet.log(typeof isCool) --> boolean
    consolet.log(typeof x) --> object*2
    consolet.log(typeof y) --> undefined
    consolet.log(typeof zs) --> undefined

    *2 in the first implementation of javascript, Javascript values were represented as a type tag and a value, with the type tag for objects being 0, and null was rrepresented as the NULL pointer ( 0x00 on most platforms). As a result, null had 0 as a type tag, hence the bogus typeof return value (reference)

    *2 In JavaScript null is "nothing". It is supposed to be something that doesn't exist. Unfortunately, in JavaScript, the data type of null is an object. You can consider it a bug in JavaScript that typeof null is an object.

    Those are the main primitive data types, of course we have arrays, and object literals, and stuff like that. But those are onjects, primitive data types.

    string number, boolean, null, undefined

    //

strings

    – Strings

    const name = 'John';
    const age = 30;

    // Concatenation
    console.log('My name is ' + name + 'and I am ' + age); // Older method concatenation. 'string' + plus sign to concatenate on the variable, same on the other side, use the plus sign & concatenate the rest of the string, and the same with the age variable

    // Template String ES6
    console.log(`My name is ${name} and I am ${age}`); // instead of quotes use backticks, whenever we use a variable we use this syntax ${}, money sign & curly braces

    const hello = `My name is ${name} and I am ${age}`; // We can assign this to a variable
    console.log(hello);

    // A cuople couple of String properties & methods

    const s = 'Hello World'; // String

    console.log(s.lenght) // a property doesnt have parentesis
    console.log(variable.property)
    console.log(variable.method()) // if it has parentesis is a method

    //

    const s = 'Hello World';

    console.log(s.toUpperCase()); // A method is basically a function that is associated with an object

    console.log(toLowerCase());
    console.log(s.substring(0, 5)); // a substring, it takes two indexes, where you want to start and end, it actually stop before five

    Hello

    //

    console.log(s.substring(0, 5).toUpperCase()); // you can tack on other methods aswell

    split a string into an array, a method called split, as a parameter it takes whatever youu can split by, if you want to split by letter, you put empty quotes without a space

    const s = 'Hello World!'

    console.log(s.split(''));

        (12) […]
    ​
    0: "H"
    ​
    1: "e"
    ​
    2: "l"
    ​
    3: "l"
    ​
    4: "o"
    ​
    5: " "
    ​
    6: "W"
    ​
    7: "o"
    ​
    8: "r"
    ​
    9: "l"
    ​
    10: "d"
    ​
    11: "!"
    ​
    length: 12
    ​
    <prototype>: Array []

    a lot of times what we will do is, let´s say we have like a form, we are adding a block post, and we are adding tags, you might have:

    const s = 'technology, computers, it, code';

    and let´s say you wanna take that string and create an array from it. Now, as a separator in this case we would use coma space, because in between each word there is a coma space, so I put it in the method, ... 
    
    console.log(s.split(', '));

    //

    const s = 'technology, computers, it, code';

    console.log(s.split(', '));

    //

    Array(4) [ "technology", "computers", "it", "code" ]
    
    ... and with that I have an array of four values, and we have each word in each array value.

    it´s pretty handy because you can insert that into a data base, and you can search to it, and stuff like that. So, it comes in handy.

Comments

    // double forward slash. Line comments

    /* multi
    line 
    comments
    asterisk foward slash
     */

Arrays

    – Arrays

    // Arrays - variables that holds multiple values
    
    The array constructor:
    let´s create a variable called numbers, and set that to new Array, so when you see this 'new' keyword, this is a constructor, so we are constructing an array, and we can pass in, let´s put some numbers ...

    const numbers = new Array(1,2,3,4,5);

    console.log(numbers);

    //

    Array(5) [ 1, 2, 3, 4, 5 ]

    // Opened

        (5) […]
    ​
    0: 1
    ​
    1: 2
    ​
    2: 3
    ​
    3: 4
    ​
    4: 5
    ​
    length: 5
    ​
    <prototype>: Array []

    ... and we get an array with five values, one to five, thts using the constructor

    but, for the most part you are gonna set brackets, and you arre gonna create your array ...

    const fruits = ['apples', 'oranges', 'pears', ]

    console.log(fruits);

    //

    Array(3) [ "apples", "oranges", "pears" ]

    // Now, in Javascript you can have multiple data types, within the same array, i can put a number in here, I can put a Boolean, whattever I want, and that´s fine.  In other languages you have to have the same data type in your array, in fact there is quite a few languages that you have to set the number aswell, which can be kind of a pain. So Javascript give you a  lot of freedom

    const fruits = ['apples', 'oranges', 'pears', 10, true ]

    console.log(fruits);

    Javascript is not statically typed.
    Typescript which is a superset of javascript, it´s basically javascript with some added features, and static typing is one of those.





