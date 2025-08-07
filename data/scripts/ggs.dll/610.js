Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./243.js");
var a = createjs.Event;
var s = function () {
  function BasicButtonGroup(e, t = true) {
    this._buttons = e;
    if (t) {
      this.initButtons();
    }
  }
  BasicButtonGroup.prototype.selectButton = function (e) {
    if (this._buttons != null) {
      for (var t = 0, n = this._buttons; t < n.length; t++) {
        var i = n[t];
        i.selectButton = i == e;
      }
    }
  };
  Object.defineProperty(BasicButtonGroup.prototype, "buttons", {
    get: function () {
      return this._buttons;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonGroup.prototype.getSelectedButtonIndex = function () {
    for (var e = 0; e < this._buttons.length; ++e) {
      if (i.ButtonHelper.isButtonSelected(this._buttons[e])) {
        return e;
      }
    }
    return -1;
  };
  BasicButtonGroup.prototype.initButtons = function () {
    if (this._buttons != null) {
      for (var e = 0, t = this._buttons; e < t.length; e++) {
        var n = t[e];
        this.addListeners(n);
      }
    }
  };
  BasicButtonGroup.prototype.click = function (e) {
    var t = e.currentTarget;
    this.selectButton(t.basicButton);
  };
  BasicButtonGroup.prototype.removedFromStage = function (e) {
    var t = e.currentTarget;
    this.removeListeners(t);
    if (t && t.disp) {
      t.disp.addEventListener(a.ADDED_TO_STAGE, this.bindFunction(this.addedToStage), false, 0, true);
    }
  };
  BasicButtonGroup.prototype.addedToStage = function (e) {
    var t = e.target;
    this.addListeners(t.basicButton);
  };
  BasicButtonGroup.prototype.addListeners = function (e) {
    e.disp.addEventListener(a.REMOVED_FROM_STAGE, this.bindFunction(this.removedFromStage));
    e.disp.addEventListener("click", this.bindFunction(this.click));
  };
  BasicButtonGroup.prototype.removeListeners = function (e) {
    if (e && e.disp) {
      e.disp.removeEventListener(a.REMOVED_FROM_STAGE, this.bindFunction(this.removedFromStage));
      e.disp.removeEventListener(a.ADDED_TO_STAGE, this.bindFunction(this.addedToStage));
      e.disp.removeEventListener("click", this.bindFunction(this.click));
    }
  };
  return BasicButtonGroup;
}();
exports.BasicButtonGroup = s;