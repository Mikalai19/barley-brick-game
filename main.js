let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');      // by calling method getContent we have access for drawing

//create arr of elements
let arr15 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// sort the elements of array
for (let i = 0; i < 10; i++) {
    arr15.sort(() => Math.random() - 0.5);
    //console.log(arr15);
}

// create a function that draw a square
let drawSquare = function (x, y, val) {   // x and y - coordinates (top-left)
    ctx.fillStyle = "black";      // color of square will be black
    ctx.fillRect(x, y, 100, 100);  // pass the coordinates

    if (val === 0) {
        ctx.fillStyle = "white";
    } else {
        ctx.fillStyle = "teal";
    }

    ctx.fillRect(x + 5, y + 5, 90, 90);

    ctx.font = "60px Arial";
    ctx.fillStyle = "white";

    if (val < 10) {
        ctx.fillText(val, x + 35, y + 70);    //centered number inside the square (only for single digits)
    } else {
        ctx.fillText(val, x + 15, y + 70)
    }
}
//drawSquare(200, 200, 12);

let drawTag = function (position, val) {   // create a function for square position
    switch (position) {
        case 0:
            drawSquare(0, 0, val)
            break;

        case 1:
            drawSquare(100, 0, val)
            break;

        case 2:
            drawSquare(200, 0, val)
            break;

        case 3:
            drawSquare(300, 0, val)
            break;

        case 4:
            drawSquare(0, 100, val)
            break;

        case 5:
            drawSquare(100, 100, val)
            break;

        case 6:
            drawSquare(200, 100, val)
            break;

        case 7:
            drawSquare(300, 100, val)
            break;

        case 8:
            drawSquare(0, 200, val)
            break;

        case 9:
            drawSquare(100, 200, val)
            break;

        case 10:
            drawSquare(200, 200, val)
            break;

        case 11:
            drawSquare(300, 200, val)
            break;

        case 12:
            drawSquare(0, 300, val)
            break;

        case 13:
            drawSquare(100, 300, val)
            break;

        case 14:
            drawSquare(200, 300, val)
            break;

        case 15:
            drawSquare(300, 300, val)
            break;
    }
}

for (let i = 0; i <= 15; i++) {   //iterate through for address all squares
    drawTag(i, arr15[i]);
}