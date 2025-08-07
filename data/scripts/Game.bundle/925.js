Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./57.js");
var r = require("./40.js");
var l = require("./8.js");
var c = function (e) {
  function AAutoSellDialogCheckbox(t) {
    var i = e.call(this, t) || this;
    i._currentState = 0;
    i._onStateChanged = new s.Signal(AAutoSellDialogCheckbox);
    l.ButtonHelper.initBasicButton(t);
    return i;
  }
  n.__extends(AAutoSellDialogCheckbox, e);
  AAutoSellDialogCheckbox.prototype.setState = function (e, t = true) {
    this._currentState;
    this._currentState = e;
    this.disp.gotoAndStop(a.int(this._currentState + 1));
    if (t) {
      this.onStateChanged.dispatch(this);
    }
  };
  Object.defineProperty(AAutoSellDialogCheckbox.prototype, "currentState", {
    get: function () {
      return this._currentState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAutoSellDialogCheckbox.prototype, "onStateChanged", {
    get: function () {
      return this._onStateChanged;
    },
    enumerable: true,
    configurable: true
  });
  AAutoSellDialogCheckbox.STATE_UNSELECTED = 0;
  AAutoSellDialogCheckbox.STATE_SELECTED = 1;
  AAutoSellDialogCheckbox.STATE_MIXED = 2;
  return AAutoSellDialogCheckbox;
}(r.CastleItemRenderer);
exports.AAutoSellDialogCheckbox = c;
o.classImplementsInterfaces(c, "ICollectableRendererList");