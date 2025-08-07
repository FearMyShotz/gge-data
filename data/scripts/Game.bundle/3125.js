Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./4.js");
var r = function (e) {
  function CastleListDetailOverviewSublayerMisc(t) {
    var i = e.call(this, t) || this;
    i.itemList.scrollItemClass = l.CastleListDetailOverviewItemMisc;
    i.subLayerDisp.icon_publicOrder.toolTipText = "publicOrder";
    i.subLayerDisp.icon_protection.toolTipText = "protection";
    i.subLayerDisp.icon_guards.toolTipText = "guards";
    i.subLayerDisp.icon_population.toolTipText = "population";
    i.subLayerDisp.icon_marketCarriges.toolTipText = "marketCarriges";
    i.subLayerDisp.icon_aquamarin.toolTipText = "aquamarin_name";
    i.subLayerDisp.icon_aquamarin_points.toolTipText = "aquamarin_points_alliance_tooltip";
    return i;
  }
  n.__extends(CastleListDetailOverviewSublayerMisc, e);
  CastleListDetailOverviewSublayerMisc.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    var i = s.CastleModel.kingdomData.isKingdomUnlocked(a.WorldIsland.KINGDOM_ID);
    this.subLayerDisp.icon_aquamarin.visible = i;
    this.subLayerDisp.icon_aquamarin_points.visible = i;
  };
  return CastleListDetailOverviewSublayerMisc;
}(require("./1040.js").CastleListDetailOverviewSublayer);
exports.CastleListDetailOverviewSublayerMisc = r;
var l = require("./3126.js");
o.classImplementsInterfaces(r, "ICollectableRendererList", "ISublayer");