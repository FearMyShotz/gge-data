Object.defineProperty(exports, "__esModule", {
  value: true
});
var i;
var a;
var s;
var r;
var o;
var l;
var u = require("./28.js");
var c = require("./2.js");
var _ = require("./220.js");
c.getLogger("createjs.ts Extensions");
createjs.precacheModules = _.cacheModules;
(i = function (e) {
  function TimerEvent() {
    return e !== null && e.apply(this, arguments) || this;
  }
  u.__extends(TimerEvent, e);
  return TimerEvent;
}(createjs.Event)).TIMER = "timer";
i.TIMER_COMPLETE = "timerComplete";
createjs.TimerEvent = i;
(a = function (e) {
  function IOErrorEvent() {
    return e !== null && e.apply(this, arguments) || this;
  }
  u.__extends(IOErrorEvent, e);
  return IOErrorEvent;
}(createjs.Event)).IO_ERROR = "error";
createjs.IOErrorEvent = a;
(s = function (e) {
  function SecurityErrorEvent() {
    return e !== null && e.apply(this, arguments) || this;
  }
  u.__extends(SecurityErrorEvent, e);
  return SecurityErrorEvent;
}(createjs.Event)).SECURITY_ERROR = "error";
createjs.SecurityErrorEvent = s;
Object.defineProperty(Error.prototype, "errorID", {
  configurable: false,
  enumerable: true,
  value: 0,
  writable: false
});
createjs.LoaderEvent = function (e) {
  function LoaderEvent() {
    return e !== null && e.apply(this, arguments) || this;
  }
  u.__extends(LoaderEvent, e);
  return LoaderEvent;
}(createjs.Event);
createjs.ProgressEvent.PROGRESS = "progress";
Object.defineProperty(createjs.Stage.prototype, "bytesTotal", {
  get: function () {
    return this.bytesTotal;
  },
  set: function (e) {
    this.bytesTotal = e;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Stage.prototype, "bytesLoaded", {
  get: function () {
    return this.bytesLoaded;
  },
  set: function (e) {
    this.bytesLoaded = e;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Stage.prototype, "quality", {
  get: function () {
    this.__quality ||= 1;
    return this.__quality;
  },
  set: function (e) {
    this.__quality = e;
  },
  enumerable: true,
  configurable: true
});
(r = function (e) {
  function TextEvent(t, n = false, i = false, a = "") {
    var s = e.call(this, t, n, i) || this;
    s.text = "";
    s.text = a;
    return s;
  }
  u.__extends(TextEvent, e);
  return TextEvent;
}(createjs.Event)).INPUT_TEXT = "input";
r.LINK = "link";
createjs.TextEvent = r;
(o = function (e) {
  function FocusEvent() {
    return e !== null && e.apply(this, arguments) || this;
  }
  u.__extends(FocusEvent, e);
  return FocusEvent;
}(createjs.Event)).FOCUS_IN = "focusIn";
o.FOCUS_OUT = "focusOut";
o.KEY_FOCUS_CHANGE = "keyFocusChange";
createjs.FocusEvent = o;
(l = function () {
  return function StageQuality() {};
}()).LOW = "low";
l.MEDIUM = "medium";
l.HIGH = "high";
l.BEST = "best";
createjs.StageQuality = l;
Object.defineProperty(createjs.Point.prototype, "length", {
  get: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  enumerable: true,
  configurable: true
});
createjs.Point.prototype.equals = function (e) {
  return this.x == e.x && this.y == e.y;
};
createjs.Point.prototype.add = function (e) {
  return new createjs.Point(this.x + e.x, this.y + e.y);
};
createjs.Point.prototype.offset = function (e, t) {
  return this.add(new createjs.Point(e, t));
};
createjs.Point.prototype.subtract = function (e) {
  return new createjs.Point(this.x - e.x, this.y - e.y);
};
createjs.Point.prototype.normalize = function (e) {
  if (this.x != 0 || this.y != 0) {
    var t = e / this.length;
    this.x *= t;
    this.y *= t;
  }
};
createjs.Point.interpolate = function (e, t, n) {
  var i = 1 - n;
  return new createjs.Point(e.x * n + t.x * i, e.y * n + t.y * i);
};
createjs.Point.distance = function (e, t) {
  return Math.sqrt((e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y));
};
Object.defineProperty(createjs.Point.prototype, "right", {
  get: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  set: function (e) {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Point.prototype, "right", {
  get: function () {
    return this.x + this.width;
  },
  set: function (e) {
    this.width = e - this.x;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Point.prototype, "bottom", {
  get: function () {
    return this.y + this.height;
  },
  set: function (e) {
    this.height = e - this.y;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Point.prototype, "left", {
  get: function () {
    return this.x;
  },
  set: function (e) {
    this.width += this.x - e;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Point.prototype, "top", {
  get: function () {
    return this.y;
  },
  set: function (e) {
    this.height += this.y - e;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Point.prototype, "topLeft", {
  get: function () {
    return new createjs.Point(this.left, this.top);
  },
  set: function (e) {
    this.top = e.y;
    this.left = e.x;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Point.prototype, "bottomRight", {
  get: function () {
    return new createjs.Point(this.right, this.bottom);
  },
  set: function (e) {
    this.bottom = e.y;
    this.right = e.x;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Stage.prototype, "stageWidth", {
  get: function () {
    if (this.canvas) {
      return Math.round(this.canvas.width / this.scaleX);
    } else {
      return 0;
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Stage.prototype, "stageHeight", {
  get: function () {
    if (this.canvas) {
      return Math.round(this.canvas.height / this.scaleY);
    } else {
      return 0;
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Stage.prototype, "color", {
  get: function () {
    this._color ||= "transparent";
    return this._color;
  },
  set: function (e) {
    this._color = e;
    this.canvas.style.backgroundColor = this._color;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.MouseEvent.prototype, "relatedObject", {
  get: function () {
    return this.nativeEvent.relatedTarget;
  },
  set: function (e) {
    this.nativeEvent.relatedTarget = e;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Stage.prototype, "mouseX", {
  get: function () {
    return this._mouseX;
  },
  set: function (e) {
    this._mouseX = e;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Stage.prototype, "mouseY", {
  get: function () {
    return this._mouseY;
  },
  set: function (e) {
    this._mouseY = e;
  },
  enumerable: true,
  configurable: true
});