Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./31.js");
var c = require("./19.js");
var u = require("./185.js");
var d = createjs.Point;
var p = function (e) {
  function CastleBattleLogLootItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleBattleLogLootItem, e);
  CastleBattleLogLootItem.prototype.customFillItem = function () {
    var e = o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_text, new r.TextVO(""));
    var t = new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_DEFAULT, new d(25, 25));
    t.tooltip.useAmount = false;
    h.CollectableRenderHelper.displaySingleItem(new l.CollectableRenderClips(this.disp), this.lootScrollItemVO.loot, t);
    u.SubscriptionHelper.showSubscriptionStarToTextField(e, this.lootScrollItemVO.showSubscriptionBuffed, 15, new d(-3, 0));
  };
  Object.defineProperty(CastleBattleLogLootItem.prototype, "lootScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleBattleLogLootItem;
}(a.ScrollItem);
exports.CastleBattleLogLootItem = p;
var h = require("./25.js");
s.classImplementsInterfaces(p, "MovieClip");