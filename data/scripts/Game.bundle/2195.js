Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./6.js");
var r = function (e) {
  function LordScrollList(t, i = null) {
    return e.call(this, t, i) || this;
  }
  n.__extends(LordScrollList, e);
  LordScrollList.prototype.updateItemList = function (t = 0) {
    e.prototype.updateItemList.call(this, t);
    this.btn_up.toolTipText = "previousTen_tt";
    this.btn_down.toolTipText = "nextTen_tt";
    if (this.hideButtons) {
      this.btn_up.visible = this._currentStartIndex > 0;
      this.btn_down.visible = this._currentStartIndex < this._itemCount - this._itemsVisibleAtOnce;
    } else {
      if (this.btn_up.basicButton) {
        this.btn_up.basicButton.enableButton = true;
        this.btn_down.basicButton.enableButton = true;
      } else {
        this.btn_up.enableButton = true;
        this.btn_down.enableButton = true;
      }
      this.btn_up.visible = true;
      this.btn_down.visible = true;
    }
    if (this._componentDisp.txt_index) {
      var i = s.int(this._itemCount > 0 ? 1 : 0);
      this._componentDisp.txt_index.text = Math.max(i, Math.ceil(this._currentStartIndex / this._scrollStep)) + " / " + Math.ceil(this._itemCount / this._scrollStep);
    }
  };
  LordScrollList.prototype.naviUp = function () {
    if (!this.locked) {
      if (this._currentStartIndex > 0) {
        this.updateItemList(Math.max(0, this._currentStartIndex - this._scrollStep));
      } else {
        var e = s.int(this._itemCount / this._scrollStep) * this._scrollStep;
        if (e < this._itemCount) {
          this.updateItemList(e);
        } else {
          this.updateItemList(this._itemCount - this._itemsVisibleAtOnce);
        }
      }
      this.updateActiveStates();
      this.dispatchEvent(new a.ScrollItemEvent(a.ScrollItemEvent.ON_SCROLL, null, null));
    }
  };
  LordScrollList.prototype.naviDown = function () {
    if (!this.locked) {
      if (this._currentStartIndex < this._itemCount - this._itemsVisibleAtOnce) {
        this.updateItemList(this._currentStartIndex + this._scrollStep);
      } else {
        this.updateItemList(0);
      }
      this.updateActiveStates();
      this.dispatchEvent(new a.ScrollItemEvent(a.ScrollItemEvent.ON_SCROLL, null, null));
    }
  };
  return LordScrollList;
}(o.ItemScrollList);
exports.LordScrollList = r;