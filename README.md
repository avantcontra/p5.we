# p5.we
p5.we is a boilerplate to develop Wechat Mini Game using p5.js.

<span>
<img src="http://float.intplusplus.cn/webgl-1548556237071.2019-01-27-11_32_18.gif" alt="webgl" width="250">

<img src="http://float.intplusplus.cn/particle-small-2019-01-26-18-51-38-607.gif" alt="particle" width="250">

<img src="http://float.intplusplus.cn/flocking-Screenrecorder-2019-01-26-23-50-03-343.2019-01-27%2011_35_38.gif" alt="flocking" width="250">
</span>

## Usage
Just clone the project, and start forking. You should follow [WeChat Mini Game workflow](https://developers.weixin.qq.com/minigame/en/dev/index.html?t=19012522) of course.

There are some examples in sketch directory. Only need very a few changes from the [original p5.js example](https://p5js.org/examples/structure-setup-and-draw.html).

<img src="http://float.intplusplus.cn/codecomp.png" alt="code screenshot" width="800">

Examples PR are always welcome!

## Code structure
```
|
├── libs
│   ├── symbol.js           // ES6 Symbol
│   └── weapp-p5js-adapter  // WeChat Mini Game p5js-adapter
│       ├── xxx.js   
│
├── sketch  
│   ├── xxx.js              // p5 example sketch
│
└── game.js                 // main game enter

```

## weapp-p5js-adapter
p5.we contains "[weapp-p5js-adapter](https://github.com/avantcontra/p5.we/tree/master/libs/weapp-p5js-adapter)", which is the key to port p5.js on WeChat Mini Game. 

WeChat has a basic ["weapp-adapter" example](https://developers.weixin.qq.com/minigame/dev/tutorial/base/adapter.html).

"[weapp-p5js-adapter](https://github.com/avantcontra/p5.we/tree/master/libs/weapp-p5js-adapter)" I created is based on [weapp-adapter ES6 version](https://github.com/finscn/weapp-adapter) made by @finscn.

More [WeChat Mini Game document](https://developers.weixin.qq.com/minigame/dev/index.html?t=19012522).

## Notes and TODO
- **CANVAS and WEBGL**:  
The WeChat Mini Game only support one `canvas` to draw, created at wx.createCanvas() firstly called. If you call wx.createCanvas() multiple times, the canvas except the first one are all `offscreen`, they can't be shown on screen directly.  
However, p5.js will create a default canvas firstly itself on start (and the renderer is `P2D`).  
So if you want `WEBGL` renderer, you could hack the p5.js source code and change the default canvas from `P2D` to `WEBGL`.
And better solutions PR are welcome~

- **p5 library**:   
Only support core lib (p5.js) for now.

- **blendMode**:   
The globalCompositeOperation of RenderingContext of WeChat Mini Game is NOT the same as p5.js:
https://developers.weixin.qq.com/minigame/dev/api/RenderingContext.html

- **preload** and **loadImage**:  
Now you can use preload and loadImage as usual! Thanks [@xarray](https://github.com/xarray)!!   
~~`loadImage` in `preload` may not display correctly.  
Canvas of the image created by `loadImage()` in `preload()`  is not the same as the canvas in `setup()` or `draw()`. It should be something conflict with WeChat Mini Game.  
For now you can `loadPixels()` in callbackFunction of `loadImage(xxx, callbackFunction)` in `preload()`, and then setup the pixels to another Image created in `draw()`.  
More about this: https://github.com/avantcontra/p5.we/issues/1~~

----
Cheers~

Contra

- patreon (**buy me a coffee** XD): [avantcontra](https://www.patreon.com/avantcontra)
- website: [avantcontra.com](https://www.avantcontra.com)
- instagram: [avantcontra](https://instagram.com/avantcontra)
- twitter: [avantcontra](https://twitter.com/avantcontra)
- 公/知/小/抖/B：[实验编程](https://space.bilibili.com/309452713)

