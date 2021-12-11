

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

const playerTwo = {
    name: null,
    color: 'Orange',
    number: 2
}


let whoseTurn;

let winner;

// parts of the DOM we will be constantly updating - like nameEls
// const gridEl = document.querySelector('.grid');
// const cellEls = gridEl.querySelectorAll('div');

let gridEl = document.querySelector('.grid');

// this makes the two dimensional array that is the grid
gridEl = new Array(7).fill(0).map(() => new Array(6).fill(0));


// this accesses the value of each grid individually (loop)
// they are all a default value of 0 - this is good

const cellEls = gridEl.forEach((cellEl, i) => {
    console.log(`current index: ${i}, ${cellEl}`);
});

// selecting and caching the slot elems
let slotOneEl = document.querySelector('#slot-one');
let slotTwoEl = document.querySelector('#slot-two');
let slotThreeEl = document.querySelector('#slot-three');
let slotFourEl = document.querySelector('#slot-four');
let slotFiveEl = document.querySelector('#slot-five');
let slotSixEl = document.querySelector('#slot-six');
let slotSevenEl = document.querySelector('#slot-seven')

// These are each column slot
slotOneEl = gridEl[0];
slotTwoEl = gridEl[1];
slotThreeEl = gridEl[2];
slotFourEl = gridEl[3];
slotFiveEl = gridEl[4];
slotSixEl = gridEl[5];
slotSevenEl = gridEl[6];


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

// need an event listener on the columns in grid (the arrays that each array 0-5 holds)
document.querySelectorAll('.slot').forEach(slot => {
    slot.addEventListener('click', e => {
        console.log(`The event listener is working`);
        // change whose turn each time a click happens
        if (whoseTurn === 1) {
            whoseTurn = 2;
        } else {
            whoseTurn = 1;
        }
        // replace the value of the 'lowest' slot that is 0
        for (let i = 0; i < gridEl.length; i++) {
            // console.log(gridEl)
            if (slotOneEl[0] === 0) {
                // whose turn is it's number replaces the innerHTML?
                slotOneEl[0] = whoseTurn;
                break;
            } else if (slotOneEl[1] === 0) {
                slotOneEl[1] = whoseTurn;
                break;
            } else if (slotOneEl[2] === 0) {
                slotOneEl[2] = whoseTurn;
                break;
            } else if (slot)
        }
    })
})



function init() {
    whoseTurn = Math.floor(Math.random() * 2) + 1;
    winner = null;

    render()
}


function render() {
    console.log(`the render function is invoked`);
    // update the value of player one and player two to equal the text inputted
    // to their respective input boxes
    console.log(`It is player ${whoseTurn}'s turn! `)
}



