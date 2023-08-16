const sizeButton = document.querySelector(".size-button")
const rainbowButton = document.querySelector(".rainbow-mode-button")
const randomButton = document.querySelector(".random-mode-button")
const toggleGridButton = document.querySelector(".toggle-grid-button")
const clearCanvasButton = document.querySelector(".clear-canvas-button")
const directionHandButton = document.querySelector(".toggle-hand-button")
let currentRainbowColor = 0

directionHandButton.addEventListener("click",changeDirection)
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
clearCanvasButton.addEventListener("click", clearCanvas)
toggleGridButton.addEventListener("click",toggleGrid)
rainbowButton.addEventListener("click",enterRainbowMode)
randomButton.addEventListener("click", enterRandomMode)
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
function clearCanvas() {
    let grid = document.querySelectorAll(".cell")
    grid.forEach(cell=>cell.style.backgroundColor = "")
}
function toggleGrid() {
    let grid = document.querySelectorAll(".cell")
    grid.forEach(cell => cell.style.border==="0px" ? cell.style.border = "1px solid #7b7b7b" : cell.style.border = "0px")
}

function paint(e, color = "hsl(0,0%,100%)"){
    if(rainbowButton.classList.contains("active")) {
        color = `hsl(${currentRainbowColor}deg,100%,50%`
        currentRainbowColor+=10
        console.log(currentRainbowColor)
        if (currentRainbowColor >= 361) {
            currentRainbowColor = 0
        }
    }
    else if(randomButton.classList.contains("active")) {
    let R = Math.floor(Math.random()*251)
    let G =  Math.floor(Math.random()*251)
    let B =  Math.floor(Math.random()*251)
    color =  `RGB(${R},${G},${B}`
    }
    this.style.backgroundColor = color
}

function enterRainbowMode(e) {
if (randomButton.classList.contains("active")) randomButton.classList.remove("active")
rainbowButton.classList.toggle("active")
if (rainbowButton.classList.contains("active")) {
//TODO
//    for (let i=0;i<361; i++)
//    {
//     color = `hsl(${i}, 100%, 50%)`
//    }
}
}

function enterRandomMode(e) {
    if(rainbowButton.classList.contains("active")) rainbowButton.classList.remove("active")
    randomButton.classList.toggle("active")
}

function changeDirection(e) {
    const mainDiv = document.querySelector(".main")
    mainDiv.style.flexDirection === "row" || mainDiv.style.flexDirection === "" ? mainDiv.style.flexDirection = "row-reverse" : mainDiv.style.flexDirection = "row"
    directionHandButton.textContent.includes("Left-Hand") ? directionHandButton.textContent = "Change to Right-Hand mode" : directionHandButton.textContent = "Change to Left-Hand mode"
}
renderBoard(9)