Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./3094.js");
var u = require("./146.js");
var d = require("./119.js");
var p = require("./32.js");
var h = require("./67.js");
var g = require("./104.js");
var C = require("./19.js");
var _ = require("./13.js");
var m = require("./4.js");
var f = require("./52.js");
var O = require("./272.js");
var E = require("./8.js");
var y = require("./11.js");
var b = createjs.Point;
var D = function (e) {
  function RelicUpgradeDialog() {
    var t = this;
    t._currencyRenderer = new g.CollectableRendererList();
    t._isWaitingForServerResponseForUpgrade = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, RelicUpgradeDialog.NAME) || this;
  }
  n.__extends(RelicUpgradeDialog, e);
  RelicUpgradeDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    E.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_back, this.dialogDisp.btn_addC2], N.ClickFeedbackButton);
    E.ButtonHelper.initButtons([this.dialogDisp.mc_status.btn_sell], k.ClickFeedbackButtonHover);
    this.dialogDisp.btn_back.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("dialog_relicEnchanter_relicEnchanterUpgrade_header"))).autoFitToBounds = true;
    this._addC2Component = new L.ButtonAddGoldComponent(this.dialogDisp.btn_addC2);
    this._selector = new B.RelicUpgradeDialogSelector(this.dialogDisp.mc_selection);
    this._effects = new x.RelicUpgradeDialogEffects(this.dialogDisp.mc_effects);
    var i = new O.SimplePopoverConfig(RelicUpgradeDialog.EXECUTE_OVERLAY_ASSET_NAME, null, new b(0, 135));
    i.waitDuration = 2;
    i.fadeInDuration = 0.4;
    i.fadeOutDuration = 0.4;
    this._executeOverlay = new P.SimplePopoverComponent(this.dialogDisp);
    this._executeOverlay.init(i);
    this._status = new F.RelicUpgradeDialogStatus(this.dialogDisp.mc_status);
    this._payment = new w.RelicUpgradeDialogPayment(this.dialogDisp.mc_payment);
  };
  RelicUpgradeDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.controller.addEventListener(p.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onCurrenciesUpdated));
    this.controller.addEventListener(p.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    this.controller.addEventListener(d.CastleEquipmentEvent.RELIC_UPGRADE_RECEIVED, this.bindFunction(this.onRelicUpgradeReceived));
    this._selector.onSelectionChanged.add(this.bindFunction(this.onSelectionChanged));
    this._status.onEquipTypeChanged.add(this.bindFunction(this.onEquipTypeChanged));
    this._payment.onBuyButtonClicked.add(this.bindFunction(this.onBuyButtonClicked));
    this._executeOverlay.onStateStarted.add(this.bindFunction(this.onOverlayStateStarted));
    this._executeOverlay.onSequenceCompleteSignal.add(this.bindFunction(this.onOverlayAnimationCompleted));
    this._selector.onShow();
    this._effects.onShow();
    this._executeOverlay.onShow();
    this._status.onShow();
    this._payment.onShow();
    this._addC2Component.init();
    this.updateCurrencyInfo();
  };
  RelicUpgradeDialog.prototype.hideLoaded = function (t = null) {
    this._selector.onHide();
    this._effects.onHide();
    this._executeOverlay.onHide();
    this._status.onHide();
    this._payment.onHide();
    this.controller.removeEventListener(p.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onCurrenciesUpdated));
    this.controller.removeEventListener(p.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    this.controller.removeEventListener(d.CastleEquipmentEvent.RELIC_UPGRADE_RECEIVED, this.bindFunction(this.onRelicUpgradeReceived));
    this._selector.onSelectionChanged.remove(this.bindFunction(this.onSelectionChanged));
    this._status.onEquipTypeChanged.remove(this.bindFunction(this.onEquipTypeChanged));
    this._payment.onBuyButtonClicked.remove(this.bindFunction(this.onBuyButtonClicked));
    this._executeOverlay.onStateStarted.remove(this.bindFunction(this.onOverlayStateStarted));
    this._executeOverlay.onSequenceCompleteSignal.remove(this.bindFunction(this.onOverlayAnimationCompleted));
    this._isWaitingForServerResponseForUpgrade = false;
    e.prototype.hideLoaded.call(this, t);
  };
  RelicUpgradeDialog.prototype.updateCurrencyInfo = function () {
    var e = new v.CollectableList();
    e.addItem(T.CollectableHelper.createVO(I.CollectableEnum.GENERIC_CURRENCY, m.CastleModel.currencyData.getAmountById(f.ClientConstCurrency.ID_RELIC_FRAGMENTS), f.ClientConstCurrency.ID_RELIC_FRAGMENTS));
    e.addItem(m.CastleModel.currencyData.getCurrencyByType(new S.CollectableTypeVO(I.CollectableEnum.C1)));
    e.addItem(m.CastleModel.currencyData.getCurrencyByType(new S.CollectableTypeVO(I.CollectableEnum.C2)));
    R.CollectableRenderHelper.displayMultipleItemsComplete(this._currencyRenderer, new h.CollectableRenderClipsList(this.dialogDisp, "mc_currency"), e, new C.CollectableRenderOptions(C.CollectableRenderOptions.SET_DEFAULT, new b(30, 30)));
  };
  RelicUpgradeDialog.prototype.showExecuteOverlay = function (e) {
    var t = this._executeOverlay.getAssetDisp();
    this.textFieldManager.registerTextField(t.txt_success, new s.LocalizedTextVO("success"));
    this.textFieldManager.registerTextField(t.txt_failed, new s.LocalizedTextVO("failure"));
    t.txt_success.visible = e;
    t.txt_failed.visible = !e;
    this._executeOverlay.startSequence();
  };
  RelicUpgradeDialog.prototype.onClick = function (t) {
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_back:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_addC2:
          this._addC2Component.onClickButton(u.CastleOpenShopExecutor.SOURCE_RELIC_UPGRADE, U.CXFSourceTrackingConstants.SOURCE_RELIC_UPGRADE);
          break;
        case this.dialogDisp.btn_help:
          y.CastleExternalDialog.dialogHandler.showHelper("", r.Localize.text("help_relicEnchanter_relicEnchanterUpgrade"));
      }
    }
  };
  RelicUpgradeDialog.prototype.onCurrenciesUpdated = function (e) {
    this.updateCurrencyInfo();
    this._payment.update();
  };
  RelicUpgradeDialog.prototype.onSelectionChanged = function () {
    var e = this._selector.getSelectedItem();
    var t = e ? e.relicVO : null;
    var i = e ? e.lordID : -1;
    this._status.updateWithNewVO(t, i);
    this._effects.updateWithNewVO(t, this._status.currentEquipType);
    this._payment.updateWithNewVO(t, this._status.currentEquipType);
  };
  RelicUpgradeDialog.prototype.onEquipTypeChanged = function () {
    var e = this._selector.getSelectedItem();
    this._effects.updateWithNewVO(e ? e.relicVO : null, this._status.currentEquipType);
    this._payment.onEquipTypeChanged(this._status.currentEquipType);
  };
  RelicUpgradeDialog.prototype.onBuyButtonClicked = function (e) {
    if (!this._isWaitingForServerResponseForUpgrade) {
      var t = this._payment.getCosts(e, m.CastleModel.equipData.relicXml.getRelicEnchanter(this._payment.getCurrentEnchantmentLevel() + 1));
      var i = new v.CollectableList();
      for (var n = 0, o = t.list; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && V.CostHelper.getAvailableGoods(new S.CollectableTypeVO().initByCollectable(a)) < a.amount) {
          i.addItem(a);
        }
      }
      if (i.length > 0) {
        V.CostHelper.showGenericNotEnoughCurrencyDialog(i.getContainingTypes());
      } else {
        var s = this._selector.getSelectedItem();
        if (s) {
          this._prevSendEquipment = s.relicVO;
          var r = this._status.currentEquipType == F.RelicUpgradeDialogStatus.EQUIP_TYPE_GEM && s.relicVO.type == A.CollectableItemRelicVO.TYPE_EQUIPMENT ? s.relicVO.vo.gemVO.id : s.relicVO.getId();
          var u = l.int(this._status.currentEquipType == F.RelicUpgradeDialogStatus.EQUIP_TYPE_EQUIPMENT ? 1 : 0);
          m.CastleModel.smartfoxClient.sendCommandVO(new c.C2SEnchantRelicItemEventVO(r, e, u));
          this._isWaitingForServerResponseForUpgrade = true;
        }
      }
    }
  };
  RelicUpgradeDialog.prototype.onRelicUpgradeReceived = function (e) {
    this._isWaitingForServerResponseForUpgrade = false;
    this._receivedEquipmentData = e.equipmentInventory.length > 0 ? e.equipmentInventory[0] : null;
    this.showExecuteOverlay(this._receivedEquipmentData != null);
  };
  RelicUpgradeDialog.prototype.onOverlayStateStarted = function (e) {
    if (e == P.SimplePopoverComponent.STATE_FADE_IN) {
      var t = this._executeOverlay.getAssetDisp().txt_success.visible;
      this._effects.infoComponent.playUpgradeAnimation(t ? M.RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_SUCCESS : M.RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_FAILED);
    }
    if (e == P.SimplePopoverComponent.STATE_FADE_OUT) {
      this._effects.infoComponent.playUpgradeAnimation(M.RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_DEFAULT);
    }
  };
  RelicUpgradeDialog.prototype.onOverlayAnimationCompleted = function () {
    if (this._receivedEquipmentData) {
      this._selector.updateItemInfo(this._prevSendEquipment, this._receivedEquipmentData);
    }
  };
  RelicUpgradeDialog.NAME = "RelicUpgrade_R";
  RelicUpgradeDialog.EXECUTE_OVERLAY_ASSET_NAME = "RelicUpgradeExecuteOverlay";
  return RelicUpgradeDialog;
}(y.CastleExternalDialog);
exports.RelicUpgradeDialog = D;
o.classImplementsInterfaces(D, "ICollectableRendererList");
var I = require("./12.js");
var T = require("./45.js");
var v = require("./48.js");
var S = require("./74.js");
var A = require("./289.js");
var L = require("./428.js");
var P = require("./294.js");
var M = require("./1593.js");
var R = require("./25.js");
var V = require("./66.js");
var x = require("./3095.js");
var w = require("./3096.js");
var B = require("./3097.js");
var F = require("./1038.js");
var N = require("./36.js");
var k = require("./20.js");
var U = require("./108.js");