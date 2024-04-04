function createLine(parent, top, left, width, height, color) {
    let line = document.createElement('div');
    line.style.position = 'absolute';
    line.style.top = `${top}px`;
    line.style.left = `${left}px`;
    line.style.width = `${width}px`;
    line.style.height = `${height}px`;
    line.style.backgroundColor = color;
    parent.appendChild(line);
}

function generateGrid() {
    const gridContainer = document.getElementById('grid');
    gridContainer.innerHTML = '';

    // Example: Create a fixed number of boxes
    for (let i = 0; i < 30; i++) { // Adjust the number of boxes as needed
        let box = document.createElement('div');
        box.className = 'grid-box';
        gridContainer.appendChild(box);
        
        // Check each toggle and draw the corresponding grid
        if (document.getElementById('toggleHorizontal').checked) {
            const spacing = parseInt(document.getElementById('hSpacing').value);
            const lineWeight = parseInt(document.getElementById('hLineWeight').value);
            const lineColor = document.getElementById('hLineColor').value;

            // Calculate the number of lines to draw based on the box height and spacing
            const numLines = Math.floor(box.offsetHeight / spacing);

            // Draw each line
            for (let i = 0; i <= numLines; i++) {
                let yPosition = i * spacing;
                createLine(box, yPosition, 0, box.offsetWidth, lineWeight, lineColor);
            }
        }

        if (document.getElementById('toggleVertical').checked) {
            const spacing = parseInt(document.getElementById('vSpacing').value);
            const lineWeight = parseInt(document.getElementById('vLineWeight').value);
            const lineColor = document.getElementById('vLineColor').value;

            const numLines = Math.floor(box.offsetWidth / spacing);

            for (let i = 0; i <= numLines; i++) {
                let xPosition = i * spacing;
                createLine(box, 0, xPosition, lineWeight, box.offsetHeight, lineColor);
            }
        }
    }
}

window.onload = generateGrid;

// Get a reference to the print button
const printButton = document.getElementById('printButton');

// Add a click event listener to the button for printing
printButton.addEventListener('click', () => {
    generateGrid;
    window.print();  // Trigger browser's print functionality
});

const handlePrint = () => {
    var actContents = document.body.innerHTML;
    document.body.innerHTML = actContents;
    window.print();
 }