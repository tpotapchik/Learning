function changeText() {
    let y = document.getElementsByTagName("h1")[0].innerText = "Text has been changed";
    console.log(y);
}

document.getElementById('changeText').addEventListener('click', () => {
    changeText();
});

//primeNum
document.getElementById('primeNum').addEventListener('click', () => {
    primeNum(10);
});

function primeNum(n) {
    anotherNum:
        for (let i = 2; i <= n; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue anotherNum;
            }
            console.log(i);
        }
}

//methodsExample
let me = {
    name: 'Tanya',
    sayMe: function () {
        console.log(`hi, i'm ${this.name}`);
    },
};

document.getElementById('methodsExample').addEventListener('click', () => {
    me.sayMe();
});

//Hoisting
document.getElementById('hoisting').addEventListener('click', () => {
    // only for var - Hoisting
    b(); //b
    a(); //TypeError: a is not a function cause a in undefined

    function b() {
        console.log('b');
    }

    var a = function () {
        console.log('a');
    };

// a(); only here it works
});

//Immediate Invoked Function Expression
document.getElementById('iife').addEventListener('click', () => {
    // first case
    function a() {
        console.log('a');
    }

    a();

// another case - we can call this function Immediate Invoked Function Expression
    (function a() {
        console.log('a - iife');
    }());
});

//from Array to String
document.getElementById('fromArraytoString').addEventListener('click', () => {
    let fruitString = 'apple, banana';
    let fruitArray = fruitString.split(', ');
    console.log(fruitArray);	// ['apple', 'banana']
    let fruitString2 = fruitArray.reverse().join(';');
    console.log(fruitString2);	// 'banana;apple
});

//implicit
document.getElementById('implicit').addEventListener('click', () => {
    console.log(+'abc0');
    console.log(+'0');
    console.log(+'\n4');
    console.log(+'   4');
    console.log(parseInt("4px;"));
    console.log(null == null);
    console.log(null == undefined);
    console.log(undefined == undefined);
    console.log(NaN == NaN);
    console.log(NaN == 'any value');
    console.log('' + 1 + 0);
    console.log('' - 1 + 0);
    console.log(null + 1);
    console.log(undefined + 1);
    console.log(7 / 0);
    console.log(' \t \n' - 2); //-2
});

//for cycle
document.getElementById('arrayFor').addEventListener('click', () => {
    let data = [
        {
            firstName: 'Ashton',
            lastName: 'Kutcher',
            age: 40
        },
        {
            firstName: 'Bradley',
            lastName: 'Pitt',
            age: 54
        },
        {
            firstName: 'Hannah',
            lastName: 'Dakota',
            age: 24
        },
    ];

    let lastName = prompt('Please insert last name').toLowerCase();
    let user = null;

    if (lastName) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].lastName.toLowerCase() === lastName) {
                user = data[i];
                break;
            }
        }

        if (user) {
            console.log(`user name: ${user.firstName} ${user.lastName}; user age: ${user.age}.`);
        }
        else {
            console.log('No results found for your request');
        }
    }
    else {
        console.log('Please fill in the field');
    }
});

//for of Example Array
document.getElementById('forOfExampleArray').addEventListener('click', () => {
    let arr = ['1a', '2b', '3c'];

    for (let val of arr) {
        console.log(val);
    }
});

//functions examples + closure
document.getElementById('closure').addEventListener('click', () => {
    function hello(name) {
        return `Hello ${name}`;
    }

    console.log(hello('Tanya'));

    const greet = (name) => {
        return `Hello again ${name}`;
    };

    console.log(greet('Tanya'));

//closure замык
    function sum(a, b) {
        let sum1 = a + b;
        return function () {
            console.log(sum1);
        }
    }

    let showSum1 = sum(2, 5);
    showSum1();

    let showSum2 = sum(5, 10);
    showSum2();

    showSum1();

//return new array but function is one
    let arr = ['1', '2', '3'];

    function modifyArray(arr, modifier) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = modifier(arr[i]);
        }
        return arr;
    }

    const multiplyBy2 = item => item * 2;
    const powBy3 = item => item ** 3;

    arr = modifyArray(arr, multiplyBy2);
    console.log(arr);
    arr = modifyArray(arr, powBy3);
    console.log(arr);

    //function is one
    function getRaiser(pow) {
        return function (num) {
            return num ** pow;
        }
    }

    const squared = getRaiser(2);
    console.log(squared(2)); //4

    const cube = getRaiser(3);
    console.log(cube(2)); //8

    console.log(getRaiser(2)(3));

    //лишние аргументы игнорируюся
    function sumAll(a, b, c, d, e, f) {
        return a + b + c + d + e + f;
    }

    console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9));
});

//rest (склеивает) and spread ()
document.getElementById('restSpread').addEventListener('click', () => {
    //spread
    const numbers = [1, 2, 3, 4, 5];
    console.log(Math.max(numbers)); //NaN
    console.log(Math.max(1, 2, 3, 4, 5)); //5

    console.log(Math.max(...numbers)); //5
    console.log(...numbers);// 1 2 3 4 5

    //rest operator
    function summarizeAll(...numbers) {
        let total = 0;
        for (let number of numbers) {
            total += number;
        }
        return total;
    }

    let result = summarizeAll(1, 2, 3, 4, 5, 6, 7, 8, 9); // 45
    console.log(result);

    function summarizeAll2(first, second, ...numbers) {
        let total = first + second;
        for (let number of numbers) {
            total += number;
        }
        return total;
    }

    let result2 = summarizeAll2(1, 2, 3, 4, 5, 6, 7, 8, 9); // 45
    console.log(result2);
});

//callbacks
document.getElementById('callbacks').addEventListener('click', () => {
// instead of of two functions
    const arr = ['Tanya', 'Misha', 'Lera', 'Andrey'];
    let newArr1 = [];
    for (let i = 0; i < arr.length; i++) {
        newArr1.push(arr[i].length);
    }
    console.log(newArr1);

    let newArr2 = [];
    for (let i = 0; i < arr.length; i++) {
        newArr2.push(arr[i].toUpperCase());
    }
    console.log(newArr2);

//we can use callbacks
    function mapArray(arr, fn) {
        const res = [];
        for (let i = 0; i < arr.length; i++) {
            res.push(fn(arr[i]));
        }
        return res;
    }

    function getNameLength(el) {
        return el.length;
    }

    function getNameUppercase(el) {
        return el.toUpperCase();
    }

    const result = mapArray(arr, getNameLength);
    const result2 = mapArray(arr, getNameUppercase);
    console.log(result);
    console.log(result2);
});

//task 1
document.getElementById('checkIfPalindrome').addEventListener('click', () => {
    function isPalindrome(value) {
        value = value.toLowerCase();
        let revertedValue = value.split('').reverse().join('');

        if (value === revertedValue) {
            console.log(`${value} is a palindrome`);
        }
        else {
            console.log(`${value} is not a palindrome`);
        }
    }

    isPalindrome('Шалаш');
    isPalindrome('привет');
});

//task 2 more complex
document.getElementById('uniqueArrayNumbers1').addEventListener('click', () => {
    const arr = [];
    arr.length = 7;
    const sortFunction = (a, b) => (a - b);

    const getRandomNumber = (numbers) => {
        const random = Math.round(Math.random() * 10);
        if (numbers.includes(random, 0)) {
            return getRandomNumber(numbers);
        } else {
            return random;
        }
    };

    for (let i = 0; i < arr.length; i++) {
        arr[i] = getRandomNumber(arr);
    }

    console.log('arr ' + arr);
    console.log('arr ' + arr.sort(sortFunction));
});

//task 2 simple
document.getElementById('uniqueArrayNumbers2').addEventListener('click', () => {
    let arr = [];
    arr.length = 7;
    const getRandom = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };

    const sortFunction = (a, b) => (a - b);

    for (let i = 0; i < arr.length; i++) {
        let random = getRandom(0, 10);

        while (arr.includes(random)) {
            random = getRandom(0, 10);
        }
        arr[i] = random;
    }

    console.log('arr ' + arr);
    console.log('arr ' + arr.sort(sortFunction));
});

//task 3
document.getElementById('arrayNumbersToZero').addEventListener('click', () => {
    const arr = [];
    arr.length = 10;

    for (let i = 0; i < arr.length; i++) {
        let number = Math.round(Math.random() * 100);

        if (number % 10 === 0) {
            number = number.toString().split('0').join('zero');
            arr[i] = number;
        }
        else {
            arr[i] = number;
        }
    }
    console.log(arr);
});

document.getElementById('callBind').addEventListener('click', () => {
//closure
    function greet(name) {
        return function () {
            return `Привет, ${name}`;
        }
    }

    let helloWorld = greet('мир!');
    console.log(helloWorld());

    let arr = [0, 1, 2].map(item => {
        return item *= 2; // callback returns what we need
    });
    console.log(arr);

    let arr2 = [0, 1, 2].filter(item => {
        return item > 0; //true или false вовзр (callback)
    });
    console.log(arr2);

//call
    function getSquare(s1, s2) {
        return this.x * this.y + s1 + s2;
    }

    const balcon = 3;
    const door = 1;
    let first = {
        x: 4,
        y: 10
    };

    let second = {
        x: 8,
        y: 10
    };

    let firstS = getSquare.call(first, balcon, door);
    let secondS = getSquare.call(second, balcon, door);

    console.log(firstS);
    console.log(secondS);

// call vs bind
    function sum1(i, k) {
        return this.a + this.b + i + k;
    }

    const obj1 = {
        a: 1,
        b: 2,
    };

    console.log(sum1.call(obj1, 3, 4)); //10
    console.log(sum1.apply(obj1, [3, 4])); //10

    function sum() {
        return this.a + this.b;
    }

    const temp = {
        a: 3,
        b: 4,
    };
    const sum2 = sum.bind(temp);
    console.log(sum2); //??

    const block = {
        a: 1,
        b: 2,
        sum: sum,
    };
    console.log(block.sum()); //3
    console.log(sum()); //NaN

    function summary(a, b) {
        return a + b;
    }

    let sumWith5 = summary.bind(null, 5);
    console.log(sumWith5(3));
});

document.getElementById('shortExampleThis').addEventListener('click', () => {
// this
// example 1
    (() => {
        const prod1 = {
            name: 'Intel',
            price: 100,
            getPrice: function () {
                console.log(this);
            }
        };
        prod1.getPrice(); //object prod1

        function getPrice() {
            console.log(this.price); // undefined cause window is this
        }

        getPrice();
    })();

// example 1 modified
    (() => {
        const prod1 = {
            name: 'Intel',
            price: 100,
            getPrice,
        };

        const prod2 = {
            name: 'Intel',
            price: 200,
            getPrice,
        };

        const prod3 = {
            name: 'Intel12',
            price: 300,
        };

        function getPrice(currency = '$') {
            console.log(currency + this.price); // 100
        }

        prod1.getPrice();
        prod2.getPrice();

        getPrice.call(prod3, '*');
        getPrice.apply(prod3, ['*']);

        const getPriceBind = prod2.getPrice.bind(prod2, '*');
        setTimeout(prod2.getPrice, 1000); // undefined cause we have no correct context
        setTimeout(getPriceBind, 1000); //*200
    })();
});

document.getElementById('destr').addEventListener('click', () => {
//desctructuring
    const obj = {a: 5, b: 8};
    const {a, b} = obj;
    console.log(a, b); // 5 8

    const user = {
        firstName: 'Tanya',
        lastName: 'L',
        age: 20,
        info: {
            work: 'Itra',
            skills: ['html', 'css', 'js']
        }
    };
    const {info: {work}} = user;
    console.log(work); //Itra
// const {firstName:name, lastName, age = 30} = user;
// console.log(name, lastName, age);

//example 1
    const colour = ['white', 'red', 'black'];
    const [w, r, bl, gr = 'green'] = colour;
    console.log(w, r, bl, gr);

//example 2
    const nestedArr = ['hello', ['key', 'value']];
    const [, [key, value]] = nestedArr;
    console.log(key, value);

//example 3 rest
    const names = ['Tanya', 'Misha', 'Lera', 'Andrey'];
    const [name1, ...otherNames] = names; // Tanya (3) ["Misha", "Lera", "Andrey"]
    console.log(name1, otherNames);

    const [...newArrNames] = names;
    console.log(newArrNames); // ["Tanya", "Misha", "Lera", "Andrey"]

    const newNames = [...names];
    console.log(newNames); // ["Tanya", "Misha", "Lera", "Andrey"]

    const colourNames = [...colour, ...names];
    console.log(colourNames);
});

//Object define property and map
document.getElementById('objDefProp').addEventListener('click', () => {
    (() => {
        const user = {
            firstName: 'Василий',
            toString: function () {
                return 'Пользователь ' + this.firstName;
            }
        };
        console.log(user);

        for (let key in user) {
            console.log(key); //firstName // toString
        }

        const arr = {};
        console.log(Object.keys(user)); //["firstName", "toString"]
        console.log(Object.keys(arr));  // []

        const panda = {};
        panda.color = 'black';

        Object.defineProperty(panda, 'color', {
            configurable: false,
            writable: false,
            enumerable: false,
            value: 'red'
        });
        panda.color = 'yellow';

        console.log(Object.keys(panda));
        console.log(panda); //red if writable false
// for in !
// Object.defineProperty(obj, prop, descriptor)
// Object.getOwnPropertyDescriptor(obj, prop)
        const d = Object.getOwnPropertyDescriptor(panda, 'color'); //{value: "red", writable: false, enumerable: false, configurable: false}
        console.log(d);

        console.log(new Date(0).toString());

        const arrSlice = [1, 2, 3, 4];
        console.log(arrSlice.splice(1, 2)); //[2,3]
        console.log(arrSlice); // [1,4]
    })();

    (() => {
        let arr = [
            {
                age: 25,
                name: 'dd'
            },
            {
                age: 20,
                name: 'rr'
            },
            {
                age: 13,
                name: 'rr'
            }
        ];

        let names = arr.map(item => {
            let isAdult = item.age >= 18;
            return {...item, isVisible: isAdult};
            // long way below
            // return {
            //     age: item.age, name: item.name, isVisible: isAdult
            // }
        });
        console.log(names);
// 0: {age: 25, name: "dd", isVisible: true}
// 1: {age: 20, name: "rr", isVisible: true}
// 2: {age: 13, name: "rr", isVisible: false}
    })();
});

document.getElementById('salaries').addEventListener('click', () => {
    //task1
    (() => {
        let salaries = {
            John: 100,
            Ann: 160,
            Pete: 130
        };

        let sum = 0;

        for (let key in salaries) {
            // if (salaries.hasOwnProperty(salaries[key])) {
            sum += salaries[key];
            // }
        }
        console.log('method1 ' + sum);
    })();

    (() => {
        let salaries = {
            John: 100,
            Ann: 160,
            Pete: 130
        };

        let summary = Object.keys(salaries).reduce((previous, key) => previous + salaries[key], 0);
        console.log('method2 ' + summary);
    })();

    (() => {
        let salaries = {
            John: 100,
            Ann: 160,
            Pete: 130
        };

        function sum1() {
            return this.John + this.Ann + this.Pete;
        }

        let summary = sum1.call(salaries);
        console.log('method3 ' + summary);
    })();

    (() => {
        let salaries = {
            John: 100,
            Ann: 160,
            Pete: 130
        };

        let salaryAverage = Object.values(salaries);

        let summary = salaryAverage.reduce((acc, curr) => {
                return acc + curr;
            }, 0) / salaryAverage.length;
        console.log('method4 average ' + summary); // 130
    })();
});

document.getElementById('flats').addEventListener('click', () => {
    const getRandom = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };

    let floors = getRandom(1, 25);
    let porches = getRandom(1, 10);
    let flatsOnPorch = getRandom(1, 20);
    let flat = parseInt(prompt('flat number'));

    if (isNaN(flat) || flat < 1) {
        alert('Please insert correct number');
        return;
    }
    else if (floors * porches * flatsOnPorch < flat) {
        alert('This flat doesn\'t exist');
        return;
    }

    let floor = Math.ceil(flat / flatsOnPorch);
    let porch = Math.ceil(floor / floors);
    floor -= (porch - 1) * floors;

    console.log(`Your flat ${flat} in on № floor ${floor}, № porch ${porch}`);
    console.log(`total floors: ${floors}, total porches: ${porches},total flatsOnPorch: ${flatsOnPorch}`);
});

document.getElementById('sequence').addEventListener('click', () => {
    (() => {
        (() => {
            // case 1 (better cause we didn't change start value)
            function sequence(start = 0, step = 1) {
                let value = start - step;
                return function () {
                    return value += step;
                };
            }

            let generator = sequence(10, 3);

            console.log(generator()); //10
            console.log(generator()); //13
            console.log(generator()); //16
            console.log(generator()); //19
            console.log(generator()); //22
            console.log(generator()); //25

        })();

        // case1
        function sequence(start, step = 1) {
            let value = 0;
            return function () {
                value = start + step;
                return start = value;
            }
        }

        let generator = sequence(10, 3);

        console.log(generator()); //13
        console.log(generator()); //16
        console.log(generator()); //19
        console.log(generator()); //22
        console.log(generator()); //25
    })();
});

document.getElementById('sumAnyNumbers').addEventListener('click', () => {
    (() => {
        function sum(a) {
            const f = function (b) {
                return sum(a + b);
            };
            f.toString = function () {
                return a.toString();
            };
            return f;
        }

        let x = sum(2)(5)(10);
        console.log(x);
    })();

//trial version
    (() => {
        function sum(a) {
            return function (b) {
                return function (c) {
                    return a + b + c;
                }
            }
        }

        let x = sum(2)(5)(10);
        console.log(x);
    })();
});

document.getElementById('reduceMethod').addEventListener('click', () => {
    const array = [1, 2, 3, 4, 5];
// checks whether an element is even
    const even = (element) => element % 2 === 0;
    console.log(array.some(even));

    (() => {
        //reduce
        const arr = [
            {
                age: 18,
                name: 'Tanya'
            },
            {
                age: 25,
                name: 'Vasili'
            },
            {
                age: 12,
                name: 'Peter'
            },
            {
                age: 19,
                name: 'Sonya'
            },
        ];

        let sumAges1 = arr.reduce((acc, curr) => {
            return acc + curr.age;
        }, 0);
        console.log(sumAges1); //74

        let sumAges = arr.reduce((acc, curr) => {
            if (curr.name !== 'Peter') {
                acc += curr.age;
            }
            return acc;
        }, 0);
        console.log(sumAges); //62

        let filteredArr = arr.reduce((acc, curr, index) => {
            if (curr.age >= 18) {
                acc.push({...curr, id: index});
            }
            return acc;
        }, []);
        console.log(filteredArr);

        let averageAge = arr.reduce((acc, curr) => acc + curr.age, 0) / arr.length;
        console.log(averageAge);

        let users = arr.reduce((acc, curr) => {
            acc[curr.name] = curr;
            return acc;
        }, {});
        console.log(users);

        //
        const userArr = [
            {
                age: 18,
                name: 'Tanya'
            },
            {
                age: 25,
                name: 'Vasili'
            },
            {
                age: 12,
                name: 'Peter'
            },
            {
                age: 19,
                name: 'Sonya'
            },
        ];

        let integred = userArr.reduce((acc, curr, index) => {
            if (curr.age >= 18) {
                acc.push({
                    ...curr,
                    id: index
                });
            }
            return acc;

        }, []);
        console.log(integred);
    })();
});

document.getElementById('smallTickets').addEventListener('click', () => {
    const fizz = 'fizz';
    const buzz = 'buzz';

    function getFizzBuzzNumbers(number) {
        for (let i = 1; i <= number; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log(`${fizz + buzz}`);
            }
            else if ((i % 3 === 0)) {
                console.log(`${fizz}`);
            }
            else if ((i % 5 === 0)) {
                console.log(`${buzz}`);
            }
            else {
                console.log(i);
            }
        }
    }

    getFizzBuzzNumbers(15);
    console.log('___');

    // function dd(x) {
    //     let arr = new Array(x).fill(0).map((x, i) => i + 1);
    //     for (let i = 0; i < arr.length; i++) {
    //         if (i % 3 === 0 && i % 5 === 0) {
    //             console.log(`${fizz + buzz}`);
    //         }
    //         else if ((i % 3 === 0)) {
    //             console.log(`${fizz}`);
    //         }
    //         else if ((i % 5 === 0)) {
    //             console.log(`${buzz}`);
    //         }
    //         else {
    //             console.log(arr[i]);
    //         }
    //     }
    // }
    // dd(15);

    (() => {
        function checkIfAnagram(word, comparedWord) {
            const sortedLetters = (letters) => letters.toLowerCase().split('').sort().join('');

            let wordSorted = sortedLetters(word);
            let comparedWordSorted = sortedLetters(comparedWord);

            if (!wordSorted.length === comparedWordSorted.length || (wordSorted.length = 0) || (comparedWordSorted.length = 0)) {
                return;
            }

            if (wordSorted === comparedWordSorted) {
                console.log(`${word} and ${comparedWord} are anagrams`);
            }
            else {
                console.log('Please try another pair of words');
            }
        }

        checkIfAnagram('Finder', 'friend'); //finder and friend are anagrams
        checkIfAnagram('ffdfgf', 'b'); //Please try another pair of words
        checkIfAnagram('ffdfgf', ''); //Please try another pair of words
        checkIfAnagram('ffdfgf', 'ffdfgff'); //Please try another pair of words

    })();

    (() => {
//fibonacchi case 1
        const fibonacci = number => {
            let prevValue = 0, nextValue = 1;
            for (let i = 0; i < number; i++) {
                nextValue = prevValue + nextValue;
                prevValue = nextValue - prevValue;
            }
            return prevValue;
        };

        let fibonacciNumber = fibonacci(7);
        console.log(fibonacciNumber); //13
    })();

    (() => {
        //fibonacci case 2
        function fibonacci(number) {
            if (number <= 0) {
                return 0;
            }
            else if (number == 1) {
                return 1;
            }
            else {
                return fibonacci(number - 1) + fibonacci(number - 2);
            }
        }

        let fibonacciNumber = fibonacci(7);
        console.log(fibonacciNumber); //13
    })();

    (() => {
        //calculate sum of all numbers in pages,ie 13=1+3
        function sumAllPages(total) {
            let arr = [];
            for (let i = 0; i <= total; i++) {
                arr[i] = i;
            }

            return arr.join('').split('').reduce((acc, curr) => {
                return acc += parseInt(curr);
            }, 0);
        }

        console.log(sumAllPages(3)); //6
        console.log(sumAllPages(500)); //5505
    })();
});

class Animal {
    static type = 'ANIMAL';

    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.hasTail = options.hasTail;
    }

    voice() {
        console.log('i an animal');
    }
}

class Cat extends Animal {
    static type = 'CAT';

    constructor(options) {
        super(options);
        this.color = options.color;
    }

    voice() {
        console.log('i am cat');
    }
}

const cat = new Cat({
    name: 'Casper',
    age: 5,
    hasTail: true,
    color: 'grey'
});

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector);

        this.$el.style.width = this.$el.style.height = options.size + 'px';
        this.$el.style.background = options.color;
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
});

const box2 = new Box({
    selector: '#box2',
    size: 150,
    color: 'blue'
});

class Circle extends Box {
    constructor(options) {
        super(options);

        this.$el.style.borderRadius = '50%';
    }
}

const circle = new Circle({
    selector: '#circle',
    size: 50,
    color: 'green'
});

(() => {
    function uniqueValues(array) {
        return [...new Set(array)];
    }

    console.log(uniqueValues([1, 1, 1, 2, 2, 3, 3, 3, 4]));
})();

// (() => {
//     const cache = new WeakMap();
//
//     function cacheUser(user) {
//         if (!cache.has(user)) {
//             cache.set(user, Date.now());
//
//         }
//         return cache.get(user);
//     }
//
//     let lena = {name: 'Elena'};
//     let alex = {name: 'Alex'};
//
//     lena = null;
//
//     cacheUser(lena); //false
//     cacheUser(alex); //true
// })();

(() => {
    function* numberGen(n = 10) {
        for (let i = 0; i < n; i++) {
            yield i;
        }
    }

    const num = numberGen(4);
    console.log(num.next()); //0
    console.log(num.next()); //1
    console.log(num.next()); //2
    console.log(num.next()); //3
    console.log(num.next()); //undefined
})();

document.getElementById('massiveMethods').addEventListener('click', () => {
    const people = [
        {name: 'Tanya', age: 18, budget: 4000},
        {name: 'Misha', age: 20, budget: 8000},
        {name: 'Lera', age: 15, budget: 500},
        {name: 'Andrey', age: 22, budget: 3000},
        {name: 'Kate', age: 17, budget: 1000},
    ];

    for (let i = 0; i < people.length; i++) {
        console.log(people[i]);
    }

    for (let person of people) {
        console.log(person);
    }

    people.forEach(person => console.log(person));

    //map
    const newPeople = people.map(person => {
        return `${person.name} (${person.age})`;
    });
    console.log(newPeople);

    //filter
    const adults = people.filter(person => person.age >= 18);
    console.log(adults);

    //reduce
    // let amount = 0;
    // for (let i = 0; i < people.length; i++) {
    //     amount+=people[i].budget;
    // }
    // console.log(amount);

    const amount = people.reduce((total, person) => total + person.budget, 0)
    console.log(amount);

    //find
    const tanya = people.find(person => person.name === 'Tanya');
    console.log(tanya);

    //find index
    const tanyaIndex = people.findIndex(person => person.name === 'Tanya');
    console.log(tanyaIndex);
});