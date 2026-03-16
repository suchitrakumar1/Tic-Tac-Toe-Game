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
        checkwinner();
    })

});
const checkwinner = () => {
    console.log("the functon is on");
    for (let patterns of winPatterns) {
        let pos1val = boxes[patterns[0]].innerText;
        console.log(pos1val);
        let pos2val = boxes[patterns[1]].innerText;
        console.log(pos2val);
        let pos3val = boxes[patterns[1]].innerText;
        console.log(pos3val);
        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            console.log("Winner is", pos1);
        }
    }
    // let pos1val = boxes[winPatterns[0]];
}