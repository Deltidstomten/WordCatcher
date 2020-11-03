let context = document.getElementById('canvas').getContext("2d");

context.canvas.height = 480;
context.canvas.width = 480;

let words = ['ur', 'gäller', 'honom', 'aldrig', 'barn', 'varje', 'lite', 'sätt', 'just', 'väl', 'tar', 'åt', 'mest', 'per', 'står', 'fem', 'tror', 'rätt', 'dessa', 'gång', 'inför', 'regeringen', 'senaste', 'samtidigt', 'annan', 'ännu', 'blivit', 'fall', 'talet', 'exempel', 'gamla', 'deras', 'tiden', 'min', 'hennes', 'sista', 'komma', 'större', 'visar'];
let usedWords = [];
let score = 0;


function restart(){
}

class FallingWord {
    constructor(text, x, y) {
        this.text = text;
        this.x = x;
        this.y = y;
    }

    MoveDown(){
        if(this.y < context.canvas.height){
            this.y += 1.5; 
        } else {
            score = 0;
        }
    }
}

loop = function () {
    context.fillStyle = "#9CA04C";
    context.fillRect(0, 0, 480, 480);// x, y, width, height

    context.font = "30px Arial";
    context.fillStyle = "#37662F";
    
    for(let i = 0; i < usedWords.length; i++){
        context.fillText(usedWords[i].text, usedWords[i].x, usedWords[i].y);
        usedWords[i].MoveDown();
        if(document.getElementById("wordInput").value == usedWords[i].text){
            usedWords.splice(i, 1);
            score++;
            document.getElementById("wordInput").value = "";
        }
    }
    
    context.fillText("Score: " + score, 10, 40);

    window.requestAnimationFrame(loop);
}

function createWord() { 
    usedWords.push(new FallingWord(words[Math.floor(Math.random() * words.length)], Math.floor(Math.random() * (context.canvas.width-70)), 10));
}

function Restart() {
    score = 0;
    usedWords = [];
}

var wordCreation = setInterval(createWord, 1000);
window.requestAnimationFrame(loop);

document.addEventListener('keyup', function(event) {
    if(event.keyCode == 32) {
        document.getElementById("wordInput").value = "";
    }
});