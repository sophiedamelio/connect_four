
// constant variables, will not change throughout the game
const players = {
    1: {
        name: null,
        color: 'rgb(229, 184, 182)',
        number: 1
    },
    2: {  
        name: null,
        color: 'rgb(216, 123, 87)',
        number: 2
    }
};

// state variables
let whoseTurn;
let winner;
let count;

// cached element references from the DOM
let gridEl = document.querySelector('.grid');
let cellEls = document.querySelectorAll('.cell');
let winnerAnnouncementEl = document.querySelector('#winner-announcement');
let whoseTurnMessage = document.querySelector('.whose-turn');
let replayButtonEl = document.querySelector('#replay');

// this creates the two dimensional array that is the grid
gridEl = new Array(7).fill(0).map(() => new Array(6).fill(0));

// this event listeneter is attached to the replay button, and calls the init() function when clicked, resetting the game to be played again
replayButtonEl.addEventListener('click', e => {
    init()
});

// this envokes the init() function immediately upon the page loading
init();

// this function initializes state variables, updating the model with the initial values of the game
function init() {
    whoseTurn = Math.floor(Math.random() * 2) + 1;
    winner = null;
    count = 0;
    winnerAnnouncementEl.textContent = '';
    document.querySelector('.grid').addEventListener('click', handleGridClick, true)
    // this sets the background color of each cellEl to white
    cellEls.forEach(cellEls => {
        cellEls.style.backgroundColor = 'white';
    })
    render();
}

// this function visualize the state variables
function render() {
    whoseTurnMessage.textContent = `It is player ${whoseTurn}'s turn`;
}

// this is the controller function - it updates the state when the user click interaction happpens on the grid
function handleGridClick(e) {
    if (e.target.className === 'cell') {
        // e.target.parentElement is the slot that was clicked on
        let children = e.target.parentElement.children
        // this for loop goes through each cell of the slot that was clicked on, and changes the color of the lowest available cell to the color of the player whose turn it is
        for (let i = children.length - 1; i >= 0; i--) {
            if (children[i].style.backgroundColor === 'white') {
                children[i].style.backgroundColor = players[whoseTurn].color;
                break;
            }
        }
    };

    // this updates the value of the variable count by adding 1 every time a click is registered, and renders a tie message when the entire board has been filled and no winner announcement has been made.
    count++;
    if (count >= 42 && winnerAnnouncementEl.textContent === '') {
        winnerAnnouncementEl.textContent = `It is a tie! No one wins.`
    }

    // this updates the whoseTurn variable so that it switches off between the players each time a click happens
    if (whoseTurn === 1) {
        whoseTurn = 2;
    } else {
        whoseTurn = 1;
    }

    // this function is called to update the view each time a click is registered
    render();
    // this function is called to check the winner each time a click is registered
    checkWinner();
};

// this function checks for a winner, and is called above, each time a click occurs
function checkWinner () {
    // this for loop is checking each array in winningArrays
    for (let i = 0; i < winningArrays.length; i++) {
        // if winningArrays at each index i's [0], 1, 2, 3 correspond with each squareOne, two, three, 
    //then there is a winner
        // this declares squareOne, SquareTwo, squareThree, and squareFour, which represent the four chips to be tested for a win
        // th
        const squareOne = cellEls[winningArrays[i][0]]
        const squareTwo = cellEls[winningArrays[i][1]]
        const squareThree = cellEls[winningArrays[i][2]]
        const squareFour = cellEls[winningArrays[i][3]]

        if (squareOne.style.backgroundColor === 'rgb(229, 184, 182)' &&
            squareTwo.style.backgroundColor === 'rgb(229, 184, 182)' &&
            squareThree.style.backgroundColor === 'rgb(229, 184, 182)' &&
            squareFour.style.backgroundColor === 'rgb(229, 184, 182)') {
                winnerAnnouncementEl.textContent = `Player 1 is the winner!`
                // this removes event listener when a winner is declared, so that you cannot keep playing
                document.querySelector('.grid').removeEventListener('click', handleGridClick, true)
            }
        if (squareOne.style.backgroundColor === 'rgb(216, 123, 87)' &&
            squareTwo.style.backgroundColor === 'rgb(216, 123, 87)' &&
            squareThree.style.backgroundColor === 'rgb(216, 123, 87)' &&
            squareFour.style.backgroundColor === 'rgb(216, 123, 87)') {
                winnerAnnouncementEl.textContent = `Player 2 is the winner!`
                // this removes event listener when a winner is declared, so that you cannot keep playing
                document.querySelector('.grid').removeEventListener('click', handleGridClick, true)
        }
    }
}


const winningArrays = [
    // horizontal - 24 possibilities
    [0, 6, 12, 18], [6, 12, 18, 24], [18, 24, 30, 36], [1, 7, 13, 19], [7, 13, 19, 25], [13, 19, 25, 31], [19, 25, 31, 37], [2, 8, 14, 20],  [8, 14, 20, 26], [14, 20, 26, 32], [20, 26, 32, 38], [3, 9, 15, 21], [9, 15, 21, 27],  [15, 21, 27, 33], [21, 27, 33, 39], [4, 10, 16, 22], [10, 16, 22, 28], [16, 22, 28, 34], [22, 28, 34, 40], [5, 11, 17, 23], [11, 17, 23, 29], [17, 23, 29, 35], [23, 29, 35, 41],
    
    // vertical - 21 possibilities
    [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [6, 7, 8, 9], [7, 8, 9, 10], [8, 9, 10, 11], [12, 13, 14, 15], [13, 14, 15, 16], [14, 15, 16, 17], [18, 19, 20, 21], [19, 20, 21, 22], [20, 21, 22, 23], [24, 25, 26, 27], [25, 26, 27, 28], [26, 27, 28, 29], [30, 31, 32, 33], [31, 32, 33, 34], [32, 33, 34, 35], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
    
    // diagonal - left to right - 12 possibilities
    [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35], [1, 8, 15, 22], [8, 15, 22, 29], [2, 9, 16, 23], [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41], [12, 19, 26, 33], [29, 26, 33, 40], [18, 25, 32, 39],

    // diagonal - right to left - 12 possibilities
    [36, 31, 26, 21], [31, 26, 21, 16], [26, 21, 16, 11], [37, 32, 27, 22], [32, 27, 22, 17], [38, 33, 28, 23], [30, 25, 20, 15], [25, 20, 15, 10], [20, 15, 10, 5], [24, 19, 14, 9], [19, 14, 9, 4], [18, 13, 8, 3]
];
