/**
 * original p5.js example:
 * https://p5js.org/examples/structure-setup-and-draw.html
 */
import p5 from '../libs/p5.min'

let sysInfo = wx.getSystemInfoSync();
let windowWidth = sysInfo.windowWidth;
let windowHeight = sysInfo.windowHeight;

let y = 100;

// The statements in the setup() function
// execute once when the program begins
window.setup = function() {
  // createCanvas must be the first statement
  createCanvas(windowWidth, windowHeight);
  stroke(255); // Set line drawing color to white
  frameRate(30);
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
window.draw = function() {
  background(0); // Set the background to black
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}

new p5(); 