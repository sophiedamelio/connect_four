
const players = {
    1: {
        name: null,
        color: 'Pink',
        number: 1
    },
    2: {  
        name: null,
        color: 'Orange',
        number: 2
    }
};

// state variables aka MODEL / source of truth for the app
let whoseTurn;
let winner;


// cached Element references from the DOM
let gridEl = document.querySelector('.grid');
let cellEls = document.querySelectorAll('.cell');
let winnerAnnouncementEl = document.querySelector('#winner-announcement');
let whoseTurnMessage = document.querySelector('.whose-turn');
let replayButtonEl = document.querySelector('#replay');

// this makes the two dimensional array that is the grid
gridEl = new Array(7).fill(0).map(() => new Array(6).fill(0));


// this calls the init() function when the replayButtonEl is clicked, resetting the gameboard values
replayButtonEl.addEventListener('click', e => {
    init()
});

// this is the event listener on the entire gridEl
document.querySelector('.grid').addEventListener('click', handleGridClick)

// this function is being called when the page loads
init();

// initializes state variables
// updates the model with the initial values of the game (update the state with the initial values)
function init() {
    whoseTurn = Math.floor(Math.random() * 2) + 1;
    winner = null;

    reload();
    switchTurns();
    render();
}

// visualize the state
function render() {
    whoseTurnMessage.textContent = `It is player ${whoseTurn}'s turn`;

}

// controller function - update the state when interaction happpens - when a user clicks on the grid, update our state
function handleGridClick(e) {
    if (e.target.className === 'cell') {

        // e.target.parentElement = the slot that was clicked on
        let children = e.target.parentElement.children

        // this accesses the clicked on slot's children at an index of 0 (tallest cell)
        // console.log(children[0].innerHTML);
        
        for (let i = children.length - 1; i >= 0; i--) {
            if (children[i].innerHTML === '0') {
                children[i].innerHTML = whoseTurn.toString();
                children[i].style.backgroundColor = players[whoseTurn].color;
                break;
            }
        }
    };
    render();
    switchTurns();
    checkWinner();
};

// this is a helper function, that sets the innerhtml of each page to 0 and clears the winner announcement.
// this function is called within init()
function reload () {
    cellEls.forEach(cellEls => {
        cellEls.innerHTML = 0;
    })
    // this sets the winnerAnnouncementEl text content to be '' initially
    winnerAnnouncementEl.textContent = '';
};


// change whose turn each time a click happens
function switchTurns() {
    if (whoseTurn === 1) {
        whoseTurn = 2;
    } else {
        whoseTurn = 1;
    }
};


function checkWinner () {
    // this is checking each array in winningArrays
    // if winningArrays at each index i's [0], 1, 2, 3 correspond with each squareOne, two, three, 
    //then there is a winner
    for (let i = 0; i < winningArrays.length; i++) {
        const squareOne = cellEls[winningArrays[i][0]]
        const squareTwo = cellEls[winningArrays[i][1]]
        const squareThree = cellEls[winningArrays[i][2]]
        const squareFour = cellEls[winningArrays[i][3]]

    if (squareOne.innerHTML === '1' &&
        squareTwo.innerHTML === '1' &&
        squareThree.innerHTML === '1' &&
        squareFour.innerHTML === '1') {
            // can I get this into the render function?
            winnerAnnouncementEl.textContent = `Player 1 is the winner!`
        }
    if (squareOne.innerHTML === '2' &&
        squareTwo.innerHTML === '2' &&
        squareThree.innerHTML === '2' &&
        squareFour.innerHTML === '2') {
            // can I get this into the render function?
            winnerAnnouncementEl.textContent = `Player 2 is the winner!`
        } 
    }
}


const winningArrays = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
  ]


// input name sections, if I have time:

// address these please!!!
const playerOneNameEl = document.getElementById('player-one-name'); // value?
const playerTwoNameEl = document.getElementById('player-two-name'); // value?

// event listeners - // address these please!!!
document.querySelector('#player-one-button').addEventListener('click', (e) => {
    // render();
})
document.querySelector('#player-two-button').addEventListener('click', (e) => {
    // render();
})

