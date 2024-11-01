const canvas = document.getElementById('emojiCanvas');
const ctx = canvas.getContext('2d');

// let emojiMap = new Map([
//     [0, '🥺'], 
//     [1, '😂'],
//     [2, '😎'],
//     [3, '😍'],
//     [4, '🤔'],
//     [5, '😡'],
//     [6, '🎉']
// ]);

const alterEmojis = ['😆', '😭', '🤶🏽', '🤷‍♀️', '🤩', '🧝🏽‍♀️', '😌', '🛰️']
let emojisOnCanvas = []; // Array to store emoji data with positions

function getRandomEmoji() {
    let randomNumber = Math.floor(Math.random() * alterEmojis.length);
    return alterEmojis[randomNumber];
}

function displayMultipleEmojis(count) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas for new draws
    ctx.font = '50px sans-serif'; // Set font size for emojis
    emojisOnCanvas = []; // Reset the array for new emoji positions

    for (let i = 0; i < count; i++) {
        let emoji = getRandomEmoji();
        let x = Math.random() * (canvas.width - 50); // Random x-coordinate, with some padding
        let y = Math.random() * (canvas.height - 50); // Random y-coordinate, with some padding
        
        // Store the emoji data with its position
        emojisOnCanvas.push({ emoji, x, y, size: 50 });
        
        // Draw the emoji
        ctx.fillText(emoji, x, y);
    }
}

// Add an event listener for click events
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check if the click is on any emoji
    for (let i = 0; i < emojisOnCanvas.length; i++) {
        let { emoji, x, y, size } = emojisOnCanvas[i];
        if (
            mouseX >= x &&
            mouseX <= x + size &&
            mouseY >= y &&
            mouseY <= y + size
        ) {
            console.log(`Emoji clicked: ${emoji}`);
            alert(`You clicked on: ${emoji}`);
            break; // Stop checking after finding the clicked emoji
        }
    }
});

// Display multiple emojis on the canvas
displayMultipleEmojis(10);

