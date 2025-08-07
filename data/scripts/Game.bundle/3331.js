Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./329.js");
var s = function (e) {
  function ResourcePanelToolTipResourceMead() {
    return e.call(this, l.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_MEAD) || this;
  }
  n.__extends(ResourcePanelToolTipResourceMead, e);
  ResourcePanelToolTipResourceMead.prototype.createItems = function () {
    this._title = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._productionPerHour = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._productionRate = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._foodStop = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._honeyStop = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._meadEat = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._meadEat2 = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._meadStorage = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._meadIsEmpty = new c.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._productionPerHourFrozen = new C.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._meadEatFrozen = new C.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._meadEat2Frozen = new C.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._productionPerHourFrozen.tf.color = g.ClientConstColor.FONT_FROZEN;
    this._meadEatFrozen.tf.color = g.ClientConstColor.FONT_FROZEN;
    this._meadEat2Frozen.tf.color = g.ClientConstColor.FONT_FROZEN;
    this._divider = new Library.CastleInterfaceElements.divider();
  };
  ResourcePanelToolTipResourceMead.prototype.updateContent = function () {
    this._items.length = 0;
    this._divider.scaleX = 0.1;
    u.CastleTextFieldHelper.safeSetText(this._title.tf, "mead");
    if (d.CastleModel.areaData.activeCommonInfo.meadBaseProduction > 0) {
      u.CastleTextFieldHelper.safeSetText(this._productionPerHour.tf, "meadproduction_value", [p.MathBase.floor(d.CastleModel.areaData.activeCommonInfo.meadBaseProduction, 1)]);
      u.CastleTextFieldHelper.safeSetText(this._productionPerHourFrozen.tf, "meadproduction_freeze_value", [p.MathBase.floor(d.CastleModel.areaData.activeCommonInfo.meadBaseProduction, 1)]);
    } else {
      u.CastleTextFieldHelper.safeSetText(this._productionPerHour.tf, "noProduction");
      u.CastleTextFieldHelper.safeSetText(this._productionPerHourFrozen.tf, "noProduction");
    }
    u.CastleTextFieldHelper.safeSetText(this._meadEat.tf, "meadwastage_value", [d.CastleModel.areaData.activeCommonInfo.meadConsumption]);
    u.CastleTextFieldHelper.safeSetText(this._meadEatFrozen.tf, "meadwastage_freeze_value", [d.CastleModel.areaData.activeCommonInfo.meadConsumption]);
    u.CastleTextFieldHelper.safeSetText(this._meadStorage.tf, "storage_capacity_colon", [d.CastleModel.areaData.getActiveStorageItem(r.CollectableEnum.MEAD).maxAmount]);
    if (d.CastleModel.areaData.activeCommonInfo.meadProduction < 0) {
      u.CastleTextFieldHelper.safeSetText(this._meadEat2.tf, "xPerHour", [p.MathBase.floor(d.CastleModel.areaData.activeCommonInfo.meadProduction, 1)]);
      u.CastleTextFieldHelper.safeSetText(this._meadEat2Frozen.tf, "xPerHour_freeze", [p.MathBase.floor(d.CastleModel.areaData.activeCommonInfo.meadProduction, 1)]);
      u.CastleTextFieldHelper.safeSetText(this._meadIsEmpty.tf, "emptyIn", [p.TimeStringHelper.getTimeToString(d.CastleModel.areaData.activeCommonInfo.meadIsEmptyTimeInSeconds, p.TimeStringHelper.ONE_TIME_FORMAT, h.Localize.text)]);
      this._meadEat2.tf.color = g.ClientConstColor.GENERIC_BRIGHT_RED;
      this._meadIsEmpty.tf.color = g.ClientConstColor.GENERIC_BRIGHT_RED;
    } else {
      u.CastleTextFieldHelper.safeSetText(this._meadEat2.tf, "xPerHour", [p.MathBase.floor(d.CastleModel.areaData.activeCommonInfo.meadProduction, 1)]);
      u.CastleTextFieldHelper.safeSetText(this._meadEat2Frozen.tf, "xPerHour_freeze", [p.MathBase.floor(d.CastleModel.areaData.activeCommonInfo.meadProduction, 1)]);
      this._meadEat2.tf.color = g.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    u.CastleTextFieldHelper.safeSetText(this._productionRate.tf, "hud_brewery_productionRate_tooltip", [h.Localize.text(p.GenericTextIds.VALUE_PERCENTAGE, [d.CastleModel.breweryData.percentForMead])]);
    u.CastleTextFieldHelper.safeSetText(this._foodStop.tf, "hud_brewery_foodStockLimit_tooltip", [d.CastleModel.breweryData.stopAtFoodAmount]);
    u.CastleTextFieldHelper.safeSetText(this._honeyStop.tf, "hud_brewery_honeyStockLimit_tooltip", [d.CastleModel.breweryData.stopAtHoneyAmount]);
    if (d.CastleModel.userData.foodFrozen) {
      this._items.push(this._title);
      this._items.push(this._productionPerHourFrozen);
      this._items.push(this._productionRate);
      this._items.push(this._foodStop);
      this._items.push(this._honeyStop);
      this._items.push(this._meadEatFrozen);
      this._items.push(this._divider);
      this._items.push(this._meadEat2Frozen);
    } else {
      this._items.push(this._title);
      this._items.push(this._productionPerHour);
      this._items.push(this._productionRate);
      this._items.push(this._foodStop);
      this._items.push(this._honeyStop);
      this._items.push(this._meadEat);
      this._items.push(this._divider);
      this._items.push(this._meadEat2);
    }
    if (d.CastleModel.areaData.activeCommonInfo.meadProduction < 0) {
      this._items.push(this._meadIsEmpty);
    }
    this._items.push(this._meadStorage);
  };
  Object.defineProperty(ResourcePanelToolTipResourceMead.prototype, "resource", {
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AResourcePanelToolTipResource.prototype, "resource").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelToolTipResourceMead.prototype, "laboratoryResourceBonus", {
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AResourcePanelToolTipResource.prototype, "laboratoryResourceBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipResourceMead;
}(a.AResourcePanelToolTipResource);
exports.ResourcePanelToolTipResourceMead = s;
var r = require("./12.js");
var l = require("./152.js");
var c = require("./286.js");
var u = require("./141.js");
var d = require("./4.js");
var p = require("./2.js");
var h = require("./3.js");
var g = require("./16.js");
var C = require("./802.js");
o.classImplementsInterfaces(s, "Container");