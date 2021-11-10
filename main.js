let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');      // by calling method getContent we have access for drawing

//create arr of elements
let arr15 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//sort the elements of array the numbers show up randomly
for (let i = 0; i < 10; i++) {
    arr15.sort(() => Math.random() - 0.5);
    //console.log(arr15);
}

// create a function which draw a square
let drawSquare = function (x, y, val) {   // x and y - coordinates (top-left) value is num of the square
    ctx.fillStyle = "black";      // color of square will be black
    ctx.fillRect(x, y, 100, 100);  // create a square 100 by 100

    if (val === 0) {                  // one of 16 square must be white(empty)
        ctx.fillStyle = "white";
    } else {
        ctx.fillStyle = "teal";       // rest is teal
    }

    ctx.fillRect(x + 5, y + 5, 90, 90);    // create another square 90 by 90

    ctx.font = "60px Arial";    // create a number's font 
    ctx.fillStyle = "white";    // numbers will be white

    if (val < 10) {
        ctx.fillText(val, x + 35, y + 70);    //centered number inside the square (only for single digits)
    } else {
        ctx.fillText(val, x + 15, y + 70)     //centered double digits
    }
}
//drawSquare(200, 200, 12);

let drawTag = function (position, val) {   // create a function for square position
    switch (position) {                    // depends of the position move square
        case 0:                             // if position 0:
            drawSquare(0, 0, val)           // pass the coordinate to 0 0 (left-bottom)
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
//drawTag(15, 7);   // check position of square with value of 7

for (let i = 0; i <= 15; i++) {   //iterate through to address all squares 
    drawTag(i, arr15[i]);
}

let checkPlace = function (evX) {
    if (evX < 110) {
        return 1;
    }

    if (evX < 210) {
        return 2;
    }

    if (evX < 310) {
        return 3;
    }

    if (evX < 410) {
        return 4;
    }
}

let clickPos;
canvas.addEventListener('click', function (e) {
    //console.log(e);  
    // check the clientX and clientY in console (click's coordinates)
    if (e.clientY < 110) {                    //check click coordinate
        //console.log('row1');           // check click (must click row1 only)
        // find out what place being clicked for row1 (4 places in row)
        // covered all rows thats's why  i created a function above
        let place = checkPlace(e.clientX);

        switch (place) {
            case 1:
                clickPos = 0;
                break;

            case 2:
                clickPos = 1;
                break;

            case 3:
                clickPos = 2;
                break;

            case 4:
                clickPos = 3;
                break;
        }
    }

    if (e.clientY > 110 && e.clientY < 210) {
        let place = checkPlace(e.clientX)

        switch (place) {         // find out what place being clicked  for row2
            case 1:
                clickPos = 4;
                break;

            case 2:
                clickPos = 5;
                break;

            case 3:
                clickPos = 6;
                break;

            case 4:
                clickPos = 7;
                break;
        }
    }

    if (e.clientY > 210 && e.clientY < 310) {
        let place = checkPlace(e.clientX)

        switch (place) {                       // find out what place being clicked  for row3
            case 1:
                clickPos = 8;
                break;

            case 2:
                clickPos = 9;
                break;

            case 3:
                clickPos = 10;
                break;

            case 4:
                clickPos = 11;
                break;
        }
    }

    if (e.clientY > 310 && e.clientY < 410) {
        let place = checkPlace(e.clientX)

        switch (place) {                   // find out what place being clicked for row4
            case 1:
                clickPos = 12;
                break;

            case 2:
                clickPos = 13;
                break;

            case 3:
                clickPos = 14;
                break;

            case 4:
                clickPos = 15;
                break;
        }

    }

    console.log(clickPos);

})
