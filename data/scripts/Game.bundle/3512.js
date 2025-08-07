Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./4.js");
var r = function (e) {
  function CastleRandomDungeonWinDialogProperties(t) {
    var i = this;
    i.lootC2 = 0;
    i.dungeonProtectionTime = 0;
    i.skinID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).skinID = a.int(t.SID);
    i.lootC2 = a.int(t.C2);
    i.dungeonProtectionTime = a.int(t.DPT);
    i.rewards = s.CastleModel.rewardData.getListById(t.RID);
    if (i.lootC2 > 0) {
      i.rewards.addItem(new l.CollectableItemC2VO(i.lootC2));
    }
    if (i.dungeonProtectionTime > 0) {
      i.rewards.addItem(new c.CollectableItemDungeonProtectionVO(i.dungeonProtectionTime));
    }
    return i;
  }
  n.__extends(CastleRandomDungeonWinDialogProperties, e);
  return CastleRandomDungeonWinDialogProperties;
}(o.BasicProperties);
exports.CastleRandomDungeonWinDialogProperties = r;
var l = require("./128.js");
var c = require("./1053.js");