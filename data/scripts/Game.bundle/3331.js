Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./329.js");
var s = function (e) {
  function ResourcePanelToolTipResourceBeef() {
    return e.call(this, l.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_BEEF) || this;
  }
  n.__extends(ResourcePanelToolTipResourceBeef, e);
  ResourcePanelToolTipResourceBeef.prototype.createItems = function () {
    this._title = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._productionPerHour = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._beefEat = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._beefEat2 = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._beefStorage = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._beefIsEmpty = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._productionPerHourFrozen = new C.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._beefEatFrozen = new C.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._beefEat2Frozen = new C.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._productionPerHourFrozen.tf.color = g.ClientConstColor.FONT_FROZEN;
    this._beefEatFrozen.tf.color = g.ClientConstColor.FONT_FROZEN;
    this._beefEat2Frozen.tf.color = g.ClientConstColor.FONT_FROZEN;
    this._divider = new Library.CastleInterfaceElements.divider();
  };
  ResourcePanelToolTipResourceBeef.prototype.updateContent = function () {
    this._items.length = 0;
    this._divider.scaleX = 0.1;
    u.CastleTextFieldHelper.safeSetText(this._title.tf, "beef");
    if (d.CastleModel.areaData.activeCommonInfo.beefBaseProduction > 0) {
      u.CastleTextFieldHelper.safeSetText(this._productionPerHour.tf, "beefproduction_value", [p.MathBase.floor(d.CastleModel.areaData.activeCommonInfo.beefBaseProduction, 1)]);
      u.CastleTextFieldHelper.safeSetText(this._productionPerHourFrozen.tf, "beefproduction_freeze_value", [p.MathBase.floor(d.CastleModel.areaData.activeCommonInfo.beefBaseProduction, 1)]);
    } else {
      u.CastleTextFieldHelper.safeSetText(this._productionPerHour.tf, "noProduction");
      u.CastleTextFieldHelper.safeSetText(this._productionPerHourFrozen.tf, "noProduction");
    }
    u.CastleTextFieldHelper.safeSetText(this._beefEat.tf, "beefwastage_value", [d.CastleModel.areaData.activeCommonInfo.beefConsumption]);
    u.CastleTextFieldHelper.safeSetText(this._beefEatFrozen.tf, "beefwastage_freeze_value", [d.CastleModel.areaData.activeCommonInfo.beefConsumption]);
    u.CastleTextFieldHelper.safeSetText(this._beefStorage.tf, "storage_capacity_colon", [d.CastleModel.areaData.getActiveStorageItem(r.CollectableEnum.BEEF).maxAmount]);
    if (d.CastleModel.areaData.activeCommonInfo.beefProduction < 0) {
      u.CastleTextFieldHelper.safeSetText(this._beefEat2.tf, "xPerHour", [p.MathBase.floor(d.CastleModel.areaData.activeCommonInfo.beefProduction, 1)]);
      u.CastleTextFieldHelper.safeSetText(this._beefEat2Frozen.tf, "xPerHour_freeze", [p.MathBase.floor(d.CastleModel.areaData.activeCommonInfo.beefProduction, 1)]);
      u.CastleTextFieldHelper.safeSetText(this._beefIsEmpty.tf, "emptyIn", [p.TimeStringHelper.getTimeToString(d.CastleModel.areaData.activeCommonInfo.beefIsEmptyTimeInSeconds, p.TimeStringHelper.ONE_TIME_FORMAT, h.Localize.text)]);
      this._beefEat2.tf.color = g.ClientConstColor.GENERIC_BRIGHT_RED;
      this._beefIsEmpty.tf.color = g.ClientConstColor.GENERIC_BRIGHT_RED;
    } else {
      u.CastleTextFieldHelper.safeSetText(this._beefEat2.tf, "xPerHour", [p.MathBase.floor(d.CastleModel.areaData.activeCommonInfo.beefProduction, 1)]);
      u.CastleTextFieldHelper.safeSetText(this._beefEat2Frozen.tf, "xPerHour_freeze", [p.MathBase.floor(d.CastleModel.areaData.activeCommonInfo.beefProduction, 1)]);
      this._beefEat2.tf.color = g.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    if (d.CastleModel.userData.foodFrozen) {
      this._items.push(this._title);
      this._items.push(this._productionPerHourFrozen);
      this._items.push(this._beefEatFrozen);
      this._items.push(this._divider);
      this._items.push(this._beefEat2Frozen);
    } else {
      this._items.push(this._title);
      this._items.push(this._productionPerHour);
      this._items.push(this._beefEat);
      this._items.push(this._divider);
      this._items.push(this._beefEat2);
    }
    if (d.CastleModel.areaData.activeCommonInfo.beefProduction < 0) {
      this._items.push(this._beefIsEmpty);
    }
    this._items.push(this._beefStorage);
  };
  Object.defineProperty(ResourcePanelToolTipResourceBeef.prototype, "resource", {
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AResourcePanelToolTipResource.prototype, "resource").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelToolTipResourceBeef.prototype, "laboratoryResourceBonus", {
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AResourcePanelToolTipResource.prototype, "laboratoryResourceBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipResourceBeef;
}(a.AResourcePanelToolTipResource);
exports.ResourcePanelToolTipResourceBeef = s;
var r = require("./12.js");
var l = require("./152.js");
var c = require("./287.js");
var u = require("./141.js");
var d = require("./4.js");
var p = require("./2.js");
var h = require("./3.js");
var g = require("./16.js");
var C = require("./800.js");
o.classImplementsInterfaces(s, "Container");