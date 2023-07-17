export function generateBoard(cellsToGenerateFrom, numberOfCells) {
    return [...Array(numberOfCells)].map(() => {return {
        text: getRandomCell(cellsToGenerateFrom),
        done: false
    }})
}

function getRandomCell(cellsToGenerateFrom) {
    return cellsToGenerateFrom[Math.floor(Math.random() * cellsToGenerateFrom.length)]
}