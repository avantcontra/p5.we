# p5.we
p5.we is a boilerplate to develop Wechat Mini Game using p5.js.

## Usage
Just clone the project, and start forking. There are some examples in sketch directory.

Only need very a few changes from the original p5.js example.

## code structure
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
p5.we contains "weapp-p5js-adapter", which is the key to port p5.js on WeChat Mini Game. 

WeChat has a basic ["weapp-adapter" example](https://developers.weixin.qq.com/minigame/dev/tutorial/base/adapter.html).

weapp-p5js-adapter I created is based on [weapp-adapter ES6 version](https://github.com/finscn/weapp-adapter) made by @finscn.

more [WeChat Mini Game document](https://developers.weixin.qq.com/minigame/dev/index.html?t=19012522)

## TODO
...

----

- Website: [floatbug.com/contra](https://www.floatbug.com/contra)
- facebook: [avantcontra](https://facebook.com/avantcontra)
- twitter: [avantcontra](https://twitter.com/avantcontra)  
