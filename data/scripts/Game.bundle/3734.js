Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./157.js");
var l = require("./1094.js");
var c = function (e) {
  function DifficultyScalingTextListItem(t, i) {
    var n = e.call(this, new (a.getDefinitionByName("EventDifficultyTextItem"))(), i) || this;
    n.eventID = t;
    n.fill();
    return n;
  }
  n.__extends(DifficultyScalingTextListItem, e);
  DifficultyScalingTextListItem.prototype.fill = function () {
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.txt_copy, new s.LocalizedTextVO("dialog_difficultyScaling_chooseDifficulty_desc", ["event_title_" + this.eventID]));
  };
  Object.defineProperty(DifficultyScalingTextListItem.prototype, "itemMc", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingTextListItem.prototype, "height", {
    get: function () {
      return this.disp.height;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ACollapsibleItem.prototype, "height").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return DifficultyScalingTextListItem;
}(r.ACollapsibleItem);
exports.DifficultyScalingTextListItem = c;
a.classImplementsInterfaces(l.GlobalEffectEventDialogListItem, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");