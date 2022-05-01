let userChoice = 16
const gridContainer = document.querySelector('#grid-container');
let cellNum = document.querySelector('.cell-number')

for (let i = 0; i <= userChoice * userChoice; i++) {
    let gridItem = document.createElement('div');
    gridContainer.style.setProperty('--grid-size', userChoice);
    gridContainer.appendChild(gridItem).className = 'grid-item';
    gridItem.addEventListener ('mouseover', () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        gridItem.style.backgroundColor = '#' + randomColor
    })  
}
