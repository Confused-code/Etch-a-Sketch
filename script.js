"use strict"

const sketchBoard = document.querySelector(".sketchBoard");
const resetGenerateButton = document.querySelector('.resetGenerateButton');
const colorButton = document.querySelector('.randomColorButton');
const blackColorButton = document.querySelector('.blackColorButton');
const clearBoard = document.querySelector('.clearBoard');

let toColor = false;
let numberOfSketchUnitesPerRow = 16;

// sketchBoard.addEventListener('mouseover', colorSketchUnit);
resetGenerateButton.addEventListener('click', getSketchUnitRows);
colorButton.addEventListener('click', () => toColor=true);
blackColorButton.addEventListener('click', ()=>toColor=false);
clearBoard.addEventListener('click', clearSketchUnits);

createBoard();

function createBoard(n=16) {
    const numberOFsketchUnits = n*n;
    const sketchUnitSize = 512/n;

    for(let i=0; i<numberOFsketchUnits; i++) {
        const sketchUnit = document.createElement("div");
        sketchUnit.classList.add("sketchUnit");
        sketchUnit.style.backgroundColor == "#fff";
        sketchUnit.style.width = `${sketchUnitSize}px`;
        sketchUnit.style.height = `${sketchUnitSize}px`;

        sketchUnit.addEventListener('mouseover', colorSketchUnit)

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
    numberOfSketchUnitesPerRow = output;
    createBoard(output);
}

function colorSketchUnit(e) {
    if(!toColor) {
        const targetUnit = e.target;
        if(targetUnit.style.backgroundColor == "" ||
            targetUnit.style.backgroundColor !== 'rgb(110, 172, 218)'
        ) {
            targetUnit.style.backgroundColor = "#6EACDA";
            e.target.style.opacity = "0.1";
        } else {
            if(isFilled(e)) {
                if(+(e.target.style.opacity<1))
                    e.target.style.opacity = `${+(e.target.style.opacity) + 0.1}`;
            }
        }
    }
    else {
        if(e.target.style.backgroundColor == "rgb(110, 172, 218)" || 
            e.target.style.backgroundColor == ''
        ) {
            let color = Math.floor(Math.random()*361);
            e.target.style.backgroundColor = "hsl("+color+" 100%, 50%)";
            e.target.style.opacity = "0.1";
        }
        else {
            if(+(e.target.style.opacity<1))
                e.target.style.opacity = `${+(e.target.style.opacity) + 0.1}`;
        }
    }
}

function isFilled(e) {
    if (e.target.style.opacity === "") return false;
    else return true;
}

function clearSketchUnits() {
    const sketchUnits = document.querySelectorAll('.sketchUnit');
    sketchUnits.forEach((unit)=>{
        unit.style.backgroundColor = 'white';
        unit.style.opacity = '';
    });
}