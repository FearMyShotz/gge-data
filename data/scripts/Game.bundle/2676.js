Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./12.js");
var c = require("./74.js");
var u = require("./20.js");
var d = require("./42.js");
var p = require("./8.js");
var h = require("./34.js");
var g = require("./9.js");
var C = require("./4.js");
var _ = require("./2.js");
var m = require("./448.js");
var f = require("./52.js");
var O = require("./528.js");
var E = require("./282.js");
var y = require("./280.js");
var b = require("./59.js");
var D = require("./1.js");
var I = require("./2677.js");
var T = require("./2679.js");
var v = require("./1453.js");
var S = require("./281.js");
var A = require("./163.js");
var L = require("./13.js");
var P = function (e) {
  function CastleLegendSkillSceatSublayer(t) {
    var i = e.call(this, t) || this;
    p.ButtonHelper.initButtons([i.subLayerDisp.btn_shop], u.ClickFeedbackButtonHover, 1);
    i._itxt_title = i.textFieldManager.registerTextField(i.subLayerDisp.txt_title, new s.LocalizedTextVO(""));
    i._itxt_title.verticalAlign = d.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    i._itxt_pointsLeft = i.textFieldManager.registerTextField(i.subLayerDisp.mc_points.txt_value, new s.LocalizedTextVO("numbersXY", [0, 0]));
    i._itxt_pointsLeft2 = i.textFieldManager.registerTextField(i.subLayerDisp.mc_points2.txt_value, new s.LocalizedTextVO("numbersXY", [0, 0]));
    i.subLayerDisp.mc_points.mouseChildren = false;
    i.subLayerDisp.mc_points2.mouseChildren = false;
    var n = new y.AccordionComponentProperties();
    n.scrollStepPixels = 124;
    n.scrollStrategy = b.DynamicSizeScrollStrategyVertical;
    n.disableButtons = true;
    n.onlyOneActiveItem = false;
    i._accordionComponent = new E.DynamicSliderAccordionComponent(i.subLayerDisp, n, null, false);
    i._bottomMenu = new I.CastleLegendSkillSceatBottomMenu(i.subLayerDisp.mc_bottomMenu);
    i.subLayerDisp.mc_shop_tooltip.x = i.subLayerDisp.btn_shop.x;
    i.subLayerDisp.mc_shop_tooltip.visible = false;
    _.MovieClipHelper.clearMovieClip(i.subLayerDisp.mc_ItemContainer);
    return i;
  }
  n.__extends(CastleLegendSkillSceatSublayer, e);
  CastleLegendSkillSceatSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    p.ButtonHelper.enableButton(this.subLayerDisp.btn_shop, this.availableSceatShop);
    this.createSkillTrees();
    this.updateText();
    this._accordionComponent.show();
    this._accordionComponent.scrollToTop();
    this._bottomMenu.onShow();
    this._bottomMenu.update(this._params.sublayerID);
    this.controller.addEventListener(O.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onLegendSkillsUpdated));
  };
  CastleLegendSkillSceatSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._accordionComponent.hide();
    this._bottomMenu.onHide();
    this.controller.removeEventListener(O.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onLegendSkillsUpdated));
  };
  CastleLegendSkillSceatSublayer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.subLayerDisp.btn_shop:
          this.shopEvent.openMerchantDialog(true, this.shopEvent.getEventPackagesByCurrencyType(new c.CollectableTypeVO(l.CollectableEnum.GENERIC_CURRENCY, f.ClientConstCurrency.ID_SCEAT_TOKEN))[0].packageID);
      }
    }
  };
  CastleLegendSkillSceatSublayer.prototype.createSkillTrees = function () {
    var e = this.legendSkillData.sceatTreeTabMap.get(this._params.sublayerID);
    this._listItems = [];
    for (var t = 0, i = e; t < i.length; t++) {
      var n = i[t];
      var o = new (D.getDefinitionByName("LegendSkillTreeItem"))();
      var a = new v.CastleLegendSkillTreeComponent(n);
      _.MovieClipHelper.clearMovieClip(o.contentMC);
      o.contentMC.addChild(a.disp);
      var s = a.treeNode.isUnlocked() && !this.legendSkillData.isTreeMaxedOut(n);
      var r = new S.GenericCollapsibleItemProperties(new A.LayoutMargin(0, 4, 0, 0), true, 0.2, 0.2, s);
      var l = new T.CastleLegendSkillSceatListItem(o, a, r);
      this._listItems.push(l);
      this._accordionComponent.addItem(l);
    }
    this._listItems[this._listItems.length - 1].markAsNew = true;
    this._listItems[this._listItems.length - 1].update();
  };
  CastleLegendSkillSceatSublayer.prototype.jumpToSkillTier = function (e) {
    var t = this.legendSkillData.getSceatSkillByID(e);
    var i = this._listItems.find(function (e) {
      return e.treeComponent.treeNode.id == t.skillTreeID;
    });
    if (i) {
      var n = i.treeComponent.tierComponents.find(function (e) {
        return e.tierNode.id == t.tier;
      }).disp.y + i.disp.y;
      this._accordionComponent.scrollToValue(n);
    }
  };
  CastleLegendSkillSceatSublayer.prototype.updateText = function () {
    this._itxt_title.textContentVO.textId = this._params.sublayerID == m.CastleLegendSkillDialog.SUBLAYER_BUILDINGS ? L.TextHelper.toUpperCaseLocaSafeTextId("dialog_legendTemple_title_building") : L.TextHelper.toUpperCaseLocaSafeTextId("dialog_legendTemple_title_units");
    var e = C.CastleModel.currencyData.getCurrencyById(f.ClientConstCurrency.ID_SCEAT_TOKEN);
    var t = C.CastleModel.currencyData.getCurrencyById(f.ClientConstCurrency.ID_IMPERIAL_DUCAT);
    var i = C.CastleModel.currencyData.getXmlCurrencyById(f.ClientConstCurrency.ID_SCEAT_TOKEN);
    var n = C.CastleModel.currencyData.getXmlCurrencyById(f.ClientConstCurrency.ID_IMPERIAL_DUCAT);
    var o = e ? e.amount : 0;
    var a = t ? t.amount : 0;
    this._itxt_pointsLeft.textContentVO.textReplacements = [o, i.softCap];
    this._itxt_pointsLeft.color = o < i.softCap ? r.ClientConstColor.MODERN_DEFAULT : r.ClientConstColor.GENERIC_RED;
    this._itxt_pointsLeft2.textContentVO.textReplacements = [a, n.softCap];
    this._itxt_pointsLeft2.color = a < n.softCap ? r.ClientConstColor.MODERN_DEFAULT : r.ClientConstColor.GENERIC_RED;
    if (o < i.softCap) {
      this.subLayerDisp.mc_points.toolTipText = "currency_name_sceatToken";
    } else {
      this.subLayerDisp.mc_points.toolTipText = "dialog_legendTemple_sceats_sceatStockLimit_tooltip";
    }
    if (a < n.softCap) {
      this.subLayerDisp.mc_points2.toolTipText = "currency_name_ImperialDucat";
    } else {
      this.subLayerDisp.mc_points2.toolTipText = {
        t: "dialog_legendTemple_imperialDucat_ImperialDucatLimit_tooltip",
        p: [n.softCap]
      };
    }
    if (p.ButtonHelper.isButtonEnabled(this.subLayerDisp.btn_shop)) {
      this.subLayerDisp.btn_shop.toolTipText = "dialog_longPointsEvent_eventcamp_desc_shopbutton";
    } else {
      this.subLayerDisp.btn_shop.toolTipText = "dialog_legendTemple_sceats_sceatStore_unavailable_tooltip";
    }
  };
  CastleLegendSkillSceatSublayer.prototype.updateTrees = function () {
    for (var e = 0; e < this._listItems.length; e++) {
      this._listItems[e].update();
    }
    this._bottomMenu.update(this._params.sublayerID);
  };
  CastleLegendSkillSceatSublayer.prototype.onLegendSkillsUpdated = function (e) {
    this.updateText();
    this.updateTrees();
  };
  Object.defineProperty(CastleLegendSkillSceatSublayer.prototype, "availableSceatShop", {
    get: function () {
      if (!this.shopEvent) {
        return false;
      }
      var e = this.shopEvent.getEventPackagesByCurrencyType(new c.CollectableTypeVO(l.CollectableEnum.GENERIC_CURRENCY, f.ClientConstCurrency.ID_SCEAT_TOKEN)).length > 0;
      var t = this.shopEvent.getEventPackagesByCurrencyType(new c.CollectableTypeVO(l.CollectableEnum.GENERIC_CURRENCY, f.ClientConstCurrency.ID_IMPERIAL_DUCAT)).length > 0;
      return e || t;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillSceatSublayer.prototype, "shopEvent", {
    get: function () {
      return C.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR);
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillSceatSublayer.prototype.showHelp = function () {
    g.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("dialog_legendTemple_sceat_help"));
  };
  Object.defineProperty(CastleLegendSkillSceatSublayer.prototype, "legendSkillData", {
    get: function () {
      return C.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLegendSkillSceatSublayer;
}(h.CastleDialogSubLayer);
exports.CastleLegendSkillSceatSublayer = P;