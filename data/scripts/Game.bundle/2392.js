Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./185.js");
var c = require("./319.js");
var u = createjs.Point;
var d = function (e) {
  function CastleRessourceCollectorSendToKingdomComponent(t, i, n, a, l, c) {
    var u = this;
    u.taxrate = 0;
    u.isSubscriptionBuffed = false;
    CONSTRUCTOR_HACK;
    (u = e.call(this, t) || this).taxrate = i;
    u.donateComponent.mc_tax.mc_taxIcon.toolTipText = "kingdom_sendResources_malus";
    u.donateComponent.mc_sendToKingdom.mc_resToKingdom.toolTipText = "kingdom_sendResources_resourcesReallyArrived";
    u.itxt_tax = p.CastleComponent.textFieldManager.registerTextField(u.donateComponent.mc_tax.txt_tax, new s.LocalizedNumberVO(0));
    u.itxt_sendTo = p.CastleComponent.textFieldManager.registerTextField(u.donateComponent.mc_sendToKingdom.txt_sendToKingdom, new s.LocalizedNumberVO(0));
    if (l) {
      l.toolTipText = "storage_capacity";
      p.CastleComponent.textFieldManager.registerTextField(l.txt_value, new r.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [n, a])).autoFitToBounds = true;
    }
    u.isSubscriptionBuffed = c;
    return u;
  }
  n.__extends(CastleRessourceCollectorSendToKingdomComponent, e);
  CastleRessourceCollectorSendToKingdomComponent.prototype.setAmountText = function () {
    e.prototype.setAmountText.call(this);
    var t = Math.round(this.getSelectedAmount() * (1 - this.taxrate));
    this.donateComponent.mc_tax.visible = t > 0;
    this.donateComponent.mc_sendToKingdom.visible = t > 0;
    this.itxt_tax.textContentVO.numberValue = t;
    this.itxt_sendTo.textContentVO.numberValue = this.getSelectedAmount() - t;
    l.SubscriptionHelper.showSubscriptionStarToTextField(this.itxt_tax, this.isSubscriptionBuffed, 20, new u(-30, -12));
  };
  return CastleRessourceCollectorSendToKingdomComponent;
}(c.CastleResourceCollectorComponent);
exports.CastleRessourceCollectorSendToKingdomComponent = d;
var p = require("./14.js");
a.classImplementsInterfaces(d, "ICollectableRendererList");