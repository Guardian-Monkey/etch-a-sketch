console.log("this works!");
// Create a 16 X 16 grid of squares using js
// It's best to put these squares within a container div in the html
// Use Flexbox to make the divs appear as a grid
// Be careful when using borders and margins, as they can adjust the size of the squares

const container = document.querySelector("#container");
const dimensions = 16;
for (let i = 0; i < dimensions; i++) {
    let row = document.createElement("div");
    for (let i = 0; i < dimensions; i++) {
        let col = document.createElement("div");
        row.appendChild(col);
    }
    container.appendChild(row);
}