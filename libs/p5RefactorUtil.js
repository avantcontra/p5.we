import p5 from './p5.min'

var defaultId = 'defaultCanvas0'; // this gets set again in createCanvas
var defaultClass = 'p5Canvas';

p5.prototype.createCanvas = function(w, h, renderer) {
  p5._validateParameters('createCanvas', arguments);
  //optional: renderer, otherwise defaults to p2d
  var r = renderer || 'p2d';
  var c;

  if (r === 'webgl') {
    c = document.getElementById(defaultId);
    if (c) {
      //if defaultCanvas already exists
      c.parentNode.removeChild(c); //replace the existing defaultCanvas
      var thisRenderer = this._renderer;
      this._elements = this._elements.filter(function(e) {
        return e !== thisRenderer;
      });
    }
    c = document.createElement('canvas');
    c.id = defaultId;
    c.classList.add(defaultClass);
  } else {
    if (!this._defaultGraphicsCreated) {
      c = document.createElement('canvas', 'p5.createCanvas', false);
      var i = 0;
      while (document.getElementById('defaultCanvas' + i)) {
        i++;
      }
      defaultId = 'defaultCanvas' + i;
      c.id = defaultId;
      c.classList.add(defaultClass);
    } else {
      // resize the default canvas if new one is created
      c = this.canvas;
    }
  }

  // set to invisible if still in setup (to prevent flashing with manipulate)
  if (!this._setupDone) {
    c.dataset.hidden = true; // tag to show later
    c.style.visibility = 'hidden';
  }

  if (this._userNode) {
    // user input node case
    this._userNode.appendChild(c);
  } else {
    document.body.appendChild(c);
  }

  // Init our graphics renderer
  //webgl mode
  if (r === 'webgl') {
    this._setProperty('_renderer', new p5.RendererGL(c, this, true));
    this._elements.push(this._renderer);
  } else {
    //P2D mode
    if (!this._defaultGraphicsCreated) {
      this._setProperty('_renderer', new p5.Renderer2D(c, this, true));
      this._defaultGraphicsCreated = true;
      this._elements.push(this._renderer);
    }
  }
  this._renderer.resize(w, h);
  this._renderer._applyDefaults();
  return this._renderer;
};

//This is helper function to reset the context anytime the attributes
//are changed with setAttributes()

p5.RendererGL.prototype._resetContext = function(attr, options, callback) {
  var w = this.width;
  var h = this.height;
  var defaultId = this.canvas.id;
  var c = this.canvas;
  if (c) {
    c.parentNode.removeChild(c);
  }
  c = document.createElement('canvas', 'p5.RendererGL._resetContext', false);
  c.id = defaultId;
  if (this._pInst._userNode) {
    this._pInst._userNode.appendChild(c);
  } else {
    document.body.appendChild(c);
  }
  this._pInst.canvas = c;

  var renderer = new p5.RendererGL(this._pInst.canvas, this._pInst, true, attr);
  this._pInst._setProperty('_renderer', renderer);
  renderer.resize(w, h);
  renderer._applyDefaults();
  this._pInst._elements.push(renderer);

  if (typeof callback === 'function') {
    //setTimeout with 0 forces the task to the back of the queue, this ensures that
    //we finish switching out the renderer
    setTimeout(function() {
      callback.apply(window._renderer, options);
    }, 0);
  }
};