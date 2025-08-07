Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./157.js");
var s = require("./8.js");
var r = require("./1094.js");
var l = require("./824.js");
var c = function (e) {
  function DifficultyScalingRewardDialogListItem(t, i) {
    var n = e.call(this, new (o.getDefinitionByName("EventDifficultyRewardListItem"))(), i) || this;
    n._data = t;
    n.fill();
    return n;
  }
  n.__extends(DifficultyScalingRewardDialogListItem, e);
  DifficultyScalingRewardDialogListItem.prototype.fill = function () {
    l.DifficultyScalingRewardDialogListItemHelper.fillRewardMC(this.disp, this._data);
  };
  DifficultyScalingRewardDialogListItem.prototype.onClick = function (e) {
    s.ButtonHelper.isButtonEnabled(e.target);
  };
  Object.defineProperty(DifficultyScalingRewardDialogListItem.prototype, "height", {
    get: function () {
      if (this._contentMC && this._contentMC.visible) {
        if (this._contentMC.mask) {
          return this._contentMC.y + this._contentMC.mask.height;
        } else {
          return this._contentMC.y;
        }
      } else if (this._headerMC) {
        return this._headerMC.height;
      } else {
        return 0;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollapsibleItem.prototype, "height").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return DifficultyScalingRewardDialogListItem;
}(a.ACollapsibleItem);
exports.DifficultyScalingRewardDialogListItem = c;
o.classImplementsInterfaces(r.GlobalEffectEventDialogListItem, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");