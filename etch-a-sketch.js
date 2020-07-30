const container = document.querySelector('#container');

function createGrid(rows, columns) {
    let root = document.documentElement;
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


createGrid(16, 16);




