document.getElementById('calculate').addEventListener('click', () => {

    const form = document.forms.form;
    let calculatedParam = form.elements.field.value;

    if (!Number.isInteger(parseInt(calculatedParam)) || calculatedParam < 1) {
        alert('Please insert a number > 0');
        return;
    }

    const container = document.createDocumentFragment();
    const list = document.createElement('ul');

    const fizz = 'fizz';
    const buzz = 'buzz';

    for (let i = 1; i <= calculatedParam; i++) {
        const listItem = document.createElement('li');

        if (i % 3 === 0 && i % 5 === 0) {
            listItem.textContent = fizz + buzz;
        }
        else if ((i % 3 === 0)) {
            listItem.textContent = fizz;
        }
        else if ((i % 5 === 0)) {
            listItem.textContent = buzz;
        }
        else {
            listItem.textContent = i;
        }

        list.appendChild(listItem);
    }

    document.body.appendChild(container.appendChild(list));
    form.reset();
});

(() => {
    let elem = [...document.getElementsByClassName('list-item')];
    elem.forEach((button) => {
        button.addEventListener('click', function () {
            alert(this.textContent);
        })
    });
})();

(() => {
    Array.from(document.querySelectorAll('.list-item-2')).forEach((button) => {
        button.addEventListener('click', function () {
            alert(this.textContent);
        })
    });
})();

(() => {
    let el = document.getElementsByClassName('list-3')[0];
    el.addEventListener('click', (e) => {
        console.log(e.target);
        alert(e.target.textContent);
    })
})();

(() => {
    let el = document.getElementsByClassName('result')[0];
    let parentEl = document.getElementsByClassName('wrap')[0];
    let minusVal = document.getElementsByClassName('button-minus')[0];
    let plusVal = document.getElementsByClassName('button-add')[0];

    parentEl.addEventListener('click', (e) => {
        if (e.target === plusVal) {
            el.value++;
        }

        if (e.target === minusVal) {
            el.value--;
        }
    });
})();

(() => {
    let field = document.getElementsByClassName('textarea-field')[0];

    if (localStorage) {
        field.value = localStorage.getItem('text');
    }

    document.getElementById('setVal').addEventListener('click', () => {
        localStorage.setItem('text', field.value);
    });

    document.getElementById('emptyVal').addEventListener('click', () => {
        localStorage.removeItem('text');
        field.value= '';
    });
})();




