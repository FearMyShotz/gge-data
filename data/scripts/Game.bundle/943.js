Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./15.js");
var l = require("./68.js");
var c = function (e) {
  function CastleUIComponent(t) {
    var i = this;
    i._collectableRenderList = [];
    i._enabled = true;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(CastleUIComponent, e);
  CastleUIComponent.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.destroyCollectableRenderList();
  };
  Object.defineProperty(CastleUIComponent.prototype, "enableComponent", {
    set: function (e) {
      this._enabled = e;
      if (this._enabled) {
        this.disp.useFilters(l.BitmapFilterHelper.NO_FILTER);
      } else {
        this.disp.useFilters(l.BitmapFilterHelper.FILTER_COLOR_MATRIX);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUIComponent.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  CastleUIComponent.prototype.destroyCollectableRenderList = function () {
    if (this._collectableRenderList) {
      for (var e = 0; e < this._collectableRenderList.length; ++e) {
        this._collectableRenderList[e].destroy();
      }
    }
    this._collectableRenderList = [];
  };
  Object.defineProperty(CastleUIComponent, "dialogHandler", {
    get: function () {
      return u.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUIComponent, "layoutManager", {
    get: function () {
      return d.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUIComponent, "controller", {
    get: function () {
      return r.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUIComponent, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleUIComponent;
}(o.FlashUIComponent);
exports.CastleUIComponent = c;
var u = require("./9.js");
var d = require("./17.js");
s.classImplementsInterfaces(c, "ICollectableRendererList");