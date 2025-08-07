Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./6.js");
var r = function (e) {
  function CastleMinuteSkipItemScrollList(t, i = null) {
    var n = this;
    n.normalX = 0;
    n.offsetX = 0;
    CONSTRUCTOR_HACK;
    return n = e.call(this, t, i) || this;
  }
  n.__extends(CastleMinuteSkipItemScrollList, e);
  Object.defineProperty(CastleMinuteSkipItemScrollList.prototype, "scrollItemClass", {
    get: function () {
      return Object.getOwnPropertyDescriptor(a.ItemScrollList.prototype, "scrollItemClass").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.ItemList.prototype, "scrollItemClass").set.call(this, e);
      this.normalX = s.int(this.veList[0].disp.x);
      this.offsetX = s.int((this.veList[1].disp.x - this.normalX) / 2);
    },
    enumerable: true,
    configurable: true
  });
  CastleMinuteSkipItemScrollList.prototype.updateItemList = function (t = 0) {
    e.prototype.updateItemList.call(this, t);
    if (this.voList.length <= 1) {
      this.veList[0].disp.x = this.normalX + this.offsetX;
      this.veList[1].visible = false;
    } else {
      this.veList[0].disp.x = this.normalX;
      this.veList[1].visible = true;
    }
  };
  return CastleMinuteSkipItemScrollList;
}(a.ItemScrollList);
exports.CastleMinuteSkipItemScrollList = r;