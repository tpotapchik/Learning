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
            listItem.textContent = `${fizz + buzz}`;
        }
        else if ((i % 3 === 0)) {
            listItem.textContent = `${fizz}`;
        }
        else if ((i % 5 === 0)) {
            listItem.textContent = `${buzz}`;
        }
        else {
            listItem.textContent = i;
        }

        list.appendChild(listItem);
    }

    document.body.appendChild(container.appendChild(list));
    form.reset();
});

