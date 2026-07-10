const DEFAULT_SIZE = 50;

let currentSize = DEFAULT_SIZE;

const container = document.querySelector('.container');
const resizeButton = document.querySelector('.resize-button');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById("sizeSlider");

const setupGrid = (size) => {
    for (let i = 0; i < size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
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

