// Create a 16 X 16 grid of squares using js
// It's best to put these squares within a container div in the html
// Use Flexbox to make the divs appear as a grid
// Be careful when using borders and margins, as they can adjust the size of the squares

const container = document.querySelector("#container");
function createBoard(dimensions) {
    for (let i = 0; i < dimensions; i++) {
        // Create the row
        let row = document.createElement("div");
        // Add attributes to the row
        row.classList.add('row');

        for (let i = 0; i < dimensions; i++) {
            // Create the cell
            let cell = document.createElement("div");
            // Add attributes to the cell
            cell.classList.add('cell');
            // Add event listener to cell for hover effect
            cell.addEventListener('mouseenter', (e) => {
                // Generate a random rgb color
                e.target.style.backgroundColor = randomRGB();
                let opacity = Number(e.target.style.opacity);
                // Decrease the opacity by 0.1; if already 0, don't do it.
                e.target.style.opacity = opacity + (opacity < 1 ? .1 : 0);
            });
            // Append the cell to the row
            row.appendChild(cell);
        }
        // Append the row to the container
        container.appendChild(row);
    }
}
// Default board created when the webpage is opened
createBoard(16);

// Changes the dimensions of the board
const changeDimensions = document.querySelector("#change-dimensions");
changeDimensions.addEventListener('click', () => {
    let dimensions;
    do {
        dimensions = Number(prompt('Enter the dimensions (Max is 100)'));
    } while (dimensions < 0 || dimensions > 100);
    // Delete the previous grid
    // Delete all the cells
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.parentNode.removeChild(cell);
    });
    // Delete all the rows
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        row.parentNode.removeChild(row);
    });
    // Create the new grid
    createBoard(dimensions);
});

// Return a random number between 0 - 255
function randomRGB() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}