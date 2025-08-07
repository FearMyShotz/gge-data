Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./7.js");
var h = require("./1196.js");
var g = require("./1058.js");
var C = require("./21.js");
var _ = require("./4.js");
var m = require("./804.js");
var f = require("./8.js");
var O = require("./11.js");
var E = function (e) {
  function CastleCollectTaxDialog(t = null) {
    var i = this;
    i.waitForBribeCollect = false;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t || CastleCollectTaxDialog.NAME) || this;
  }
  n.__extends(CastleCollectTaxDialog, e);
  CastleCollectTaxDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.txt_income.mouseEnabled = false;
    this.txtIncome ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_income, new d.TextVO(""));
    if (!this.txtCollectTime) {
      this.txtCollectTime = this.textFieldManager.registerTextField(this.dialogDisp.txt_collectTime, new u.LocalizedTextVO(a.GenericTextIds.VALUE_SIMPLE_COMP, [0]));
      this.dialogDisp.txt_collectTime.defaultCacheScale = 1;
    }
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_time.toolTipText = "resttime";
    this.dialogDisp.btn_collect.toolTipText = "dialog_collecttaxstatus_get";
    this.dialogDisp.progressBar.toolTipText = "dialog_collecttax_bribetime";
    this.dialogDisp.coinToolTipHitArea.toolTipText = "dialog_collecttaxstatus_collectedCash";
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_collect, this.dialogDisp.btn_bribe, this.dialogDisp.btn_help]);
  };
  CastleCollectTaxDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.onTaxDataUpdated();
    this.waitForBribeCollect = false;
  };
  CastleCollectTaxDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.unLockDialog();
    f.ButtonHelper.enableButton(this.dialogDisp.btn_bribe, this.isOutOfTutorial());
    _.CastleModel.boosterSaleData.handleMc(this.dialogDisp.btn_bribe.mc_discount, l.BoosterConst.TAX);
    this.dialogDisp.btn_bribe.mc_discount.visible = false;
    _.CastleModel.smartfoxClient.sendCommandVO(new g.C2SGetTaxInfoVO());
    _.CastleModel.timerData.addEventListener(C.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTaxDataUpdated));
    f.ButtonHelper.enableButton(this.dialogDisp.btn_collect, true);
  };
  CastleCollectTaxDialog.prototype.hideLoaded = function (t = null) {
    _.CastleModel.timerData.removeEventListener(C.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTaxDataUpdated));
    e.prototype.hideLoaded.call(this, t);
  };
  CastleCollectTaxDialog.prototype.onClick = function (t) {
    if (f.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_collect:
          this.onCollectTaxClick();
          break;
        case this.dialogDisp.btn_bribe:
          this.showBribe();
          break;
        case this.dialogDisp.btn_help:
          y.CastleDialogHandler.getInstance().showHelper("", c.Localize.text("help_tax_collect"));
      }
    }
  };
  CastleCollectTaxDialog.prototype.onCollectTaxClick = function () {
    if (this.taxInfoVO.currentIncome <= 0) {
      var e = new o.BasicStandardYesNoDialogProperties(c.Localize.text("dialog_collectedtaxes_canceled_title"), c.Localize.text("dialog_collectedtaxes_canceled_copy"), this.bindFunction(this.onCollectTaxConfirmed));
      O.CastleExternalDialog.dialogHandler.registerDefaultDialogs(b.CastleStandardYesNoDialog, e);
    } else {
      this.onCollectTaxConfirmed();
    }
  };
  CastleCollectTaxDialog.prototype.onCollectTaxConfirmed = function (e = null) {
    this.hide();
    this.collectTax();
  };
  CastleCollectTaxDialog.prototype.onTaxDataUpdated = function (e = null) {
    this.txtIncome.textContentVO.stringValue = this.taxInfoVO.taxAmountString;
    switch (this.taxInfoVO.taxState) {
      case m.TaxInfoVO.TAXSTATUS_COLLECTING:
        this.txtCollectTime.textContentVO.textId = a.GenericTextIds.VALUE_ASSIGN_COLON;
        this.txtCollectTime.textContentVO.textReplacements = [c.Localize.text("resttime"), s.TimeStringHelper.getTimeToString(this.taxInfoVO.remainingCollectionTimeInSeconds, s.TimeStringHelper.TWO_TIME_FORMAT, _.CastleModel.languageData.bindFunction(_.CastleModel.languageData.getTextById))];
        this.dialogDisp.progressBar.gotoAndStop(1);
        break;
      case m.TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT:
        this.txtCollectTime.textContentVO.textId = "collect_taxCollecting_finished";
        this.dialogDisp.progressBar.gotoAndStop(1);
        break;
      case m.TaxInfoVO.TAXSTATUS_NONE:
        this.hide();
    }
    this.dialogDisp.progressBar.scaleX = this.taxInfoVO.timeInPercent;
    _.CastleModel.boosterSaleData.handleMc(this.dialogDisp.btn_bribe.mc_discount, l.BoosterConst.TAX);
  };
  CastleCollectTaxDialog.prototype.checkWaitingAnimState = function (e) {
    switch (e) {
      case p.ClientConstSF.C2S_BRIBE_TAX_COLLECTOR:
        if (this.waitForBribeCollect) {
          this.collectTax();
        }
        this.unLockDialog();
    }
  };
  CastleCollectTaxDialog.prototype.collectTax = function () {
    this.waitForBribeCollect = false;
    _.CastleModel.smartfoxClient.sendCommandVO(new h.C2SCollectTaxVO());
  };
  CastleCollectTaxDialog.prototype.showBribe = function () {
    _.CastleModel.boostData.taxBribeVO.clickedBuyButton();
    this.waitForBribeCollect = this.taxInfoVO.isTaxReadyForCollection;
  };
  Object.defineProperty(CastleCollectTaxDialog.prototype, "taxInfoVO", {
    get: function () {
      return _.CastleModel.taxData.taxInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleCollectTaxDialog.__initialize_static_members = function () {
    CastleCollectTaxDialog.NAME = "CastleCollectTaxProgress";
  };
  return CastleCollectTaxDialog;
}(O.CastleExternalDialog);
exports.CastleCollectTaxDialog = E;
var y = require("./9.js");
var b = require("./151.js");
r.classImplementsInterfaces(E, "ICollectableRendererList");
E.__initialize_static_members();