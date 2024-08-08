"use strict"

const sketchBoard = document.querySelector(".sketchBoard");
const resetGenerateButton = document.querySelector('.resetGenerateButton');
const colorButton = document.querySelector('.randomColorButton');
const blackColorButton = document.querySelector('.blackColorButton');
const clearBoard = document.querySelector('clearBoard');

let toColor = false;

sketchBoard.addEventListener('mouseover', colorSketchUnit);
resetGenerateButton.addEventListener('click', getSketchUnitRows);
colorButton.addEventListener('click', () => toColor=true);

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
    if(!toColor)
        e.target.classList.add("colorItBlack");
    else {
        let color = Math.floor(Math.random()*361);
        e.target.style.backgroundColor = "hsl("+color+" 100%, 50%)";
    }
}