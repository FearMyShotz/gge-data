Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function CastleToggleUpgradeViewButton(e) {
    this._buttonDisp = e;
    d.ButtonHelper.initTwoStateButton(this._buttonDisp);
  }
  CastleToggleUpgradeViewButton.prototype.show = function () {
    this._buttonDisp.addEventListener(n.CLICK, this.bindFunction(this.onClick));
    this.controller.addEventListener(c.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onUpdate));
    this.controller.addEventListener(c.IsoEvent.ON_OBJECT_ADDED, this.bindFunction(this.onUpdate));
    this.controller.addEventListener(c.IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onUpdate));
    this.controller.addEventListener(r.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onUpdate));
    this.update();
  };
  CastleToggleUpgradeViewButton.prototype.update = function () {
    var e = a.Iso.data.objects.provider.hasUpgradeableBuilding();
    if (e) {
      d.ButtonHelper.setButtonSelected(this._buttonDisp, this.isStrategyActive);
      this._buttonDisp.toolTipText = this.isStrategyActive ? "constructionMode_hideUpgrades" : "constructionMode_showUpgrades";
    } else {
      d.ButtonHelper.setButtonSelected(this._buttonDisp, false);
      this._buttonDisp.toolTipText = "constructionMode_noUpgrades";
    }
    d.ButtonHelper.enableButton(this._buttonDisp, e);
  };
  CastleToggleUpgradeViewButton.prototype.toggle = function () {
    a.Iso.renderer.strategies.toggle(l.IsoRenderStrategyEnum.UPGRADE_VIEW);
  };
  CastleToggleUpgradeViewButton.prototype.onUpdate = function (e = null) {
    this.update();
  };
  CastleToggleUpgradeViewButton.prototype.onClick = function (e) {
    if (d.ButtonHelper.isButtonEnabled(e.target)) {
      this.toggle();
    }
  };
  CastleToggleUpgradeViewButton.prototype.hide = function () {
    this._buttonDisp.removeEventListener(n.CLICK, this.bindFunction(this.onClick));
    this.controller.removeEventListener(r.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onUpdate));
    this.controller.removeEventListener(c.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onUpdate));
    this.controller.removeEventListener(c.IsoEvent.ON_OBJECT_ADDED, this.bindFunction(this.onUpdate));
    this.controller.removeEventListener(c.IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onUpdate));
    a.Iso.renderer.strategies.switchBy(l.IsoRenderStrategyEnum.UPGRADE_VIEW, false);
  };
  Object.defineProperty(CastleToggleUpgradeViewButton.prototype, "layoutManager", {
    get: function () {
      return s.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleToggleUpgradeViewButton.prototype, "controller", {
    get: function () {
      return u.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleToggleUpgradeViewButton.prototype, "isStrategyActive", {
    get: function () {
      return a.Iso.renderer.strategies.currentStrategy.isActive(l.IsoRenderStrategyEnum.UPGRADE_VIEW);
    },
    enumerable: true,
    configurable: true
  });
  return CastleToggleUpgradeViewButton;
}();
exports.CastleToggleUpgradeViewButton = o;
var a = require("./34.js");
var s = require("./17.js");
var r = require("./32.js");
var l = require("./122.js");
var c = require("./92.js");
var u = require("./15.js");
var d = require("./8.js");