var player1 = 0
var player2 = 0

var turn = 1

var target = 30

function roll() {
    var num = getRndInteger(1, 6);
    document.getElementById('val3').innerText = ' ' + num;
    if (turn === 1) {
        player1 = player1 + num;
        turn = 2;
        document.getElementById('val1').innerText = ' ' + player1;
        if (player1 >= target) {
            alert("Player 1 Wins!")
            setTimeout(function(){
                window.location.reload(1);
            }, 1);
        }
    }
    else if (turn === 2) {
        player2 = player2 + num;
        turn = 1;
        document.getElementById('val2').innerText = ' ' + player2;
        if (player2 >= target) {
            alert("Player 2 wins!")
            setTimeout(function(){
                window.location.reload(1);
            }, 1);
        }
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}