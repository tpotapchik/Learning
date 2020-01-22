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

        if (user !== null) {
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

//


