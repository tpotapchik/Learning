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
        return item *= 2;
    });
    console.log(arr);

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

