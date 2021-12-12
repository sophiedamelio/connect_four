


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
// const gridEl = document.querySelector('.grid');
// const cellEls = gridEl.querySelectorAll('div');

let gridEl = document.querySelector('.grid');

// this makes the two dimensional array that is the grid
gridEl = new Array(7).fill(0).map(() => new Array(6).fill(0));


// selecting and caching the slot elems
// let slotOneEl = document.querySelector('#slot-one');
// let slotTwoEl = document.querySelector('#slot-two');
// let slotThreeEl = document.querySelector('#slot-three');
// let slotFourEl = document.querySelector('#slot-four');
// let slotFiveEl = document.querySelector('#slot-five');
// let slotSixEl = document.querySelector('#slot-six');
// let slotSevenEl = document.querySelector('#slot-seven')

// this needs to change to the divs within the gridEl[0]
let slotOneCellEls = document.querySelectorAll('#slot-one div');

let slotTwoCellEls = document.querySelectorAll('#slot-two div');
let slotThreeCellEls = document.querySelectorAll('#slot-three div');
let slotFourCellEls = document.querySelectorAll('#slot-four div')
let slotFiveCellEls = document.querySelectorAll('#slot-five div');
let slotSixCellEls = document.querySelectorAll('#slot-six div');
let slotSevenCellEls = document.querySelectorAll('#slot-seven div');

// These are each column slot
// slotOneEl = gridEl[0];
// slotTwoEl = gridEl[1];
// slotThreeEl = gridEl[2];
// slotFourEl = gridEl[3];
// slotFiveEl = gridEl[4];
// slotSixEl = gridEl[5];
// slotSevenEl = gridEl[6];


// to grab all the slots, using this loop instead of what is above and repetitive

let slot = document.querySelectorAll('.slot');

// loop to get these better / more concisely
// so, gridEl[0] is slotOneEl (what was slotonel)
for (let i = 0; i < gridEl.length; i++) {
    // this is slotOneEl (slot[i])
    slot[i] = gridEl[i];
    for (let y = slot.length - 1; y >= 0; y--) {
    // backwards loop like this?
    // (let i = gridEl[x].length - 1; i >= 0; i--)
        slotOneCellEls = slot[y]; // ?
    }
}



const playerOneNameEl = document.getElementById('player-one-name'); // value?
const playerTwoNameEl = document.getElementById('player-two-name'); // value?


// replace the value of a single 'cellEl
// slotOneEl[0] = 1;

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


// need an event listener on the columns in grid (the arrays that each array 0-5 holds)

// document.querySelector('#slot-one').addEventListener('click', e => {
// this adds event listeners to each slot in a loop instead of individual
document.querySelectorAll('.slot').forEach(slot => {
    slot.addEventListener('click', e => {
    // replace the value of the 'lowest' slot that is 0
    // this is a backwards for loop
    // while x is less than 7
    for (let x = 0; x < gridEl.length; x++) {
        // backwards loop to go bottom up
        // gridEl at every index it has
        // if gridEl at each index is 0
        // gridEl at that index is equal to Whoseturn
        // slotOneCellEls 's innerHTML = whoseTurn
        for (let i = gridEl[x].length - 1; i >= 0; i--) {
            if (gridEl[i] === 0) {
                gridEl[i] = whoseTurn;
                slotOneCellEls[x].innerHTML = whoseTurn;
                break;
            };
        };
        switchTurns();
        checkWinner();
        render();
    }
    });
});

document.querySelector('#slot-two').addEventListener('click', e => {
    for (let i = slotTwoEl.length - 1; i >= 0; i--) {
        if (slotTwoEl[i] === 0) {
            slotTwoEl[i] = whoseTurn;
            slotTwoCellEls[i].innerHTML = whoseTurn;
            break;
        }
    };
    switchTurns();
    checkWinner();
    render();
});

document.querySelector('#slot-three').addEventListener('click', e => {
    for (let i = slotThreeEl.length - 1; i >= 0; i--) {
        if (slotThreeEl[i] === 0) {
            slotThreeEl[i] = whoseTurn;
            slotThreeCellEls[i].innerHTML = whoseTurn;
            break;
        }
    };
    switchTurns();
    checkWinner();
    render();
});

document.querySelector('#slot-four').addEventListener('click', e => {
    for (let i = slotFourEl.length - 1; i >= 0; i--) {
        if (slotFourEl[i] === 0) {
            slotFourEl[i] = whoseTurn;
            slotFourCellEls[i].innerHTML = whoseTurn;
            break;
        }
    };
    switchTurns();
    checkWinner();
    render();
});

document.querySelector('#slot-five').addEventListener('click', e => {
    for (let i = slotFiveEl.length - 1; i >= 0; i--) {
        if (slotFiveEl[i] === 0) {
            slotFiveEl[i] = whoseTurn;
            slotFiveCellEls[i].innerHTML = whoseTurn;
            break;
        }
    };
    switchTurns();
    checkWinner();
    render();
});

document.querySelector('#slot-six').addEventListener('click', e => {
    for (let i = slotSixEl.length - 1; i >= 0; i--) {
        if (slotSixEl[i] === 0) {
            slotSixEl[i] = whoseTurn;
            slotSixCellEls[i].innerHTML = whoseTurn;
            break;
        }
    };
    switchTurns();
    checkWinner();
    render();
});

document.querySelector('#slot-seven').addEventListener('click', e => {
    for (let i = slotSevenEl.length - 1; i >= 0; i--) {
        if (slotSevenEl[i] === 0) {
            slotSevenEl[i] = whoseTurn;
            slotSevenCellEls[i].innerHTML = whoseTurn;
            break;
        }
    };
    switchTurns();
    checkWinner();
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

// 0-7 across
// 0-6 tall on each one

// slotOneEl['5'] is bottom left corner

// is this a function I run each time I click ?
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
    // for (let i = 0; i < slotOneEl.length; i++) {
    //     if (slotOneEl[i] !== 0) {
    //         if (slotOneEl['5'] === slotOneEl['4'] && slotOneEl['5'] === slotOneEl['3'] 
    //             && slotOneEl['5'] === slotOneEl['2']) {
    //                 // this needs to be whoseturn at the time of the click
    //                 // currently it is opposite
    //                 whoWon();
    //                 winnerAnnouncement.textContent = `Player ${winner} is the winner!`
    //         }
    //     };
    // };
};
