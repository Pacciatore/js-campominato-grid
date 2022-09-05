console.log('JS OK');

const button = document.getElementById('init-btn');

button.addEventListener('click',
    function () {
        console.log('click');
        const gridElement = initGrid();

        const cellValues = getRandomNumbersArray();


        for (let i = 0; i < cellValues.length; i++) {
            const numberToDisplay = cellValues[i];
            const cellElement = createCell(numberToDisplay);

            // console.log(i, cellElement);

            gridElement.append(cellElement);
        }

    })

function getRandomNumbersArray() {
    const array = [];

    while (array.length < 100) {
        const random = Math.floor(Math.random() * 100) + 1;
        if (!array.includes(random)) {
            array.push(random);
        }
    }

    return array;

}


function getRandomNumbersArrayAlternative() {
    const array = [];

    for (let i = 1; i <= 100; i++) {
        array.push(i);
    }

    array.sort(function () {
        const random = Math.round(Math.random());
        return random === 1 ? 1 : -1;
    })
    console.log(array);

    return array;

}


const initGrid = () => {
    const element = document.getElementById('grid');
    element.innerHTML = '';
    return element;
}


function createCell(label) {
    const cellElement = document.createElement('div');
    cellElement.innerHTML = label;
    cellElement.className = 'cell fw-bold p-5 d-flex align-items-center justify-content-center';

    cellElement.addEventListener('click', function () { cellColorChange(cellElement, label) })

    return cellElement;
}

function cellColorChange(cell, label) {
    console.log('cella cliccata ' + label);
    let bomb = false;

    // Additional content
    console.log('lancio monetina')
    if (coinFlip() === 0) {
        console.log('bomb');

        cell.classList.add('bomb');
        bomb = true;
        setTimeout(bombText, 500)
    } else {
        console.log('croce')

        bomb = false;
    }

    if (!bomb) {
        const isEven = isNumberEven(label);

        if (isEven) {
            cell.classList.add('even');
        } else {
            cell.classList.add('odd');
        }
    }

}

const bombText = () => alert('Hai preso una bomba!');

const isNumberEven = (number) => number % 2 === 0;

const coinFlip = () => Math.round(Math.random() * 1);