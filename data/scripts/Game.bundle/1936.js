Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./5026.js");
var _ = require("./645.js");
var m = require("./4.js");
var f = require("./540.js");
var O = require("./180.js");
var E = require("./27.js");
var y = require("./5027.js");
var b = require("./171.js");
var D = require("./1028.js");
var I = require("./8.js");
var T = function (e) {
  function AAutoRecruitmentPurchaseDialog(t) {
    var i = this;
    i._waitingForServerConfirm = false;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(AAutoRecruitmentPurchaseDialog.ASSET_URL)) || this;
  }
  n.__extends(AAutoRecruitmentPurchaseDialog, e);
  AAutoRecruitmentPurchaseDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel, this.dialogDisp.btn_close]);
    this._infoTextScrollComponent = new P.CastleTextScrollComponent(new O.CastleTextScrollVO(this.dialogDisp.mc_info.txt_value, this.dialogDisp.mc_info.mc_slider.btn_up, this.dialogDisp.mc_info.mc_slider.btn_down, this.dialogDisp.mc_info.mc_slider.btn_slider, this.dialogDisp.mc_info.mc_slider.mc_sliderline, [this.dialogDisp.mc_info.mc_slider]));
    this._infoTextScrollComponent.hideArrowsOnScrollToEdges = true;
    this._infoTextScrollComponent.invisibleOnFit = true;
    this._loopSelector = new L.ComboboxComponent(this.dialogDisp.mc_selectLoops, "", 1, 18, 19, 188, 0, new y.ComboboxItemRendererAutoRecruitment());
    this._costComponent = new R.AutoRecruitmentCostComponent(this.dialogDisp.mc_costs);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_title, new p.LocalizedTextVO("dialog_purchaseLoop_costs_looping")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.mc_loop.txt_title, new p.LocalizedTextVO("dialog_purchaseLoop_costs_looping")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.mc_double.txt_title, new p.LocalizedTextVO("dialog_purchaseLoop_costs_doubling")).autoFitToBounds = true;
  };
  AAutoRecruitmentPurchaseDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._loopSelector.userClickItemSignal.add(this.bindFunction(this.onLoopSelected));
    this._infoTextScrollComponent.onShow();
    this.controller.addEventListener(_.AutoRecruitmentEvent.ON_PURCHASE_CONFIRM, this.bindFunction(this.onServerConfirmed));
    this.controller.addEventListener(_.AutoRecruitmentEvent.ON_PURCHASE_DENY, this.bindFunction(this.onServerDenied));
    this.updateLoopSelector();
    this.updateRecruitTime();
    this.updateCosts();
  };
  AAutoRecruitmentPurchaseDialog.prototype.hide = function () {
    this._loopSelector.userClickItemSignal.remove(this.bindFunction(this.onLoopSelected));
    this._infoTextScrollComponent.onHide();
    this.controller.removeEventListener(_.AutoRecruitmentEvent.ON_PURCHASE_CONFIRM, this.bindFunction(this.onServerConfirmed));
    this.controller.removeEventListener(_.AutoRecruitmentEvent.ON_PURCHASE_DENY, this.bindFunction(this.onServerDenied));
    e.prototype.hide.call(this);
  };
  AAutoRecruitmentPurchaseDialog.prototype.updateLoopSelector = function () {
    this._loopSelector.clearItems();
    var e;
    var t = g.int(m.CastleModel.autoRecruitPriceData.getMaxLoopsByType(this.dialogProperties.costs.priceType));
    for (var i = g.int(t - this.dialogProperties.currentLoopCount), n = 1; n <= i; ++n) {
      (e = new b.ComboboxItemRendererVO()).itemLabel = d.Localize.text(n == 1 ? "dialog_purchaseLoop_loops_singular" : "dialog_purchaseLoop_loops_plural", [n]);
      this._loopSelector.addItem(e);
    }
    this._loopSelector.selectItemIndex(0);
  };
  AAutoRecruitmentPurchaseDialog.prototype.updateCosts = function () {
    this._costComponent.updateWithNewCosts(this.getCurrentCosts());
  };
  AAutoRecruitmentPurchaseDialog.prototype.updateRecruitTime = function () {
    var e = g.int(this.getDurationOfLoops(this.selectedLoopCount, this.dialogProperties.currentRecruitTime));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_value, new h.TextVO(E.CastleTimeStringHelper.getEventTimeString(e)));
  };
  Object.defineProperty(AAutoRecruitmentPurchaseDialog.prototype, "selectedLoopCount", {
    get: function () {
      return this._loopSelector.selectedId + 1;
    },
    enumerable: true,
    configurable: true
  });
  AAutoRecruitmentPurchaseDialog.prototype.getDurationOfLoops = function (e, t) {
    var i = g.int(m.CastleModel.boostData.festivalVO.remainingTimeInSeconds);
    var n = g.int(m.CastleModel.boostData.getBoosterByID(l.BoosterConst.INSTRUCTOR).remainingTimeInSeconds);
    var o = m.CastleModel.boostData.festivalVO.boostAmount;
    var a = n > 0 ? m.CastleModel.boostData.getBoosterByID(l.BoosterConst.INSTRUCTOR).bonusValue : 0;
    var r = 0;
    if (m.CastleModel.kingdomData.activeKingdomID == u.FactionConst.KINGDOM_ID) {
      var d = s.castAs(m.CastleModel.specialEventData.getActiveEventByEventId(c.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
      if (d && d.remainingFactionProtectionTimeInSeconds > 0 && d.factionProtectionStatus != S.FactionEventVO.FACTION_PROTECTION_STATUS_COOLDOWN) {
        r = g.int(d.remainingFactionProtectionTimeInSeconds);
      }
    } else if (m.CastleModel.userData.getRemainingPeaceStatusTime() > 0 && m.CastleModel.userData.peaceModeStatus != v.CastleUserData.PEACEMODE_STATUS_POSTTIME) {
      r = g.int(m.CastleModel.userData.getRemainingPeaceStatusTime());
    }
    var p = t;
    for (var h = 0; h < e; ++h) {
      var C = r > 0 && r > p;
      var _ = 0;
      _ += i > 0 && i > p ? 0 : o;
      _ += n > 0 && n > p ? 0 : a;
      p += g.int(this.dialogProperties.getTotalRecruitTime(C, _));
    }
    return p;
  };
  AAutoRecruitmentPurchaseDialog.prototype.getCurrentCosts = function () {
    function getFinalCostItem(e) {
      var t = e.clone();
      t.amount = g.int(t.amount * this.selectedLoopCount);
      return t;
    }
    var e = new V.AutoRecruitmentCosts();
    e.priceType = f.AutoRecruitmentPriceEnum.getTypeByListId(this.dialogProperties.listId);
    for (var t = 0; t < this.dialogProperties.costs.costs.length; ++t) {
      e.costs.addItem(getFinalCostItem(this.dialogProperties.costs.costs.getItemByIndex(t)));
    }
    e.loopFee = m.CastleModel.autoRecruitPriceData.getCosts(e.priceType, this.dialogProperties.currentLoopCount + 1, this.dialogProperties.currentLoopCount + this.selectedLoopCount).clone();
    e.duplicatingCosts = getFinalCostItem(this.dialogProperties.costs.duplicatingCosts);
    return e;
  };
  AAutoRecruitmentPurchaseDialog.prototype.onClick = function (e) {
    if (I.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onOkButton();
      }
    }
  };
  AAutoRecruitmentPurchaseDialog.prototype.onOkButton = function () {
    if (!this._waitingForServerConfirm) {
      if (D.AutoRecruitmentHelper.isEventKingdom(this.dialogProperties.currentKingdomId) && D.AutoRecruitmentHelper.getRemainingEventKingdomTime(this.dialogProperties.currentKingdomId) < this.getDurationOfLoops(this.dialogProperties.currentLoopCount + this.selectedLoopCount, this.dialogProperties.currentRecruitTime)) {
        A.CastleDialogHandler.getInstance().registerDefaultDialogs(M.CastleStandardYesNoDialog, new a.BasicStandardYesNoDialogProperties(d.Localize.text("generic_alert_warning"), d.Localize.text("dialog_purchaseLoop_eventEnd"), this.bindFunction(this.onConfirmEventWarning)));
      } else {
        this.sendConfirmToServer();
      }
    }
  };
  AAutoRecruitmentPurchaseDialog.prototype.onConfirmEventWarning = function (e = null) {
    this.sendConfirmToServer();
  };
  AAutoRecruitmentPurchaseDialog.prototype.sendConfirmToServer = function () {
    m.CastleModel.smartfoxClient.sendCommandVO(new C.C2SUpdateRecruitmentLoopVO(this.dialogProperties.listId, this.dialogProperties.recruitmentSnapshot, this.selectedLoopCount));
    this._waitingForServerConfirm = true;
    I.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
  };
  AAutoRecruitmentPurchaseDialog.prototype.onServerConfirmed = function (e) {
    this._waitingForServerConfirm = false;
    I.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
    this.hide();
  };
  AAutoRecruitmentPurchaseDialog.prototype.onServerDenied = function (e) {
    this._waitingForServerConfirm = false;
    I.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
  };
  AAutoRecruitmentPurchaseDialog.prototype.onLoopSelected = function (e) {
    this.updateCosts();
    this.updateRecruitTime();
  };
  Object.defineProperty(AAutoRecruitmentPurchaseDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AAutoRecruitmentPurchaseDialog.__initialize_static_members = function () {
    AAutoRecruitmentPurchaseDialog.ASSET_URL = "AutoRecruitmentPurchase";
  };
  return AAutoRecruitmentPurchaseDialog;
}(require("./11.js").CastleExternalDialog);
exports.AAutoRecruitmentPurchaseDialog = T;
var v = require("./283.js");
var S = require("./202.js");
var A = require("./9.js");
var L = require("./178.js");
var P = require("./182.js");
var M = require("./151.js");
var R = require("./1577.js");
var V = require("./646.js");
r.classImplementsInterfaces(T, "ICollectableRendererList");
T.__initialize_static_members();