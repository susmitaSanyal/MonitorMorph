const canvas = document.getElementById('emojiCanvas');
const ctx = canvas.getContext('2d');

let emojiMap = new Map([
    [0, '🥺'], 
    [1, '😂'],
    [2, '😎'],
    [3, '😍'],
    [4, '🤔'],
    [5, '😡'],
    [6, '🎉']
]);

const alterEmojis = ['😆', '😭', '🤶🏽', '🤷‍♀️', '🤩', '🧝🏽‍♀️', '😌', '🛰️']

function getRandomEmoji(){
    let randomNumber = Math.floor(Math.random() * 7);
    return emojiMap.get(randomNumber);
}

function displayEmoji(){

    ctx.font = '100px sans-serif'
    let emoji = getRandomEmoji();
    ctx.fillText(emoji[1], canvas.width / 2 - 50, canvas.height / 2 + 30);
}


displayEmoji();