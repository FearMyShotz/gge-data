var i = require("./134.js");
createjs.MouseEvent.CLICK = "click";
createjs.MouseEvent.MOUSE_UP = "pressup";
createjs.MouseEvent.PRESS_MOVE = "pressmove";
createjs.MouseEvent.MOUSE_DOWN = "mousedown";
createjs.MouseEvent.MOUSE_OUT = "mouseout";
createjs.MouseEvent.MOUSE_OVER = "mouseover";
createjs.MouseEvent.ROLL_OVER = "rollover";
createjs.MouseEvent.ROLL_OUT = "rollout";
createjs.MouseEvent.DOUBLE_CLICK = "dblclick";
createjs.MouseEvent.MOUSE_MOVE = "stagemousemove";
createjs.MouseEvent.STAGE_MOUSE_DOWN = "stagemousedown";
createjs.MouseEvent.STAGE_MOUSE_UP = "stagemouseup";
createjs.MouseEvent.MOUSE_WHEEL = "wheel";
Object.defineProperty(createjs.MouseEvent.prototype, "shiftKey", {
  set: function (e) {
    this._shiftKey = e;
  },
  get: function () {
    if (i.isUndefined(this.nativeEvent)) {
      return this._shiftKey || false;
    } else {
      return this.nativeEvent.shiftKey;
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.MouseEvent.prototype, "ctrlKey", {
  set: function (e) {
    this._ctrlKey = e;
  },
  get: function () {
    if (i.isUndefined(this.nativeEvent)) {
      return this._ctrlKey || false;
    } else {
      return this.nativeEvent.ctrlKey;
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.MouseEvent.prototype, "altKey", {
  set: function (e) {
    this._altKey = e;
  },
  get: function () {
    if (i.isUndefined(this.nativeEvent)) {
      return this._altKey || false;
    } else {
      return this.nativeEvent.altKey;
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.MouseEvent.prototype, "buttonDown", {
  value: false,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(createjs.MouseEvent.prototype, "delta", {
  set: function (e) {
    this._delta = e;
  },
  get: function () {
    if (i.isUndefined(this.nativeEvent)) {
      return this._delta || 0;
    } else {
      return this.nativeEvent.deltaY;
    }
  },
  enumerable: true,
  configurable: true
});