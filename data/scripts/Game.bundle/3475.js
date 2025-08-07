Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./314.js");
var a = function (e) {
  function MultiEventRewardScrollList(t, i, n) {
    return e.call(this, t, i, n) || this;
  }
  n.__extends(MultiEventRewardScrollList, e);
  Object.defineProperty(MultiEventRewardScrollList.prototype, "scrollItemClass", {
    get: function () {
      return Object.getOwnPropertyDescriptor(o.SliderItemScrollList.prototype, "scrollItemClass").get.call(this);
    },
    set: function (e) {
      this._itemVEList ||= [];
      for (var t, i = 0; (t = this._componentDisp.getChildByName(this.scrollInstanceName + i)) != null;) {
        this._itemVEList.push(new e(t));
        i++;
      }
      this._itemsVisibleAtOnce = this._itemVEList.length;
    },
    enumerable: true,
    configurable: true
  });
  return MultiEventRewardScrollList;
}(o.SliderItemScrollList);
exports.MultiEventRewardScrollList = a;