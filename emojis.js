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

function getRandomEmoji() {
    let randomNumber = Math.floor(Math.random() * alterEmojis.length);
    return alterEmojis[randomNumber];
}

function displayEmoji() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas for new draws
    ctx.font = '100px sans-serif';
    let emoji = getRandomEmoji();
    ctx.fillText(emoji, canvas.width / 2 - 50, canvas.height / 2 + 30);
}

// Initial display
displayEmoji();

// Add an event listener to change the emoji on click
canvas.addEventListener('click', displayEmoji);
