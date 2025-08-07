Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./4181.js");
var p = require("./31.js");
var h = require("./19.js");
var g = require("./13.js");
var C = require("./4.js");
var _ = require("./8.js");
var m = require("./11.js");
var f = createjs.Point;
var O = function (e) {
  function CastleRerollAlienDialog() {
    var t = this;
    t.MAX_CURRENCY = 6;
    t.softCurrencyIndex = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleRerollAlienDialog.NAME) || this;
  }
  n.__extends(CastleRerollAlienDialog, e);
  CastleRerollAlienDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    _.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_info, this.dialogDisp.btn_arrow_left, this.dialogDisp.btn_arrow_right, this.dialogDisp.btn_buy_soft, this.dialogDisp.btn_buy_hard], v.ClickFeedbackButton, 1);
  };
  CastleRerollAlienDialog.prototype.onClick = function (t) {
    if (_.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          b.CastleDialogHandler.getInstance().showHelper("", s.Localize.text("help_dethrone"));
          break;
        case this.dialogDisp.btn_arrow_left:
          this.currPage(-1);
          break;
        case this.dialogDisp.btn_arrow_right:
          this.currPage(1);
          break;
        case this.dialogDisp.btn_buy_soft:
          this.requestReroll(false);
          break;
        case this.dialogDisp.btn_buy_hard:
          this.requestReroll(true);
          break;
        case this.dialogDisp.btn_info:
          b.CastleDialogHandler.getInstance().registerDialogs(I.CastleRerollAlienChancesDialog);
      }
    }
  };
  CastleRerollAlienDialog.prototype.requestReroll = function (e) {
    C.CastleModel.alienRerollData.requestRerollIsHard = e;
    C.CastleModel.alienRerollData.requestWMO = this.dialogProperties.worldMapObjectVO;
    if (e && C.CastleModel.alienRerollData.showWarningPopup && this.dialogProperties.worldMapObjectVO.alreadyRerolled) {
      b.CastleDialogHandler.getInstance().registerDialogs(T.CastleRerollAlienWarningDialog, new o.BasicStandardYesNoDialogProperties("", "", this.bindFunction(this.onSendReroll)));
    } else {
      this.onSendReroll(e);
    }
  };
  CastleRerollAlienDialog.prototype.onSendReroll = function (e) {
    C.CastleModel.smartfoxClient.sendCommandVO(new d.C2SReplaceAlienCampVO(e ? "C2" : this.currencyKeys[this.softCurrencyIndex], this.dialogProperties.worldMapObjectVO.absAreaPosX, this.dialogProperties.worldMapObjectVO.absAreaPosY));
    this.hide();
  };
  CastleRerollAlienDialog.prototype.currPage = function (e) {
    this.softCurrencyIndex += e;
    if (this.softCurrencyIndex < 0) {
      this.softCurrencyIndex = this.currencyKeys.length - 1;
    }
    if (this.softCurrencyIndex >= this.currencyKeys.length) {
      this.softCurrencyIndex = 0;
    }
    this.updateCosts();
    this.updateBuyButtons(false);
  };
  CastleRerollAlienDialog.prototype.updateCosts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_hard, new r.LocalizedNumberVO(C.CastleModel.alienRerollData.getCostHard()));
    D.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new p.CollectableRenderClips(this.dialogDisp.mc_soft).addIconMc(this.dialogDisp.mc_soft), this.getSoftCollectableVOFromIndex(this.softCurrencyIndex), this.iconRenderOptions);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_soft, new r.LocalizedNumberVO(C.CastleModel.alienRerollData.getCostSoftByKey(this.currencyKeys[this.softCurrencyIndex])));
  };
  CastleRerollAlienDialog.prototype.updateMinMaxInfo = function () {
    var e;
    var t;
    if (this.dialogProperties.eventVO.isDifficultyScalingActivated) {
      e = this.dialogProperties.worldMapObjectVO.difficultyCamp.normalDiffDefStrengthBoostMinDefense;
      t = this.dialogProperties.worldMapObjectVO.difficultyCamp.normalDiffDefStrengthBoostMaxDefense;
      this.textFieldManager.registerTextField(this.dialogDisp.txt_soft_copy, new l.LocalizedTextVO("percentage_range_neutral_desc", [e, t]));
    } else {
      e = u.int(C.CastleModel.alienRerollData.softChancesReroll[0].amountUnits);
      t = u.int(C.CastleModel.alienRerollData.softChancesReroll[C.CastleModel.alienRerollData.softChancesReroll.length - 1].amountUnits);
      this.textFieldManager.registerTextField(this.dialogDisp.txt_soft_copy, new l.LocalizedTextVO("value_addRange", [e, t]));
    }
    if (this.dialogProperties.eventVO.isDifficultyScalingActivated) {
      e = this.dialogProperties.worldMapObjectVO.difficultyCamp.premiumDiffDefStrengthBoostMinDefense;
      t = this.dialogProperties.worldMapObjectVO.difficultyCamp.premiumDiffDefStrengthBoostMaxDefense;
      this.textFieldManager.registerTextField(this.dialogDisp.txt_hard_copy, new l.LocalizedTextVO("percentage_range_neutral_desc", [e, t]));
    } else {
      e = u.int(C.CastleModel.alienRerollData.hardChancesReroll[0].amountUnits);
      t = u.int(C.CastleModel.alienRerollData.hardChancesReroll[C.CastleModel.alienRerollData.hardChancesReroll.length - 1].amountUnits);
      this.textFieldManager.registerTextField(this.dialogDisp.txt_hard_copy, new l.LocalizedTextVO("value_addRange", [e, t]));
    }
  };
  CastleRerollAlienDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateCurrencyInventory();
    this.updateCosts();
    this.updateMinMaxInfo();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_dethrone_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("dialog_dethrone_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_soft_title, new c.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_dethrone_option_exile")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_hard_title, new c.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_dethrone_option_fortify")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_buy_soft.txt_value, new c.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("buy")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_buy_hard.txt_value, new c.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("buy")));
    this.dialogDisp.btn_info.toolTipText = "dialog_dethrone_chances_tt";
    this.dialogDisp.btn_info.visible = !this.dialogProperties.eventVO.isDifficultyScalingActivated;
    this.dialogDisp.mc_ruby.toolTipText = "gold";
    this.dialogDisp.icon_diff_soldiercount.visible = this.dialogProperties.eventVO.isDifficultyScalingActivated;
    this.dialogDisp.icon_diff_soldiercount2.visible = this.dialogProperties.eventVO.isDifficultyScalingActivated;
    this.dialogDisp.icon_soldiercount.visible = !this.dialogProperties.eventVO.isDifficultyScalingActivated;
    this.dialogDisp.icon_soldiercount2.visible = !this.dialogProperties.eventVO.isDifficultyScalingActivated;
    this.updateBuyButtons(true);
  };
  CastleRerollAlienDialog.prototype.updateBuyButtons = function (e) {
    if (e) {
      _.ButtonHelper.delayEnableButton(this.dialogDisp.btn_buy_soft, this.enoughSoftCurrency, 1);
      _.ButtonHelper.delayEnableButton(this.dialogDisp.btn_buy_hard, this.enoughHardCurrency, 1);
    } else {
      _.ButtonHelper.enableButton(this.dialogDisp.btn_buy_soft, this.enoughSoftCurrency);
      _.ButtonHelper.enableButton(this.dialogDisp.btn_buy_hard, this.enoughHardCurrency);
    }
    this.dialogDisp.btn_buy_soft.toolTipText = this.enoughSoftCurrency ? null : new l.LocalizedTextVO("buy_insufficientCurrency", [this.getSoftCollectableVOFromIndex(this.softCurrencyIndex).getNameTextId()]);
    if (this.enoughHardCurrency) {
      this.dialogDisp.btn_buy_hard.toolTipText = null;
    } else {
      this.dialogDisp.btn_buy_hard.toolTipText = new l.LocalizedTextVO("buy_insufficientCurrency", [C.CastleModel.currencyData.c2.getNameTextId()]);
    }
  };
  Object.defineProperty(CastleRerollAlienDialog.prototype, "enoughSoftCurrency", {
    get: function () {
      if (this.currencyKeys[this.softCurrencyIndex] == "C1") {
        return C.CastleModel.currencyData.c1Amount >= C.CastleModel.alienRerollData.getCostSoftByKey(this.currencyKeys[this.softCurrencyIndex]);
      } else {
        return C.CastleModel.currencyData.getAmountByKey(this.currencyKeys[this.softCurrencyIndex]) >= C.CastleModel.alienRerollData.getCostSoftByKey(this.currencyKeys[this.softCurrencyIndex]);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRerollAlienDialog.prototype, "enoughHardCurrency", {
    get: function () {
      return C.CastleModel.currencyData.c2Amount >= C.CastleModel.alienRerollData.getCostHard();
    },
    enumerable: true,
    configurable: true
  });
  CastleRerollAlienDialog.prototype.updateCurrencyInventory = function () {
    this.destroyCollectableRenderList();
    for (var e = 0; e < this.MAX_CURRENCY; e++) {
      if (e < this.currencyKeys.length) {
        this.dialogDisp["i" + e].visible = true;
        var t = 0;
        t = this.currencyKeys[e] == "C1" ? u.int(C.CastleModel.currencyData.c1Amount) : u.int(C.CastleModel.currencyData.getAmountByKey(this.currencyKeys[e]));
        this.textFieldManager.registerTextField(this.dialogDisp["i" + e].txt_value, new r.LocalizedNumberVO(t));
        D.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new p.CollectableRenderClips(this.dialogDisp["i" + e].mc_icon).addIconMc(this.dialogDisp["i" + e].mc_icon), this.getSoftCollectableVOFromIndex(e), this.iconRenderOptions);
      } else {
        this.dialogDisp["i" + e].visible = false;
      }
    }
  };
  Object.defineProperty(CastleRerollAlienDialog.prototype, "iconRenderOptions", {
    get: function () {
      if (!this._renderOptions) {
        this._renderOptions = new h.CollectableRenderOptions(h.CollectableRenderOptions.SET_BASIC, new f(30, 30));
        this._renderOptions.tooltip.useAmount = false;
      }
      return this._renderOptions;
    },
    enumerable: true,
    configurable: true
  });
  CastleRerollAlienDialog.prototype.getSoftCollectableVOFromIndex = function (e) {
    if (this.currencyKeys[e] == "C1") {
      return y.CollectableHelper.createVO(E.CollectableEnum.C1);
    } else {
      return y.CollectableHelper.createVO(E.CollectableEnum.GENERIC_CURRENCY, 0, C.CastleModel.currencyData.getXmlCurrencyByKey(this.currencyKeys[e]).id);
    }
  };
  Object.defineProperty(CastleRerollAlienDialog.prototype, "currencyKeys", {
    get: function () {
      return this.dialogProperties.eventVO.rerollCurrencyKeys;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRerollAlienDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRerollAlienDialog.NAME = "CastleRerollAlien2";
  return CastleRerollAlienDialog;
}(m.CastleExternalDialog);
exports.CastleRerollAlienDialog = O;
var E = require("./12.js");
var y = require("./45.js");
var b = require("./9.js");
var D = require("./25.js");
var I = require("./4182.js");
var T = require("./4185.js");
var v = require("./36.js");
a.classImplementsInterfaces(O, "ICollectableRendererList");