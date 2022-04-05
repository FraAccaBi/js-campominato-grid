/* Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

//intercetta l'nvio del form
document.querySelector('form').addEventListener('submit', function(event) {
    //previene il refresh della pagina
    event.preventDefault();

    startGame(event);

})


/**
 * 
 * @param {object} event Dom event
 */
function startGame(event) {
     //seleziona il ivewllo
     const level = event.target[0].value;
     //console.log(level);
 
    let cells_number, cols_number;

     switch (level) {
         case 'easy':
             cells_number = 100;
             cols_number =10; //10*10
             break;
         case 'medium':
             cells_number = 81;
             cols_number =9; //9*9
             break;
         case 'hard':
             cells_number = 49; 
             cols_number =7; //7*7
             break;    
     }
 
     //console.log(cells_number, cols_number);
     generate_grid(cells_number, cols_number);
     handleClick('.cells', '.selected')
 
}



/**
 * generate the game grid
 * 
 * cells_number = 100, cols_number = 10
 * 
 * @param {number} cells_number the cells number to generate
 * @param {number} cols_number the number of columns and rows
 */
function generate_grid(cells_number, cols_number) {
    //seleziono l'elento della dom desirato e lo assegniamo ad una const
    const gameAreaElement = document.querySelector('main .cells')



    for (let i = 1; i < (cells_number + 1); i++) {
        //creare l'elemento della dom (cella) da inserire nell'area di gioco
        const cell = document.createElement('div')

        //aggiungiamo alla cella il numero progressivo generato nel ciclo
        cell.append(i)
        cell.classList.add('cell')
        //dimensionare la cella in base alla misura della griglia
        cell.style.width = `calc(100% / ${cols_number})`

        //appendere la cella all'area di gioco
        gameAreaElement.append(cell)

    }
}

//colorare di azzurro
//creare un event listener per ciascuna cella dell'area di gioco



/**
 * Handle cell click event
 * @param {string} css_selector 
 * @param {string} css_class 
 */
function handleClick(css_selector, css_class) {

    //1. selezioni tutte le celle queryselectorAll
    const cells = document.querySelectorAll(css_selector)
    console.log(cells);
    //2. ciclare tra glie lemtne della dom
    for (let i = 0; i < cells.length; i++) {
        const cellElement = cells[i];
        console.log(cellElement); 
        //3. attacchiamo l'event all'elemento della dom (cell)
        cellElement.addEventListener('click', function() {
            console.log(this);
            //4. evidenziare la cella di azzurro 
            //this.style.backgroundColor = 'cornflowerblue'
            this.classList.add(css_class)

        })       
    }
    
}