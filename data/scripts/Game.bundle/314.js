Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./232.js");
var a = require("./274.js");
var s = require("./877.js");
var r = require("./2.js");
var l = createjs.Point;
var c = function (e) {
  function SliderItemScrollList(t, i = null, n = null, o = null) {
    var s = e.call(this, t, i) || this;
    s._dragRef = new l();
    s.sliderData = n;
    if (n == null) {
      s.sliderData = new a.BasicSliderVO(t.mc_slider.sliderBar, t.mc_slider.btn_slider, 1, 0, t.mc_slider);
    }
    if (o == null) {
      o = u.ScrollComponent.VERTICAL_SLIDER;
    }
    s.slider = new u.ScrollComponent(s.sliderData, o);
    return s;
  }
  n.__extends(SliderItemScrollList, e);
  SliderItemScrollList.prototype.initList = function (t = 0, i = false) {
    e.prototype.initList.call(this, t, i);
    this.sliderData.maxValue = Math.max(Math.ceil((this._itemCount - this._itemsVisibleAtOnce) / this._scrollStep), 1);
    if (this.hideButtons) {
      this.sliderData.parent.visible = this._itemCount > this._itemsVisibleAtOnce;
    } else {
      this.slider.enableComponent = this._itemCount > this._itemsVisibleAtOnce;
    }
    this.updateSlider();
    this.slider.addEventListener(o.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderValueChange));
    this.addEventListener(r.ScrollItemEvent.TOUCH_DRAG_START, this.bindFunction(this.dragStart));
    this.addEventListener(r.ScrollItemEvent.TOUCH_DRAG_END, this.bindFunction(this.dragEnd));
  };
  SliderItemScrollList.prototype.scrollToItem = function (e = 0) {
    this.updateItemList(e);
    this.updateSlider();
  };
  SliderItemScrollList.prototype.dragStart = function (e) {
    this._dragRef.x = e.originEvent.stageX;
    this._dragRef.y = e.originEvent.stageY;
  };
  SliderItemScrollList.prototype.dragEnd = function (e) {
    var t = e.originEvent.stageY - this._dragRef.y;
    if (Math.abs(t) > 10) {
      if (t > 0) {
        this.scrollUp();
      } else {
        this.scrollDown();
      }
    }
    this._dragRef.x = 0;
    this._dragRef.y = 0;
  };
  SliderItemScrollList.prototype.onSliderValueChange = function (e) {
    this.updateItemList(e.selectedValue * this._scrollStep);
  };
  SliderItemScrollList.prototype.remove = function () {
    this.slider.removeEventListener(o.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderValueChange));
    this.removeEventListener(r.ScrollItemEvent.TOUCH_DRAG_START, this.bindFunction(this.dragStart));
    this.removeEventListener(r.ScrollItemEvent.TOUCH_DRAG_END, this.bindFunction(this.dragEnd));
    e.prototype.remove.call(this);
  };
  SliderItemScrollList.prototype.scrollUp = function () {
    this.naviUp();
  };
  SliderItemScrollList.prototype.scrollDown = function () {
    this.naviDown();
  };
  SliderItemScrollList.prototype.naviUp = function () {
    e.prototype.naviUp.call(this);
    this.updateSlider();
  };
  SliderItemScrollList.prototype.naviDown = function () {
    e.prototype.naviDown.call(this);
    this.updateSlider();
  };
  SliderItemScrollList.prototype.naviTop = function () {
    e.prototype.naviTop.call(this);
    this.updateSlider();
  };
  SliderItemScrollList.prototype.updateSlider = function () {
    this.slider.setSelectedIndex(this._currentStartIndex / this._scrollStep, false);
  };
  return SliderItemScrollList;
}(s.CastleItemScrollList);
exports.SliderItemScrollList = c;
var u = require("./343.js");