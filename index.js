const DEFAULT_SIZE = 50;

let currentSize = DEFAULT_SIZE;

const container = document.querySelector('.container');
const clearButton = document.querySelector('.clear-button');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById("sizeSlider");

const setupGrid = (size) => {
    const squareSize = 960 / size;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareSize + `px`;
        square.style.height = squareSize + `px`;
        container.appendChild(square);
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black';
        });
    }

}


console.log(sizeSlider);
const updateSizeValue = (value) => {
    sizeValue.textContent = `${value} x ${value}`;
}

const setCurrentSize = (newSize) => {
    currentSize = newSize;
}

const changeSize = (value) => {
    setCurrentSize(value);
    updateSizeValue(value);
    resetGrid();
    setupGrid(currentSize);
}

sizeSlider.onchange = (e) => changeSize(e.target.value);
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);


window.onload = () => {
    setupGrid(DEFAULT_SIZE);
}

const resetGrid = () => {
    container.textContent = ''
}

clearButton.addEventListener('click', () => {
    resetGrid();
    setupGrid(currentSize);
})