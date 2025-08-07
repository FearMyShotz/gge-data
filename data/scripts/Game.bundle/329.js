Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./69.js");
var c = require("./4.js");
var u = require("./141.js");
var d = require("./401.js");
var p = require("./287.js");
var h = function (e) {
  function AResourcePanelToolTipResource(t) {
    return e.call(this, t) || this;
  }
  n.__extends(AResourcePanelToolTipResource, e);
  AResourcePanelToolTipResource.prototype.createItems = function () {
    this._title = new p.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._production = new p.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._laboratoryBonus = new p.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._max = new p.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._hunter = new p.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
  };
  AResourcePanelToolTipResource.prototype.updateContent = function () {
    this._items.length = 0;
    var e;
    var t = c.CastleModel.areaData.getActiveStorageItem(this.resource).productionPerSec;
    e = t == 0 ? "noProduction" : "xPerHour";
    var i = r.int(c.CastleModel.areaData.getActiveStorageItem(this.resource).maxAmount);
    var n = new this.resource.dataClass();
    u.CastleTextFieldHelper.safeSetText(this._title.tf, n.getTooltipTextId());
    u.CastleTextFieldHelper.safeSetText(this._production.tf, e, [t]);
    u.CastleTextFieldHelper.safeSetText(this._max.tf, "storage_capacity_colon", [i]);
    this._items.push(this._title);
    this._items.push(this._production);
    if (t > 0 && this.laboratoryResourceBonus > 0) {
      u.CastleTextFieldHelper.safeSetText(this._laboratoryBonus.tf, "tooltip_laboratory_boost", [new s.LocalizedTextVO(o.GenericTextIds.VALUE_NOMINAL_ADD, [this.laboratoryResourceBonus])]);
      this._items.push(this._laboratoryBonus);
    }
    if (this.hunterReduction != 0 && !c.CastleModel.areaData.activeArea.isSeasonCamp) {
      u.CastleTextFieldHelper.safeSetText(this._hunter.tf, "commons_hunter_hint_HuntActive", [this.hunterReduction]);
      this._items.push(this._hunter);
    }
    this._items.push(this._max);
  };
  Object.defineProperty(AResourcePanelToolTipResource.prototype, "hunterReduction", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourcePanelToolTipResource.prototype, "laboratoryResourceBonus", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourcePanelToolTipResource.prototype, "resource", {
    get: function () {
      throw new l.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  return AResourcePanelToolTipResource;
}(d.AResourcePanelToolTip);
exports.AResourcePanelToolTipResource = h;
a.classImplementsInterfaces(h, "Container");