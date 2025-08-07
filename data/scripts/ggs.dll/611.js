var i;
var a = this && this.__extends || (i = Object.setPrototypeOf || {
  __proto__: []
} instanceof Array && function (e, t) {
  e.__proto__ = t;
} || function (e, t) {
  for (var n in t) {
    if (t.hasOwnProperty(n)) {
      e[n] = t[n];
    }
  }
}, function (e, t) {
  function __() {
    this.constructor = e;
  }
  i(e, t);
  e.prototype = t === null ? Object.create(t) : (__.prototype = t.prototype, new __());
});
Object.defineProperty(exports, "__esModule", {
  value: true
});
var s = createjs.MovieClip;
var r = createjs.Shape;
var o = function (e) {
  function BasicProgressBar(t = null) {
    var n = e.call(this) || this;
    n.scaleX_cached = 0;
    n.disp = t ?? n;
    n.initProgressBar();
    n.disp.mask = null;
    return n;
  }
  a(BasicProgressBar, e);
  BasicProgressBar.prototype.initProgressBar = function () {
    this.scaleX = this.scaleX_cached;
  };
  Object.defineProperty(BasicProgressBar.prototype, "scaleX", {
    get: function () {
      if (this.disp.mask) {
        return this.disp.mask.scaleX;
      } else {
        return 1;
      }
    },
    set: function (e) {
      this.scaleX_cached = e;
      this.applyMask();
      if (this.disp) {
        this.disp.mask.scaleX = e;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicProgressBar.prototype.applyMask = function () {
    if (this.disp && !this.disp.mask) {
      this.maskMC = new r();
      this.maskMC.x = this.disp.x;
      this.maskMC.y = this.disp.y;
      var e = this.disp.getBounds();
      this.maskMC.graphics.beginFill("#FF0000").drawRect(e.x, e.y, e.width, e.height);
      this.maskMC.rotation = this.disp.rotation;
      this.maskMC.setBounds(e.x, e.y, e.width, e.height);
      this.disp.addChild(this.maskMC);
      this.disp.mask = this.maskMC;
    }
  };
  BasicProgressBar.prototype.removeMaskMC = function () {
    if (this.maskMC) {
      this.disp.removeChild(this.maskMC);
      this.maskMC = null;
      this.disp.mask = null;
    }
  };
  return BasicProgressBar;
}(s);
exports.BasicProgressBar = o;