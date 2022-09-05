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

            console.log(i, cellElement);

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
    cellElement.className = 'cell p-5 d-flex align-items-center justify-content-center';
    cellElement.innerHTML = label;

    return cellElement;
}
