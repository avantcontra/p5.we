import * as Mixin from './util/mixin'
// import HTMLCanvasElement from './HTMLCanvasElement'

// TODO
let hasModifiedCanvasPrototype = false
let hasInit2DContextConstructor = false
let hasInitWebGLContextConstructor = false

export default function Canvas() {
    // const globalCanvas = canvas;
    if(GameGlobal.screencanvas)
        return GameGlobal.screencanvas;

    // console.log('new Canvas')
    const _canvas = GameGlobal.screencanvas? GameGlobal.screencanvas : wx.createCanvas()

    const _getContext = _canvas.getContext;

    // canvas.__proto__.__proto__.__proto__ = new HTMLCanvasElement()

    if (!('tagName' in _canvas)) {
        _canvas.tagName = 'CANVAS'
    }

    _canvas.type = 'canvas'

    Mixin.parentNode(_canvas);
    Mixin.style(_canvas);
    Mixin.classList(_canvas);
    Mixin.clientRegion(_canvas);
    Mixin.offsetRegion(_canvas);
    Mixin.dataset(_canvas);

    

    _canvas.focus = function() {};
    _canvas.blur = function() {};

    // _canvas.dataset = {hidden:false}

    _canvas.addEventListener = function(type, listener, options = {}) {
        // console.log('canvas.addEventListener', type);
        document.addEventListener(type, listener, options);
    }

    _canvas.removeEventListener = function(type, listener) {
        // console.log('canvas.removeEventListener', type);
        document.removeEventListener(type, listener);
    }

    _canvas.dispatchEvent = function(event = {}) {
        console.log('canvas.dispatchEvent', event.type, event);
        // nothing to do
    }

    return _canvas
}
