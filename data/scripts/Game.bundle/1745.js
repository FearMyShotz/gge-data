Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./60.js");
var u = require("./1734.js");
var d = require("./146.js");
var p = require("./21.js");
var h = require("./31.js");
var g = require("./19.js");
var C = require("./4.js");
var _ = require("./130.js");
var m = require("./27.js");
var f = require("./43.js");
var O = require("./11.js");
var E = require("./1735.js");
var y = createjs.Point;
var b = function (e) {
  function CastlePrivateOfferDecorationDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePrivateOfferDecorationDialog.NAME) || this;
  }
  n.__extends(CastlePrivateOfferDecorationDialog, e);
  Object.defineProperty(CastlePrivateOfferDecorationDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferDecorationDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_buy, this.dialogDisp.btn_info]);
    this._itxtTitle = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_specialOfferDeco_title"));
    this._itxtBuy = this.textFieldManager.registerTextField(this.dialogDisp.btn_buy.txt_price, new r.LocalizedTextVO("add_Gold"));
    this._itxtCopy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_specialOfferDeco_copy"));
    this._txtTime = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new l.TextVO(""));
  };
  CastlePrivateOfferDecorationDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = this.dialogProperties.offerVO.getTotalRewardListFromOfferVO();
    if (i.getItemByType(D.CollectableEnum.BUILDING).buildingVO) {
      var n = new h.CollectableRenderClips(this.dialogDisp.mc_decoHolder);
      n.addInfoBtn(this.dialogDisp.btn_info);
      n.addIconMc(this.dialogDisp.mc_decoHolder.mc_icon);
      T.CollectableRenderHelper.displaySingleItemComplete(this, n, i.getItemByType(D.CollectableEnum.BUILDING), new g.CollectableRenderOptions(g.CollectableRenderOptions.SET_BASIC, new y(150, 120)));
    }
  };
  CastlePrivateOfferDecorationDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.dialogDisp.timeBackground.visible = false;
    if (!this.dialogProperties.offerVO.isOneTimeOffer) {
      this.dialogDisp.timeBackground.visible = true;
      this.setRemainingTime();
      C.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    }
    C.CastleModel.privateOfferData.addEventListener(_.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferEnded));
    var t = a.castAs(this.dialogProperties.offerVO.getVisualComponentByName(c.ClientConstOffer.OFFER_VISUAL_QUEST_DIALOG), "OfferDescriptionVisualQuestDialog");
    if (t && t.dialogCustomization) {
      if (t.dialogCustomization.CTID) {
        this._itxtCopy.textContentVO.textId = t.dialogCustomization.CTID;
      }
      if (t.dialogCustomization.TR) {
        this._itxtCopy.textContentVO.textReplacements = t.dialogCustomization.TR;
      }
    } else {
      this._itxtCopy.textContentVO.textId = "dialog_specialOfferDeco_copy";
    }
  };
  CastlePrivateOfferDecorationDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    C.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    C.CastleModel.privateOfferData.removeEventListener(_.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onOfferEnded));
  };
  CastlePrivateOfferDecorationDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        if (this.dialogProperties.offerVO.isOneTimeOffer) {
          I.CastleDialogHandler.getInstance().registerDialogsWithType(v.CastleYesNoOrangeWarningDialog, new E.CastleYesNoOrangeWarningDialogProperties("dialog_primeday_oneTimeOffer_confirm_header", "dialog_primeday_oneTimeOffer_confirm_copy", this.bindFunction(this.cancelOneTimeOffer)), false, f.CastleDialogConsts.PRIORITY_TOP, f.CastleDialogConsts.DIALOG_TYPE_MODAL);
        } else {
          this.hide();
        }
        break;
      case this.dialogDisp.btn_buy:
        d.CastleOpenShopExecutor.open(d.CastleOpenShopExecutor.SOURCE_PRIVATE_OFFER_DECORATION, S.CXFSourceTrackingConstants.SOURCE_PRIVATE_OFFER_DECORATION);
    }
  };
  CastlePrivateOfferDecorationDialog.prototype.cancelOneTimeOffer = function () {
    C.CastleModel.smartfoxClient.sendCommandVO(new u.C2SOneTimeOfferCancelled(this.dialogProperties.offerVO.id));
    this.hide();
  };
  CastlePrivateOfferDecorationDialog.prototype.onOfferEnded = function (e) {
    if (e.offerVO == this.dialogProperties.offerVO) {
      this.hide();
    }
  };
  CastlePrivateOfferDecorationDialog.prototype.setRemainingTime = function (e = null) {
    this._txtTime.textContentVO.stringValue = o.TimeStringHelper.getHoureMinuteSecondTimeString(this.dialogProperties.offerVO.remainingSeconds);
    m.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.timeHitArea, this.dialogProperties.offerVO.remainingSeconds);
  };
  CastlePrivateOfferDecorationDialog.__initialize_static_members = function () {
    CastlePrivateOfferDecorationDialog.NAME = "CastlePrivateOfferDecoration";
  };
  return CastlePrivateOfferDecorationDialog;
}(O.CastleExternalDialog);
exports.CastlePrivateOfferDecorationDialog = b;
var D = require("./12.js");
var I = require("./9.js");
var T = require("./25.js");
var v = require("./1080.js");
var S = require("./108.js");
s.classImplementsInterfaces(b, "ICollectableRendererList");
b.__initialize_static_members();