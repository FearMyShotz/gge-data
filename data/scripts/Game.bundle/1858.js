Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./58.js");
var s = require("./527.js");
var r = require("./4.js");
var l = require("./89.js");
var c = createjs.Point;
var u = function (e) {
  function PremiumMarketPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(PremiumMarketPanelButton, e);
  PremiumMarketPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    r.CastleModel.vipData.addEventListener(s.CastleVIPDataEvent.VIP_DATA_UPDATED, this.bindFunction(this.onVipDataUpdated));
    this.listenOnXPChanged();
  };
  PremiumMarketPanelButton.prototype.removeEventListener = function () {
    r.CastleModel.vipData.removeEventListener(s.CastleVIPDataEvent.VIP_DATA_UPDATED, this.bindFunction(this.onVipDataUpdated));
    e.prototype.removeEventListener.call(this);
  };
  PremiumMarketPanelButton.prototype.updateOnVisible = function () {
    this.setHighlight(l.APanelButton.HIGHLIGHT_TYPE_YELLOW, r.CastleModel.vipData.vipModeActive);
  };
  Object.defineProperty(PremiumMarketPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_PremiumMarket_Relicus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  PremiumMarketPanelButton.prototype.isButtonEnabled = function () {
    return r.CastleModel.userData.hasLevelFor(a.ClientConstLevelRestrictions.MIN_LEVEL_KINGS_MARKET);
  };
  PremiumMarketPanelButton.prototype.getButtonTooltip = function () {
    return "premiummarket_title";
  };
  Object.defineProperty(PremiumMarketPanelButton.prototype, "iconDimension", {
    get: function () {
      return new c(40, 40);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.APanelButton.prototype, "iconDimension").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  PremiumMarketPanelButton.prototype.onButtonClicked = function () {
    d.CastleComponent.dialogHandler.registerDefaultDialogs(p.CastlePremiumMarketPlaceDialog);
  };
  PremiumMarketPanelButton.prototype.onVipDataUpdated = function (e) {
    this.update();
  };
  return PremiumMarketPanelButton;
}(l.APanelButton);
exports.PremiumMarketPanelButton = u;
var d = require("./14.js");
var p = require("./315.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");