const sizeButton = document.querySelector(".size-button")
sizeButton.addEventListener("click", (e)=>
{   
    let value = prompt("choose a size between 1 and 100 and 0 to cancel")
    if (!(+value) || +value > 100 || +value < 0 || !Number.isInteger(+value)) {
        
        alert("please only integers between 1 and 100")
    }
    else {
        renderBoard(value)
    }
  
})
function renderBoard(size) {
    const cellNumber = size ** 2;
    const containerDiv = document.querySelector(".container")
    const cells = []
    for (let i = 0; i<cellNumber; i++)
    {
        let newCell = document.createElement("div")
        newCell.classList.add("cell")
        newCell.style.flexBasis = `${100/size}%`
        newCell.addEventListener('mouseover', paint)
        cells.push(newCell)
    }
    containerDiv.replaceChildren(...cells)
    
}

function paint(e){
    this.style.backgroundColor = "white"
}

renderBoard(9)