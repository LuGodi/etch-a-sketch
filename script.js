function renderBoard(size) {
    const cellNumber = size ** 2;
    const containerDiv = document.querySelector(".container")
    const cells = []
    for (let i = 0; i<cellNumber; i++)
    {
        let newCell = document.createElement("div")
        newCell.classList.add("cell")
        newCell.style.flexBasis = `${100/size}%`
        cells.push(newCell)
    }
    containerDiv.replaceChildren(...cells)
}



renderBoard(9)