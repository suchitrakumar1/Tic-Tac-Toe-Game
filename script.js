let boxes = document.querySelectorAll(".box");

const winPatterns = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row

    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column

    [0, 4, 8], // diagonal
    [2, 4, 6]  // diagonal
];
turno = true;
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turno === true) {
            box.innerText = "x";
            turno = false;
        }
        else {
            box.innerText = "o";
            turno = true;
        }
        box.disabled = true;
        checkwinner();
    })

});
const checkwinner = () => {
    for (let patterns of winPatterns) {
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;
        if (pos2val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWiner(pos1val);
                
            }
        }
    }
}
let selement = document.querySelector(".winner-section");
const showWiner = (pos1val) => {
    selement.innerText = "The Winner Is " + pos1val;
    selement.classList.remove("hide");
    disabledbtn();
}
let reset = document.querySelector(".reset-btn");
reset.addEventListener("click",()=>{
    for (const box of boxes) {
        box.innerText = "";
        enabledbtn();
        selement.classList.add("hide");
        turno = true
    }
})
const disabledbtn=()=>{
    for (const box of boxes) {
        box.disabled=true;
    }
}
const enabledbtn=()=>{
    for (const box of boxes) {
        box.disabled=false;
    }
}