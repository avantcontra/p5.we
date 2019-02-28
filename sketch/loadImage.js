/**
 * original p5.js example:
 * https://p5js.org/examples/structure-setup-and-draw.html
 */
import p5 from '../libs/p5.min'
import '../libs/p5RefactorUtil';


let sysInfo = wx.getSystemInfoSync();
let windowWidth = sysInfo.windowWidth;
let windowHeight = sysInfo.windowHeight;

let y = 100;

var img1, img2;

window.preload = function () {
  img1 = loadImage("assets/test.jpg");
  img2 = loadImage("assets/test2.png");
}

// The statements in the setup() function
// execute once when the program begins
window.setup = function() {
  // createCanvas must be the first statement
  createCanvas(windowWidth, windowHeight);
  stroke(255); // Set line drawing color to white
  frameRate(30);

  canvas.style.visibility = 'visible';
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
window.draw = function() {
  background(0); // Set the background to black

  image(img1, 50, 50, windowWidth - 100, windowHeight - 100);
  image(img2, 150, 150, windowWidth - 100, windowHeight - 200);

  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}

new p5(); 