"use strict"

const sketchBoard = document.querySelector(".sketchBoard");
const resetGenerateButton = document.querySelector('.resetGenerateButton');

sketchBoard.addEventListener('mouseover', colorSketchUnit);
resetGenerateButton.addEventListener('click', getSketchUnitRows);

createBoard();

function createBoard(n=16) {
    const numberOFsketchUnits = n*n;
    sketchBoard.style.maxWidth = `${n*16}px`

    for(let i=0; i<numberOFsketchUnits; i++) {
        const sketchUnit = document.createElement("div");
        sketchUnit.classList.add("sketchUnit");

        sketchBoard.appendChild(sketchUnit);
    }
}

function emptyBoard() {
    // sketchBoard.innerHTML = '';
    sketchBoard.textContent = '';
}

function getSketchUnitRows() {
    const output = prompt("give number of units for Sketch Board");
    emptyBoard();
    createBoard(output);
}

function colorSketchUnit(e) {
    console.dir(e.target);
    e.target.classList.add("colorIt");
}