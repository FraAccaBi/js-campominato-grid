/* Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */




function generateGrid(numberCells, selector, elementName, className) {
    const cellsElement = document.querySelector(selector)
  for (let i = 1; i <= numberCells; i++) {
    const cell = document.createElement(elementName)
    cell.classList.add(className)
    cellsElement.append(cell)
  } 
}

let button = document.getElementById('difficoltà')

function playMode(optionValue) {
    if (optionValue === 'easy'){
        generateGrid(100, '.row', '.cell', 'cell')
    } if else (optionValue === 'normal'){
        generateGrid(81, '.row', '.cell', 'cell')
    } if else (optionValue === 'hard'){
        generateGrid(49, '.row', '.cell', 'cell')
    }
}