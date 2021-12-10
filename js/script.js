const playerOne = {
    name: null,
    color: 'Pink'
}

const playerTwo = {
    name: null,
    color: 'Orange'
}

let whoseTurn;

let winner;

// parts of the DOM we will be constantly updating - like nameEls

const tableDataEls = document.querySelector('td').value; // value?

const playerOneNameEl = document.getElementById('player-one-name').value; // value?
const playerTwoNameEl = document.getElementById('player-two-name').value; // value?


document.querySelector('#player-one-button').addEventListener('click', (e) => {
    render();
})

document.querySelector('#player-two-button').addEventListener('click', (e) => {
    render();
})

function render() {
    console.log(`the render function is invoked`);
    // update the value of player one and player two to equal the text inputted
    // to their respective input boxes
}



