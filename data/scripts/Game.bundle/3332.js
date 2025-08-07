Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./329.js");
var s = function (e) {
  function ResourcePanelToolTipResourceHoney() {
    return e.call(this, l.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_HONEY) || this;
  }
  n.__extends(ResourcePanelToolTipResourceHoney, e);
  Object.defineProperty(ResourcePanelToolTipResourceHoney.prototype, "resource", {
    get: function () {
      return r.CollectableEnum.HONEY;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AResourcePanelToolTipResource.prototype, "resource").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelToolTipResourceHoney.prototype, "laboratoryResourceBonus", {
    get: function () {
      return 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AResourcePanelToolTipResource.prototype, "laboratoryResourceBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ResourcePanelToolTipResourceHoney.prototype.createItems = function () {
    this._title = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._production = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._baseProduction = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._max = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._meadProduction = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._honeyIsEmpty = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._divider = new Library.CastleInterfaceElements.divider();
  };
  ResourcePanelToolTipResourceHoney.prototype.updateContent = function () {
    this._items.length = 0;
    var e;
    var t = u.CastleModel.areaData.getActiveStorageItem(this.resource).productionPerSec;
    e = t == 0 ? "noProduction" : "xPerHour";
    var i = new this.resource.dataClass();
    p.CastleTextFieldHelper.safeSetText(this._title.tf, i.getTooltipTextId());
    p.CastleTextFieldHelper.safeSetText(this._production.tf, e, [t]);
    this._production.tf.color = t < 0 ? C.ClientConstColor.GENERIC_BRIGHT_RED : C.ClientConstColor.FONT_DEFAULT_COLOR;
    this._items.push(this._title);
    if (u.CastleModel.breweryData.isMeadProductionActive) {
      var n = u.CastleModel.breweryData.breweryBuildingVO.meadProduction * (u.CastleModel.breweryData.percentForMead / 100) * u.CastleModel.breweryData.breweryBuildingVO.honeyRatio;
      p.CastleTextFieldHelper.safeSetText(this._meadProduction.tf, "honeywastage_brewery_value", [n]);
      this._meadProduction.tf.color = C.ClientConstColor.GENERIC_BRIGHT_RED;
      var o = t + n;
      p.CastleTextFieldHelper.safeSetText(this._baseProduction.tf, "honeyProduction_perHour_value", [o]);
      this._items.push(this._baseProduction);
      this._items.push(this._meadProduction);
      this._items.push(this._divider);
    }
    p.CastleTextFieldHelper.safeSetText(this._production.tf, e, [t]);
    var a = d.int(u.CastleModel.areaData.getActiveStorageItem(this.resource).maxAmount);
    p.CastleTextFieldHelper.safeSetText(this._max.tf, "storage_capacity_colon", [a]);
    this._items.push(this._production);
    if (u.CastleModel.areaData.activeCommonInfo.honeyProduction < 0) {
      p.CastleTextFieldHelper.safeSetText(this._honeyIsEmpty.tf, "emptyIn", [g.TimeStringHelper.getTimeToString(u.CastleModel.areaData.activeCommonInfo.honeyIsEmptyTimeInSeconds, g.TimeStringHelper.ONE_TIME_FORMAT, h.Localize.text)]);
      this._honeyIsEmpty.tf.color = C.ClientConstColor.GENERIC_BRIGHT_RED;
      this._items.push(this._honeyIsEmpty);
    }
    this._items.push(this._max);
  };
  return ResourcePanelToolTipResourceHoney;
}(a.AResourcePanelToolTipResource);
exports.ResourcePanelToolTipResourceHoney = s;
var r = require("./12.js");
var l = require("./152.js");
var c = require("./287.js");
var u = require("./4.js");
var d = require("./6.js");
var p = require("./141.js");
var h = require("./3.js");
var g = require("./2.js");
var C = require("./16.js");
o.classImplementsInterfaces(s, "Container");