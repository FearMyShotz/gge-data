Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = function (e) {
  function CastleItemScrollList(t, i = null) {
    return e.call(this, t, i) || this;
  }
  n.__extends(CastleItemScrollList, e);
  CastleItemScrollList.prototype.updateItemList = function (t = 0) {
    e.prototype.updateItemList.call(this, t);
    if (this.btn_top) {
      if (this.hideButtons) {
        this.btn_top.visible = this._currentStartIndex > 0;
      } else {
        if (this.btn_top.basicButton) {
          this.btn_top.basicButton.enableButton = this._currentStartIndex > 0;
        } else {
          this.btn_top.enableButton = this._currentStartIndex > 0;
        }
        this.btn_top.visible = true;
      }
    }
  };
  CastleItemScrollList.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.btn_top:
        this.naviTop();
    }
  };
  CastleItemScrollList.prototype.naviTop = function () {
    if (!this.locked) {
      if (this._currentStartIndex > 0) {
        this.updateItemList(Math.max(0));
      }
      this.updateActiveStates();
      this.dispatchEvent(new a.ScrollItemEvent(a.ScrollItemEvent.ON_SCROLL, null, null));
    }
  };
  Object.defineProperty(CastleItemScrollList.prototype, "btn_top", {
    get: function () {
      return this._componentDisp.btn_top;
    },
    enumerable: true,
    configurable: true
  });
  return CastleItemScrollList;
}(o.ItemScrollList);
exports.CastleItemScrollList = s;