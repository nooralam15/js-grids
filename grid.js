//grid functions

function createGridArray() {
    //create and return a grid array
    return [[0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]
}

function createDivGrid(grid) {
    for (let row = 0; row < num_Rows; row++) {
        for (let col = 0; col < num_Cols; col++) {
            //create a div for each element in 2d grid
            let divEl = document.createElement("div")
            
            //add an id to each div element
            divEl.id = "cell" + row + "-" + col

            //addd apprpopraiye class to each div el
            if (grid[row][col] == 1) {
                divEl.classList.add("grey")
            } 
            else if (grid[row][col] == 2) {
                divEl.classList.add("player")
            }

            // add dataset values for rwos and columns
            divEl.dataset.row = row;
            divEl.dataset.col = col;
            // add event listener to each div element
            divEl.addEventListener("click", cellClicked);


            // addd div to cotnainer
            document.getElementById("container").append(divEl)

        }
    }
}

function cellClicked(event) {
    //set the color of the clcked cell
    console.log(event.target)
    //get avlue pf color slect element

    let color = document.getElementById("cell-color").value

    //get row and col of the clicked cell
    let row = event.target.dataset.row
    let col = event.target.dataset.col


    //update clocked cell based on selected color
    event.target.classList = "" //empty cell class list
    grid[row][col] = 0 //set grid to white
    if (color == "grey") {
        event.target.classList.add("grey")
        grid[row][col] = 1
    }
}