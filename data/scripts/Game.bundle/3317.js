Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./16.js");
var d = require("./44.js");
var p = require("./4.js");
var h = require("./35.js");
var g = require("./141.js");
var C = require("./185.js");
var _ = require("./401.js");
var m = require("./287.js");
var f = createjs.Point;
var O = function (e) {
  function ResourcePanelToolTipFood() {
    return e.call(this, y.ResourcePanelToolTipManager.TOOL_TIP_TYPE_FOOD) || this;
  }
  n.__extends(ResourcePanelToolTipFood, e);
  ResourcePanelToolTipFood.prototype.createItems = function () {
    this._title = new m.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._productionPerHour = new m.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._eatPerHour = new m.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._foodUse = new m.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._amount = new m.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._foodIsEmpty = new m.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._hunterActive = new m.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._metropolBoost = new m.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._meadProduction = new m.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._foodUseFrozen = new b.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._eatPerHourFrozen = new b.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._productionPerHourFrozen = new b.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._meadProductionFrozen = new b.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._foodUseFrozen.tf.color = u.ClientConstColor.FONT_FROZEN;
    this._eatPerHourFrozen.tf.color = u.ClientConstColor.FONT_FROZEN;
    this._productionPerHourFrozen.tf.color = u.ClientConstColor.FONT_FROZEN;
    this._meadProductionFrozen.tf.color = u.ClientConstColor.FONT_FROZEN;
    this._divider = new Library.CastleInterfaceElements.divider();
  };
  ResourcePanelToolTipFood.prototype.updateContent = function () {
    this._items.length = 0;
    this._divider.scaleX = 0.1;
    g.CastleTextFieldHelper.safeSetText(this._title.tf, "food");
    if (p.CastleModel.areaData.activeCommonInfo && p.CastleModel.areaData.activeCommonInfo.foodBaseProduction > 0) {
      g.CastleTextFieldHelper.safeSetText(this._productionPerHour.tf, "foodproduction_value", [a.MathBase.floor(p.CastleModel.areaData.activeCommonInfo.foodBaseProduction, 1)]);
      g.CastleTextFieldHelper.safeSetText(this._productionPerHourFrozen.tf, "foodproduction_freeze_value", [a.MathBase.floor(p.CastleModel.areaData.activeCommonInfo.foodBaseProduction, 1)]);
    } else {
      g.CastleTextFieldHelper.safeSetText(this._productionPerHour.tf, "noProduction");
      g.CastleTextFieldHelper.safeSetText(this._productionPerHourFrozen.tf, "noProduction");
    }
    g.CastleTextFieldHelper.safeSetText(this._eatPerHour.tf, "foodwastage_troops_value", [p.CastleModel.areaData.activeCommonInfo.foodConsumption]);
    g.CastleTextFieldHelper.safeSetText(this._eatPerHourFrozen.tf, "foodwastage_freeze_value", [p.CastleModel.areaData.activeCommonInfo.foodConsumption]);
    g.CastleTextFieldHelper.safeSetText(this._amount.tf, "storage_capacity_colon", [p.CastleModel.areaData.getActiveStorageItem(E.CollectableEnum.FOOD).maxAmount]);
    var e = !!p.CastleModel.subscriptionData.getEffectValue(h.EffectTypeEnum.EFFECT_TYPE_FOOD_CAPACITY_BONUS, p.CastleModel.areaData.activeAreaInfo.areaType, p.CastleModel.areaData.activeAreaInfo.kingdomID);
    C.SubscriptionHelper.showSubscriptionStarToTextField(this._amount.tf, e, 15, new f(-7, -8), true, 4469542);
    this._amount.x = e ? 15 : 0;
    this._items.push(this._title);
    if (p.CastleModel.userData.foodFrozen) {
      this._items.push(this._productionPerHourFrozen);
    } else {
      this._items.push(this._productionPerHour);
    }
    if (p.CastleModel.hunterData.isBoosted && !p.CastleModel.areaData.activeArea.isSeasonCamp) {
      g.CastleTextFieldHelper.safeSetText(this._hunterActive.tf, "commons_hunter_hint_HuntActive", [new l.LocalizedTextVO(s.GenericTextIds.VALUE_NOMINAL_ADD, [p.CastleModel.hunterData.foodBoost])]);
      this._items.push(this._hunterActive);
    }
    if (p.CastleModel.areaData.activeCommonInfo.metropolBoost > 0) {
      g.CastleTextFieldHelper.safeSetText(this._metropolBoost.tf, d.SpecialServerHelper.checkTextIDForSkinText("commons_alliance_hint_metropolBonus"), [p.CastleModel.areaData.activeCommonInfo.metropolBoost]);
      this._items.push(this._metropolBoost);
    }
    if (p.CastleModel.userData.foodFrozen) {
      this._items.push(this._eatPerHourFrozen);
    } else {
      this._items.push(this._eatPerHour);
    }
    if (p.CastleModel.breweryData.isMeadProductionActive) {
      var t = p.CastleModel.breweryData.breweryBuildingVO.meadProduction * (p.CastleModel.breweryData.percentForMead / 100) * p.CastleModel.breweryData.breweryBuildingVO.foodRatio;
      var i = p.CastleModel.areaData.getActiveStorageItem(E.CollectableEnum.FOOD).productionPerSec + t;
      g.CastleTextFieldHelper.safeSetText(this._productionPerHour.tf, "foodproduction_value", [a.MathBase.floor(i, 1)]);
      g.CastleTextFieldHelper.safeSetText(this._productionPerHourFrozen.tf, "foodproduction_freeze_value", [a.MathBase.floor(i, 1)]);
      g.CastleTextFieldHelper.safeSetText(this._meadProduction.tf, "foodwastage_brewery_value", [t]);
      g.CastleTextFieldHelper.safeSetText(this._meadProductionFrozen.tf, "foodwastage_brewery_freeze_value", [t]);
      if (p.CastleModel.userData.foodFrozen) {
        this._items.push(this._meadProductionFrozen);
      } else {
        this._items.push(this._meadProduction);
      }
    }
    this._items.push(this._divider);
    if (p.CastleModel.userData.foodFrozen) {
      this._items.push(this._foodUseFrozen);
    } else {
      this._items.push(this._foodUse);
    }
    if (p.CastleModel.areaData.activeCommonInfo.foodProduction < 0) {
      g.CastleTextFieldHelper.safeSetText(this._foodUse.tf, "xPerHour", [a.MathBase.floor(p.CastleModel.areaData.activeCommonInfo.foodProduction, 1)]);
      g.CastleTextFieldHelper.safeSetText(this._foodUseFrozen.tf, "xPerHour_freeze", [a.MathBase.floor(p.CastleModel.areaData.activeCommonInfo.foodProduction, 1)]);
      g.CastleTextFieldHelper.safeSetText(this._foodIsEmpty.tf, "emptyIn", [o.TimeStringHelper.getTimeToString(p.CastleModel.areaData.activeCommonInfo.foodIsEmptyTimeInSeconds, o.TimeStringHelper.ONE_TIME_FORMAT, c.Localize.text)]);
      this._foodUse.tf.color = u.ClientConstColor.GENERIC_BRIGHT_RED;
      this._foodIsEmpty.tf.color = u.ClientConstColor.GENERIC_BRIGHT_RED;
      this._items.push(this._foodIsEmpty);
    } else {
      g.CastleTextFieldHelper.safeSetText(this._foodUse.tf, "xPerHour", [a.MathBase.floor(p.CastleModel.areaData.activeCommonInfo.foodProduction, 1)]);
      g.CastleTextFieldHelper.safeSetText(this._foodUseFrozen.tf, "xPerHour_freeze", [a.MathBase.floor(p.CastleModel.areaData.activeCommonInfo.foodProduction, 1)]);
      this._foodUse.tf.color = u.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    this._items.push(this._amount);
  };
  return ResourcePanelToolTipFood;
}(_.AResourcePanelToolTip);
exports.ResourcePanelToolTipFood = O;
var E = require("./12.js");
var y = require("./152.js");
var b = require("./800.js");
r.classImplementsInterfaces(O, "Container");