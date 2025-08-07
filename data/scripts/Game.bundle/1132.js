Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./4.js");
var r = require("./324.js");
var l = require("./89.js");
var c = createjs.Point;
var u = function (e) {
  function BuildMenuPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BuildMenuPanelButton, e);
  BuildMenuPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    h.CastleComponent.controller.addEventListener(r.DecoStorageEvent.ON_NEW_INDICATOR_UPDATED, this.bindFunction(this.onAmountChanged));
    h.CastleComponent.controller.addEventListener(r.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onAmountChanged));
  };
  BuildMenuPanelButton.prototype.removeEventListener = function () {
    h.CastleComponent.controller.removeEventListener(r.DecoStorageEvent.ON_NEW_INDICATOR_UPDATED, this.bindFunction(this.onAmountChanged));
    h.CastleComponent.controller.removeEventListener(r.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onAmountChanged));
    e.prototype.removeEventListener.call(this);
  };
  BuildMenuPanelButton.prototype.updateOnVisible = function () {
    e.prototype.updateOnVisible.call(this);
    var t = a.int(s.CastleModel.decoStorage.getCurrentStorage().getCappedNewAmount());
    this.setAmount(t > 0 && p.CastleLayoutManager.getInstance().isInMyCastle, t);
  };
  Object.defineProperty(BuildMenuPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_BuildItems;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BuildMenuPanelButton.prototype.isButtonEnabled = function () {
    return h.CastleComponent.layoutManager.isInMyCastle;
  };
  BuildMenuPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "panel_action_build";
    } else {
      return "alert_never_available";
    }
  };
  Object.defineProperty(BuildMenuPanelButton.prototype, "iconDimension", {
    get: function () {
      return new c(40, 40);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.APanelButton.prototype, "iconDimension").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BuildMenuPanelButton.prototype.onButtonClicked = function () {
    h.CastleComponent.layoutManager.hideAllIngameUIComponents();
    d.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
  };
  BuildMenuPanelButton.prototype.onAmountChanged = function (e) {
    this.update();
  };
  return BuildMenuPanelButton;
}(l.APanelButton);
exports.BuildMenuPanelButton = u;
var d = require("./33.js");
var p = require("./17.js");
var h = require("./14.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");