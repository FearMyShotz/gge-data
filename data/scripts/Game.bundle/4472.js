Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./1.js");
var a = require("./6.js");
var s = function () {
  function SomeDistributableItem() {
    this.timeOutID = 0;
  }
  SomeDistributableItem.prototype.clone = function () {
    return new SomeDistributableItem();
  };
  Object.defineProperty(SomeDistributableItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    set: function (e) {
      this._disp = e;
      if (o.instanceOfClass(this._disp, "MovieClip")) {
        this._disp.gotoAndStop(SomeDistributableItem.FRAME_DEFAULT);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SomeDistributableItem.prototype, "x", {
    get: function () {
      return this._disp.x;
    },
    set: function (e) {
      this._disp.x = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SomeDistributableItem.prototype, "y", {
    get: function () {
      return this._disp.y;
    },
    set: function (e) {
      this._disp.y = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SomeDistributableItem.prototype, "scaleX", {
    get: function () {
      return this._disp.scaleX;
    },
    set: function (e) {
      this._disp.scaleX = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SomeDistributableItem.prototype, "scaleY", {
    get: function () {
      return this._disp.scaleY;
    },
    set: function (e) {
      this._disp.scaleY = e;
    },
    enumerable: true,
    configurable: true
  });
  SomeDistributableItem.prototype.highlight = function (e, t) {
    if (e >= 1 && e <= this._disp.totalFrames) {
      if (t > 0) {
        window.clearTimeout(this.timeOutID);
        this.timeOutID = a.int(window.setTimeout(this.bindFunction(this.doHighlight), t * 1000, e));
      } else {
        this.doHighlight(e);
      }
    }
  };
  SomeDistributableItem.prototype.doHighlight = function (e) {
    this._disp.gotoAndStop(e);
  };
  SomeDistributableItem.prototype.dehighlight = function () {
    this._disp.gotoAndStop(SomeDistributableItem.FRAME_DEFAULT);
  };
  Object.defineProperty(SomeDistributableItem.prototype, "isHighlighted", {
    get: function () {
      return this._disp.currentFrame != SomeDistributableItem.FRAME_DEFAULT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SomeDistributableItem.prototype, "highlightType", {
    get: function () {
      return this._disp.currentFrame;
    },
    enumerable: true,
    configurable: true
  });
  SomeDistributableItem.__initialize_static_members = function () {
    SomeDistributableItem.FRAME_DEFAULT = 1;
    SomeDistributableItem.FRAME_ANOUNCED_PROGRESS = 2;
    SomeDistributableItem.FRAME_PROGRESS = 3;
  };
  return SomeDistributableItem;
}();
exports.SomeDistributableItem = s;
n.classImplementsInterfaces(s, "IDistributableItem");
s.__initialize_static_members();