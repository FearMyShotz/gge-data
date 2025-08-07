Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./267.js");
var p = require("./16.js");
var h = require("./3844.js");
var g = require("./108.js");
var C = require("./32.js");
var _ = require("./155.js");
var m = require("./31.js");
var f = require("./19.js");
var O = require("./207.js");
var E = require("./13.js");
var y = require("./15.js");
var b = require("./4.js");
var D = require("./24.js");
var I = require("./40.js");
var T = require("./20.js");
var v = require("./8.js");
var S = require("./25.js");
var A = createjs.Point;
var L = function (e) {
  function AdvisorAttackActivationComponent(t, i) {
    var n = e.call(this, t) || this;
    n._teaserSuffix = i;
    a.GoodgameTextFieldManager.getInstance().registerTextField(n.disp.txt_costs, new c.LocalizedTextVO("costs"));
    a.GoodgameTextFieldManager.getInstance().registerTextField(n.disp.btn_premium.txt_label, new u.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("button_buyToken")));
    a.GoodgameTextFieldManager.getInstance().registerTextField(n.disp.btn_free.txt_label, new u.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("button_freeToken")));
    a.GoodgameTextFieldManager.getInstance().registerTextField(n.disp.btn_activate.txt_label, new u.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("button_activateAdvisor")));
    v.ButtonHelper.initButtons([n.disp.btn_premium, n.disp.btn_free, n.disp.btn_activate], T.ClickFeedbackButtonHover);
    var o = {
      page: "promos",
      sourceId: g.CXFSourceTrackingConstants.CXF_SOURCE_ADVISOR_ACTIVATION
    };
    var s = {
      page: "eventoffers",
      sourceId: g.CXFSourceTrackingConstants.CXF_SOURCE_ADVISOR_ACTIVATION
    };
    b.CastleModel.userData.splitRunData.handleHCShopABTestPayload(o);
    d.registerUIComponentToCXF(n.disp.btn_premium, "btn_webshop", s);
    d.registerUIComponentToCXF(n.disp.btn_free, "btn_webshop", o);
    return n;
  }
  n.__extends(AdvisorAttackActivationComponent, e);
  AdvisorAttackActivationComponent.prototype.show = function (e) {
    this._advisorType = e;
    r.MovieClipHelper.clearMovieClip(this.disp.mc_teaser);
    var t = O.AdvisorAttackHelper.getTeaserFileName(this._advisorType);
    var i = new D.CastleGoodgameExternalClip(t + this._teaserSuffix, s.BasicModel.basicLoaderData.getVersionedItemAssetUrl(t), null, 0, false);
    this.disp.mc_teaser.addChild(i);
    var n = this.advisorActivationInfoVO;
    var l = b.CastleModel.currencyData.getAmountById(n.advisorActivationCurrencyId);
    var d = l > 0;
    var h = !this.advisorActivationInfoVO.isAdvisorActivationFree && !d;
    this.disp.btn_premium.visible = !d && !this.advisorActivationInfoVO.isAdvisorActivationFree;
    this.disp.btn_free.visible = !d && this.advisorActivationInfoVO.isAdvisorActivationFree;
    this.disp.btn_activate.visible = d;
    if (this.disp.txt_title) {
      a.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_title, new u.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId(h ? "title_advisor_buyToken" : d ? "title_advisor_activate" : "title_advisor_freeToken")));
    }
    a.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_description, new c.LocalizedTextVO(this.descriptionTextID));
    var g = new m.CollectableRenderClips(this.disp.mc_currency).addIconMc(this.disp.mc_currency);
    var C = new f.CollectableRenderOptions(f.CollectableRenderOptions.SET_ICON, new A(30, 30));
    C.tooltip.useAmount = false;
    var y = new _.CollectableItemGenericCurrencyVO(n.advisorActivationCurrencyId, l);
    S.CollectableRenderHelper.displaySingleItemComplete(this, g, y, C);
    var I = a.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_currency, new c.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [1, l]));
    if (this._teaserSuffix == AdvisorAttackActivationComponent.TEASERSUFFIX_ACTIVATE_SMALL) {
      I.color = d ? p.ClientConstColor.MODERN_DEFAULT : p.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    } else {
      I.color = d ? p.ClientConstColor.MODERN_DEFAULT_BRIGHT : "#F86D6D";
    }
    this.onShow();
  };
  Object.defineProperty(AdvisorAttackActivationComponent.prototype, "descriptionTextID", {
    get: function () {
      return "intro_advisor_" + O.AdvisorAttackHelper.getTextIDSuffix(this._advisorType);
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackActivationComponent.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    y.CastleBasicController.getInstance().addEventListener(C.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
  };
  AdvisorAttackActivationComponent.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    y.CastleBasicController.getInstance().removeEventListener(C.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
  };
  AdvisorAttackActivationComponent.prototype.onCurrenciesUpdated = function (e) {
    this.show(this._advisorType);
  };
  AdvisorAttackActivationComponent.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.disp.btn_activate:
        b.CastleModel.smartfoxClient.sendCommandVO(new h.C2SActivateAttackAdvisorVO());
    }
  };
  Object.defineProperty(AdvisorAttackActivationComponent.prototype, "advisorActivationInfoVO", {
    get: function () {
      return O.AdvisorAttackHelper.getAdvisorActivationInfo(this._advisorType);
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackActivationComponent.TEASERSUFFIX_ACTIVATE = "_Activate";
  AdvisorAttackActivationComponent.TEASERSUFFIX_ACTIVATE_SMALL = "_ActivateSmall";
  return AdvisorAttackActivationComponent;
}(I.CastleItemRenderer);
exports.AdvisorAttackActivationComponent = L;
l.classImplementsInterfaces(L, "ICollectableRendererList");