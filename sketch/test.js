import p5 from '../libs/p5.min'

let sysInfo = wx.getSystemInfoSync();
let windowWidth = sysInfo.windowWidth;
let windowHeight = sysInfo.windowHeight;

window.setup = function() {
  createCanvas(windowWidth, windowHeight, WEBGL);
//   createCanvas(100, 100, WEBGL);
//   perspective(PI / 3.0, windowWidth / windowHeight, 0.1, 500);
}

window.draw = function() {
	background(250);
  rotateY(frameCount * 0.01);

  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 40; i++) {
      translate(
        sin(frameCount * 0.001 + j) * 100,
        sin(frameCount * 0.001 + j) * 100,
        i * 0.1
      );
      rotateZ(frameCount * 0.002);
      push();
      sphere(8, 6, 4);
      pop();
    }
    pop();
  }
}

  
new p5();