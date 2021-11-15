Welcome to barley-brick-game

The Fifteen Puzzle has been around for over a hundred years, and has been a craze for almost every generation. The basic form is of a 4 by 4 grid usually made with sliding tiles in a tray. There are 15 tiles numbered 1 to 15 and the 16th place is empty as shown. Before play begins the tiles are randomly scrambled by sliding to any starting position. The object of the game is then to unscramble the tiles (by sliding, not lifting them) to get them into consecutive order, with the space in the bottom right again. (This will be referred to as the home position.)
Sam Loyd was the man who invented the 14-15 or Boss puzzle. This was a version where the starting position was very similar to the home position except that the 14 and 15 were inverted. In the early 1870's he offered a $1000 reward to anyone who could solve it, which set off "fifteen fever". However no-one claimed the prize for the simple reason that it is not solvable! The reason shall dealt with later. many others) is a sliding puzzle having 15 square bricks numbered 1–15 in a frame that is 4 bricks high and 4 bricks wide, leaving one unoccupied brick position.

![Game image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzptsj4hah9g9bysMo_JO8jsnYkMlmBtbzI_Bpz5rAawo9hMuSEtSa8aLCh6h7fdd7Ng&usqp=CAU)
![Game image](https://ece.uwaterloo.ca/~dwharder/aads/Algorithms/N_puzzles/images/puz2.png)

![Game image](bimg/15 puzzle game.png)

A little trick:

![Game image](https://personal.math.ubc.ca/~cass/courses/m308-02b/projects/grant/fifteen/15grid1d.jpg)

Steps to creating a game:

1. Canvas methodology

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

2. Call getContent for accessing to drawing

// create a black square:
ctx.fillStyle = "black";  
ctx.fillRect(x, y, 100, 100);

3. Create 15 array elements and sort them

let arr15 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

4. Draw a square, set a color and numbers

5. Function to address position (upper-left angle)

//in this case we pass coordinates x = 0; y= 0; means that position will be 0
let drawTag = function (position, val) {  
 switch (position) {  
 case 0:  
 drawSquare(0, 0, val)  
 break;

6. Address all squares by creating a loop

for (let i = 0; i <= 15; i++) {  
 drawTag(i, arr15[i]);
}

7. Define OffsetX and OffsetY click coordinates

//return place's number in x coordinate
let checkPlace = function (evX) {  
 if (evX < 110) {
return 1;
}

8. Move a squares

if (arr15[clickPos - 4] === 0) {
arr15[clickPos - 4] = arr15[clickPos];
arr15[clickPos] = 0;
}

9. Create a "New Game" button

10. CountDown timer creating (option to refresh by clicking on "New Game" button)

const startingMinutes = 10;
let time = startingMinutes \* 60;
function updateCountDown() {
const minutes = Math.floor(time / 60);
let seconds = time % 60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    countDownEl.innerHTML = minutes + ':' + seconds;
    time--;

11. Add a click sound
