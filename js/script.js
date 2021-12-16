
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

    render();
    reload();
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
            if (children[i].style.backgroundColor === 'white') {
                // children[i].innerHTML = whoseTurn.toString();
                children[i].style.backgroundColor = players[whoseTurn].color;
                break;
            }
        }
    };

    // this makes it so that whoseTurn switches off each time a click happens
    if (whoseTurn === 1) {
        whoseTurn = 2;
    } else {
        whoseTurn = 1;
    }

    render();
    checkWinner();
};

// this is a helper function, that sets the innerhtml of each page to 0 and clears the winner announcement.
// this function is called within init()
function reload () {
    cellEls.forEach(cellEls => {
        // cellEls.innerHTML = 0;
        cellEls.style.backgroundColor = 'white';
    })
    // this sets the winnerAnnouncementEl text content to be '' initially
    winnerAnnouncementEl.textContent = '';
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

        // console.log(squareOne, squareTwo, squareThree, squareFour)
        // console.log(squareOne.style.backgroundColor)
    // nested for loop to ? ^ this prints ALL the possible backgrounds, mostly white, and these if statments 
    // are not working
        if (squareOne.style.backgroundColor === 'rgb(229, 184, 182)' &&
            squareTwo.style.backgroundColor === 'rgb(229, 184, 182)' &&
            squareThree.style.backgroundColor === 'rgb(229, 184, 182)' &&
            squareFour.style.backgroundColor === 'rgb(229, 184, 182)') {
                // can I get this into the render function?
                // console.log(squareOne.style.backgroundColor)
                winnerAnnouncementEl.textContent = `Player 1 is the winner!`
                // console.log(winningArrays[i]);
                // return;
            }
        if (squareOne.style.backgroundColor === 'rgb(216, 123, 87)' &&
            squareTwo.style.backgroundColor === 'rgb(216, 123, 87)' &&
            squareThree.style.backgroundColor === 'rgb(216, 123, 87)' &&
            squareFour.style.backgroundColor === 'rgb(216, 123, 87)') {
                // can I get this into the render function?
                winnerAnnouncementEl.textContent = `Player 2 is the winner!`
                // console.log(winningArrays[i]);
                // return;
        } 

    }
}


const winningArrays = [
    // horizontal - 24 possibilities
    [0, 6, 12, 18],
    [6, 12, 18, 24],
    [18, 24, 30, 36],
    [1, 7, 13, 19],
    [7, 13, 19, 25],
    [13, 19, 25, 31],
    [19, 25, 31, 37],
    [2, 8, 14, 20],
    [8, 14, 20, 26],
    [14, 20, 26, 32],
    [20, 26, 32, 38],
    [3, 9, 15, 21],
    [9, 15, 21, 27],
    [15, 21, 27, 33],
    [21, 27, 33, 39],
    [4, 10, 16, 22],
    [10, 16, 22, 28],
    [16, 22, 28, 34],
    [22, 28, 34, 40],
    [5, 11, 17, 23],
    [11, 17, 23, 29],
    [17, 23, 29, 35],
    [23, 29, 35, 41],
    // vertical - 21 possibilities
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [6, 7, 8, 9],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [13, 14, 15, 16],
    [14, 15, 16, 17],
    [18, 19, 20, 21],
    [19, 20, 21, 22],
    [20, 21, 22, 23],
    [24, 25, 26, 27],
    [25, 26, 27, 28],
    [26, 27, 28, 29],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [32, 33, 34, 35],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],
    // diagonal - left to right - 12 possibilities
    [0, 7, 14, 21],
    [7, 14, 21, 28],
    [14, 21, 28, 35],

    [1, 8, 15, 22],
    [8, 15, 22, 29],

    [2, 9, 16, 23],

    [6, 13, 20, 27],
    [13, 20, 27, 34],
    [20, 27, 34, 41],

    [12, 19, 26, 33],
    [29, 26, 33, 40],

    [18, 25, 32, 39],

    // diagonal - right to left - 12 possibilities
    [36, 31, 26, 21],
    [31, 26, 21, 16],
    [26, 21, 16, 11],

    [37, 32, 27, 22],
    [32, 27, 22, 17],

    [38, 33, 28, 23],

    [30, 25, 20, 15],
    [25, 20, 15, 10],
    [20, 15, 10, 5],

    [24, 19, 14, 9],
    [19, 14, 9, 4],

    [18, 13, 8, 3]
];


// input name sections, if I have time:

// address these please!!!
// const playerOneNameEl = document.getElementById('player-one-name'); // value?
// const playerTwoNameEl = document.getElementById('player-two-name'); // value?

// // event listeners - // address these please!!!
// document.querySelector('#player-one-button').addEventListener('click', (e) => {
//     // render();
// })
// document.querySelector('#player-two-button').addEventListener('click', (e) => {
//     // render();
// })

