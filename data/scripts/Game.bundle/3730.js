Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./46.js");
var l = require("./4.js");
var c = require("./24.js");
var u = require("./157.js");
var d = function (e) {
  function DifficultyScalingBonusCategoryListItem(t, i) {
    var n = e.call(this, new (a.getDefinitionByName("DifficultyBonusCategory"))(), i) || this;
    n.data = t;
    n.fill();
    return n;
  }
  n.__extends(DifficultyScalingBonusCategoryListItem, e);
  Object.defineProperty(DifficultyScalingBonusCategoryListItem.prototype, "headerText", {
    get: function () {
      return this.data.header;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingBonusCategoryListItem.prototype, "effectList", {
    get: function () {
      return this.data.effectList;
    },
    enumerable: true,
    configurable: true
  });
  DifficultyScalingBonusCategoryListItem.prototype.fill = function () {
    var e;
    var t;
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.txt_copy, new s.LocalizedTextVO(this.headerText));
    o.MovieClipHelper.clearMovieClip(this.itemMc.mc_items);
    e = 0;
    for (; e < this.effectList.length; e++) {
      var i = new (a.getDefinitionByName("DifficultySelectEffectItem"))();
      var n = this.effectList[e];
      if (n.minValue != n.maxValue) {
        o.GoodgameTextFieldManager.getInstance().registerTextField(i.txt_copy, new s.LocalizedTextVO("value_dash_split", [s.Localize.text("value_percentage", [n.minValue]), s.Localize.text("value_percentage", [n.maxValue])]));
      } else {
        o.GoodgameTextFieldManager.getInstance().registerTextField(i.txt_copy, new s.LocalizedTextVO("value_percentage", [n.minValue]));
      }
      o.MovieClipHelper.clearMovieClip(i.mc_icon);
      var u = "Effect_Group_Icon_" + n.effectGroup;
      var d = new c.CastleGoodgameExternalClip(u, r.IsoHelper.view.getAssetFileURL(u), null, 0, false);
      d.clipSizeComponent = new o.ClipSizeComponent(30, 30);
      i.mc_icon.addChild(d);
      i.mouseChildren = false;
      i.toolTipText = {
        t: "effect_name_" + l.CastleModel.effectsData.getEffectByID(n.effectID).name,
        ox: 23
      };
      this.itemMc.mc_items.addChild(i);
      i.x = e % 3 * i.width;
      i.y = Math.floor(e / 3) * i.height;
      t = i.height;
    }
    var p = Math.ceil(e / 3) * t + 10;
    this.itemMc.mc_items.scaleY = p / 130;
  };
  Object.defineProperty(DifficultyScalingBonusCategoryListItem.prototype, "itemMc", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingBonusCategoryListItem.prototype, "height", {
    get: function () {
      return this.disp.height;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.ACollapsibleItem.prototype, "height").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return DifficultyScalingBonusCategoryListItem;
}(u.ACollapsibleItem);
exports.DifficultyScalingBonusCategoryListItem = d;
a.classImplementsInterfaces(d, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");