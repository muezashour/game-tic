let turn = 'x';
let title = document.querySelector(".title");

let squares = [];
let flag = false;

function gameOver(num1, num2, num3) {

    title.innerHTML = `${squares[num1]} winner`;
        document.getElementById('item' + num1).style.background = 'hsl(0, 88%, 70%)';
        document.getElementById('item' + num2).style.background = 'hsl(0, 88%, 70%)';
        document.getElementById('item' + num3).style.background = 'hsl(0, 88%, 70%)';
        setInterval(function () { title.innerHTML += '.' }, 1000);
    setTimeout(function () { location.reload() }, 4000);
    flag = true;
}
function checkNoWinner() {
    // Check if all squares are filled and no winning condition is met
    let allFilled = squares.slice(1).every(square => square !== '');
    let winnerFound = false; // Flag to track if a winner is found

    // Your existing winner-checking logic here...
    
    if (allFilled && !winnerFound) {
        title.innerHTML = "No winner";
        setInterval(function () { title.innerHTML += '.' }, 1000);
        setTimeout(function () { location.reload() }, 4000);// Display message if all squares are filled but no winner is found
    }
}

function winner() {
    
    
    for (let i = 1; i < 10; i++){
        squares[i] = document.getElementById('item' + i).innerHTML;
    }

    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {

        gameOver(1, 2, 3);
        
    }
    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '') {
        
        gameOver(4, 5, 6);
    }
    else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '') {
        
        gameOver(7, 8, 9);
    }
    else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '') {
        
        gameOver(1, 5, 9);
    }
    else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '') {
        
        gameOver(3, 5, 7);
    }
    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[4] != '') {
        
        gameOver(1, 4, 7);
    }
    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != '') {
        
        gameOver(2, 5, 8);
    }
    else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != '') {
        
        gameOver(3, 6, 9);
    }
    checkNoWinner();
}



function game(id) {
    if (flag)
        return;
    
    let elemnt = document.getElementById(id);
    if (turn === 'x' && elemnt.innerHTML == '') {

        elemnt.innerHTML = 'x';

        turn = 'o';

        title.innerHTML ='O'
    }
    else if (turn === 'o' && elemnt.innerHTML == '') {
        elemnt.innerHTML = 'o';

        turn = 'x';

        title.innerHTML ='X'
        
    }
    winner()

}