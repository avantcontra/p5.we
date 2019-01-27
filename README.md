# p5.we
p5.we is a boilerplate to develop Wechat Mini Game using p5.js.

<span>
<img src="http://floatcc.intplusplus.org/webgl-1548556237071.2019-01-27-11_32_18.gif" alt="webgl" width="250">

<img src="http://floatcc.intplusplus.org/particle-small-2019-01-26-18-51-38-607.gif" alt="particle" width="250">

<img src="http://floatcc.intplusplus.org/flocking-Screenrecorder-2019-01-26-23-50-03-343.2019-01-27%2011_35_38.gif" alt="flocking" width="250">
</span>

## Usage
Just clone the project, and start forking. There are some examples in sketch directory.

Only need very a few changes from the original p5.js example.

Examples PR are always welcome!

## Code structure
```
|
├── libs
│   ├── symbol.js           // ES6 Symbol
│   └── weapp-p5js-adapter  // wechat mini game p5js-adapter
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

## Notes
#### CANVAS and WEBGL:
The WeChat Mini Game only support one `canvas` to draw, created at wx.createCanvas() firstly called. If you call wx.createCanvas() multiple times, the canvas except the first one are all `offscreen`, they can't be shown on screen directly.

However, p5.js will create a default canvas firstly itself on start (and the renderer is `P2D`).

So if you want `WEBGL` renderer, you could hack the p5.js source code and change the default canvas from `P2D` to `WEBGL`.
And better solutions PR are welcome~



----
Cheers~

Contra

- website: [floatbug.com/contra](https://www.floatbug.com/contra)
- facebook: [avantcontra](https://facebook.com/avantcontra)
- twitter: [avantcontra](https://twitter.com/avantcontra)  
- patreon (buy me a coffee): [avantcontra](https://www.patreon.com/avantcontra)

