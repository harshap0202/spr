var round = 1;
var p1Score = 0;
var p2Score = 0;

function playGame() {
    var options = ['Rock', 'Paper', 'Scissors'];
    var p1Message = document.getElementById('p1-message');
    var p2Message = document.getElementById('p2-message');
    var p1ScoreDiv = document.getElementById('p1-score');
    var p2ScoreDiv = document.getElementById('p2-score');
    var imgElement1 = document.getElementById('imgElement1');
    var gifElement1 = document.getElementById("loading-gif1");
    var imgElement2 = document.getElementById('imgElement2');
    var gifElement2 = document.getElementById("loading-gif2");

    // Randomly select options for player 1 and player 2
    var p1Option = options[Math.floor(Math.random() * options.length)];
    var p2Option = options[Math.floor(Math.random() * options.length)];

    // Determine the winner of the round
    var roundWinner = determineRoundWinner(p1Option, p2Option);

    setTimeout(function () {
        if (roundWinner === 'p1') {
            p1Score++;
            p1ScoreDiv.textContent = 'Player 1: ' + p1Score;

            // Glow effect for Player 1 div
            document.querySelector('.player.one').classList.add('winner-glow');
            document.querySelector('.player.two').classList.add('loser-glow');
            setTimeout(function () {
                document.querySelector('.player.one').classList.remove('winner-glow');
                document.querySelector('.player.two').classList.remove('loser-glow');
            }, 1000);
        }

        else if (roundWinner === 'p2') {
            p2Score++;
            p2ScoreDiv.textContent = 'Player 2: ' + p2Score;

            // Glow effect for Player 2 div
            document.querySelector('.player.two').classList.add('winner-glow');
            document.querySelector('.player.one').classList.add('loser-glow');
            setTimeout(function () {
                document.querySelector('.player.two').classList.remove('winner-glow');
                document.querySelector('.player.one').classList.remove('loser-glow');
            }, 1000);
        }
    }, 1000);

    //player 1
    gifElement1.style.display = "block";
    imgElement1.style.display = "none";

    setTimeout(function () {
        gifElement1.style.display = "none";

        if (p1Option === 'Rock') {
            imgElement1.src = "assets/images/r1.png";
        } else if (p1Option === 'Paper') {
            imgElement1.src = "assets/images/r2.png";
        } else if (p1Option === 'Scissors') {
            imgElement1.src = "assets/images/r3.png";
        }
        imgElement1.style.display = "block";
    }, 800);

    //player 2
    gifElement2.style.display = "block";
    imgElement2.style.display = "none";

    setTimeout(function () {
        gifElement2.style.display = "none";

        if (p2Option === 'Rock') {
            imgElement2.src = "assets/images/l1.png";
        } else if (p2Option === 'Paper') {
            imgElement2.src = "assets/images/l2.png";
        } else if (p2Option === 'Scissors') {
            imgElement2.src = "assets/images/l3.png";
        }
        imgElement2.style.display = "block";
    }, 1000);

    // alert
    if (p1Score == 2) {
        setTimeout(function () {
            alert('Player 1 wins the game!');
            location.reload();
        }, 1000);
    } else if (p2Score == 2) {
        setTimeout(function () {
            alert('Player 2 wins the game!');
            location.reload();
        }, 1000);
    }
}

function determineRoundWinner(p1Option, p2Option) {
    if (p1Option === p2Option) {
        return 'tie';
    } else if (
        (p1Option === 'Rock' && p2Option === 'Scissors') ||
        (p1Option === 'Paper' && p2Option === 'Rock') ||
        (p1Option === 'Scissors' && p2Option === 'Paper')
    ) {
        return 'p1';
    } else {
        return 'p2';
    }
}