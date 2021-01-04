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

    //

    const fruits = ['apples', 'oranges', 'pears'];

    cosole.log(fruits);

    So we have our fruits what if we want to acces to one of these, like oranges

    const fruits = ['apples', 'oranges', 'pears'];

    console.log(fruits[1]); // Open up some brackets and put 1 in here

    so if we check that out we get oranges. Now even though, oranges is the second one, the reason thatwe get it from one is becasue arrys is zero based, 0, 1, 2 – apples, oranges, pears

    oranges 

    //

    const fruits = ['apples', 'oranges', 'pears'];

    fruits[3] = 'grapes';

    console.log(fruits[1]);

    //

    Array(4) [ "apples", "oranges", "pears", "grapes" ]

    grapes got added, notice we use const, you can add values to the array, you can manipulate it, you can add methods on it, using the const, the only thing you cant do is take the array and reassign it like this, then you got an error

    const fruits = ['apples', 'oranges', 'pears'];
    fruits = [];

    console.log(fruits);

    //

    Uncaught TypeError: invalid assignment to const 'fruits'

    //

    that´s why you can pretty much use const with arrays, becaus there is not gonna be many types that you are gonna directly reassign it, you are just gonna manipulate it

    so if you wanna add to the end, doing iit this way ...

    const fruits = ['apples', 'oranges', 'pears'];

    fruits[3] = 'grapes';

    console.log(fruits);

    ... isn´t really the best way to do it, because you might not know exactly how many values are in the array, so in that case you use the push method ...

    fruits.push('');

    and push a value into the end

    fruits.push('mangos');

    //

    const fruits = ['apples', 'oranges', 'pears'];

    fruits.push('mangos');

    console.log(fruits);

    //

    Array(4)[('apples', 'oranges', 'pears', 'mangos')];

    // Opened

    (4) […]
​
    0: "apples"
    ​
    1: "oranges"
    ​
    2: "pears"
    ​
    3: "mangos"
    ​
    length: 4

    //

    ... mangos has been added to the end, no mattter how many are into the array.

    If we want to add it into the beginning, you can use unshift

    fruits.unshift();

    let´s say we want to add strawberries

    fruits.unshift('strawberries');

    //

    const fruits = ['apples', 'oranges', 'pears'];

    fruits.unshift('strawberries');

    console.log(fruits);

    //

    Array(4) [ "strawberries", "apples", "oranges", "pears" ]

    //

    ... and you see that strawberriies are added to the beginnings.

    alright, and there is a lot of arrys methods, another one is pop. if you wanna take the last one off, ...

    fruits.pop();

    //

    const fruits = ['apples', 'oranges', 'pears'];

    fruits.pop();

    console.log(fruits);

    //

    Array [ "apples", "oranges" ]

    ... pears is has gone, it pops the last one off.

    Another thing if you want to check if something is an array, you can do ...

    console.log(Array.isArray());

    and pass in the variable 'fruits'

    console.log(Array.isArray(fruits));

    //

    const fruits = ['apples', 'oranges', 'pears'];

    console.log(Array.isArray(fruits));

    ... and you  can see it gives us true

    true

    //

    ... if I were to put lets say a string ...

    const fruits = ['apples', 'oranges', 'pears'];

    console.log(Array.isArray('hello'));

    ... we get false

    false

    //

    ... if you ever wanna check if something is an array, put this in the conditional and get a true or false value

    ... if you want to get an index of a certain value, you can use index of ...

    console.log(fruits.indexOf());

    console.log(fruits.indexOf('oranges'));

    //

    const fruits = ['apples', 'oranges', 'pears'];

    console.log(fruits.indexOf('oranges'));

    //

    1

    //

    ... we can see that 1 is the index of oranges

    ... there is a bunch of other methods, is something that you want to look into. Brad Traversy´s Udemy javascript course go into a lot more, like concatenate arrays and stuuff like that, but these ara just simple common methods.

Object Literals

    Now we are gonna talk about object literals. Object literals are key value pairs, something simple like a person ...

    const person = {
        firstName: 'John', // string
        lastName: 'Doe ', // string
        age: 30, // number
        hobbies: ['music', 'movies', 'sports'], // array, strings
        address: { // embeded object. object within an object
            street: '50 main st',
            city: 'Boston',
            state: 'MA'
        }
    }

    console.log(person.fisrtName, person.lastName);

    //

    John Doe

    //

    ... if you were to alert this. You just gonna get this object object ... alert is not the way to do this kind of stuff.

    //

    ... so this just show us the values ...

        const person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        hobbies: ['music', 'movies', 'sports'],
        address: {
            street: '50 main st',
            city: 'Boston',
            state: 'MA',
        },
    };

    console.log(person);

    //

    Object { fisrtName: "John", lastName: "Doe", age: 30, hobbies: (3) […], address: {…} }

    // Opened

        {…}
    ​
    address: Object { street: "50 main st", city: "Boston", state: "MA" }
    ​
    age: 30
    ​
    fisrtName: "John"
    ​
    hobbies: Array(3) [ "music", "movies", "sports" ]
    ​
    lastName: "Doe"

    //

    ... if yuou wanna access a single value we use the dot syntax ...

    console.log(person.firstName);

    ... and you can log more than one thing, if I use a comma, you can do ...

    console.log(person.firstName, person.lastName)

    ... it will give us both ...

    John Doe

    //

    Let´s say that we wantt to get the movies value, to be printed out in the console ...

    const person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	hobbies: ['music', 'movies', 'sports'],
	address: {
		street: '50 main st',
		city: 'Boston',
		state: 'MA',
	},
};

    console.log(person.hobbies[1]);

    //

    movies

    //

    ... if we want to get the 'city' in the addres object, we would do ...

    console.log(person.address.city);

    //

    ... and we get Boston

    //

    Boston

    //

    We can also use destructuring, if we want to create variables, we wnat these as actual variables, we can do ...

    const { firstName, lastName } = person;

    think of this, not as assigning something, but pulling this out of this person person object.

    const { firstName, lastName } = person;

    console.log(firstName);

    //

    const person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        hobbies: ['music', 'movies', 'sports'],
        address: {
            street: '50 main st',
            city: 'Boston',
            state: 'MA',
        },
    };

    const { firstName, lastName } = person;

    console.log(firstName);

    //

    ... you see get John

    John

    //

    Now if it is an embeded object like address, what we could do is ...

    const { firstName, lastName, address: { city } } = person;

    console.log(city);

    //

    const person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        hobbies: ['music', 'movies', 'sports'],
        address: {
            street: '50 main st',
            city: 'Boston',
            state: 'MA',
        },
    };

    const {
        firstName,
        lastName,
        address: { city },
    } = person;

    console.log(city);

    //

    ... we get Boston

    Boston

    //

    Now, destructuring is kind of advanced, again is part of ES6, os a new feature, rrelatively new, ...

    //

    We can also add properties, ...

    person.email = 'john@gmail.com'

    console.log(person);

    //

    const person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        hobbies: ['music', 'movies', 'sports'],
        address: {
            street: '50 main st',
            city: 'Boston',
            state: 'MA',
        },
    };

    person.email = 'john@gmail.com';

    console.log(person);

    //

    Object { firstName: "John", lastName: "Doe", age: 30, hobbies: (3) […], address: {…}, email: "john@gmail.com" }

    //

    A lot of the time you gonna be dealing with arrays of objects, ...

    //

    const todos = [ // Array uses brackets
        { // We want each value on the array to be an object
            id: 1,
            text: 'Take out trash',
            isCompleted: true,
        },
        {
            id: 2,
            text: 'Meeting with boss',
            isCompleted: true,
        },
        {
            id: 3,
            text: 'Dentist appt',
            isCompleted: false,
        },
    ];

    console.log(todos);

    // If I were to console log todos, we see that we have an array of three values, which are all objects

    (3) […]
    ​
    0: Object { id: 1, text: "Take out trash", isCompleted: true }
    ​
    1: Object { id: 2, text: "Meeting with boss", isCompleted: true }
    ​
    2: Object { id: 3, text: "Dentist appt", isCompleted: false }
    ​
    length: 3

    //

    If we want to grap let´s say, this text, Meeting with boss ...

    //

    const todos = [
        {
            id: 1,
            text: 'Take out trash',
            isCompleted: true,
        },
        {
            id: 2,
            text: 'Meeting with boss',
            isCompleted: true,
        },
        {
            id: 3,
            text: 'Dentist appt',
            isCompleted: false,
        },
    ];

    console.log(todos[1].text); // its the second value in the array, so that is the [1] index, we want just the text property

    //

    Meeting with bosss

    //

JSON

    (Further notetaiking)
    /.../

    const todoJSON = JSON.stringlfy(todos);
    console.log(todoJSON);

    //

    const todos = [
        {
            id: 1,
            text: 'Take out trash',
            isCompleted: true,
        },
        {
            id: 2,
            text: 'Meeting with boss',
            isCompleted: true,
        },
        {
            id: 3,
            text: 'Dentist appt',
            isCompleted: false,
        },
    ];

    const todoJSON = JSON.stringify(todos);
    console.log(todoJSON);

    // a JSON string how we would send data to a server

    [{"id":1,"text":"Take out trash","isCompleted":true},{"id":2,"text":"Meeting with boss","isCompleted":true},{"id":3,"text":"Dentist appt","isCompleted":false}]

    //

Loops

    // For
    for(let i = 0; i < 10; i++) {
        console.log(i);
    }

    //

    for(let i = 0; i<= 10; i++) {
        console.log(i);
    }

    //

    for(let i = 0; i <= 10; i++) {
        console.log(`For Loop Number: ${i}`);
    }

    // While
    let i = 0;
    while(i < 10) {
        console.log(`While Loop Number: ${i}`);
        i++;
    }

    Loop Through arrays

    const todos = [
        {
            id: 1,
            text: 'Take out trash',
            isCompleted: true,
        },
        {
            id: 2,
            text: 'Meeting with boss',
            isCompleted: true,
        },
        {
            id: 3,
            text: 'Dentist appt',
            isCompleted: false,
        },
    ];

    for(let i = 0; i < todos.length; i++) {
        console.log(todos[i].text);
    }

    //

    Object { id: 1, text: "Take out trash", isCompleted: true }
    main.js:20:10
    Object { id: 2, text: "Meeting with boss", isCompleted: true }
    main.js:20:10
    Object { id: 3, text: "Dentist appt", isCompleted: false }

    //

    for(let todo of todos) {
        console.log(todo.text)
    }

    //

    Take out trash main.js:20:10
    Meeting with boss main.js:20:10
    Dentist appt

    //

    for(let todo of todos) {
        console.log(todo.id)
    }

    //

    1 main.js:20:10
    2 main.js:20:10
    3

    //

High Order Array Methods

    // forEach
    loops through them

    // map
    allows to create an array from an array

    // filter
    allows to create a new array based on a condition

    // forEach, map, filter

    // forEach
    todos.forEach(function(todo){
        console.log(todo.text);
    });

    High Order Arrray Methods, takes in as a parameter a function, we pass in a callback function that takes in, ... it can take multiple parameters, but the first is gonna be  the variable that you are gonna use as each item, or in this case each todo

    //

    you can see that we are getting the text of each todo

    //

    Take out trash main.js:20:10
    Meeting with boss main.js:20:10
    Dentist appt

    // This looks much better with arrow functions

    // map

    with map it returns an array

    const todoText = todos.map(function(todo){
        return todo.text;
    });

    console.log(todoText);

    loop through and return the text

    //

    Array(3) [ "Take out trash", "Meeting with boss", "Dentist appt" ]

    // filter

    const todoCompleted = todos.filter(function(todo){
        return todo.isCompleted === true;
    });

    console.log(todoCompleted);

    // we have an  array of two values, the ones that are completted

    Array [ {…}, {…} ]

    // Opened

    (2) […]
​
    0: Object { id: 1, text: "Take out trash", isCompleted: true }
    ​
    1: Object { id: 2, text: "Meeting with boss", isCompleted: true }

    //

    const todoCompleted = todos.filter(function(todo){
        return todo.isCompleted === true;
    }).map(function(todo) {
        return todo.text;
    })

    console.log(todoCompleted);

    // These are very powerful, it is functional programming, you can really manipulate data, pretty much however you want

Conditionals

    const x = '10';

    if (x == 10) {
    console.log('x is 10');
    }

    //

    x is 10

    //

    const x = '10';

    if (x === 10) {
    console.log('x is 10');
    }

    //

    string and number, dont match data type, its not gonna be true

    //

    const x = 20;

    if (x === 10) {
        console.log('x is 10');
    } else {
        console.log('x is NOT 10');
    }

    //

    x is NOT 10

    //

    const x = 20;

    if (x === 10) {
        console.log('x is 10');
    } else if (x > 10) {
        console.log('x is greater than 10');
    } else {
        console.log('x is less than 10');
    }

    //

    x is greater than 10

    //

    const x = 10;

    if (x === 10) {
        console.log('x is 10');
    } else if (x > 10) {
        console.log('x is greater than 10');
    } else {
        console.log('x is less than 10');
    }

    //

    x is 10

    //

    const x = 4;

    if (x === 10) {
        console.log('x is 10');
    } else if (x > 10) {
        console.log('x is greater than 10');
    } else {
        console.log('x is less than 10');
    }

    //

    x is less than 10

    //

    ... so very simple else if

    – Multiple Conditionals

    const x = 4;
    const y = 10;

    if (x > 5 || y > 10) {
        console.log('x is more than 5 or y is more than 10');
    }

    // I dont get either because x is not greater than 5 & y is not greater than 10

    // if I change one of those to true it works

    const x = 4;
    const y = 11;

    if (x > 5 || y > 10) {
        console.log('x is more than 5 or y is more than 10');
    }

    // x is more than 5 or y is more than 10

    //

    const x = 4;
    const y = 11;

    if (x > 5 && y > 10) {
        console.log('x is more than 5 or y is more than 10');
    }

    // if I set to && meaning 'and', it dooesn´t work boths need to be true. Which is much better than nested if statements

    // you could do something like that ...

        if(x > 5) {
        if(y > 10) {
            
        }
    }

    // but the synthesized one is more cleaner.

    // so that´s simple conditional

    – Ternary Operator js

    Terniary Operator is basically a short hand if statement, its used a lot to assign variables based on a condition

    //

    const x = 10;

    const color = x > 10 ? 'red' : 'blue';

    console.log(color);

    // blue, I get blue because x is not greater than x, its equal to 10

    //

    const x = 11;

    const color = x > 10 ? 'red' : 'blue';

    console.log(color);

    // red, I get red because x is greater than 10

    // the question mark '?' is the terniary operator, and it represents then, so if this is true, 'x > 10' then let set the color variable to red, 'else' which is represented with a colon ':' then let set it to blue. x > 10 ? 'red' : 'blue';

    – Switches

    switches are another way to evaluate a condition ...

    const x = 11;

    const color = x > 10 ? 'red' : 'blue';

    switch (
        color // to evaluate whatever the color is we set cases
    ) {
        case 'red':
            console.log('color is red');
            break;
        case 'blue':
            console.log('color is blue');
            break;
        default:
            console.log('color is NOT red or blue');
            break;
    }

    // color is red

    // if I change this to 9

    const x = 9;

    const color = x > 10 ? 'red' : 'blue';

    switch (
        color // to evaluate whatever the color is we set cases
    ) {
        case 'red':
            console.log('color is red');
            break;
        case 'blue':
            console.log('color is blue');
            break;
        default:
            console.log('color is NOT red or blue');
            break;
    }

    // color is blue

    // if it change to something else

    const x = 9;

    const color = 'green';

    switch (
        color // to evaluate whatever the color is we set cases
    ) {
        case 'red':
            console.log('color is red');
            break;
        case 'blue':
            console.log('color is blue');
            break;
        default:
            console.log('color is NOT red or blue');
            break;
    }

    // color is NOT red or blue

Functions

    'function' keyword, a function that add two numbers

    function addNums(num1, num2) { // Inside the parantesiis we can put parameters
        console.log(num1 + num2); // We can do any kind of basic math

    }

    addNums(5,4); // function calling passing the parameters

    // 9

    //

    function addNums(num1, num2) {
        console.log(num1 + num2);
    }

    addNums();

    // NaN, what it means is Not a Number, it should be a number but is not

    //

    ... with functions we  can set values for our parameters ...

    //

    function addNums(num1 = 1, num2 = 1) {
        console.log(num1 + num2);
    }

    addNums();

    // 2, i did not passed anithing in but is going to use these default values

    //

    function addNums(num1 = 1, num2 = 1) {
        console.log(num1 + num2);
    }

    addNums(5, 5);

    // 10, if I pass (5, 5), it´s gonna overwrite the default values

    //

    // ... Now, for the most part you are not gonna console log att a function, you are usually to return something from it

    function addNums(num1 = 1, num2 = 1) {
        return num1 + num2;
    }

    addNums(5, 5);

    // Now if I save nothing is gona print in the console, because we havent logged anything, if we want to log we jus grap this whole thing in a console.log

    function addNums(num1 = 1, num2 = 1) {
        return num1 + num2;
    }

    console.log(addNums(5, 5));

    – Arrow Functions

    // ... as far ad arrrow functions go, they are very handy, and they clean things up quite a bit, they were introduced in ES6, also known as ES2015.
    // so if we want to turn this into an arrow fuunction ...

    // ... what we would is ... instead of using  the keyword 'function', we would name it as a variable, and then put an equal sign before the parentesis, and after the parameters we put what we call a fat arrow '=>'

    const addNums = (num1 = 1, num2 = 1) => {
        return num1 + num2;
    };

    console.log(addNums(5, 5));

    // 10, we get the same thing

    ... what is nice about this is, ... if it is just one expression, ...

    const addNums = (num1 = 1, num2 = 1) => {
        console.log(num1 + num2);
    };

    addNums(5, 5);

    // 10

    ... since we only have one expression meaning we dont have variables being assigned or any other lines, anything else happening, ...

    const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);

    addNums(5, 5);

    // 10

    
    ... we dont even need these cuurly braces, we can just do this all in one line, just like that ...

    Alright, if you want to return something, this is even better, you dont event need the 'return' keyword, ...

    const addNums = (num1 = 1, num2 = 1) => num1 + num2;

    console.log(addNums(5, 5));

    // 10

    
    ... we can just simply take away the console log, and put it down here ...

    ... so no need to do return, in fact if you do this ...

    ... it wont even work

    //

    const addNums = (num1 = 1, num2 = 1) => return num1 + num2;

    console.log(addNums(5, 5));

    // Uncaught SyntaxError: unexpected token: keyword 'return'

    //

    you can put your parentesis back, like that, and that would work ...

    const addNums = (num1 = 1, num2 = 1) => {
        return num1 + num2;
    };

    console.log(addNums(5, 5));

    // 10

    //

    ... but you can get rid off the curly braces and the return, and just slim it down a lot ...

    const addNums = (num1 = 1, num2 = 1) => num1 + num2;

    console.log(addNums(5, 5));

    // 10

    ... Now if you only have one parameter, you dont even need a parentesis, ... so you can do ... 

    const addNums = (num1) => num1 + 5;

    console.log(addNums(5));

    // 10

    ... so you can see this cut things down ...
    ... and is great to use with forEach or any of the array methods that we can pass in

    // 

    todos.forEach((todo) => console.log(todo)); // console log each todo

    – The Lexical This

    // ... so when you have the 'this' keyword the scoping is a little different, ...
    ... it has an extra advantage when you use the 'this' keyword, in certain situations

Object Oriented Programming

– Constructor Function

    // now, we have already look at object literals, however we can construct objects using what is called the constructor function. Now there are two ways to do this, we can use constructor function, with prototypes, and we can use also ES6 clases, ...

    ... so let´s say we want a person object, so we are gonna say: function Person, with a  capital 'P', when you create a constructor function it should have, ... it should start with a capital, ... and as far as parameters, you are gonna pass in the properties you wanna be able to set, so let´s do: 'firstName', 'lastName', and let´s do date of birth 'dob', ...

    ... now when we pass then in, we wanna set them to the properties of the object, so we do that with 'this' keyword ...

    // Constructor Function
    function Person(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }

    ... and down here, we instantiate an object with a constructor function ...
    ... we can create a variable, just let call it person1, and we will set it to new Person ...
    ... remember we do a new Array earlier, that was a built in constructor, and there is a bunch, ...
    ... we ceated a custom Person constructor, ... and this is  gonna take in a first name, a last name, a date of birth ...

    // Instantiate object
    const person1 = new Person('John', 'Doe', '4-3-1980');

    // so we actually  just created a Person object, ... so console log person1

    console.log(person1); 

    // we save and you notice  that we have a persoon object, which looks just like the object  literal, however is prefixed like the actual name of the object, which is Person

    main.js:11 Person {firstName: "John", lastName: "Doe", dob: "4-3-1980"}

    //

    // Constructor Function
    function Person(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }

    // Instantiate object
    const person1 = new Person('John', 'Doe', '4-3-1980');

    console.log(person1);

    //

    main.js:11 Person {firstName: "John", lastName: "Doe", dob: "4-3-1980"}

    //

    // now, we can create as many person as we want, we can do person2, and pass in different values, like ...

    const person2 = new Person('Mary', 'Smith', '4-3-1970');

    //

    // Constructor Function
    function Person(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }

    // Instantiate object
    const person1 = new Person('John', 'Doe', '4-3-1980');
    const person2 = new Person('Mary', 'Smith', '4-3-1970');

    console.log(person2.firstName);

    // Mary

    ... lets take a site route for a second, and talk aboout dates, because right now I passed the date of  birth as  a string, however we can turn this into a date object, by using a date constructor ...
    ... so we have set it up here, we pass it in as string, and I am gonna set up to new Date and surround that string ...
    ... now if I go down here and I print out the person´s date of birth ... 


    // Constructor Function
    function Person(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    // Instantiate object
    const person1 = new Person('John', 'Doe', '4-3-1980');
    const person2 = new Person('Mary', 'Smith', '4-3-1970');

    console.log(person2.dob);

    // ... you can see we get an actual date object

    main.js:12 Fri Apr 03 1970 00:00:00 GMT+0100 (hora estándar de Europa central)

    ... and if you put it the time you can actually put in the  hoours minutes seconds, that will show up aswell ...

    ... so when you have a date object, there is a bunch of methods you can call on it, so for instance, we can do '.' dot, and in VSCode they actually show up in the metabox, so for instance, we can do getFullYear(), ... put it some parentesis, and we get ...

    ... so we can really do different things with the dates, and format them in different ways ...

    ... now ... I am going to show you that we can actually  add methods, which are basically functions to this person object ...

    ...

    this.getBirthYear = function() {
            
        };

    ... and I am going to return from this function ...
    ... this.dob ... because I can access the objects properties using 'this', and let´s use ... getFullYear();
    
    this.getBirthYear = function() {
            return this.dob.getFullYear();
        };

    // ...

    // Constructor Function
    function Person(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
        this.getBirthYear = function () {
            return this.dob.getFullYear();
        };
    }

    // Instantiate object
    const person1 = new Person('John', 'Doe', '4-3-1980');
    const person2 = new Person('Mary', 'Smith', '4-3-1970');

    // ... now down here I can call person1 and we can call this method getBirthYear(); ... we need to  log it though

    console.log(person1.getBirthYear());

    // ... You can create fuunctions like this

    ... and we get 1980, brad gets 1980, I got NaN ...

    ... let´s do one to get the full namme ...
    ... so this.getFullName equals function ...
    ... and  we just return ... we use a template literal here ... and ...

    this.getFullName = function () {
            return `${this.firstName} ${this.lastName}`;
        };

    ... let´s console log it ...

    // lets run the method getFullName()

    // Constructor Function
    function Person(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
        this.getBirthYear = function () {
            return this.dob.getFullYear();
        };
        this.getFullName = function () {
            return `${this.firstName} ${this.lastName}`;
        };
    }

    // Instantiate object
    const person1 = new Person('John', 'Doe', '4-3-1980');
    const person2 = new Person('Mary', 'Smith', '4-3-1970');

    console.log(person1.getBirthYear());
    console.log(person1.getFullName());

    // ... and you get John Doe

    ... you can put absolutely any functionality that you want here, ...
    ... and you can integrate the different properties for each object ...

Prototypes

    ... I want to talk a little bit about protoypes, because the above exercise isnt the best way to do it ...

    ... if I were to console log person1, and take a look down in the console ...
    ... we have the properties, firstName, lastName, getFullBirth, getFullName ... however we also have the  function right in the object ... now, notice the __proto__,
    ... this is the way we can  see the proptotype, is another object, but we can attach properties and methods to the prototype, you can see we have a constructor in here, ...
    ... now what Brad Traversy like to do is not have the fuunctions with every object instance, because we might not need to use these, so we want to put these in the proptotype ... so the way we can do that is under the function ...

    ... use Person.prototype, and then name it, we will say getBirthYear, equals function(), ... and the return line from the constructor function, set it in the prototype function, and completely get rid off the previous return line in the constructor, ... and do the same with the getFullName, ... we can say person.prototype, so we add on a prototype a method 'getFullName', which is a function, and grap the return of the constructor functioon and set it right in there.

    //

    // Construction function
    function Person(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    Person.prototype.getBirthYear = function () {
        return this.dob.getFullYear();
    };

    Person.prototype.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };

    // Instantiate object
    const person1 = new Person('John', 'Doe', '4-3-1980');
    const person2 = new Person('Mary', 'Smith', '4-3-1970');

    ... so now I am able to call these methods, so I can do ...

    console.log(person2.getFullName());
    console.log(person1);

    //

    // Construction function
    function Person(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    Person.prototype.getBirthYear = function () {
        return this.dob.getFullYear();
    };

    Person.prototype.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };

    // Instantiate object
    const person1 = new Person('John', 'Doe', '4-3-1980');
    const person2 = new Person('Mary', 'Smith', '4-3-1970');

    console.log(person2.getFullName());
    console.log(person1);


    ... and it works ...

    // Mary Smith

    ... and if you look at the console log of the person, notice that you dont see the function here, right in the object, but if we look in the prototype, then we have getBirthYear, and getFullName either, along with the constructor ...

    ... Alright, that´s basically object oriented programming in ES5, so preclases, with ES6 classes were added to javascript...
    ... now ... its important to know that with classes, it does the same exact thing under the hood, it adds the method to the prototype, so everything looks the same, however, is what is know as 'syntatic sugar', which it means that its a prettier way to write it, but it does the same thing under the hood ...

    ... I am gonna leave this stuff here 'instantiate object' and I gonna replace this 'constructor function' with a class with methods ...

ES6 Classes

    ... so to create a class ... what we would is say class and the call it Person

    // Class
    class Person {}

    ... just like we created the constructor function uphere ... we just add a function here, a 'method0 I should say, a 'method' is a function inside of a class, call constructor, and this is gonna take in the same stuff that the previous constructor function does, the properties ...

    // Class
    class Person {
        constructor(firstName, lastName, dob) {}
    
    ... and we assign the properties, the same thing that we  did previously in the constructor function ...

    // Class
    class Person {
        constructor(firstName, lastName, dob) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.dob = new Date(dob);
        }

    ... and any method that we want to add to this class such as, getBrthYear(), or getFullName(), instead of use this '.prototype' syntax ...

        Person.prototype.getBirthYear = function () {
            return this.dob.getFullYear();
        };

        ... we can  simply put it in here, si we can say ...

    getBirthYear() {

    }

    ... and I grab the functionality passed in here

    getBirthYear() {
        return this.dob.getFullYear();
    }

    ... and let say we also want ...

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    ... now this is doing the same thing, it just a prettier way, it´s using classes that are included in a lot of other programming, so it allows people that come form  other backgrounds to be familiar with this, rather than dealing with prototypes ...

    // Class
    class Person {
        constructor(firstName, lastName, dob) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.dob = new Date(dob);
        }

        getBirthYear() {
            return this.dob.getFullYear();
        }

        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    // Instantiate object
    const person1 = new Person('John', 'Doe', '4-3-1980');
    const person2 = new Person('Mary', 'Smith', '4-3-1970');

    console.log(person2.getFullName());
    console.log(person1);

    ... all the instantiation and all of that, it all works the same ...

    ... we get the same result, so we call person2 getFullName, we instantiate Mary, and if we look at 'Person' we have the same properties, and if we look at the prototype we get getBirthName & getBirthName, so that adding these methods to the class, added them to  the prototype, just like we did before ... so thats why its called syntactic sugar, you are doing the same thing, you are just doing it in a different way, its a little prettier, and a little easier to write and read. So you  dont have to use classes, but I mean, I prefer them, because they are easier to write, I think they are more organize, ... so thats pretty much the basics of object oriented programming

Window Object & DOM

    ... I have some ... 
    
    ... the DOM Ducument Object Model, its basically like a tree structure of your whole document, so your html tags and stuff like that, I do have a full apart crash course on Youtube called javascript DOM Crash Course, so if you wanna learn more about what we are going to talk about, check that course is four videos, they are lilke thirty or fourty minutes, there is a lot in it, you are gonna cover  the basic here ...

    ... I want to talk about selection, selecting things from the DOM, we can actually take elements and put  it into variables, and stuff like that and work with them ...

    ... so as far a selectors go ...

    ... we have Single element selectors, and we have multiple elements selectors ...

Single Element Selector

    ... so as far as single element selector, we have document, ok, these are gonna be in the document object ...
    ... so in the browser we have what is called the window object,... and the window object is the parent object of the browser, ... you can see that it actually have the alert function, now, when we did alert, we did it like this, alert(1); ... that runs ... howeverr this is actually part of the window object ... I can say, window.alert(1) and that also works, since window is the very topo level, we dont actually have to do 'window.' for anything that is in window, and you see there is other stuff, like for instance, 'localStorage' thats a way to store stuff in your browser, thats part of the window object, you can get the innerHeight, these properties, innerHeight, innerWidth, the fetch API is in the window object, so the  whole fetch API to make HTTP request, the document its what I want to show you though, this is what makes up the DOM, the 'Document Object Model', and you can see there is other types of properties and methods and stuff like that ...

    ... so documents is what we want to use to select things for the document ...
    ... so I want to say ...

    document.

getElementById

    ... and one selector that is used to grab single elments is 'getElementById();' which has been arround for quite a while ...

    document.getElementById();
    
     ... and we can pass it an 'id', if we look at our HTML we have a form that it has an 'id="my-form"', let´s say we wnat to grab that, we can just pass in ...

     document.getElementById('my-form')

     ... and what i do is console log this

    //Single Element
    console.log(document.getElementById('my-form'));
    
    ... if I save that you see that it actually log that element  down in the console ...

    <form id="my-form">

    ... and we can even assign this to a variable ...
    ... we console log ..

    //Single Element
    const form = document.getElementById('my-form');
    console.log(form);

    ... and we get the same thing

    <form id="my-form">

    ... another one is querySelector, which is much newer than getElmentById, ... now fir a long time people used jquery, that is a javascript library, that made it easy to select other things than ids, so things like classes, tags themselves, pretty much anthing, ... and querySelector works just like jquery, for the most part in terms of selecting, single elments, so we can select anything, if we look here, if we wanna grab lets say the container, its a class, right, so we will say '.container' ...

    //Single Element
    console.log(document.querySelector('.container'));

    ... you can see that its gonna log that ...

    <section class="container">

    ... we can actually use a tag, so if we do 

    //Single Element
    console.log(document.querySelector('h1'));

    ...  and it will give us ...

    <h1>

    ... now like I sayed its a single element selector, so even if its more than one h1, its only gonna select the first one ...

    ... now there is multiple Element Selctors, if you want to select more than one thing, so for instance ...




    
    
    
    
    
    
    
    
    
    
    /.../


































































    /.../

        TIMESTAMPS:
    Script Tags - 6:46
    Console Output - 8:20
    Variables - 11:15
    Data Types - 14:18
    Strings & String Methods - 18:38
    Arrays - 23:53
    Object Literals - 30:09
    Arrays Of Objects & JSON - 34:20
    Loops - 37:40
    High Order Array Methods - 42:24
    Conditionals - 46:30
    Functions - 53:23
    Arrow Functions - 56:22
    Constructor Functions & Prototypes - 59:25
    ES6 Classes - 1:07:21
    Window Object & DOM - 1:10:30
    DOM Selection - 1:14:50
    Manipulating The DOM - 1:20:05
    Events - 1:24:40
    Form Script - 1:30:39












