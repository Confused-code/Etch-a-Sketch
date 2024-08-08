"use strict"

const sketchBoard = document.querySelector(".sketchBoard");

sketchBoard.addEventListener('mouseover', colorSketchUnit);

createBoard(16);

function createBoard(n) {
    const numberOFsketchUnits = n*n;
    sketchBoard.style.maxWidth = `${n*16}px`

    for(let i=0; i<numberOFsketchUnits; i++) {
        const sketchUnit = document.createElement("div");
        sketchUnit.classList.add("sketchUnit");

        sketchBoard.appendChild(sketchUnit);
    }
}

function colorSketchUnit(e) {
    console.dir(e.target);
    e.target.classList.add("colorIt");
}