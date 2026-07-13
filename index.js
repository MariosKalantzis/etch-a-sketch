const DEFAULT_SIZE = 50;
const DEFAULT_COLOR = "#000000";
const CANVAS_SIZE = 500;
const DEFAULT_MODE = 'color';

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;


const container = document.querySelector('.container');
container.style.width = CANVAS_SIZE + 'px';
container.style.height = CANVAS_SIZE + 'px';

const clearButton = document.getElementById('clear-button');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById("sizeSlider");
const colorPallet = document.getElementById('colorPallet');
const rainbowButton = document.getElementById('rainbowButton');
const eraser = document.getElementById('eraser');
const colorButton = document.getElementById('color-button');


const setupGrid = (size) => {
    container.style.gridTemplateColumns = `repeat(${size},1fr)`
    container.style.gridTemplateRows = `repeat(${size},1fr)`
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        square.addEventListener('mouseenter', (e) => {
            paintCell(e.target);
        });
    }

}
// paintCell works also without "parentheses , and event since js can understand that you handle a function inside the addEventListener. example ('mouseenter,paintCell);"

const paintCell = (square) => {
    if (currentMode === 'rainbow') {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgb(${red},${green},${blue})`;
    } else if (currentMode === 'color') {
        square.style.backgroundColor = currentColor;
    } else if (currentMode === 'eraser') {
        square.style.backgroundColor = 'white';
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

const updateColor = (newColor) => {
    currentColor = newColor;
}

sizeSlider.onchange = (e) => changeSize(e.target.value);
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
colorPallet.onchange = (e) => updateColor(e.target.value);




window.onload = () => {
    setupGrid(DEFAULT_SIZE);
}

const resetGrid = () => {
    container.textContent = ''
}

clearButton.addEventListener('click', () => {
    resetGrid();
    setupGrid(currentSize);
});

rainbowButton.addEventListener('click', () => {
    currentMode = 'rainbow';
});

colorButton.addEventListener('click', () => {
    currentMode = 'color';
});

eraser.addEventListener('click', () => {
    currentMode = 'eraser';
});