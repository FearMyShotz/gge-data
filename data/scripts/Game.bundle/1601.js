Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./1.js");
var s = require("./8.js");
var r = function (e) {
  function CastleListDetailOverviewSublayerMilitary(t) {
    var i = this;
    i._currentFilter = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).itemList.scrollItemClass = l.CastleListDetailOverviewItemMilitary;
    i.subLayerDisp.tab_all.toolTipText = "dialog_listOverview_tabMilitaryAll_tt";
    i.subLayerDisp.tab_attackUnits.toolTipText = "attackunit";
    i.subLayerDisp.tab_defenceUnits.toolTipText = "defenceunit";
    i.subLayerDisp.tab_attackTools.toolTipText = "attackTools";
    i.subLayerDisp.tab_defenceTools.toolTipText = "defenceTools";
    s.ButtonHelper.initTwoStateButtons([i.subLayerDisp.tab_all, i.subLayerDisp.tab_attackUnits, i.subLayerDisp.tab_defenceUnits, i.subLayerDisp.tab_attackTools, i.subLayerDisp.tab_defenceTools]);
    new o.BasicButtonGroup([i.subLayerDisp.tab_all.basicButton, i.subLayerDisp.tab_attackUnits.basicButton, i.subLayerDisp.tab_defenceUnits.basicButton, i.subLayerDisp.tab_attackTools.basicButton, i.subLayerDisp.tab_defenceTools.basicButton]).selectButton(i.subLayerDisp.tab_all.basicButton);
    return i;
  }
  n.__extends(CastleListDetailOverviewSublayerMilitary, e);
  CastleListDetailOverviewSublayerMilitary.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.tab_all:
        this.currentFilter = CastleListDetailOverviewSublayerMilitary.FILTER_ALL;
        break;
      case this.subLayerDisp.tab_attackUnits:
        this.currentFilter = CastleListDetailOverviewSublayerMilitary.FILTER_UNITS_ATTACK;
        break;
      case this.subLayerDisp.tab_defenceUnits:
        this.currentFilter = CastleListDetailOverviewSublayerMilitary.FILTER_UNITS_DEFENCE;
        break;
      case this.subLayerDisp.tab_attackTools:
        this.currentFilter = CastleListDetailOverviewSublayerMilitary.FILTER_TOOLS_ATTACK;
        break;
      case this.subLayerDisp.tab_defenceTools:
        this.currentFilter = CastleListDetailOverviewSublayerMilitary.FILTER_TOOLS_DEFENCE;
    }
  };
  Object.defineProperty(CastleListDetailOverviewSublayerMilitary.prototype, "currentFilter", {
    get: function () {
      return this._currentFilter;
    },
    set: function (e) {
      this._currentFilter = e;
      this.fillList(false);
    },
    enumerable: true,
    configurable: true
  });
  CastleListDetailOverviewSublayerMilitary.__initialize_static_members = function () {
    CastleListDetailOverviewSublayerMilitary.FILTER_ALL = 0;
    CastleListDetailOverviewSublayerMilitary.FILTER_UNITS_ATTACK = 1;
    CastleListDetailOverviewSublayerMilitary.FILTER_UNITS_DEFENCE = 2;
    CastleListDetailOverviewSublayerMilitary.FILTER_TOOLS_ATTACK = 3;
    CastleListDetailOverviewSublayerMilitary.FILTER_TOOLS_DEFENCE = 4;
  };
  return CastleListDetailOverviewSublayerMilitary;
}(require("./1041.js").CastleListDetailOverviewSublayer);
exports.CastleListDetailOverviewSublayerMilitary = r;
var l = require("./3125.js");
a.classImplementsInterfaces(r, "ICollectableRendererList", "ISublayer");
r.__initialize_static_members();