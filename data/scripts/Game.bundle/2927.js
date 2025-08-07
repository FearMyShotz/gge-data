Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./2.js");
var r = require("./4.js");
var l = require("./11.js");
var c = require("./85.js");
var u = require("./2928.js");
var d = require("./78.js");
var p = require("./77.js");
var h = require("./13.js");
var g = require("./76.js");
var C = require("./8.js");
var _ = require("./20.js");
var m = require("./1561.js");
var f = function (e) {
  function CastleBreweryProductionInfoDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleBreweryProductionInfoDialog.NAME) || this;
  }
  n.__extends(CastleBreweryProductionInfoDialog, e);
  CastleBreweryProductionInfoDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    C.ButtonHelper.initButtons([this.dialogDisp.btn_close], _.ClickFeedbackButtonHover);
    var i = new p.InfiniteScrollListOptions(u.CastleBreweryProductionInfoDialogItem, "CastleMeadProductionInfoItem", CastleBreweryProductionInfoDialog.NAME);
    i.useSmoothScroll = true;
    i.sliderInvisibleWhenNotScrollable = false;
    this._scrollList = new d.InfiniteScrollListComponent(new g.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_list.mc_mask).addSliderMc(this.dialogDisp.mc_list.mc_slider).addItemMc(this.dialogDisp.mc_list.mc_items), i);
  };
  CastleBreweryProductionInfoDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_relicBrewery_detailsOverview_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_relicBrewery_detailsOverview_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_value, new c.CastleLocalizedNumberVO(s.MathBase.floor(this.finalMeadProduction, 1)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new a.LocalizedTextVO("meadproduction_total_desc"));
    this._scrollList.onShow();
    this._scrollList.updateWithNewData(this.getData());
  };
  CastleBreweryProductionInfoDialog.prototype.getData = function () {
    var e = [];
    var t = m.BreweryHelper.getCIBonus();
    var i = m.BreweryHelper.getCIBoost();
    var n = m.BreweryHelper.getBaronBonus();
    var o = m.BreweryHelper.getBaronBoost();
    var l = m.BreweryHelper.getBuildingBoost();
    var u = m.BreweryHelper.getBuildingBonus();
    var d = m.BreweryHelper.getAllianceLayoutBonus();
    e.push(["Icon_Mead_production", new c.CastleLocalizedNumberVO(this.baseMeadProduction + m.BreweryHelper.getCIBaseBonus()), "meadproduction_basic_desc"]);
    e.push(["Icon_LawAndOrder_neutral_Big", new a.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE, [(r.CastleModel.areaData.activeCommonInfo.getLawAndOrderFactor() * 100).toFixed(0)]), "bonusSource_publicOrder"]);
    e.push(["Icon_BoostWhip", new a.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE_ADD, [m.BreweryHelper.getOverseerBoost()]), "bonusSource_overseer"]);
    if (l > 0) {
      e.push(["Icon_BuildNoShadow", new a.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE_ADD, [l]), "bonusSource_buildings"]);
    }
    if (u > 0) {
      e.push(["Icon_BuildNoShadow", new a.LocalizedTextVO(s.GenericTextIds.VALUE_NOMINAL_ADD, [u]), "bonusSource_buildings"]);
    }
    if (t > 0 || i > 0) {
      if (t > 0) {
        e.push(["Icon_Constructor", new a.LocalizedTextVO(s.GenericTextIds.VALUE_NOMINAL_ADD, [t]), "bonusSource_ci"]);
      }
      if (i > 0) {
        e.push(["Icon_Constructor", new a.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE_ADD, [i]), "bonusSource_ci"]);
      }
    } else {
      e.push(["Icon_Constructor", new a.LocalizedTextVO(s.GenericTextIds.VALUE_NOMINAL_ADD, [0]), "bonusSource_ci"]);
    }
    e.push(["crest", new a.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE_ADD, [m.BreweryHelper.getCrestBoost()]), "bonusSource_crest"]);
    if (d > 0) {
      e.push(["allianceCrest", new a.LocalizedTextVO(s.GenericTextIds.VALUE_NOMINAL_ADD, [d]), "dialog_meadproduction_allianceCoA_desc"]);
    }
    if (n > 0 || o > 0) {
      if (n > 0) {
        e.push(["baron", new a.LocalizedTextVO(s.GenericTextIds.VALUE_NOMINAL_ADD, [n]), "bonusSource_castellan_increase"]);
      }
      if (o > 0) {
        e.push(["baron", new a.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE_ADD, [o]), "bonusSource_castellan_bonus"]);
      }
    } else {
      e.push(["baron", new a.LocalizedTextVO(s.GenericTextIds.VALUE_NOMINAL_ADD, [0]), "bonusSource_castellan_bonus"]);
    }
    e.push(["Icon_Research", new a.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE_ADD, [m.BreweryHelper.getResearchBoost()]), "bonusSource_research"]);
    return e;
  };
  Object.defineProperty(CastleBreweryProductionInfoDialog.prototype, "baseMeadProduction", {
    get: function () {
      return r.CastleModel.breweryData.breweryBuildingVO.meadProduction * this.dialogProp.factor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryProductionInfoDialog.prototype, "finalMeadProduction", {
    get: function () {
      return (this.baseMeadProduction + m.BreweryHelper.getCIBaseBonus()) * m.BreweryHelper.getTotalBoost() + m.BreweryHelper.getTotalBonus();
    },
    enumerable: true,
    configurable: true
  });
  CastleBreweryProductionInfoDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleBreweryProductionInfoDialog.prototype, "dialogProp", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBreweryProductionInfoDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    this._scrollList.onHide();
  };
  CastleBreweryProductionInfoDialog.NAME = "CastleMeadProductionInfo";
  return CastleBreweryProductionInfoDialog;
}(l.CastleExternalDialog);
exports.CastleBreweryProductionInfoDialog = f;
o.classImplementsInterfaces(f, "ICollectableRendererList");