
const players = {
    one: {
    name: null,
    color: 'Pink',
    number: 1
    },
    two: {  
    name: null,
    color: 'Pink',
    number: 1
    }
};

let whoseTurn;

let winner;

// parts of the DOM we will be constantly updating - like nameEls

let gridEl = document.querySelector('.grid');

// this makes the two dimensional array that is the grid
gridEl = new Array(7).fill(0).map(() => new Array(6).fill(0));


// this needs to change to the divs within the gridEl[0]
let cellEls = document.querySelectorAll('.cell');

// set all the innerHTML of all slot cells to 0
// this is a helper function, that sets the innerhtml of each page to 0 and clears the winner announcement.
// this function is called within init()
function reload () {
    cellEls.forEach(cellEls => {
        cellEls.innerHTML = 0;
    })
    winnerAnnouncement.textContent = '';
};


const playerOneNameEl = document.getElementById('player-one-name'); // value?
const playerTwoNameEl = document.getElementById('player-two-name'); // value?


document.querySelector('#player-one-button').addEventListener('click', (e) => {
    render();
})

document.querySelector('#player-two-button').addEventListener('click', (e) => {
    render();
})

// change whose turn each time a click happens
function switchTurns() {
    if (whoseTurn === 1) {
        whoseTurn = 2;
    } else {
        whoseTurn = 1;
    }
};


document.querySelector('.grid').addEventListener('click', e => {
    
    if (e.target.className === 'cell') {

        // e.target.parentElement = the slot that was clicked on
        let children = e.target.parentElement.children

        // this accesses the clicked on slot's children at an index of 0 (tallest cell)
        // console.log(children[0].innerHTML);
        
        for (let i = children.length - 1; i >= 0; i--) {
            if (children[i].innerHTML === '0') {
                children[i].innerHTML = whoseTurn.toString();
                break;
            }
        }
    };

    switchTurns();
    checkWinner();
    render();
});



function init() {
    whoseTurn = Math.floor(Math.random() * 2) + 1;
    winner = null;

    reload();
    switchTurns();
    render();

}

let whoseTurnMessage = document.querySelector('.whose-turn')

function render() {
    // update the value of player one and player two to equal the text inputted
    // to their respective input boxes

    whoseTurnMessage.textContent = `It is player ${whoseTurn}'s turn`;
}


let winnerAnnouncement = document.querySelector('#winner-announcement')


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
            winnerAnnouncement.textContent = `Player 1 is the winner!`
        }
    if (squareOne.innerHTML === '2' &&
        squareTwo.innerHTML === '2' &&
        squareThree.innerHTML === '2' &&
        squareFour.innerHTML === '2') {
            winnerAnnouncement.textContent = `Player 2 is the winner!`
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
