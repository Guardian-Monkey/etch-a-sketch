// Create a 16 X 16 grid of squares using js
// It's best to put these squares within a container div in the html
// Use Flexbox to make the divs appear as a grid
// Be careful when using borders and margins, as they can adjust the size of the squares

const container = document.querySelector("#container");
const dimensions = 16;
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
            e.target.style.backgroundColor = 'blue';
        });
        // Append the cell to the row
        row.appendChild(cell);
    }
    // Append the row to the container
    container.appendChild(row);
}