"use strict"

const sketchBoard = document.querySelector(".sketchBoard");
const resetGenerateButton = document.querySelector('.resetGenerateButton');

sketchBoard.addEventListener('mouseover', colorSketchUnit);
resetGenerateButton.addEventListener('click', getSketchUnitRows);

createBoard();

function createBoard(n=16) {
    const numberOFsketchUnits = n*n;
    const sketchUnitSize = 512/n;

    for(let i=0; i<numberOFsketchUnits; i++) {
        const sketchUnit = document.createElement("div");
        sketchUnit.classList.add("sketchUnit");
        sketchUnit.style.width = `${sketchUnitSize}px`;
        sketchUnit.style.height = `${sketchUnitSize}px`;

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