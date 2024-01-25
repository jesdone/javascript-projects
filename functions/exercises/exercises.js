// rectangles

function makeLine(size){
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }
  // console.log(makeLine(5));

  function makeSquare(width, height){
    let square = ''
    for (let i = 0; i < height; i++) {
      square += makeLine(width) + '\n';
    }
    return square.slice(0, -1);
  }
  // console.log(makeSquare(5, 5))

  function makeRectangle(width, height){
    let rectangle = ''
    for (let i = 0; i < height; i++) {
      rectangle += makeLine(width) + '\n';
    }
    return rectangle.slice(0, -1);
  }
  // console.log(makeRectangle(5, 3))

  function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
  }
  // console.log(makeDownwardStairs(5))

  function makeSpaceLine(numSpaces, numChars) {
    let line = '';
    for (let i = 0; i < numSpaces; i++) {
      line += ' ';
    }
    for (let i = 0; i < numChars; i++) {
      line += '#';
    }
    for (let i = 0; i < numSpaces; i++) {
      line += ' ';
    }
    return line
  }
  // console.log(makeSpaceLine(3, 5));

  function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i +1) + '\n');
    }
    return triangle.slice(0, -1);
  }
  console.log(makeIsoscelesTriangle(5));