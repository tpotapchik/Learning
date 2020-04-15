(() => {
    const container = document.getElementById('container');
    let input = null;
    let button = null;

    createBasicElements(false, 'Generate', 'Insert a number > 0');
    button.addEventListener('click', createElementsPhaseTwo);

    function makeEmptyBlock(buttonHandler) {
        button.removeEventListener('click', buttonHandler);
        container.innerHTML = '';
    }

    function createBasicElements(disableInput, textBtn, placeholder) {
        input = document.createElement('input');
        button = document.createElement('button');
        input.setAttribute('placeholder', placeholder);

        if (disableInput) {
            input.setAttribute('disabled', 'disabled');
        }

        button.innerText = textBtn;
        container.appendChild(input);
        container.appendChild(button);
        input.focus();
    }

    function checkIfSuitable(number) {
        if (!Number.isInteger(parseInt(number)) || number < 1 || number > 20) {
            alert('Please insert a number > 0 and < 20');
            input.focus();

            return false;
        }

        return true;
    }

    function createElementsPhaseTwo() {
        if (checkIfSuitable(input.value)) {
            const inputValue = input.value;

            makeEmptyBlock(createElementsPhaseTwo);
            createBasicElements(true, 'Reset', '');

            button.addEventListener('click', backToInitial);
            createCounterButtons(inputValue);
        }
    }

    function backToInitial() {
        makeEmptyBlock(backToInitial);
        createBasicElements(false, 'Generate', 'Insert a number > 0');
        button.addEventListener('click', createElementsPhaseTwo);
    }

    function createCounterButtons(inputValue) {
        const wrapBlock = document.createDocumentFragment();
        const list = document.createElement('ul');

        for (let i = 1; i <= inputValue; i++) {
            const listItem = document.createElement('li');
            const listItemNegative = document.createElement('li');

            listItem.textContent = '+' + i;
            listItem.dataset.value = i;
            listItemNegative.textContent = -i;
            listItemNegative.dataset.value = -i;
            list.appendChild(listItem);
            list.appendChild(listItemNegative);
        }

        container.appendChild(wrapBlock.appendChild(list));
        list.addEventListener('click', calcTotalValue);
    }

    function calcTotalValue(event) {
        if (event.target.tagName === 'LI') {
            let inputValue = Number(input.value);
            let value = Number(event.target.dataset.value);
            input.value = inputValue + value;
        }
    }
})();