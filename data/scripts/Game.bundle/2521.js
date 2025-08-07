Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./39.js");
var c = function (e) {
  function CastleABGTowerEffectDetailDialogItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleABGTowerEffectDetailDialogItem, e);
  CastleABGTowerEffectDetailDialogItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    var t = this.getItemMc();
    t.mc_c2.toolTipText = l.ClientConstTextIds.C2;
    this.itxt_level = u.CastleComponent.textFieldManager.registerTextField(t.txt_level, new s.LocalizedNumberVO(0));
    this.itxt_value = u.CastleComponent.textFieldManager.registerTextField(t.txt_value, new r.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE_ADD, [0]));
    this.itxt_cost = u.CastleComponent.textFieldManager.registerTextField(t.txt_cost, new s.LocalizedNumberVO(0));
  };
  CastleABGTowerEffectDetailDialogItem.prototype.fill = function () {
    e.prototype.fill.call(this);
    this.itxt_level.textContentVO.numberValue = this.level;
    this.itxt_value.textContentVO.textReplacements = [this.towerEffectVO.getEffectValueForLevel(this.level)];
    this.itxt_cost.textContentVO.numberValue = this.towerEffectVO.getCostForLevel(this.level);
  };
  Object.defineProperty(CastleABGTowerEffectDetailDialogItem.prototype, "towerEffectVO", {
    get: function () {
      return this.data[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleABGTowerEffectDetailDialogItem.prototype, "level", {
    get: function () {
      return this.data[1];
    },
    enumerable: true,
    configurable: true
  });
  return CastleABGTowerEffectDetailDialogItem;
}(require("./81.js").AInfiniteScrollListItem);
exports.CastleABGTowerEffectDetailDialogItem = c;
var u = require("./14.js");
o.classImplementsInterfaces(c, "ICollectableRendererList");