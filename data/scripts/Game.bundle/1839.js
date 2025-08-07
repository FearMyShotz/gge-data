Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./39.js");
var c = require("./12.js");
var u = require("./74.js");
var d = require("./67.js");
var p = require("./19.js");
var h = require("./13.js");
var g = require("./85.js");
var C = require("./52.js");
var _ = require("./40.js");
var m = require("./25.js");
var f = createjs.Point;
var O = function (e) {
  function AdvisorAttackOverviewComponent(t, i = false) {
    var n = e.call(this, t) || this;
    n._isSummary = false;
    n._isSummary = i;
    o.GoodgameTextFieldManager.getInstance().registerTextField(n.disp.txt_costTitle, new r.LocalizedTextVO(i ? "generic_totalCost" : "generic_currentCost")).autoFitToBounds = true;
    o.GoodgameTextFieldManager.getInstance().registerTextField(n.disp.txt_lossesTtile, new r.LocalizedTextVO(i ? "generic_totalLosses" : "generic_currentLosses")).autoFitToBounds = true;
    o.GoodgameTextFieldManager.getInstance().registerTextField(n.disp.txt_lootTitle, new s.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId(i ? "lootTotal" : "lootCurrent"))).autoFitToBounds = true;
    n.disp.icon_c1.toolTipText = l.ClientConstTextIds.C1;
    n.disp.icon_c2.toolTipText = l.ClientConstTextIds.C2;
    n.disp.icon_c3.toolTipText = "currency_name_PegasusTicket";
    n.disp.icon_units.toolTipText = "units";
    n.disp.icon_tools.toolTipText = "tools";
    return n;
  }
  n.__extends(AdvisorAttackOverviewComponent, e);
  AdvisorAttackOverviewComponent.prototype.update = function (e) {
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_c1, new g.CastleLocalizedNumberVO(e.lost.getAmountOrDefaultByTypeVO(new u.CollectableTypeVO(c.CollectableEnum.C1))));
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_c2, new g.CastleLocalizedNumberVO(e.lost.getAmountOrDefaultByTypeVO(new u.CollectableTypeVO(c.CollectableEnum.C2))));
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_c3, new g.CastleLocalizedNumberVO(e.lost.getAmountOrDefaultByTypeVO(new u.CollectableTypeVO(c.CollectableEnum.GENERIC_CURRENCY, C.ClientConstCurrency.ID_PEGASUS_TICKET))));
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_units, new g.CastleLocalizedNumberVO(e.lostUnits));
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_tools, new g.CastleLocalizedNumberVO(e.lostTools));
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_victory, new r.LocalizedTextVO("advisor_AttackSummary_victory", [e.wins]));
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_defeat, new r.LocalizedTextVO("advisor_AttackSummary_defeat", [e.defeats]));
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_notSent, new r.LocalizedTextVO("advisor_AttackSummary_stopped", [e.stopped]));
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_commanders, new s.TextVO(s.Localize.text(o.GenericTextIds.VALUE_SIMPLE_COMP, [s.Localize.text("commander"), " " + e.commanders])));
    var t = new d.CollectableRenderClipsList(this.disp.mc_loot, "mc_item");
    var i = new p.CollectableRenderOptions(p.CollectableRenderOptions.SET_DEFAULT, new f(20, 20));
    m.CollectableRenderHelper.displayMultipleItemsComplete(this, t, e.gained, i);
  };
  return AdvisorAttackOverviewComponent;
}(_.CastleItemRenderer);
exports.AdvisorAttackOverviewComponent = O;
a.classImplementsInterfaces(O, "ICollectableRendererList");