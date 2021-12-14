


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
let slotCellEls = document.querySelectorAll('.slot .cell');

// set all the innerHTML of all slot cells to 0
slotCellEls.forEach(slotCellEls => {
    slotCellEls.innerHTML = 0;
    // return slotCellEL;
})


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
    console.log('event listener is working')
    
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
    // checkWinner();
    render();
});



function init() {
    whoseTurn = Math.floor(Math.random() * 2) + 1;
    winner = null;

    switchTurns();
    render();

}

let whoseTurnMessage = document.querySelector('.whose-turn')

function render() {
    console.log(`the render function is invoked`);
    // update the value of player one and player two to equal the text inputted
    // to their respective input boxes
    console.log(`It is player ${whoseTurn}'s turn! `)
    // slotOneCellEls.forEach(slotOneCellEl =>  {
    //     // update the div cell to correspond to the slot array
    //     slotOneCellEl.innerHTML = whoseTurn;
    // });
    whoseTurnMessage.textContent = `It is player ${whoseTurn}'s turn`;
}


// winning combinations of the array:



let winnerAnnouncement = document.querySelector('#winner-announcement')

// function to 'switch' whoseturn so that winner displays properly
function whoWon() {
    if (whoseTurn === 1) {
        winner = 2;
    } else if (whoseTurn === 2) {
        winner = 1;
    }
};


function checkWinner() {
    for (let i = 0; i < slotOneEl.length; i++) {
        if (slotOneEl[i] !== 0) {
            if (slotOneEl['5'] === slotOneEl['4'] && slotOneEl['5'] === slotOneEl['3'] 
                && slotOneEl['5'] === slotOneEl['2']) {
                    whoWon();
                    winnerAnnouncement.textContent = `Player ${winner} is the winner!`
            }
        };
    };
};
