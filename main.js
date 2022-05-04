let currentColor
let currentMode = 'color'



const colorPicker = document.querySelector('#color-select')
const rainbow = document.querySelector('.rainbow')
const colorBtn = document.querySelector('.color-btn')
const eraser = document.querySelector('.eraser')
const reset = document.querySelector('.reset')
const gridSize = document.querySelector('.cell-number').value

function resetGrid() { 
    gridContainer.innerHTML = ''
    makeGrid(gridSize)
}

colorPicker.value = '#000'
colorPicker.onchange = () => {
    currentMode = 'color';
    colorBtn.classList.add('active');
    rainbow.classList.remove('active');
    eraser.classList.remove('active');
}
colorBtn.onclick = () => {
    currentMode = 'color';
    colorBtn.classList.add('active');
    rainbow.classList.remove('active');
    eraser.classList.remove('active');
}
rainbow.onclick = () => {
    currentMode = 'rainbow';
    rainbow.classList.add('active');
    colorBtn.classList.remove('active')
    eraser.classList.remove('active')
}
eraser.onclick = () => {
    currentMode = 'eraser'
    colorBtn.classList.remove('active');
    rainbow.classList.remove('active');
    eraser.classList.add('active');
}

const gridContainer = document.querySelector('#grid-container');
function makeGrid(currentGridSize) {
    for (let i = 0; i < currentGridSize * currentGridSize; i++) {
        let gridItem = document.createElement('div'); 
        gridContainer.appendChild(gridItem).className = 'grid-item';
        const cols = gridContainer.style.setProperty('--grid-size', gridSize)
        gridItem.addEventListener ('mouseover', () => {
            if (currentMode === 'rainbow') {
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                gridItem.style.backgroundColor = '#' + randomColor
            } else if (currentMode === 'color') {
                gridItem.style.backgroundColor = `${colorPicker.value}`
            } else if (currentMode === 'eraser')
            gridItem.style.backgroundColor = `transparent`

        }) 
    }   
    reset.addEventListener('click', resetGrid)
 
}
makeGrid(gridSize)

document.querySelector('.cell-number').onchange = () => window.location.reload()

