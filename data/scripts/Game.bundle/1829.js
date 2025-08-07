Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./266.js");
var r = require("./7.js");
var l = require("./3930.js");
var c = require("./516.js");
var u = require("./107.js");
var d = require("./288.js");
var p = require("./32.js");
var h = require("./74.js");
var g = require("./31.js");
var C = require("./19.js");
var _ = require("./13.js");
var m = require("./4.js");
var f = require("./14.js");
var O = require("./20.js");
var E = require("./8.js");
var y = require("./25.js");
var b = require("./367.js");
var D = require("./66.js");
var I = require("./594.js");
var T = require("./362.js");
var v = createjs.Point;
var S = function (e) {
  function GachaComponentPull(t, i = null) {
    var n = e.call(this, t) || this;
    n._animationInProgress = false;
    E.ButtonHelper.initButtons([n.disp.btn_pull, n.disp.btn_shop, n.disp.btn_minus, n.disp.btn_plus, n.disp.btn_max], O.ClickFeedbackButtonHover);
    n.itxt_label = f.CastleComponent.textFieldManager.registerTextField(n.disp.btn_pull.txt_label, new a.TextVO(""));
    var o = {
      sourceId: u.CXFSourceTrackingConstants.CXF_SOURCE_WEB_SHOP_BUTTON
    };
    if (i) {
      o.page = i;
    }
    m.CastleModel.userData.splitRunData.handleHCShopABTestPayload(o);
    s.registerUIComponentToCXF(n.disp.btn_shop, "btn_webshop", o);
    n.disp.btn_shop.toolTipText = "goToTheShop";
    n.inputTextField = new I.SelectInputFieldComponent(n.disp.mc_pickerTxt, n.bindFunction(n.onPercentValueInput), "1");
    n.inputTextField.searchField.restrict = "0-9";
    f.CastleComponent.controller.addEventListener(d.GachaEvent.SHINE_ANIMATION_LOADED, n.bindFunction(n.onShineAnimationLoaded));
    return n;
  }
  n.__extends(GachaComponentPull, e);
  GachaComponentPull.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._animationInProgress = false;
    this.updateText();
    this.updateCurrency();
    this.inputTextField.searchField.text = this.currencyAmountPerPull.toString();
    this.updateButtons();
  };
  GachaComponentPull.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this.destroyCollectableRenderList();
    c.CommandDelayController.getInstance().finishDelayOfAllCommands();
  };
  GachaComponentPull.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    f.CastleComponent.controller.addEventListener(d.GachaEvent.UPDATED, this.bindFunction(this.onGachaUpdate));
    f.CastleComponent.controller.addEventListener(d.GachaEvent.SPIN, this.bindFunction(this.onSpin));
    f.CastleComponent.controller.addEventListener(d.GachaEvent.SPIN_ANIMATION_COMPLETE, this.bindFunction(this.onSpinComplete));
    f.CastleComponent.controller.addEventListener(p.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyUpdate));
  };
  GachaComponentPull.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    f.CastleComponent.controller.removeEventListener(d.GachaEvent.UPDATED, this.bindFunction(this.onGachaUpdate));
    f.CastleComponent.controller.removeEventListener(d.GachaEvent.SPIN, this.bindFunction(this.onSpin));
    f.CastleComponent.controller.removeEventListener(d.GachaEvent.SPIN_ANIMATION_COMPLETE, this.bindFunction(this.onSpinComplete));
    f.CastleComponent.controller.removeEventListener(p.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyUpdate));
  };
  GachaComponentPull.prototype.onGachaUpdate = function (e) {
    if (e.eventVO.eventId == this.getEventVO().eventId) {
      this.updateCurrency();
    }
  };
  GachaComponentPull.prototype.onSpin = function (e) {
    this._animationInProgress = true;
    E.ButtonHelper.enableButton(this.disp.btn_pull, this.isPullPossible());
    this.setSelectedAmount(this.selectedAmount);
  };
  GachaComponentPull.prototype.onSpinComplete = function (e) {
    this._animationInProgress = false;
    E.ButtonHelper.enableButton(this.disp.btn_pull, this.isPullPossible());
    c.CommandDelayController.getInstance().finishDelayOfAllCommands();
    this.updateButtons();
  };
  GachaComponentPull.prototype.onShineAnimationLoaded = function (e) {
    f.CastleComponent.controller.removeEventListener(d.GachaEvent.SHINE_ANIMATION_LOADED, this.bindFunction(this.onShineAnimationLoaded));
    this.updateButtons();
  };
  GachaComponentPull.prototype.onCurrencyUpdate = function (e) {
    this.updateCurrency();
    this.updateButtons();
  };
  GachaComponentPull.prototype.updateButtons = function () {
    E.ButtonHelper.enableButton(this.disp.btn_pull, this.isPullPossible());
    var e = this.maxOfferings > this.currencyAmountPerPull;
    E.ButtonHelper.enableButton(this.disp.btn_minus, e);
    E.ButtonHelper.enableButton(this.disp.btn_plus, e);
    E.ButtonHelper.enableButton(this.disp.btn_max, e);
  };
  GachaComponentPull.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.disp.btn_pull:
          c.CommandDelayController.getInstance().addDelayCommandID(r.ClientConstSF.S2C_SHOW_POPUP, true);
          m.CastleModel.smartfoxClient.sendCommandVO(new l.C2SGachaSpinVO(this.getEventVO().eventId, this.selectedAmount / this.currencyAmountPerPull));
          this._animationInProgress = true;
          E.ButtonHelper.enableButton(this.disp.btn_pull, this.isPullPossible());
          break;
        case this.disp.btn_minus:
          this.setSelectedAmount(this.selectedAmount > this.currencyAmountPerPull ? this.selectedAmount - this.currencyAmountPerPull : this.currencyAmountPerPull);
          break;
        case this.disp.btn_plus:
          this.setSelectedAmount(this.selectedAmount < this.maxOfferings ? this.selectedAmount + this.currencyAmountPerPull : this.maxOfferings);
          break;
        case this.disp.btn_max:
          this.setSelectedAmount(this.maxOfferings);
      }
    }
  };
  GachaComponentPull.prototype.updateCurrency = function () {
    var e = this.getEventVO().getCurrentGachaVO().costs.list[0];
    var t = new g.CollectableRenderClips(this.disp.mc_icon).addIconMc(this.disp.mc_icon).addTextfield(this.disp.txt_text);
    var i = new C.CollectableRenderOptions(C.CollectableRenderOptions.SET_COST_LIST, new v(30, 30));
    i.costTextfield.defaultColor = 15921906;
    y.CollectableRenderHelper.displaySingleItemComplete(this, t, e, i);
  };
  GachaComponentPull.prototype.updateText = function () {
    this.itxt_label.textContentVO.stringValue = _.TextHelper.toUpperCaseLocaSafeTextId("gachaPull_button_" + this.getEventVO().assetName());
  };
  GachaComponentPull.prototype.isPullPossible = function () {
    var e = D.CostHelper.canAfford(new b.CollectablesCosts(this.getEventVO().getCurrentGachaVO().costs));
    return !this._animationInProgress && e;
  };
  GachaComponentPull.prototype.onPercentValueInput = function () {
    var e = o.MathBase.clamp(this.selectedAmount, 1, this.maxOfferings);
    this.setSelectedAmount(e);
  };
  GachaComponentPull.prototype.setSelectedAmount = function (e) {
    e = Math.floor(e / this.currencyAmountPerPull) * this.currencyAmountPerPull;
    e = o.MathBase.clamp(e, this.currencyAmountPerPull, this.maxOfferings);
    this.inputTextField.updateText(e.toString());
    this.getEventVO().currentMultiPull = this.selectedAmount / this.currencyAmountPerPull;
  };
  Object.defineProperty(GachaComponentPull.prototype, "selectedAmount", {
    get: function () {
      return parseInt(this.inputTextField.text);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaComponentPull.prototype, "maxOfferings", {
    get: function () {
      var e = this.getEventVO().getCurrentGachaVO().multiPullMax;
      var t = new h.CollectableTypeVO().initByCollectable(this.getEventVO().getCurrentGachaVO().costs.getItemByIndex(0));
      var i = Math.floor(D.CostHelper.getAvailableGoods(t) / this.currencyAmountPerPull) * this.currencyAmountPerPull;
      var n = (this.getEventVO().getCurrentGachaVO().maxPulls + 1 - this.getEventVO().ownPoints) * this.currencyAmountPerPull;
      if (n <= 0) {
        n = Number.MAX_VALUE;
      }
      return Math.min(e * this.currencyAmountPerPull, i, n);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaComponentPull.prototype, "currencyAmountPerPull", {
    get: function () {
      return this.getEventVO().getCurrentGachaVO().costs.getItemByIndex(0).amount;
    },
    enumerable: true,
    configurable: true
  });
  GachaComponentPull.prototype.getEventVO = function () {
    return this._params[0];
  };
  return GachaComponentPull;
}(T.AGachaComponent);
exports.GachaComponentPull = S;