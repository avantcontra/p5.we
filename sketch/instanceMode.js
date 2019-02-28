/**
 * original p5.js example:
 * https://p5js.org/examples/structure-setup-and-draw.html
 * 
 * This example use p5.js instance mode
 * detail:
 * https://github.com/processing/p5.js/wiki/Global-and-instance-mode#when-is-global-mode-assumed
 */

import p5 from '../libs/p5.min';
import '../libs/p5RefactorUtil';

let sysInfo = wx.getSystemInfoSync();
let windowWidth = sysInfo.windowWidth;
let windowHeight = sysInfo.windowHeight;

const seed = function( sketch ) {
    console.log('start create p5');//,document.createElement('canvas')
    let y = 100;
  
    sketch.setup = function() {
        // console.log('setup', windowWidth, windowHeight);
        // const cvs = sketch.createCanvas(windowWidth, windowHeight);
        // console.log(cvs);
        sketch.createCanvas(windowWidth, windowHeight);
        sketch.stroke(255); // Set line drawing color to white
        sketch.frameRate(30);

        //should set visible manually
        sketch.canvas.style.visibility = 'visible';
    };
  
    sketch.draw = function() {
        //console.log('draw');
        sketch.background(0); // Set the background to black
        y = y - 1;
        if (y < 0) {
            y = sketch.height;
        }
        sketch.line(0, y, sketch.width, y);
    };
}

const myp5 = new p5( seed );
