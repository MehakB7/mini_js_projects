


const createPiece = (type, min, max, board) => {
    for (let i = min; i <= max; i++) {
        const piece = document.createElement("div");
        piece.setAttribute("class", `${type}-piece piece`)
        piece.setAttribute("id", `white${i}`);
        const parent = document.getElementById(`${i}`);
        if (parent)
            parent.appendChild(piece);
    }

}

const createBoard = () => {
    const board = document.createElement("div");
    board.setAttribute("class", "board");
    let counter = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const id = i % 2 === 0 ? (i + 1 * j) : (i * (j + 1));
            counter++;
            const element = document.createElement("div");
            if (id % 2 === 0) {
                element.setAttribute("class", `white`)
            } else {
                element.setAttribute("class", "black")
            }
            element.setAttribute("id", counter);
            board.appendChild(element)

        }

    }






    const element = document.querySelector("#app");
    element.appendChild(board);
    createPiece("white", 1, 16, board);
    createPiece("black", 48, 64, board);
    gamePlay(board);
}


const gamePlay = (board) => {

    board.onclick = ((e) => {

        const currentTarget = e.target;
        if (currentTarget.classList.contains("piece")) {
            if (selectedPiece && currentTarget.id !== selectedPiece?.id) {
                selectedPiece.classList.toggle("red");

            }
            selectedPiece = currentTarget;
            selectedPiece.classList.toggle("red");

        } else {
            // check current target is block
            // check is empty move to that place
            // don't do anything

        }

    })

    let selectedPiece = null;
    let placedPiece = null;







}

createBoard();