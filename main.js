let userChoice = 16
const gridContainer = document.querySelector('#grid-container');
let cellNum = document.querySelector('.cell-number')
function makeRows(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        let gridItem = document.createElement('div');
        gridContainer.appendChild(gridItem).className = 'grid-item';
        gridItem.addEventListener ('mouseover', () => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            gridItem.style.backgroundColor = '#' + randomColor
        })  
    }    
}
makeRows(16, 16)

cellNum.addEventListener('click', () => {
    size = prompt('Enter the number of rows and columns.')
    while (gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastElementChild);
    }    
    gridContainer.style.setProperty('--grid-size', size);
    makeRows(size, size)

})