const container = document.querySelector('#container');
const btnReset = document.querySelector('#reset');
const btnRgb = document.querySelector('#rgb');
let rows = 16;
let columns = 16;
let rgbOn = false
let root = document.documentElement;

function createGrid(rows, columns) {
    root.style.setProperty('--rows', rows);
    root.style.setProperty('--columns', columns);
    for (let i = 0; i < columns; i++) {
        for(let j = 0; j < rows; j++) {
            const square = document.createElement("div");
            square.classList.add('square');
            container.appendChild(square);
            square.addEventListener('mouseenter', () => {
                square.classList.add('hoveredSquare');
            })
        }
    }
}


function reset() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    rows = prompt("How many rows would you like?");
    columns = prompt("How many columns would you like?");
    createGrid(rows, columns);
}

function rgb() {
    if (rgbOn) {
        rgbOn = false;
        root.style.setProperty('--color', lightgray);
    } else {
        rbgOn = true;
        root.style.setProperty('--color', '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6));
    }

}

btnReset.addEventListener('click', reset);
btnRgb.addEventListener('click', rgb);

createGrid(rows, columns);