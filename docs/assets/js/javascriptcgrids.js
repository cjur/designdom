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
    const canvas = document.getElementById('grid');
    const ctx = canvas.getContext('2d');

    // Clear the canvas before redrawing
    canvas.width = gridContainer.offsetWidth; // Set canvas size based on container
    canvas.height = gridContainer.offsetHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Example: Create a fixed number of boxes
    for (let i = 0; i < 1; i++) {
        const box = document.createElement('div');
        box.className = 'grid-box';
        gridContainer.appendChild(box);
    
        const spacing = parseInt(document.getElementById('hSpacing').value); // Assuming spacing is the same for horizontal and vertical lines
        const lineWeight = parseInt(document.getElementById('hLineWeight').value);
        const lineColor = document.getElementById('hLineColor').value;
    
        // Calculate the number of horizontal lines
        const numLines = Math.floor(canvas.height / spacing);
    
        // Draw horizontal lines
        for (let i = 0; i <= numLines; i++) {
          const yPosition = i * spacing;
          ctx.beginPath();
          ctx.moveTo(0, yPosition);
          ctx.lineTo(canvas.width, yPosition);
          ctx.lineWidth = lineWeight; // Set line width
          ctx.strokeStyle = lineColor; // Set line color
          ctx.stroke(); // Draw the line
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