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
const tableEl = document.querySelector('table');

const tableDataEls = document.querySelectorAll('td'); // value?
const tableRowEls = document.querySelectorAll('tr');

const playerOneNameEl = document.getElementById('player-one-name'); // value?
const playerTwoNameEl = document.getElementById('player-two-name'); // value?

// replacing the value of a single cell test
tableEl.rows[0].cells[2].value = `hello`;

// this retrives the value of row 1 columm 1
// let cell = tableEl.rows[0].cells[0];
// console.log(cell);

// set value of all cells to null upon page loading
tableRowEls.forEach(tableRowEl => {
    tableRowEl.value = null;
})

tableDataEls.forEach(tableRowEl => {
    tableRowEl.value = null;
})


document.querySelector('#player-one-button').addEventListener('click', (e) => {
    render();
})

document.querySelector('#player-two-button').addEventListener('click', (e) => {
    render();
})

tableDataEls.forEach(tableDataEl => {
    tableDataEl.addEventListener('click', e => {
        console.log(`td event listener is working.`)
    })

})

function render() {
    console.log(`the render function is invoked`);
    // update the value of player one and player two to equal the text inputted
    // to their respective input boxes
}



