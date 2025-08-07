Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./16.js");
var c = require("./31.js");
var u = require("./19.js");
var d = require("./4.js");
var p = require("./42.js");
var h = require("./8.js");
var g = require("./1759.js");
var C = createjs.Point;
var _ = function (e) {
  function UnlockPrebuiltCastleForRubies(t, i) {
    var n = e.call(this, t, i) || this;
    h.ButtonHelper.initBasicButton(n.subLayerDisp.btn_buy);
    n.txt_btn = n.textFieldManager.registerTextField(n.subLayerDisp.btn_buy.txt_value, new r.LocalizedTextVO(""));
    n.txt_btn.verticalAlign = p.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    n.txt_discount = n.textFieldManager.registerTextField(n.subLayerDisp.mc_rubies.mc_discount.txt_value, new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE));
    return n;
  }
  n.__extends(UnlockPrebuiltCastleForRubies, e);
  UnlockPrebuiltCastleForRubies.prototype.update = function (t) {
    e.prototype.update.call(this, t);
    h.ButtonHelper.enableButton(this.subLayerDisp.btn_buy, true);
    this.subLayerDisp.mc_rubies.mc_discount.visible = t.shownDiscount;
    this.txt_discount.textContentVO.textReplacements = [t.shownDiscount];
    this.txt_btn.textContentVO.textId = this.unlockButtonTextId;
    this.updateCosts(t);
  };
  UnlockPrebuiltCastleForRubies.prototype.updateCosts = function (e) {
    this.destroyCollectableRenderList();
    if (e.costC2) {
      this.renderCost(e.costC2, this.subLayerDisp.mc_rubies, UnlockPrebuiltCastleForRubies.BIG_COST_SIZE);
    }
  };
  UnlockPrebuiltCastleForRubies.prototype.renderCost = function (e, t, i) {
    var n = new c.CollectableRenderClips();
    n.addItemMc(t);
    n.addIconMc(t.mc_icon);
    n.addTextfield(t.txt_amount);
    var o = new f.CollectableRenderer(n, new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_COST_LIST, i));
    o.updateWithNewVO(e);
    var a = d.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(s.WorldClassic.KINGDOM_ID);
    var r = O.CostHelper.getAvailableGoodsFromDetailedCastleVO(a, new m.CollectableTypeVO().initByCollectable(e)) >= e.amount;
    n.textfield.textColor = r ? l.ClientConstColor.FONT_DEFAULT_COLOR : l.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    this.collectableRenderList.push(o);
  };
  Object.defineProperty(UnlockPrebuiltCastleForRubies.prototype, "unlockTypeTextId", {
    get: function () {
      return "c2";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.AUnlockPrebuiltCastle.prototype, "unlockTypeTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UnlockPrebuiltCastleForRubies.prototype.onClick = function (e) {
    if (e.target == this.subLayerDisp.btn_buy) {
      this.buyPrebuiltCastle(this.bindFunction(this.onUnlockRequestSent), true);
    }
  };
  UnlockPrebuiltCastleForRubies.prototype.onUnlockRequestSent = function () {
    this.disableUntilResponse(this.subLayerDisp.btn_buy);
  };
  UnlockPrebuiltCastleForRubies.__initialize_static_members = function () {
    UnlockPrebuiltCastleForRubies.BIG_COST_SIZE = new C(36, 36);
  };
  return UnlockPrebuiltCastleForRubies;
}(g.AUnlockPrebuiltCastle);
exports.UnlockPrebuiltCastleForRubies = _;
var m = require("./74.js");
var f = require("./186.js");
var O = require("./66.js");
a.classImplementsInterfaces(_, "ICollectableRendererList", "ISublayer");
_.__initialize_static_members();