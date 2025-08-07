Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./1.js");
var p = require("./1.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./3.js");
var _ = require("./3.js");
var m = require("./3.js");
var f = require("./6.js");
var O = require("./51.js");
var E = require("./7.js");
var y = require("./1059.js");
var b = require("./37.js");
var D = require("./199.js");
var I = require("./221.js");
var T = require("./4.js");
var v = require("./269.js");
var S = require("./24.js");
var A = require("./8.js");
var L = require("./236.js");
var P = require("./11.js");
var M = require("./1647.js");
var R = require("./3384.js");
var V = createjs.MouseEvent;
var x = function (e) {
  function CastleCollectTaxStartDialog() {
    var t = this;
    t.taxVOs = [];
    t.isAllowedSecondUpdate = false;
    t.dragScrollButton = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleCollectTaxStartDialog.NAME) || this;
  }
  n.__extends(CastleCollectTaxStartDialog, e);
  CastleCollectTaxStartDialog.prototype.initLoaded = function (t = null) {
    this.dialogDisp.btn_bribe.toolTipText = "dialog_collecttax_btn_bribe";
    this.dialogDisp.infoBribeBonus.toolTipText = "dialog_collecttax_bribebonus";
    this.dialogDisp.infoBribeBonus.mouseChildren = false;
    this.dialogDisp.infoPopulation.toolTipText = "population";
    this.dialogDisp.infoPopulation.mouseChildren = false;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    for (var i = 0; i < CastleCollectTaxStartDialog.TAX_ITEMS_COUNT; i++) {
      this.taxVOs.push(new R.CollectTaxElementVO(i));
    }
    if (!this.scrollList) {
      this.scrollList = new r.ItemScrollList(this.dialogDisp.mc_taxList);
      this.scrollList.scrollItemClass = F.CastleCollectTaxElement;
      this.scrollList.hideButtons = false;
      this.scrollList.clear();
      if (this.taxVOs != null) {
        for (var n = 0, o = this.taxVOs; n < o.length; n++) {
          var a = o[n];
          if (a !== undefined) {
            this.scrollList.pushContent(a);
          }
        }
      }
      this.scrollList.initList();
    }
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_bribe, this.dialogDisp.btn_help, this.dialogDisp.mc_taxList.btn_slider, this.dialogDisp.mc_taxList.btn_up, this.dialogDisp.mc_taxList.btn_down]);
    e.prototype.initLoaded.call(this, t);
  };
  CastleCollectTaxStartDialog.prototype.showLoaded = function (t = null) {
    this.itxt_population ||= this.textFieldManager.registerTextField(this.dialogDisp.infoPopulation.txt_value, new m.TextVO(""));
    this.itxt_bribeBonus ||= this.textFieldManager.registerTextField(this.dialogDisp.infoBribeBonus.txt_value, new _.LocalizedTextVO(""));
    this.itxt_description ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new _.LocalizedTextVO("collect_tax_description"));
    this.isAllowedSecondUpdate = false;
    T.CastleModel.smartfoxClient.sendCommandVO(new y.C2SGetTaxInfoVO());
    this.lockDialog();
    l.MovieClipHelper.clearMovieClip(this.dialogDisp.charHolder);
    var i = new S.CastleGoodgameExternalClip("CharTaxes", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CharTaxes"), null, 0, false, p.getDefinitionByName("QuestGiverBig_" + O.ClientConstCharacter.CHAR_ID_UNKNOWN));
    i.clipSizeComponent = new a.ClipSizeComponent(202, 229);
    this.dialogDisp.charHolder.addChild(i);
    this.updateScrollPart();
    this.handleButtons();
    this.updateBoosterDisplay();
    e.prototype.showLoaded.call(this, t);
  };
  CastleCollectTaxStartDialog.prototype.updateScrollPart = function () {
    this.scrollList.initList();
    this.updateSliderPos();
  };
  CastleCollectTaxStartDialog.prototype.onBoosterDataRefreshed = function (e) {
    this.updateScrollPart();
    this.updateBoosterDisplay();
    this.fillItems();
  };
  CastleCollectTaxStartDialog.prototype.updateBoosterDisplay = function () {
    if (T.CastleModel.boostData.taxBribeVO.isActive) {
      this.dialogDisp.infoBribeBonus.toolTipText = u.TimeStringHelper.getTimeToString(T.CastleModel.boostData.taxBribeVO.remainingTimeInSeconds, u.TimeStringHelper.TWO_TIME_FORMAT, C.Localize.text);
      this.itxt_bribeBonus.textContentVO.textId = s.GenericTextIds.VALUE_PERCENTAGE;
      this.itxt_bribeBonus.textContentVO.textReplacements = [Math.round(h.BoosterConst.TAX_BRIBE_BOOST * 100)];
    } else {
      this.dialogDisp.infoBribeBonus.toolTipText = "dialog_collecttax_bribebonus";
      this.dialogDisp.btn_bribe.enabled = this.isOutOfTutorial();
      this.itxt_bribeBonus.textContentVO.textId = "-";
    }
    this.dialogDisp.btn_bribe.visible = this.isOutOfTutorial();
    T.CastleModel.boosterSaleData.handleMc(this.dialogDisp.btn_bribe.mc_discount, h.BoosterConst.TAX);
    this.dialogDisp.btn_bribe.mc_discount.visible = false;
  };
  CastleCollectTaxStartDialog.prototype.handleButtons = function () {
    this.scrollList.unlockList();
    A.ButtonHelper.enableButton(this.dialogDisp.btn_bribe, true);
    A.ButtonHelper.enableButton(this.dialogDisp.btn_close, true);
    A.ButtonHelper.enableButton(this.dialogDisp.mc_taxList.btn_slider, true);
    A.ButtonHelper.enableButton(this.dialogDisp.btn_help, true);
  };
  CastleCollectTaxStartDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(b.CastleServerMessageArrivedEvent.TXI_ARRIVED, this.bindFunction(this.onTXIArrived));
    this.scrollList.addEventListener(c.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onTaxItemsScrolled));
    this.dialogDisp.addEventListener(V.PRESS_MOVE, this.bindFunction(this.onSliding));
    T.CastleModel.boostData.addEventListener(I.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataRefreshed));
    T.CastleModel.boosterSaleData.addEventListener(v.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataRefreshed));
    for (var t = 0; t < this.scrollList.veList.length; t++) {
      this.scrollList.veList[t].addEventListener(M.CastleCollectTaxElementEvent.START_TAX_COLLECTION, this.bindFunction(this._onStartTaxCollection));
    }
  };
  CastleCollectTaxStartDialog.prototype._onStartTaxCollection = function (e) {
    this.setTaxElements(false);
  };
  CastleCollectTaxStartDialog.prototype.setTaxElements = function (e) {
    for (var t = 0; t < this.scrollList.veList.length; t++) {
      this.scrollList.veList[t].isActive = e;
    }
  };
  CastleCollectTaxStartDialog.prototype.removeEventListenerOnHide = function () {
    this.controller.removeEventListener(b.CastleServerMessageArrivedEvent.TXI_ARRIVED, this.bindFunction(this.onTXIArrived));
    this.scrollList.removeEventListener(c.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onTaxItemsScrolled));
    this.dialogDisp.mc_taxList.removeEventListener(V.PRESS_MOVE, this.bindFunction(this.onSliding));
    T.CastleModel.boostData.removeEventListener(I.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataRefreshed));
    T.CastleModel.boosterSaleData.removeEventListener(v.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataRefreshed));
    for (var t = 0; t < this.scrollList.veList.length; t++) {
      this.scrollList.veList[t].removeEventListener(M.CastleCollectTaxElementEvent.START_TAX_COLLECTION, this.bindFunction(this._onStartTaxCollection));
    }
    e.prototype.removeEventListenerOnHide.call(this);
  };
  CastleCollectTaxStartDialog.prototype.fillItems = function () {
    this.setTaxElements(true);
    this.updateSliderPos();
    this.controller.dispatchEvent(new D.CastleDialogEvent(D.CastleDialogEvent.TAX_ITEMS_FILLED));
  };
  CastleCollectTaxStartDialog.prototype.onTaxItemsScrolled = function (e) {
    this.updateSliderPos();
  };
  CastleCollectTaxStartDialog.prototype.updateSliderPos = function () {
    var e = f.int(CastleCollectTaxStartDialog.TAX_ITEMS_COUNT - this.scrollList.itemsVisibleAtOnce);
    var t = f.int(this.dialogDisp.mc_taxList.mc_sliderLine.height / e);
    var i = this.dialogDisp.mc_taxList.btn_slider.height / 2;
    this.dialogDisp.mc_taxList.btn_slider.y = t * this.scrollList.currentStartIndex + this.dialogDisp.mc_taxList.mc_sliderLine.y - i;
  };
  CastleCollectTaxStartDialog.prototype.onSliding = function (e) {
    if (this.dragScrollButton) {
      var t = this.dialogDisp.mc_taxList;
      var i = (Math.min(Math.max(t.mouseY, t.mc_sliderLine.y), t.mc_sliderLine.y + t.mc_sliderLine.height) - t.mc_sliderLine.y) / t.mc_sliderLine.height;
      i = Math.min(Math.max(i, 0), 1);
      var n = f.int(CastleCollectTaxStartDialog.TAX_ITEMS_COUNT - this.scrollList.itemsVisibleAtOnce);
      var o = f.int(t.mc_sliderLine.height / n);
      var a = Math.round(t.mc_sliderLine.height * i / o);
      this.scrollList.initList(a);
      this.updateSliderPos();
    }
  };
  CastleCollectTaxStartDialog.prototype.onTXIArrived = function (e) {
    this.isAllowedSecondUpdate = true;
    this.onTaxDataUpdated();
  };
  CastleCollectTaxStartDialog.prototype.onTaxDataUpdated = function (e = null) {
    if (this.isAllowedSecondUpdate && this.taxInfoVO) {
      if (this.taxInfoVO.population <= 0) {
        this.hide();
        P.CastleExternalDialog.dialogHandler.registerDefaultDialogs(B.CastleCharacterYesNoOKDialog, new L.CastleCharacterYesNoOKDialogProperties(C.Localize.text("generic_alert_warning"), C.Localize.text("alert_nofolk_copy"), 2, null, null, false));
      }
      this.unLockDialog();
      this.itxt_population.textContentVO.stringValue = String(this.taxInfoVO.population);
      this.itxt_bribeBonus = this.textFieldManager.registerTextField(this.dialogDisp.infoBribeBonus.txt_value, new _.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE, [Math.round(h.BoosterConst.TAX_BRIBE_BOOST * 100)]));
      this.updateBoosterDisplay();
      this.fillItems();
    }
  };
  CastleCollectTaxStartDialog.prototype.onMouseDown = function (t) {
    e.prototype.onMouseDown.call(this, t);
    if (A.ButtonHelper.isButtonEnabled(t.target) && t.target == this.dialogDisp.mc_taxList.btn_slider) {
      this.dragScrollButton = true;
    }
  };
  CastleCollectTaxStartDialog.prototype.onMouseUp = function (t) {
    e.prototype.onMouseUp.call(this, t);
    this.dragScrollButton = false;
  };
  CastleCollectTaxStartDialog.prototype.onClick = function (t) {
    if (A.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_bribe:
          T.CastleModel.boostData.taxBribeVO.clickedBuyButton();
          break;
        case this.dialogDisp.btn_help:
          w.CastleDialogHandler.getInstance().showHelper("", C.Localize.text("help_tax_start"));
      }
    }
  };
  CastleCollectTaxStartDialog.prototype.checkWaitingAnimState = function (e) {
    switch (e) {
      case E.ClientConstSF.C2S_START_COLLECT_TAX:
        this.unLockDialog();
        P.CastleExternalDialog.dialogHandler.registerDefaultDialogs(N.CastleCollectTaxProgressDialog);
        this.hide();
        break;
      case E.ClientConstSF.C2S_BRIBE_TAX_COLLECTOR:
        this.unLockDialog();
    }
  };
  Object.defineProperty(CastleCollectTaxStartDialog.prototype, "taxInfoVO", {
    get: function () {
      return T.CastleModel.taxData.taxInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleCollectTaxStartDialog.prototype.onMouseOver = function (t) {
    if (t.target == this.dialogDisp.infoBribeBonus && T.CastleModel.boostData.taxBribeVO.isActive) {
      this.dialogDisp.infoBribeBonus.toolTipText = u.TimeStringHelper.getTimeToString(T.CastleModel.boostData.taxBribeVO.remainingTimeInSeconds, u.TimeStringHelper.TWO_TIME_FORMAT, C.Localize.text);
    }
    e.prototype.onMouseOver.call(this, t);
  };
  CastleCollectTaxStartDialog.prototype.blockScrollList = function (e) {
    if (e) {
      this.scrollList.lockList();
    } else {
      this.scrollList.unlockList();
    }
  };
  CastleCollectTaxStartDialog.__initialize_static_members = function () {
    CastleCollectTaxStartDialog.TAX_ITEMS_COUNT = f.int(g.TaxConst.COLLECTOR_DURATION.length);
  };
  CastleCollectTaxStartDialog.NAME = "CastleCollectTax";
  return CastleCollectTaxStartDialog;
}(P.CastleExternalDialog);
exports.CastleCollectTaxStartDialog = x;
var w = require("./9.js");
var B = require("./238.js");
var F = require("./3385.js");
var N = require("./1060.js");
d.classImplementsInterfaces(x, "ICollectableRendererList");
x.__initialize_static_members();