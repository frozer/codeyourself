let screenWidth = 0;
let screenHeight = 0;
let scale = 1;


function setup() {
    screenHeight = window.innerHeight - 4;
    screenWidth = document.body.clientWidth; 
    createCanvas(screenWidth, screenHeight);
    background(20, 20, 50); // Deep blue background to simulate space
    noLoop(); // Ensure the draw function runs only once
    scale = screenHeight / 320;
}

function draw() {
    for (let i = 0; i < picture.length; i++) {
        const [x, y, r, g, b] = picture[i];
        
        // Scale the coordinates
        const scaledX = x * scale;
        const scaledY = y * scale;

        // Set the color for the pixel
        fill(r, g, b);
        // Prevents drawing of black lines around rectangles
        noStroke(); 

        // Draw a scaled rectangle for each pixel
        rect(scaledX, scaledY, scale, scale);
    }
}

addEventListener("resize", () => {
    setup();
    draw();
})