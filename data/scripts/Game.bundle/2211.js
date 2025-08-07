Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./179.js");
var u = require("./32.js");
var d = require("./48.js");
var p = require("./155.js");
var h = require("./13.js");
var g = require("./85.js");
var C = require("./4.js");
var _ = require("./52.js");
var m = require("./9.js");
var f = require("./20.js");
var O = require("./95.js");
var E = require("./47.js");
var y = require("./59.js");
var b = require("./8.js");
var D = require("./11.js");
var I = require("./2212.js");
var T = require("./2213.js");
var v = require("./167.js");
var S = require("./206.js");
var A = require("./340.js");
var L = require("./247.js");
var P = require("./2227.js");
var M = function (e) {
  function GeneralsSkillTreeDialog() {
    return e.call(this, GeneralsSkillTreeDialog.NAME) || this;
  }
  n.__extends(GeneralsSkillTreeDialog, e);
  GeneralsSkillTreeDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    b.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_reset, this.dialogDisp.btn_buyTokens], f.ClickFeedbackButtonHover);
    b.ButtonHelper.initButtons([this.dialogDisp.btn_slider], A.ClickFeedBackHoverSliderButton, 1);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_skillTree_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_reset.txt_label, new l.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("reset")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_availableLabel, new r.LocalizedTextVO("dialog_generals_skillTree_pointsAvailable"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_spentLabel, new r.LocalizedTextVO("dialog_generals_skillTree_pointsSpend"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_locked.mc_alert.txt_text, new r.LocalizedTextVO("dialog_generals_skillTree_generalTravelling_popup"));
    this.dialogDisp.btn_buyTokens.toolTipText = "dialog_generals_skillTree_buy_resetToken_tooltip";
    this.dialogDisp.icon_resetToken.toolTipText = "currency_name_GeneralsSkillsResetToken";
    this.dialogDisp.mc_locked.mouseChildren = false;
    this._itxt_name = this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new l.TextVO(""));
    this._itxt_pointsAvailable = this.textFieldManager.registerTextField(this.dialogDisp.txt_available, new g.CastleLocalizedNumberVO(0));
    this._itxt_pointsSpent = this.textFieldManager.registerTextField(this.dialogDisp.txt_spent, new g.CastleLocalizedNumberVO(0));
    this._itxt_resetTokens = this.textFieldManager.registerTextField(this.dialogDisp.txt_resetTokens, new g.CastleLocalizedNumberVO(0));
    var i = new E.SimpleScrollVO().initByParent(this.dialogDisp).addMouseWheelElements([this.dialogDisp]);
    var n = new y.DynamicSizeScrollStrategyVertical(false, this.dialogDisp.mc_list.mask.height, true);
    this._scrollComponent = new O.SimpleScrollComponent(i, n);
    this._scrollY = this.dialogDisp.mc_list.y;
  };
  GeneralsSkillTreeDialog.prototype.showLoaded = function (t) {
    var i = this;
    if (t === undefined) {
      t = null;
    }
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.mc_locked.visible = false;
    var n = this.dialogProperties.generalVO.getSkillPointsSpent();
    this._itxt_name.textContentVO.stringValue = this.dialogProperties.generalVO.nameText;
    this._itxt_pointsAvailable.textContentVO.numberValue = this.dialogProperties.generalVO.getSkillPointsAvailable();
    this._itxt_pointsSpent.textContentVO.numberValue = n;
    this._itxt_resetTokens.textContentVO.numberValue = C.CastleModel.currencyData.getAmountById(_.ClientConstCurrency.ID_GENERAL_SKILL_RESET_TOKEN);
    this.updateResetButton();
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_generalIcon);
    this._generalIcon = new L.GeneralSelectionItem(this.dialogProperties.generalVO, this.dialogDisp.mc_generalIcon, false, false, false);
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list);
    this._treeComponent = new P.GeneralsSkillTreeComponent(this.dialogProperties.generalVO.generalID, this.dialogProperties.attackHighlight);
    this.dialogDisp.mc_list.addChild(this._treeComponent.disp);
    this._treeComponent.tierComponents.forEach(function (e) {
      return e.skillItems.forEach(function (e) {
        return e.clickSignal.add(i.bindFunction(i.onClickSkill));
      });
    });
    this._treeComponent.show();
    var a = this._treeComponent.height;
    var s = Math.max(0, a - this.dialogDisp.mc_list.mask.height);
    this._scrollComponent.init(0, s, 110, 110);
    this._scrollComponent.scrollToValue(0);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this.onScroll();
    C.CastleModel.generalsData.addEventListener(c.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    this.controller.addEventListener(u.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
  };
  GeneralsSkillTreeDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this._scrollComponent) {
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    }
    if (this._treeComponent) {
      this._treeComponent.hide();
    }
    C.CastleModel.generalsData.removeEventListener(c.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    this.controller.removeEventListener(u.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
  };
  GeneralsSkillTreeDialog.prototype.updateResetButton = function () {
    var e = this.dialogProperties.generalVO.getSkillPointsSpent();
    b.ButtonHelper.enableButton(this.dialogDisp.btn_reset, e > 0);
    this.dialogDisp.btn_reset.toolTipText = e == 0 ? "dialog_generals_skillTree_reset_noSkillpointsSpent_tooltip" : null;
  };
  GeneralsSkillTreeDialog.prototype.showResetDialog = function () {
    var e = new d.CollectableList();
    e.addItem(new p.CollectableItemGenericCurrencyVO(_.ClientConstCurrency.ID_GENERAL_SKILL_RESET_TOKEN, 1));
    var t = new T.ModernSimpleCostDialogProperties("dialog_generals_skillTree_resetDialog_header", s.Localize.text("dialog_generals_skillTree_resetDialog_desc", [this.dialogProperties.generalVO.nameTextShort]), e, this.bindFunction(this.onConfirmReset));
    m.CastleDialogHandler.getInstance().registerDefaultDialogs(I.ModernSimpleCostDialog, t);
  };
  GeneralsSkillTreeDialog.prototype.showBuyResetTokenDialog = function () {
    var e = new v.CastleGenericBuyDialogProperties();
    e.buyType = a.PackageConst.BUY_TYPE_GENERAL_SKILLS_RESET_TOKEN;
    e.eventPackageVO = C.CastleModel.eventPackageData.getEventPackageByID(GeneralsSkillTreeDialog.PACKAGE_ID_RESET_TOKEN);
    m.CastleDialogHandler.getInstance().registerDefaultDialogs(S.ModernPackageShopBuyDialog, e);
  };
  GeneralsSkillTreeDialog.prototype.onGeneralsUpdated = function (e) {
    var t = this.dialogProperties.generalVO.getSkillPointsSpent();
    this._itxt_pointsAvailable.textContentVO.numberValue = this.dialogProperties.generalVO.getSkillPointsAvailable();
    this._itxt_pointsSpent.textContentVO.numberValue = t;
    if (this._treeComponent) {
      this._treeComponent.updateTree();
    }
    this.updateResetButton();
  };
  GeneralsSkillTreeDialog.prototype.onCurrenciesUpdated = function (e) {
    this._itxt_resetTokens.textContentVO.numberValue = C.CastleModel.currencyData.getAmountById(_.ClientConstCurrency.ID_GENERAL_SKILL_RESET_TOKEN);
  };
  GeneralsSkillTreeDialog.prototype.onScroll = function () {
    this.dialogDisp.mc_list.y = this._scrollY - this._scrollComponent.currentValue;
  };
  GeneralsSkillTreeDialog.prototype.onConfirmReset = function () {
    this.dialogProperties.generalVO.resetSkills();
  };
  GeneralsSkillTreeDialog.prototype.onClickSkill = function (e) {
    var t = this.dialogProperties.generalVO.assignedLord;
    if (t && !t.isAvailableForEquip) {
      this.dialogDisp.mc_locked.visible = true;
    } else {
      this.dialogProperties.generalVO.unlockSkill(e);
    }
  };
  GeneralsSkillTreeDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (b.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          D.CastleExternalDialog.dialogHandler.showHelper("", s.Localize.text("help_generals_skillTree"));
          break;
        case this.dialogDisp.btn_buyTokens:
          this.showBuyResetTokenDialog();
          break;
        case this.dialogDisp.btn_reset:
          this.showResetDialog();
          break;
        case this.dialogDisp.mc_locked:
          this.dialogDisp.mc_locked.visible = false;
      }
    }
  };
  Object.defineProperty(GeneralsSkillTreeDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsSkillTreeDialog.NAME = "GeneralSkillTreeDialogExt1";
  GeneralsSkillTreeDialog.PACKAGE_ID_RESET_TOKEN = 10518;
  return GeneralsSkillTreeDialog;
}(D.CastleExternalDialog);
exports.GeneralsSkillTreeDialog = M;