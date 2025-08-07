Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./157.js");
var l = function (e) {
  function DifficultyScalingBonusTextListItem(t, i) {
    var n = e.call(this, new (a.getDefinitionByName("DifficultySummedBonusHeader"))(), i) || this;
    n.bonus = t;
    n.fill();
    return n;
  }
  n.__extends(DifficultyScalingBonusTextListItem, e);
  DifficultyScalingBonusTextListItem.prototype.fill = function () {
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.txt_copy, new s.LocalizedTextVO("dialog_difficultyScaling_troopBonus_desc", [this.bonus]));
  };
  Object.defineProperty(DifficultyScalingBonusTextListItem.prototype, "itemMc", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingBonusTextListItem.prototype, "height", {
    get: function () {
      return this.disp.height;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ACollapsibleItem.prototype, "height").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return DifficultyScalingBonusTextListItem;
}(r.ACollapsibleItem);
exports.DifficultyScalingBonusTextListItem = l;
a.classImplementsInterfaces(l, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");