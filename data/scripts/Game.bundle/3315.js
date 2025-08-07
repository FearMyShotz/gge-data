Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./18.js");
var c = require("./4.js");
var u = require("./141.js");
var d = require("./401.js");
var p = require("./287.js");
var h = function (e) {
  function ResourcePanelToolTipFactionAuxiliary() {
    return e.call(this, g.ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_AUXILIARIES) || this;
  }
  n.__extends(ResourcePanelToolTipFactionAuxiliary, e);
  ResourcePanelToolTipFactionAuxiliary.prototype.updateContent = function () {
    var e = c.CastleModel.militaryData.unitInventory;
    var t = r.int(e.getUnitCount(ResourcePanelToolTipFactionAuxiliary.auxiliariesByUnitType(l.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE)));
    var i = r.int(e.getUnitCount(ResourcePanelToolTipFactionAuxiliary.auxiliariesByUnitType(l.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE)));
    u.CastleTextFieldHelper.safeSetText(this._title.tf, "auxiliaries");
    u.CastleTextFieldHelper.safeSetText(this._melee.tf, o.GenericTextIds.VALUE_ASSIGN_COLON, [s.Localize.text("auxiliaries_melee"), t]);
    u.CastleTextFieldHelper.safeSetText(this._range.tf, o.GenericTextIds.VALUE_ASSIGN_COLON, [s.Localize.text("auxiliaries_ranged"), i]);
    u.CastleTextFieldHelper.safeSetText(this._capacity.tf, o.GenericTextIds.VALUE_ASSIGN_COLON, [s.Localize.text("dialog_factionAuxiliaries_tentCapacity_tooltip"), c.CastleModel.areaData.activeMorality.maxAuxiliariesStorage]);
  };
  ResourcePanelToolTipFactionAuxiliary.prototype.createItems = function () {
    this._title = new p.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._melee = new p.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._range = new p.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._capacity = new p.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._items.push(this._title);
    this._items.push(this._melee);
    this._items.push(this._range);
    this._items.push(this._capacity);
  };
  ResourcePanelToolTipFactionAuxiliary.auxiliariesByUnitType = function (e) {
    return function (t) {
      return t.unitType == e && t.isAuxiliary;
    };
  };
  return ResourcePanelToolTipFactionAuxiliary;
}(d.AResourcePanelToolTip);
exports.ResourcePanelToolTipFactionAuxiliary = h;
var g = require("./152.js");
a.classImplementsInterfaces(h, "Container");