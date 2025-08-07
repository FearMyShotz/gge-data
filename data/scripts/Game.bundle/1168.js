Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./39.js");
var g = require("./55.js");
var C = require("./479.js");
var _ = require("./31.js");
var m = require("./19.js");
var f = require("./4.js");
var O = require("./52.js");
var E = require("./11.js");
var y = createjs.Point;
var b = function (e) {
  function CastleRewardInfoDialog() {
    return e.call(this, CastleRewardInfoDialog.NAME) || this;
  }
  n.__extends(CastleRewardInfoDialog, e);
  CastleRewardInfoDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.mc_unit.scaleX = this.dialogDisp.mc_unit.scaleY = 1;
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.renderVO = new _.CollectableRenderClips(this.dialogDisp.mc_unit).addIconMc(this.dialogDisp.mc_unit.mc_tool);
  };
  CastleRewardInfoDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.mc_unit.toolTipText = null;
    this.dialogDisp.mc_unit.mc_tool.toolTipText = null;
    this.titleText = c.Localize.text(this.dialogProperties.collectableItem.getNameTextId(), this.dialogProperties.collectableItem.getNameTextParams()).replace(/ *[\r\n]+/, " ");
    this.descriptionText = c.Localize.text(this.dialogProperties.collectableItem.getDescriptionTextId(), this.dialogProperties.collectableItem.getDescriptionTextParams());
    if (f.CastleModel.userData.isLegend && this.dialogProperties.collectableItem.itemType == D.CollectableEnum.XP) {
      this.titleText = h.ClientConstTextIds.LEGEND_XP;
      this.descriptionText = c.Localize.text("xp_legend_short_info");
    }
    this.renderAdditionalValues();
    this.renderIconTitleDescription();
    this.updateResetInfo();
  };
  CastleRewardInfoDialog.prototype.renderIconTitleDescription = function () {
    if (l.instanceOfClass(this.dialogProperties.collectableItem, "ACollectableItemEquipmentVO") && this.dialogProperties.collectableItem.equipmentVO && !this.renderVO.equipmentBackgroundMc && this.dialogProperties.collectableItem.itemType != D.CollectableEnum.EQUIPMENT_RARENESS) {
      var e = new Library.CastleInterfaceElements.CastleEquipment_Item_Z();
      e.width = e.height = CastleRewardInfoDialog.MAX_EQ_FRAME_WIDTH;
      e.x = this.dialogDisp.mc_unit.mc_tool.x;
      e.y = this.dialogDisp.mc_unit.mc_tool.y;
      this.dialogDisp.mc_unit.addChild(e);
      this.dialogDisp.mc_unit.addChild(this.dialogDisp.mc_unit.mc_tool);
      this.renderVO.addEquipmentBgMc(e);
    }
    var t = p.int(m.CollectableRenderOptions.ICON | m.CollectableRenderOptions.EQUIPMENT_BACKGROUND);
    if (g.ClientConstUtils.isObjectClassOf(this.dialogProperties.collectableItem, [C.ACollectableItemEquipmentVO, v.ACollectableItemGemVO, S.CollectableItemRelicVO])) {
      t |= p.int(m.CollectableRenderOptions.TOOLTIP);
    }
    var i = new m.CollectableRenderOptions(t, CastleRewardInfoDialog.MAX_ICON_DIMENSION);
    i.tooltip.showEquipmentCountdown = false;
    I.CollectableRenderHelper.displaySingleItemComplete(this, this.renderVO, this.dialogProperties.collectableItem, i);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.LocalizedTextVO(this.titleText)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new d.TextVO(this.descriptionText)).autoFitToBounds = true;
  };
  CastleRewardInfoDialog.prototype.renderAdditionalValues = function () {
    this.dialogDisp.txt_copy.height = CastleRewardInfoDialog.TEXTFIELD_HEIGHT_SMALL;
    var e = this.dialogProperties.collectableItem;
    var t = l.instanceOfClass(e, "ACollectableItemPercentageBoosterVO") ? e.percentageBoosterVO : null;
    if (e.itemType == D.CollectableEnum.GLORY_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_Fame_Big, "dialog_fameBoost_bonus_tooltip", t.percentage, t.duration);
    } else if (e.itemType == D.CollectableEnum.KHAN_TABLET_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_KhanTabletBoost, "dialog_nomadBooster_boost_tt", t.percentage, t.duration);
    } else if (e.itemType == D.CollectableEnum.SAMURAI_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_SamuraiBoost, "dialog_samuraiBooster_boost_tt", t.percentage, t.duration);
    } else if (e.itemType == D.CollectableEnum.ALLIANCE_COIN_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_AllianceCoinBoost, "dialog_royalCoinsBooster_boost_tt", t.percentage, t.duration);
    } else if (e.itemType == D.CollectableEnum.LONG_TERM_POINT_EVENT_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_LongTermPEBoost, "pointsEvent_booster_tooltip", t.percentage, t.duration);
    } else if (e.itemType == D.CollectableEnum.REPUTATION_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_ReputaionBooster, "dialog_reputationBooster_boost_tt", t.percentage, t.duration);
    } else if (e.itemType == D.CollectableEnum.XP_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_XP_Big, "dialog_xpBooster_boost_tt", t.percentage, t.duration);
    } else if (e.itemType == D.CollectableEnum.GALLANTRY_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_Gallantry, "dialog_gallantryBooster_boost_tt", t.percentage, t.duration);
    } else if (e.itemType == D.CollectableEnum.RAGE_POINT_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_RageBoost, "dialog_rageBooster_boost_tt", t.percentage, t.duration);
    } else if (e.itemType == D.CollectableEnum.KHAN_MEDAL_POINT_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_KhanMedalBoost, "dialog_khanMedalBooster_boost_tt", t.percentage, t.duration);
    } else if (e.itemType == D.CollectableEnum.BOOSTER) {
      var i = this.getMarketshopVO();
      this.setTitleAndCopyForBooster(i.heroName, i.copy);
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_Boni, i.bonusToolTip, i.bonusValue, e.boosterVO.duration, i.bonusIconFrame);
    } else {
      this.dialogDisp.txt_copy.height = CastleRewardInfoDialog.TEXTFIELD_HEIGHT_LARGE;
      this.fadeOutDialogAdditionalValues();
    }
  };
  CastleRewardInfoDialog.prototype.getMarketshopVO = function () {
    var e = this.dialogProperties.collectableItem.boosterVO;
    if (e.isInstructor()) {
      return f.CastleModel.boostData.instructorVO;
    }
    if (e.isMarauder()) {
      return f.CastleModel.boostData.marauderVO;
    }
    if (e.isTaxcollector()) {
      return f.CastleModel.boostData.taxBribeVO;
    }
    if (e.isFoodBooster) {
      return f.CastleModel.boostData.overseerFoodVO;
    }
    if (e.isStoneBooster) {
      return f.CastleModel.boostData.overseerStoneVO;
    }
    if (e.isWoodBooster) {
      return f.CastleModel.boostData.overseerWoodVO;
    }
    throw new Error("Booster not supported.");
  };
  CastleRewardInfoDialog.prototype.addBoosterIcon = function (e, t, i, n, r = 1) {
    this.fadeInAdditionalDialogValues();
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_infoEffectBonus.mc_icon);
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_infoPointBonus.mc_icon);
    T.WodPicHelper.addIcon(e, this.dialogDisp.mc_infoEffectBonus.mc_icon, 40, 40);
    T.WodPicHelper.addIcon(Library.CastleInterfaceElements_Icons.Icon_Time_Big, this.dialogDisp.mc_infoPointBonus.mc_icon, 40, 40);
    this.dialogDisp.mc_infoEffectBonus.mc_icon.getChildAt(0).gotoAndStop(r);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_infoEffectBonus.txt_value, new u.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [i])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_infoPointBonus.txt_value, new d.TextVO(s.TimeStringHelper.getTimeToString(n, s.TimeStringHelper.ONE_TIME_FORMAT_ADVANCED, c.Localize.text, false, true)));
    this.dialogDisp.mc_infoEffectBonus.toolTipText = {
      t: t,
      p: [i]
    };
    this.dialogDisp.mc_infoPointBonus.toolTipText = "runTime";
  };
  CastleRewardInfoDialog.prototype.fadeInAdditionalDialogValues = function () {
    this.dialogDisp.mc_infoEffectBonus.visible = true;
    this.dialogDisp.mc_infoPointBonus.visible = true;
  };
  CastleRewardInfoDialog.prototype.setTitleAndCopyForBooster = function (e, t) {
    this.titleText = e;
    this.descriptionText = t;
  };
  CastleRewardInfoDialog.prototype.fadeOutDialogAdditionalValues = function () {
    this.dialogDisp.mc_infoEffectBonus.visible = false;
    this.dialogDisp.mc_infoPointBonus.visible = false;
  };
  CastleRewardInfoDialog.prototype.updateResetInfo = function () {
    this.dialogDisp.mc_reset.visible = l.instanceOfClass(this.dialogProperties.collectableItem, "CollectableItemGenericCurrencyVO") && this.dialogProperties.collectableItem.isInIdRange(f.CastleModel.currencyData.getCurrencyRangeByID(O.ClientConstCurrency.ID_RANGE_DONATION_CURRENCY));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_reset.txt_copy, new u.LocalizedTextVO("dialog_currencyInfoPopUp_ResetInfo"));
  };
  CastleRewardInfoDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleRewardInfoDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRewardInfoDialog.__initialize_static_members = function () {
    CastleRewardInfoDialog.MAX_ICON_DIMENSION = new y(80, 80);
  };
  CastleRewardInfoDialog.NAME = "CastleRewardInfoEx_Feb2024";
  CastleRewardInfoDialog.MAX_EQ_FRAME_WIDTH = 88;
  CastleRewardInfoDialog.TEXTFIELD_HEIGHT_LARGE = 107.5;
  CastleRewardInfoDialog.TEXTFIELD_HEIGHT_SMALL = 74.5;
  return CastleRewardInfoDialog;
}(E.CastleExternalDialog);
exports.CastleRewardInfoDialog = b;
var D = require("./12.js");
var I = require("./25.js");
var T = require("./63.js");
var v = require("./567.js");
var S = require("./289.js");
r.classImplementsInterfaces(b, "ICollectableRendererList");
b.__initialize_static_members();